import fs from 'fs'
import path from 'path';
import { Dir } from "./script/path.js";
import {generateNoteConfig,createReadme} from './script/create.js';
import {importModule,defaultImport,defineNotesConfig} from './script/import.js';
import noteInfo from './script/noteInfo.js';

try{
  // 获取目录信息
  const jsonData = noteInfo();
  const title = fs.readFileSync(path.join(Dir.grandParentDir,".vuepress",'title.json'),'utf8')
  const titles = JSON.parse(title);

  // 生成配置文件
  for (const item of jsonData.title) {
    generateNoteConfig(item, item, `/${item}`);
    createReadme('README.md',item,titles[item]); 
  }

  // 导入配置文件
  console.log(Dir.parentDir)
  for (const item of jsonData.title) {
      fs.appendFileSync(Dir.parentDir + `/.temp/tmp.ts`,importModule(item),'utf8','a+');
  }
  console.log('配置文件已导入');

  // 读取导入配置
  const importContent  = fs.readFileSync(path.join(Dir.parentDir,'/.temp/tmp.ts'), 'utf8');

  // 导入默认配置
  const default_import=defaultImport();

  // 导入note定义
  const noteConfig = defineNotesConfig(...jsonData.title);

  // 拼接
  const content = default_import + importContent + noteConfig;
  fs.writeFileSync(Dir.grandParentDir + `/notes.ts`, content, {encoding: 'utf8', flag: 'w'});
  console.log('更新完成')

  // 删除临时数据
  fs.unlinkSync(path.join(Dir.parentDir,'/.temp/tmp.ts'));
}catch(err){
    console.log(err);
}