import {movieSourceUrl} from './providers.mjs';
import {browse,closeBrowser} from '/js/page-session/proxy.mjs';
const read=key=>{try{return localStorage.getItem(key)||''}catch{return ''}};
export async function launchMovieProxy(frame,url,signal,{recover=false}={}){
 if(signal?.aborted)throw signal.reason;
 if(!movieSourceUrl(url)||frame.getAttribute('sandbox')!=='allow-scripts allow-same-origin allow-forms allow-presentation')throw Error('Invalid movie proxy request.');
 signal?.addEventListener('abort',()=>closeBrowser(frame),{once:true});
 await browse(url,{relay:read('nyx.wispUrl'),autoRelay:true,httpBridge:read('nyx.httpBridge')!=='false'},frame,{reconnect:recover});
 if(signal?.aborted){closeBrowser(frame);throw signal.reason;}
}

export function inspectMovieProxy(frame) {
  const queue = [{frame, depth: 0, frames: [frame]}]; let examined = 0, failure = false, connectionFailed = false;
  while (queue.length && examined++ < 16) {
    const current = queue.shift();
    try {
      const doc = current.frame.contentDocument;
      if (!doc) continue;
      for (const video of doc.querySelectorAll('video')) {
        if (video.videoWidth > 0 && video.readyState >= 1) {
          return {video, frames: current.frames, paused: video.paused, time: video.currentTime, width: video.videoWidth, height: video.videoHeight, failed: false};
        }
      }
      const text = (doc.body?.innerText || '').slice(0, 16000);
      connectionFailed ||= /SSL connect error|ERR_SSL|request failed with error code|could not connect to server|relay.*unavailable/i.test(text);
      failure ||= /(?:cannot|can't|cannot be|can’t be).*sandbox|sandbox.*(?:not permitted|not allowed|detected)|no sources? found|stream unavailable|error processing your request|SSL connect error|ERR_SSL|request failed with error code/i.test(text);
      if (current.depth < 4) for (const child of [...doc.querySelectorAll('iframe')].slice(0, 16)) queue.push({frame: child, depth: current.depth + 1, frames: [...current.frames, child]});
    } catch { /* Cross-origin frames remain opaque. */ }
  }
  return {failed: failure, connectionFailed};
}

// Keep the provider's playback engine, but render only its video. The controls
// live in Nyx and act on this exact element, not on an unrelated overlay.
export function styleMovieVideo(video, frames) {
  const cleanups = [];
  for (let index = 0; index < frames.length; index++) {
    const doc = frames[index].contentDocument;
    if (!doc?.head) throw Error('Player document unavailable.');
    const surface = frames[index + 1] || video;
    const attribute = 'data-nyx-player-surface';
    const previous = surface.getAttribute(attribute);
    surface.setAttribute(attribute, '');
    const ancestors = [];
    for (let node = surface.parentElement; node; node = node.parentElement) {
      ancestors.push([node, node.getAttribute('data-nyx-player-ancestor')]);
      node.setAttribute('data-nyx-player-ancestor', '');
    }
    const style = doc.createElement('style');
    style.textContent = `html,body{background:#000!important;overflow:hidden!important}body *{visibility:hidden!important}
      [data-nyx-player-ancestor]{transform:none!important;filter:none!important;perspective:none!important;contain:none!important;opacity:1!important}
      [data-nyx-player-surface]{visibility:visible!important;position:fixed!important;inset:0!important;width:100vw!important;height:100vh!important;max-width:none!important;max-height:none!important;margin:0!important;padding:0!important;border:0!important;object-fit:contain!important;z-index:2147483647!important;opacity:1!important;background:#000!important;pointer-events:none!important}
      video::-webkit-media-controls{display:none!important}`;
    doc.head.append(style);
    cleanups.push(() => {
      style.remove();
      previous === null ? surface.removeAttribute(attribute) : surface.setAttribute(attribute, previous);
      for (const [node, value] of ancestors) value === null ? node.removeAttribute('data-nyx-player-ancestor') : node.setAttribute('data-nyx-player-ancestor', value);
    });
  }
  const controls = video.controls;
  video.controls = false;
  const observer = new MutationObserver(() => { if (video.controls) video.controls = false; });
  observer.observe(video, {attributes: true, attributeFilter: ['controls']});
  return () => { observer.disconnect(); video.controls = controls; cleanups.reverse().forEach(clean => clean()); };
}

function movieStartAction(frame) {
  const queue = [frame]; let count = 0;
  while (queue.length && count++ < 16) {
    try {
      const doc = queue.shift().contentDocument;
      if (!doc) continue;
      const play = [...doc.querySelectorAll('button,[role="button"]')].find(button =>
        /^(play|play video|play movie|start watching|watch now)$/i.test((button.getAttribute('aria-label') || button.getAttribute('title') || button.textContent || '').trim()));
      if (play) return () => play.click();
      const video = [...doc.querySelectorAll('video')].find(v => v.currentSrc || v.src);
      if (video) return () => video.play();
      queue.push(...[...doc.querySelectorAll('iframe')].slice(0, 16));
    } catch {}
  }
  return null;
}

export function canStartMovieProxy(frame) { return Boolean(movieStartAction(frame)); }

export async function startMovieProxy(frame) {
  const action = movieStartAction(frame);
  if (action) await action();
  else throw Error('The player is still loading.');
}
