import { defineNoteConfig } from 'vuepress-theme-plume'
    export default defineNoteConfig({
    dir: 'network',
    // `dir` 所指向的目录中的所有 markdown 文件，其 permalink 需要以 `link` 配置作为前缀
    // 如果 前缀不一致，则无法生成侧边栏。
    // 所以请确保  markdown 文件的 permalink 都以 `link` 开头
    link: '/network',
    // 手动配置侧边栏结构
    // sidebar: null,
    // 根据文件结构自动生成侧边栏
    sidebar: 'auto',
    })