(function(){var h=document.documentElement,s=null;try{s=localStorage.getItem('pawlish.l')}catch(e){}
var l=s||((navigator.language||'en').toLowerCase().indexOf('tr')===0?'tr':'en');
function set(x){h.setAttribute('data-l',x);h.lang=x;document.querySelectorAll('.lang button').forEach(function(b){b.classList.toggle('on',b.dataset.l===x)});try{localStorage.setItem('pawlish.l',x)}catch(e){}}
set(l);document.addEventListener('click',function(e){var b=e.target.closest('.lang button');if(b)set(b.dataset.l)});})();
