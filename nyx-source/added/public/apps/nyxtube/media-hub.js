const frame=document.querySelector('[data-library-frame]');
const video=document.querySelector('[data-live-player]');
const status=document.querySelector('[data-live-status]');
const retry=document.querySelector('[data-live-retry]');
const streams={dw:{name:'DW English',url:'https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/index.m3u8'},france24:{name:'France 24',url:'https://static.france24.com/live/F24_EN_HI_HLS/live_web.m3u8'}};
let hls=null,currentChannel='',currentSection='home',generation=0;
function stopLive(){generation++;hls?.destroy();hls=null;video.pause();video.removeAttribute('src');video.load();}
function openChannel(id){
 const channel=streams[id];if(!channel)return;stopLive();currentChannel=id;const request=generation;status.textContent='Connecting to '+channel.name+'�';retry.hidden=true;
 document.querySelectorAll('[data-live-channel]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.liveChannel===id)));
 const failed=()=>{if(request!==generation)return;status.textContent='This channel could not connect. Retry or choose another channel.';retry.hidden=false;};
 const play=()=>{if(request!==generation)return;video.play().catch(()=>{if(request===generation)status.textContent='Press Play to watch '+channel.name+'.';});};
 if(globalThis.Hls?.isSupported()){
  hls=new Hls({maxBufferLength:15,maxMaxBufferLength:30,backBufferLength:15,capLevelToPlayerSize:true});let recovered=false;
  hls.on(Hls.Events.MANIFEST_PARSED,play);hls.on(Hls.Events.ERROR,(_e,data)=>{if(!data.fatal||request!==generation)return;if(data.type===Hls.ErrorTypes.MEDIA_ERROR&&!recovered){recovered=true;hls.recoverMediaError();}else{hls.destroy();hls=null;failed();}});hls.loadSource(channel.url);hls.attachMedia(video);
 }else if(video.canPlayType('application/vnd.apple.mpegurl')){video.src=channel.url;video.onloadedmetadata=play;video.onerror=failed;}else{status.textContent='This browser cannot play live television.';}
}
video.addEventListener('playing',()=>{status.textContent='Watching '+(streams[currentChannel]?.name||'live television');retry.hidden=true;});
video.addEventListener('waiting',()=>{if(currentSection==='live')status.textContent='Buffering�';});
retry.addEventListener('click',()=>openChannel(currentChannel));
document.querySelectorAll('[data-live-channel]').forEach(b=>b.addEventListener('click',()=>openChannel(b.dataset.liveChannel)));
document.addEventListener('nyx:media-section',event=>{
 const section=event.detail;currentSection=section;
 if(section!=='live')stopLive();
 const kind={movies:'movie',tv:'tv',anime:'anime'}[section];
 if(kind){const target='./../movies/catalog.html?embedded=1&kind='+kind;if(frame.dataset.section!==section){frame.dataset.section=section;frame.src=target;}frame.title='Nyx '+{movies:'Movies',tv:'TV Shows',anime:'Anime'}[section];}
 else{frame.removeAttribute('src');delete frame.dataset.section;}
 document.querySelectorAll('[data-view-button]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.viewButton===(['watch','channel'].includes(section)?'home':section))));
 const url=new URL(location.href);if(section==='home')url.searchParams.delete('section');else if(['movies','tv','anime','live'].includes(section))url.searchParams.set('section',section);globalThis.history.replaceState(null,'',url);
 const notice=document.querySelector('[data-notice]');if(notice)notice.hidden=section!=='home'||!notice.textContent;
});
const initial=new URLSearchParams(location.search).get('section');if(['movies','tv','anime','live'].includes(initial))document.dispatchEvent(new CustomEvent('nyx:media-select',{detail:initial}));
addEventListener('pagehide',stopLive);
