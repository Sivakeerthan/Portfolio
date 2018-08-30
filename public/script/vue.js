
//Navbar
var pages= ["Home","About","Files"];
    var navHtml = `<div class="nav-content">
                     <ul class="tabs tabs-transparent">`;
    for(var i=0;i<pages.length;i++){
        navHtml += `<li class="tab nav-section"><a id="${pages[i].toLowerCase()}" href="#${pages[i]}">${pages[i]}</a></li>`;
    }
    navHtml+=`    </ul>
          </div>`;
    Vue.component('pages',{
        template: navHtml
    });
    new Vue({
        el:'#navbar',
        methods: {
            openHome: function () {
                console.log('Home')
            },
            openAbout: function () {
                console.log('About')
            },
            openLogin() {
                window.open('../login.php');
            }
        }
    });
//Content
    //Home
    //import Home from '../templates/home';
   var pagecontent = Vue.component('template');
    let vm1 = new Vue({
        el:'.container',
        component: Vue.component('template')

    });



$("#c1").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
    let m1 = new Vue({
        el:'#c1',
        data:{
            Titel: "LoremIpsum",
            Text: "gjbsdkjgbskjdngsldjgnjsngjsngsdngjksdgnds"
        }
    })
});