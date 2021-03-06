'use strict';

const inlineElements = new Set('a,abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,select,small,span,strike,strong,sub,sup,textarea,tt,u,var'.split(','));
const elementMap = {
    p: 'span',
    ul: 'li',
    ol: 'li',
    table: 'tr',
    tr: 'td',
    tbody: 'tr',
    thead: 'tr',
    tfoot: 'tr',
    colgroup: 'col',
    select: 'option',
    optgroup: 'option',
    audio: 'source',
    video: 'source',
    object: 'param',
    map: 'area'
};

/**
 * Returns best child node name for given parent node name
 * @param  {String} parentName Name of parent node
 * @return {String}
 */
export default function resolveImplicitName(parentName) {
    parentName = (parentName || '').toLowerCase();
    return elementMap[parentName]
        || (inlineElements.has(parentName) ? 'span' : 'div');
}
