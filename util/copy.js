// jq的对象的浅拷贝和深拷贝
function copyObject (flag) {
    var target = arguments[0] || {},
    length = arguments.length,
    i = 1;
    for(; i<length;i++) {
        var options = arguments[i];
        for (name in options) {
            var copy = options[name],
            src = target[ name ]; 
            if (flag && typeof copy === 'object') {
                // 深拷贝
                copyObject(true, src, copy);
            } else {
                // 浅拷贝
            }
        }
    }
}