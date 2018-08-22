var pages= ["Home","About","Login"];
var navHtml = `<div class="nav-content">
                     <ul class="tabs tabs-transparent">`;
for(var i=0;i<pages.length;i++){
    navHtml += `<li class="tab"><a href="${pages[i]}.html">${pages[i]}</a></li>`;
}
navHtml+=`    </ul>
          </div>`;
Vue.component('pages',{
    template: navHtml
});
new Vue({
    el:'#navbar'
});