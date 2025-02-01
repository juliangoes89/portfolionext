import {v4 as uuidv4} from 'uuid';

export const cleanAndTransformBlocks = (blocksJSON: any[]) => {
    const blocks = JSON.parse(JSON.stringify(blocksJSON));
    const assignIds = (b:any[]) => {
        b.forEach((_block) => {
            _block.id = uuidv4();
            if (_block.innerBlocks?.length) {
                assignIds(_block.innerBlocks);
            }
        });
    }
    assignIds(blocks);
    return blocks;
};