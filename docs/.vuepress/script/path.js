import { fileURLToPath } from 'url';
import path from 'path';

export class Dir {
    // 获取当前文件的绝对路径
    static __filename = fileURLToPath(import.meta.url);
    static __dirname = path.dirname(Dir.__filename);
    
    // 跳一级到父目录
    static parentDir = path.dirname(Dir.__dirname);
    
    // 跳两级到祖父目录
    static grandParentDir = path.dirname(Dir.parentDir);

    // 跳三级到曾祖父目录
    static greatGrandParentDir = path.dirname(Dir.grandParentDir);
}
