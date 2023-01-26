/* global hexo */ //https://github.com/uiolee/hexo-absolute
'use strict';

hexo.config.hxtag = Object.assign({
  enable: true
}, hexo.config.hxtag);

const hxtag = hexo.config.hxtag;

const filter = require('./lib/filter');

if (hxtag.enable) {
  //hexo.extend.filter.register('before_post_render', filter,1);
  hexo.extend.filter.register('after_render:html', function (content, data) {
    if (data.path == 'index.html') {
      return content;
    }
    //<(h[1-6])([^>]*)>([\s\S]+?)<\/\1>
    for (var i = 5; i >= 1; i--) {
      var tag = "h" + (i+1);
      var re = new RegExp("<(h"+String(i)+")([^>]*)>([\\s\\S]+?)</\\1>","g");
      content = content.replace(re, "<"+tag+"$2>$3</"+tag+">");    
    }
    var re = new RegExp("<(h2)([^>]*)>([\\s\\S]+?)</\\1>");
    content = content.replace(re, "<h1$2>$3</h1>");    
    return content;
  },1);
}
