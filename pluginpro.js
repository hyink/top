function rmurl(e,t){var r=new RegExp(/\?m=0|&m=0|\?m=1|&m=1/g);return r.test(e)&&(e=e.replace(r,""),t&&window.history.replaceState({},document.title,e)),e}const currentUrl=rmurl(location.toString(),!0);


(function() {
  var s = document.createElement('script');
  s.src = 'https://acscdn.com/script/aclib.js';
  s.type = 'text/javascript';
  s.id = 'aclib';
  s.async = true;
  s.defer = true;

  s.onload = function() {
    if (typeof aclib !== 'undefined' && typeof aclib.runAutoTag === 'function') {
      aclib.runAutoTag({
        zoneId: 'cadui3puqk',
      });
    }
  };

  var x = document.getElementsByTagName('script')[0];
  x.parentNode.insertBefore(s, x);
})();
