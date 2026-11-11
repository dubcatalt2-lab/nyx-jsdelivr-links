// Keep unrelated role permissions intact. Member-level restrictions remain
// necessary when another role explicitly grants View Channel.
export async function hideReviewChannels({rest,channels,roleId,reviewChannelId}) {
  const inaccessible=[];
  for(const channel of channels) {
    if(channel.id===reviewChannelId||[4,10,11,12].includes(channel.type))continue;
    const existing=(channel.permission_overwrites||[]).find(o=>o.type===0&&o.id===roleId);
    if(!existing&&(channel.permission_overwrites||[]).length>=1000){inaccessible.push(channel.id);continue;}
    const body={type:0,allow:String(BigInt(existing?.allow||0)&~1024n),deny:String(BigInt(existing?.deny||0)|1024n)};
    if(existing?.allow===body.allow&&existing?.deny===body.deny)continue;
    try{await rest.put('/channels/'+channel.id+'/permissions/'+roleId,{body,reason:'Hide regular channels from the suspects review role'});}
    catch(error){if([50001,50013].includes(Number(error.code))){inaccessible.push(channel.id);continue;}throw error;}
  }
  return inaccessible;
}
