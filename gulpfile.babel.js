import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import webpack from 'webpack';
import webpackConfig from './webpack.config';
import del from 'del';

const plugins = gulpLoadPlugins();
const dest = 'build';

gulp.task('clean', () => {
  del([`${dest}/**/*`]);
});

gulp.task('server', (callback) => {
  webpack(webpackConfig, (err, stats) => {
    if(err) throw new plugins.util.PluginError('webpack', err);
    plugins.util.log('[server]', stats.toString());
    callback();
  });
});

gulp.task('build', ['clean', 'server']);
