/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: '首页', link: '/', icon:'line-md:home-twotone' },
  { text: '博客', link: '/blog/',icon:'line-md:pencil-alt-twotone' },
  { text: '标签', link: '/blog/tags/',icon:'solar:tag-bold-duotone' },
  {
    text: '知识库', link: '/notes/',icon:'line-md:file-twotone' },
])
