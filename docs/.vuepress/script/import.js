/**
 * 导入知识库配置
 * @param moduleName 模块名称
 */
export function importModule(moduleName) {
    const content = `import ${moduleName} from './note/${moduleName}.ts';\n`
    return content;
}

export function defaultImport(){
    const defaultContent = "import { defineNotesConfig } from 'vuepress-theme-plume';\n";
    return defaultContent;
}

/**
 * 新增知识库
 * @param variables 模块变量
 */
export function defineNotesConfig(...variables){
    const config = `
    export default defineNotesConfig({
        dir: 'notes',
        link: '/',
        notes: 
        [
             ${variables.join(',\n        ')}
        ],
        });\n`
        return config;
}

