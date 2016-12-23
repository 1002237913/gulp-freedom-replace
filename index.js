const through = require('through-gulp');
const colors = require('colors');
const fs = require('fs');

/**
 * @param {Function} replaceMent - 替换函数参数为字符串
 * @param {String} encoding - 编码，默认UTF-8
 */
function FreedomReplace(replaceMent, encoding = 'UTF-8') {
    let filename = '';
    //通过through创建流stream
    var stream = through(function(file, encoding, callback) {

        //进程文件判断
        if (file.isNull()) {

        }
        if (file.isBuffer()) {
            var contentStr = file.contents.toString(encoding);
            callback && (file.contents = new Buffer(callback(contentStr)), encoding);
        }
        if (file.isStream()) {
            var contentStr = fs.readFileSync(file.path).toString(encoding);
            callback && (file.contents = new Buffer(callback(contentStr), encoding));
        }
        this.push(file);
        callback();
        filename = file.name;
    }, function(callback) {
        console.log(`${filename}处理完毕`.green);
        callback();
    });

    return stream;
};

module.exports = FreedomReplace;