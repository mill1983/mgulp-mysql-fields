var tpl=require("mill-gulp-utils").tpl;
module.exports=tpl({
  PLUGIN_NAME:'mgulp-mysql-fields',
  argsTrue:function (arguments) {
    return arguments.length>=1;
  },
  doPlagin:function  (gutil,file,enc,content) {
    gutil.log(content);
    return content;
  }
});

