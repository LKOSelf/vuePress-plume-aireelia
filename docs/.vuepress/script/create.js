import fs from 'fs';
import path from 'path';
import { Dir } from "./path.js";
import date from './date.js';
/**
 * 生成固定格式的 TypeScript 配置文件
 * @param moduleName 模块名称（例如 'demo'）
 * @param dir 目录路径（例如 'demo'）
 * @param link 链接前缀（例如 '/demo'）
 * @param sidebar 侧边栏配置（例如 ['', 'foo', 'bar']）
 */
export function generateNoteConfig(moduleName, dir, link, sidebar = null) {
    const content = `import { defineNoteConfig } from 'vuepress-theme-plume'
    export default defineNoteConfig({
    dir: '${dir}',
    // \`dir\` 所指向的目录中的所有 markdown 文件，其 permalink 需要以 \`link\` 配置作为前缀
    // 如果 前缀不一致，则无法生成侧边栏。
    // 所以请确保  markdown 文件的 permalink 都以 \`link\` 开头
    link: '${link}',
    // 手动配置侧边栏结构
    // sidebar: ${JSON.stringify(sidebar)},
    // 根据文件结构自动生成侧边栏
    sidebar: 'auto',
    })`;
    const filePath = path.join(Dir.grandParentDir, 'note', `${moduleName}.ts`)
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`配置文件已生成: ${filePath}`);
}

/**
 * 生成固定格式的 TypeScript 配置文件
 * @param home 知识库的主页名称（默认为 'README.md'）
 * @param homeDir 目录路径
 * @param title 知识库的主页标题
 */
export function createReadme(home = 'README.md', homeDir, title){

    const content = 
`---
    title: ${title}
    createTime: ${date()}
    permalink: /notes/${homeDir}/
---`
    fs.writeFileSync(path.join(Dir.grandParentDir,'notes',homeDir,home),content,{encoding: 'utf8', flag: 'w'})
    console.log(`${home}主页已生成`);
}

export function createNoteHome(){
    const content = fs.readFileSync(path.join(Dir.grandParentDir, 'notes', 'README.md'), 'utf8');
    return content;
}