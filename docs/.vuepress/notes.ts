import { defineNotesConfig } from 'vuepress-theme-plume';
import test from './note/test.ts';
import network from './note/network.ts';
import demo from './note/demo.ts';

    export default defineNotesConfig({
        dir: 'notes',
        link: '/',
        notes: 
        [
             demo,
        network,
        test
        ],
        });
