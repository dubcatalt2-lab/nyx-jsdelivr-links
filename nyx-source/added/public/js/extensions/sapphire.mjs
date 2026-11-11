import {createDevtools} from './devtools.mjs';
import {loadPageScript} from '../page-worker.mjs';
await loadPageScript('/assets/vendor/r93d51/LyzaHBeO/hdr6ZzzC.js');
await loadPageScript('/assets/vendor/r93d51/LyzaHBeO/msJpa98j.js');
const {Sapphire}=await import('/assets/vendor/sapphire/runtime.mjs');
import {extensionItems,loadExtension,extensionStateEvent} from './store.mjs';
const key=Symbol.for('nyx.sapphire.v1');
export function sapphireBridge(){
 let owner=window;try{if(top.location.origin===location.origin)owner=top;}catch{}
 if(owner[key])return owner[key];
 const frames=new Map(),ids=new WeakMap(),mapped=new Map(),pending=new Map();let sequence=1,options={},booting;
 const tabs=()=>[...frames].filter(([,v])=>v.frame.isConnected).map(([id,v])=>({id,windowId:1,url:v.url,title:v.frame.contentDocument?.title||v.url,active:!!v.frame.getClientRects().length,status:'complete'}));
 const current=()=>tabs().find(t=>t.active)?.id??null;
 const notify=()=>owner.dispatchEvent(new Event(extensionStateEvent));
 const boot=()=>booting||=(import('../document-engine.mjs').then(m=>m.prepareDocumentEngine(location.origin.replace(/^http/,'ws')+'/resources/live/')).finally(()=>{booting=null;}));
 const runtime=new Sapphire({host:{ensureController:()=>{void boot().catch(console.error);},getTabId:win=>[...frames].find(([,v])=>v.frame.contentWindow===win)?.[0]??null,getTab:id=>tabs().find(t=>t.id===id)||null,getAllTabs:tabs,getActiveTabId:current,getTabWindow:id=>frames.get(id)?.frame.contentWindow||null,navigateTab:(id,url)=>{if(id!=null&&frames.has(id))frames.get(id).go(url);else options.openPage?.(null,url);},reloadTab:id=>{const v=frames.get(id);if(v)v.go(v.url);},requestPermissions:async()=>false,openExtensionTab:(id,path)=>{const local=[...mapped].find(([,remote])=>remote===id)?.[0];if(local)options.openPage?.(local,path);}}});
 const devtools=createDevtools(runtime,id=>frames.get(id)?.frame.contentWindow,id=>frames.get(id)?.url);
 const hooked=new WeakSet(),developerPages=new Map();
 class DevtoolsPlugin extends globalThis.$K4q9p2XvController.ManagedPlugin {
  constructor(info){super('nyx-devtools',[]);this.info=info;}
  install(frame){super.install(frame);this.tap(frame.hooks.init.pre,ctx=>devtools.init(ctx,this.info));this.tap(frame.hooks.init.post,ctx=>devtools.downloads(ctx));this.tap(frame.hooks.fetch.request,(ctx,props)=>devtools.before(ctx,props,this.info));this.tap(frame.hooks.fetch.preresponse,(ctx,props)=>devtools.capture(ctx,props));}
 }
 runtime.onChange(notify);const initialized=runtime.init();
 async function ensure(id){
  if(pending.has(id))return pending.get(id);
  const task=(async()=>{
   await initialized;const item=await loadExtension(id);if(!item||item.enabled===false)return null;
   await boot();
   let remote=mapped.get(id)||localStorage.getItem('nyx.sapphire-map:'+id);
   if(!remote||!runtime.registry.get(remote)){
    if(!item.packageBytes)throw Error('Reinstall this extension to enable Sapphire.');
    remote=await runtime.installExtension(item.packageBytes.buffer.slice(item.packageBytes.byteOffset,item.packageBytes.byteOffset+item.packageBytes.byteLength),item.name+'.zip');
    localStorage.setItem('nyx.sapphire-map:'+id,remote);
   }
   mapped.set(id,remote);await runtime.setExtensionEnabled(remote,true);return remote;
  })();pending.set(id,task);try{return await task;}finally{pending.delete(id);}
 }
 const bridge={runtime,configure(value){options=value;},attach(controller){if(!hooked.has(controller)){hooked.add(controller);const create=controller.createFrame.bind(controller);controller.createFrame=(frame,options={})=>{const plugin=options.plugins?.find(p=>p.name==='sapphire');return create(frame,{...options,plugins:[...(options.plugins||[]),...(plugin?[new DevtoolsPlugin(plugin.info)]:[])]});};}runtime.attachController(controller);},plugin(frame,url,go){let id=ids.get(frame);if(!id){id=sequence++;ids.set(frame,id);}frames.set(id,{frame,url,go});return runtime.createPlugin(id);},update(frame,url){const id=ids.get(frame);if(id)frames.get(id).url=url;},ensure,async stop(id){await initialized;const remote=mapped.get(id)||localStorage.getItem('nyx.sapphire-map:'+id);if(remote)await runtime.setExtensionEnabled(remote,false);},async sync(){await initialized;for(let index=0;index<localStorage.length;index++){const key=localStorage.key(index);if(key?.startsWith('nyx.sapphire-map:')){const id=key.slice('nyx.sapphire-map:'.length);if(/^[a-p]{32}$/.test(id))mapped.set(id,localStorage.getItem(key));}}for(const [id,remote]of mapped){const item=extensionItems().find(v=>v.id===id);if(!item){await runtime.uninstallExtension(remote);mapped.delete(id);localStorage.removeItem('nyx.sapphire-map:'+id);}else if(item.enabled===false)await runtime.setExtensionEnabled(remote,false);}},async view(id,path){const remote=await ensure(id);if(!remote)throw Error('This extension is off.');const frame=document.createElement('iframe');frame.className='addon-custom-view';frame.title='Extension';const active=current();let developerPage;frame.disposeExtensionView=()=>{runtime.unmountExtensionPopup(frame);if(developerPage){runtime.unmountExtensionPopup(developerPage);developerPage.remove();if(developerPages.get(remote)===developerPage)developerPages.delete(remote);developerPage=null;}};const mount=async()=>{if(!path&&runtime.registry.get(remote)?.manifest.devtools_page){
   const previous=developerPages.get(remote);if(previous){runtime.unmountExtensionPopup(previous);previous.remove();}devtools.panels.delete(remote);
   const hidden=document.createElement('iframe');developerPage=hidden;hidden.hidden=true;document.body.append(hidden);developerPages.set(remote,hidden);
   await runtime.mountExtensionPage(hidden,remote,runtime.registry.get(remote).manifest.devtools_page,active,'sidepanel');
   const until=Date.now()+10000;while(!devtools.panels.get(remote)?.length&&Date.now()<until)await new Promise(r=>setTimeout(r,50));
   path=devtools.panels.get(remote)?.[0]?.path;if(!path)throw Error('The extension did not register a developer panel.');
  }
  if(path)await runtime.mountExtensionPage(frame,remote,path,active,'sidepanel');else if(!await runtime.mountExtensionPopup(frame,remote,active)){runtime.triggerActionClicked(remote,active);}};frame.ready=Promise.resolve().then(mount);frame.ready.catch(error=>{frame.title=error.message;console.error(error);});return frame;}};
 owner[key]=bridge;return bridge;
}
