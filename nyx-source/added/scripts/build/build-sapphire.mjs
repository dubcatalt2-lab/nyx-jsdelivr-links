import {build} from 'esbuild';
import {mkdir,writeFile} from 'node:fs/promises';
import {join,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('../../',import.meta.url));
export async function buildSapphire(output=join(root,'public')){
 const dir=join(output,'assets/vendor/sapphire');await mkdir(dir,{recursive:true});
 const result=await build({stdin:{contents:"export {Sapphire,SapphirePlugin} from '@x8r/sapphire';",resolveDir:root},bundle:true,format:'esm',platform:'browser',target:'es2022',minify:true,write:false,legalComments:'inline'});
 await writeFile(join(dir,'runtime.mjs'),result.outputFiles[0].text.replaceAll('$scramjetController','$K4q9p2XvController'));
 await writeFile(join(dir,'NOTICE.txt'),'Sapphire @x8r/sapphire 0.1.4, https://github.com/x8rr/sapphire\nUpstream package declares no license. Included at project owner request; no license grant is asserted.\nBundled dependencies retain their source license comments.\n');
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url))await buildSapphire();
