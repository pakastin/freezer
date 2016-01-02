function codeOutput () {
  var $container = document.getElementById('container');
  var html = "<!DOCTYPE html><html><head><style>body{font-size: 75%; font-family:'Source Sans Pro', sans-serif;} h1{font-weight:400;}</style><link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro' rel='stylesheet' type='text/css'></head><body><script>";

  for (var i = 0; i < arguments.length; i++) {
    html += document.getElementsByTagName('pre')[arguments[i]].firstChild.innerHTML;
  };

  var afterEl = document.getElementsByTagName('pre')[arguments[i - 1]].nextSibling;

  html += "<\/script><\/body><\/html>";

  var a = document.createElement('a');
  a.href = 'data:text/html;charset=utf-8,' + encodeURI(html);
  a.target = '_blank';
  a.textContent = 'Run result';
  container.insertBefore(a, afterEl.nextSibling);
}
