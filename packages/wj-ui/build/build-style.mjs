import gulp from 'gulp';
import cleanCSS from 'gulp-clean-css';
import less from 'gulp-less';
import autoprefixer from 'gulp-autoprefixer';
import logger from 'gulplog';

// 编译less
gulp.task('css', function (done) {
    gulp.src('../src/styles/{index,admin,answer}.less')
        .pipe(less())
        .on('error', function(err) {
            logger.error(err);
            this.emit('end');
        })
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(gulp.dest('../dist/styles'));
    done();
});

// 拷贝字体文件
gulp.task('fonts', function () {
    gulp.src('../src/styles/common/iconfont/fonts/*.*').pipe(
        gulp.dest('../dist/styles/fonts')
    );
});

gulp.task('default', gulp.series('css', 'fonts'));
