const t = require('@babel/types');
const path = require('path');

module.exports = function(babel) {
    return {
        pre() {},
        visitor: {
            CallExpression(path, { opts }) {
                // 如果需要获取参数可以使用opts
                if (t.isMemberExpression(path.node.callee)) {
                    if (
                        // t.isIdentifier(path.node.callee.object) 
                        // && path.node.callee.object.name == 'console'
                        // && 
                        t.isIdentifier(path.node.callee.property)
                            && path.node.callee.property.name == 'log'
                        ) {
                          path.remove()
                    }
                }
            }
        },
        post(state) {}
    }
}