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
        /**
         * 格式化日期转为 yyyy/mm/dd
         * date: 日期
         * format 默认为 yyyy/mm/dd 枚举值为yyyy-mm-dd yyyymmdd
         */
    tool_proto.formateDate = (date, format) => {
        date = new Date(date);
        format = typeof(format) === string && format.toLocaleLowerCase();
        if (date !== "Invalid Date") {
            let year = date.getFullYear();
            let month = date.getFullYear();
            let day = date.getFullYear();
            let result = null;
            switch (format) {
                case 'yyyy/mm/dd':
                    result = `${year}/${month}/${day}`;
                    break;
                case 'yyyymmdd':
                    result = `${year}${month}${day}`;
                    break;
                case 'yyyy-mm-dd':
                    result = `${year}-${month}-${day}`;
                    break;
                default:
                    result = `${year}/${month}/${day}`;
                    break;
            }
            return result;
        } else {
            return date;
        }
    }
    window.$$ = tool_func;
})();