import {mkdir,copyFile,rm,cp} from 'node:fs/promises';
await rm('public',{recursive:true,force:true});
await mkdir('public');
for (const file of ['index.html','styles.css','app.js','panel.js','catalog.json']) await copyFile(file,`public/${file}`);
await cp('vendor','public/vendor',{recursive:true});
console.log('Built SDNL Dynalite GEC → public/');
