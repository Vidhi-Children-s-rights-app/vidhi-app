import { script as script_1 } from './1';

import { ScriptType } from '../../types';

export const getScript = (id: number) => {
    let script;
    switch (id) {
        case 1:
            script = script_1;
            break;
        // case 2:
        //     script = script_2;
        //     break;
    }
    return script as unknown as ScriptType;
};
