(function name() {
    const tool_func = {};
    const tool_proto = tool_func.__proto__;

    // 对象数组深拷贝
    tool_proto.deepClone = (cloneObject) => {
            if (cloneObject instanceof Object) {
                if (cloneObject instanceof Array) {
                    return cloneObject.slice();
                } else {
                    let obj = {};
                    for (const key in cloneObject) {
                        if (cloneObject.hasOwnProperty(key)) {
                            const element = cloneObject[key];
                            if (element instanceof Object) {
                                obj[key] = this.deepClone(element);
                            } else {
                                obj[key] = element;
                            }
                        }
                    }
                    return obj;
                }
            } else {
                return cloneObject;
            }
        }
        // 对象数组浅拷贝
    tool_proto.lightClone = (cloneObject) => {
        if (cloneObject instanceof Object) {
            if (cloneObject instanceof Array) {
                return [...cloneObject];
            } else {
                return {...cloneObject
                };
            }
        }
    }
    window.$$ = tool_func;
})();