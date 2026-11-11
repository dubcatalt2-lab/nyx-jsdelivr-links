// DevTools panel/network support scoped to the Nyx tab selected when opened.
export function createDevtools(runtime,tabWindow,tabUrl){
 const panels=new Map(),watchers=new Set(),logs=new Map(),requests=new WeakMap();
 const maxBody=8*1024*1024,maxTotal=32*1024*1024;
 const event=set=>({addListener:fn=>set.add(fn),removeListener:fn=>set.delete(fn),hasListener:fn=>set.has(fn)});
 const records=id=>{if(!logs.has(id))logs.set(id,{entries:[],bytes:0});return logs.get(id);};
 function init({window:win,client},info){
  let id;try{id=new URL(String(client.url)).hostname.split('.')[0];}catch{return;}
  const ext=runtime.registry.get(id);if(!ext?.manifest.devtools_page||!win.chrome)return;
  const listeners=new Set(),tabId=info.tabId;
  const watcher={listeners,tabId,win};watchers.add(watcher);win.addEventListener('pagehide',()=>{watchers.delete(watcher);if(![...watchers].some(other=>other.tabId===tabId))logs.delete(tabId);},{once:true});
  const wrap=entry=>({...entry.har,getContent:callback=>callback(entry.content,'base64')});
  win.chrome.devtools={inspectedWindow:{tabId,eval(expression,options,callback){if(typeof options==='function')callback=options;try{const target=tabWindow(tabId);if(!target)throw Error('The inspected tab is closed.');Promise.resolve(expression==='location.hostname'?new URL(tabUrl(tabId)).hostname:expression==='location.href'?tabUrl(tabId):target.eval(String(expression))).then(value=>callback?.(value,undefined),error=>callback?.(undefined,{isException:true,value:String(error)}));}catch(error){callback?.(undefined,{isException:true,value:String(error)});}}},network:{onRequestFinished:event(listeners),getHAR:callback=>callback({version:'1.2',creator:{name:'Nyx',version:'1'},entries:records(tabId).entries.map(wrap)})},panels:{themeName:'dark',create(title,icon,path,callback){const list=panels.get(id)||[];list.push({title:String(title),path:String(path).replace(/^\//,'')});panels.set(id,list);callback?.({onShown:event(new Set()),onHidden:event(new Set())});}}};
  win.chrome.devtools.inspectedWindow.$K4q9p2Xv__eval=win.chrome.devtools.inspectedWindow.eval;
 }
 function before(ctx,props,info){if(info.kind!=='tab'||!watchers.size||![...watchers].some(w=>w.tabId===info.tabId))return;const url=String(props.url);if(!/^https?:/.test(url)||url.includes('.sapphire-extension.invalid/'))return;requests.set(ctx.request,{tabId:info.tabId,start:Date.now(),url,method:ctx.request.method||'GET',headers:(props.init.headers||[]).map(([name,value])=>({name,value}))});}
 function capture(ctx,props){
  const request=requests.get(ctx.request),response=props.response;if(!request||!response?.body?.tee)return;
  let copy;try{if(typeof response.clone==='function')copy=response.clone().body;else{const parts=response.body.tee();response.body=parts[0];copy=parts[1];}}catch{return;}
  void(async()=>{const reader=copy.getReader(),chunks=[];let size=0;try{while(true){const {value,done}=await reader.read();if(done)break;size+=value.byteLength;if(size>maxBody){void reader.cancel();return;}chunks.push(value);}const bytes=new Uint8Array(size);let offset=0;for(const chunk of chunks){bytes.set(chunk,offset);offset+=chunk.length;}let text='';for(let i=0;i<bytes.length;i+=32768)text+=String.fromCharCode(...bytes.subarray(i,i+32768));const raw=response.rawHeaders||[...new Headers(response.headers)],entry={content:btoa(text),size,har:{startedDateTime:new Date(request.start).toISOString(),time:Date.now()-request.start,request:{url:request.url,method:request.method,headers:request.headers},response:{status:response.status,statusText:response.statusText||'',headers:raw.map(([name,value])=>({name,value})),content:{size,mimeType:raw.find(([name])=>name.toLowerCase()==='content-type')?.[1]||''}}}};const log=records(request.tabId);log.entries.push(entry);log.bytes+=size;while(log.entries.length>200||log.bytes>maxTotal)log.bytes-=log.entries.shift().size;for(const watcher of watchers)if(watcher.tabId===request.tabId)for(const listener of watcher.listeners)try{listener({...entry.har,getContent:callback=>callback(entry.content,'base64')});}catch{}}catch{}finally{reader.releaseLock();}})();
 }
 function downloads({window:win,client}){
  let id;try{id=new URL(String(client.url)).hostname.split('.')[0];}catch{return;}
  if(!runtime.registry.get(id)?.manifest.devtools_page)return;
  const blobs=new Map(),create=win.URL.createObjectURL.bind(win.URL),revoke=win.URL.revokeObjectURL.bind(win.URL);
  win.URL.createObjectURL=value=>{const url=create(value);if(value instanceof win.Blob&&value.size<=maxTotal)blobs.set(url.split('/').pop(),value);return url;};
  win.URL.revokeObjectURL=url=>{blobs.delete(String(url).split('/').pop());return revoke(url);};
  const click=win.HTMLAnchorElement.prototype.click;
  win.HTMLAnchorElement.prototype.click=function(){const blob=blobs.get(this.href.split('/').pop());if(!this.download||!blob)return click.call(this);const url=URL.createObjectURL(new Blob([blob],{type:blob.type})),a=document.createElement('a');a.href=url;a.download=this.download.split(/[\\/]/).pop();document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),60000);};
  win.addEventListener('pagehide',()=>blobs.clear(),{once:true});
 }
 return {panels,init,downloads,before,capture,clear:id=>logs.delete(id)};
}
