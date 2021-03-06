import { IOptions } from 'glob';

import * as globby from "globby";

(async () => {
    let result: string[];
    result = await globby('*.tmp');
    result = await globby(['a.tmp', '*.tmp', '!{c,d,e}.tmp']);

    result = globby.sync('*.tmp');
    result = globby.sync(['a.tmp', '*.tmp', '!{c,d,e}.tmp']);

    result = await globby('*.tmp', Object.freeze({ignore: Object.freeze([])}));
    result = globby.sync('*.tmp', Object.freeze({ignore: Object.freeze([])}));
})();

const tasks: Array<{
    pattern: string,
    options: IOptions
}> = globby.generateGlobTasks(['*.tmp', '!b.tmp'], {ignore: ['c.tmp']});

console.log(globby.hasMagic('**') === true);
console.log(globby.hasMagic(['**', 'path1', 'path2']) === true);
console.log(globby.hasMagic(['path1', 'path2']) === false);
