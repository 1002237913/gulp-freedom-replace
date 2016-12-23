# gulp-freedom-replace
gulp内容替换插件

使用方法
``` 
    var freedomReplace = require('gulp-freedom-replace');
    gulp.src('...')
    .pipe(freedomReplace(contents=>{
        return contents.replace(/\d/,'a');
    })
    .dest('...');
```