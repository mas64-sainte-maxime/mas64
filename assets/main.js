(function(){var C=window.MAS64||{},b=document.querySelector(".nav-toggle"),n=document.getElementById("menu");
if(b)b.addEventListener("click",function(){var o=n.classList.toggle("open");b.setAttribute("aria-expanded",o)});
var f=document.getElementById("req");if(!f)return;var st=document.getElementById("status"),M=JSON.parse(f.dataset.m);
f.addEventListener("submit",function(e){e.preventDefault();if(!f.checkValidity()){f.reportValidity();return}
var d=new FormData(f),o={};d.forEach(function(v,k){o[k]=v});if(o.depart<=o.arrivee){st.textContent=M.dates;return}
if(C.formEndpoint){fetch(C.formEndpoint,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(o)}).then(function(r){if(!r.ok)throw 0;f.reset();st.textContent=M.sent}).catch(function(){st.textContent=M.err+C.email})}
else{var t=Object.keys(o).filter(function(k){return k!=="consentement"}).map(function(k){return k+": "+o[k]}).join("\n");location.href="mailto:"+C.email+"?subject="+encodeURIComponent(M.subj)+"&body="+encodeURIComponent(t);st.textContent=M.mail}})})();