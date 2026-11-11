import {parse} from 'acorn';
// Rebase decoded string values, including literals encoded by production builds.
export function rebaseJavaScript(source, rebase) {
  const tree=parse(source,{ecmaVersion:'latest',sourceType:'module',allowReturnOutsideFunction:true});
  const edits=[];
  function visit(node){
    if(!node||typeof node!=='object')return;
    if(node.type==='Literal'&&typeof node.value==='string'){
      const value=rebase('"'+node.value+'"').slice(1,-1);
      if(value!==node.value)edits.push({start:node.start,end:node.end,text:JSON.stringify(value)});
    }
    if(node.type==='TemplateElement'){
      const value=rebase(node.value.raw);
      if(value!==node.value.raw)edits.push({start:node.start,end:node.end,text:value});
    }
    for(const value of Object.values(node))if(Array.isArray(value))value.forEach(visit);else if(value&&typeof value==='object')visit(value);
  }
  visit(tree);
  for(const edit of edits.sort((a,b)=>b.start-a.start))source=source.slice(0,edit.start)+edit.text+source.slice(edit.end);
  return source;
}
