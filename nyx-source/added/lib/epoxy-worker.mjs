export function relayImplementation(){
 const value=process.env.NYX_WISP_IMPLEMENTATION||(process.platform==='win32'?'wispurr':'epoxy');
 if(!['wispurr','epoxy'].includes(value))throw Error('Unknown relay implementation.');
 return value;
}
export async function createEpoxyWorker({username,password,maxFrame,onFailure}){
 const {EpoxyServer}=await import('epoxy-server-node');
 const server=new EpoxyServer({host:'127.0.0.1',port:0,prefix:'/wisp',logLevel:'off',wispV2:true,extensions:[],auth:{users:{[username]:password},required:true},allowUdp:false,allowWsproxy:false,allowWsproxyUdp:false,allowDirectIp:true,allowLoopback:false,allowNonGlobal:false,allowMulticast:false,allowPorts:[80,443],resolveIpv6:false,maxMessageSize:maxFrame,bufferSize:128,streamBufferSize:65536,useRealIpHeaders:false});
 let stopping=false;server.on('close',()=>{if(!stopping)onFailure(Error('Rust relay stopped.'));});
 const address=await server.listen();
 return {get ports(){return server.listening?[address.port]:[];},processes:[],get isRunning(){return server.listening;},kill(){stopping=true;void server.close();},async stop(){stopping=true;await server.close();}};
}
