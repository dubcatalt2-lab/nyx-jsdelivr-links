export function createPublishedLinkPool({seed=[],loadPublished,now=Date.now,ttl=300000}){
 let links=[...new Set(seed)],expires=0,pending;
 const valid=value=>{try{const u=new URL(value);return u.protocol==='https:'&&!u.username&&!u.password}catch{return false}};
 return async()=>{if(now()<expires)return {links,stale:false};if(pending)return pending;
 pending=(async()=>{try{const extra=await loadPublished();links=[...new Set([...seed,...extra].filter(valid))];expires=now()+ttl;return {links,stale:false};}catch{expires=now()+60000;return {links,stale:true};}finally{pending=null}})();return pending;};
}
