import assert from 'node:assert/strict';
import express from 'express';
import {chromium} from 'playwright';
import {readFile,readdir} from 'node:fs/promises';
import {zipSync,strToU8,unzipSync} from 'fflate';
const root=process.env.NYX_TEST_STATIC_ROOT||'public';
let aliases={},modules={};try{aliases=JSON.parse(await readFile(root+'/frontend-assets.json','utf8')).aliases;modules=JSON.parse(await readFile(root+'/public-modules.json','utf8')).aliases;}catch{}
const path=file=>aliases[modules[file]||file]||modules[file]||file;
const app=express();app.get('/ublock.crx',async(_q,r)=>r.send(await readFile('C:/Users/dubca/Downloads/nyxv2/.codex-artifacts/real-extensions/network-zipper.crx')));app.get('/fixture',(_q,r)=>r.type('html').send('<!doctype html><body><div id="manager"></div><div id="popup"></div><iframe title="Website"></iframe>'));
app.get(path('/assets/vendor/r93d51/index-k9v3f1.js'),(_q,r)=>r.type('js').send(`globalThis.L1bcTransport={L1bcClient:class{async init(){}async request(url){if(String(url).includes('raw.githubusercontent.com'))return {status:200,statusText:'OK',headers:[['content-type','application/json']],body:new Response('["html","js","css","json"]').body};return {status:200,statusText:'OK',headers:[['content-type','text/html']],body:new Response('<!doctype html><title>Docs</title><body><nav role="navigation">Navigation</nav><article>Extension test article</article>').body}}}};`));
app.use(express.static(root));const server=app.listen(0,'127.0.0.1');await new Promise(r=>server.once('listening',r));const browser=await chromium.launch();
const files={};const base=new URL('../fixtures/chrome-focus-mode/',import.meta.url);async function walk(dir=''){for(const entry of await readdir(new URL(dir,base),{withFileTypes:true})){if(entry.isDirectory())await walk(dir+entry.name+'/');else files[dir+entry.name]=new Uint8Array(await readFile(new URL(dir+entry.name,base)));}}await walk();
try{
 const page=await browser.newPage();page.on('pageerror',error=>console.log('PAGE ERROR',error.message));page.on('console',message=>console.log('CONSOLE',message.text().slice(0,300)));page.setDefaultTimeout(10000);setTimeout(()=>console.log('STILL RUNNING'),20000).unref();
 await page.goto('http://127.0.0.1:'+server.address().port+'/fixture');
 await page.evaluate(async paths=>{window.extensionPackage=await import(paths.package);window.store=await import(paths.store);window.host=(await import(paths.host)).getExtensionHost();window.engine=await(await import(paths.engine)).prepareDocumentEngine('ws://localhost/resources/live/');host.configure({openPage(){}});engine.openView(document.querySelector('iframe[title=Website]'),'https://developer.chrome.com/docs/extensions/test');}, {package:path('/js/extensions/package.mjs'),store:path('/js/extensions/store.mjs'),host:path('/js/extensions/host.mjs'),engine:path('/js/document-engine.mjs')});
 await page.waitForFunction(()=>document.querySelector('iframe[title=Website]')?.contentDocument?.querySelector('article'));

 const bytes=await readFile('C:/Users/dubca/Downloads/nyxv2/.codex-artifacts/real-extensions/network-zipper.crx');
 const id=await page.evaluate(async()=>{console.log('DOWNLOADING');const bytes=await(await fetch('/ublock.crx')).arrayBuffer();console.log('DOWNLOADED');const extension=await extensionPackage.readExtensionPackage(bytes);console.log('PARSED',extension.engine);delete extension.engine;delete extension.packageBytes;await store.saveExtension(extension);console.log('SAVED');await Promise.race([host.sync(),new Promise((_,reject)=>setTimeout(()=>reject(Error('Sync timeout')),25000))]);return extension.id;});console.log('INSTALLED',id);
 await page.evaluate(async id=>{document.querySelector('#popup').append(await host.action(id));},id);
 await page.waitForTimeout(10000);
 await page.evaluate(()=>engine.openView(document.querySelector('iframe[title=Website]'),'https://developer.chrome.com/docs/extensions/second'));await page.waitForTimeout(1500);
 const panel=page.frames().find(f=>f.url().includes('panel.html'));console.log('PANEL',!!panel);const downloaded=page.waitForEvent('download',{timeout:15000});await panel.getByText('Download',{exact:true}).click();const download=await downloaded;console.log('DOWNLOADED ZIP',download.suggestedFilename(),download.url(),await download.failure());
 assert.equal(await download.failure(),null);const entries=unzipSync(new Uint8Array(await readFile(await download.path())));assert(Object.values(entries).some(value=>new TextDecoder().decode(value).includes('Extension test article')),'Downloaded archive contains captured response content');assert.equal(await page.evaluate(async id=>(await store.loadExtension(id)).engine,id),'sapphire');assert.equal(await page.evaluate(id=>host.error(id),id),undefined);console.log('PASS legacy migration and captured response ZIP');
 console.log('FRAMES',await Promise.all(page.frames().map(async f=>({url:f.url().slice(0,100),text:await f.locator('body').innerText().catch(()=>null)}))));
 await page.screenshot({path:'.codex-artifacts/sapphire-ublock.png'});
}finally{await browser.close();server.closeAllConnections();await new Promise(r=>server.close(r));}
