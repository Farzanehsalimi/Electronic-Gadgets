let lang;
$(document).ready(function() {
  // get lang from locale or default lang is Farsi
  lang = localStorage.getItem('lang') || 'fa';
  if(lang == 'fa')
     changeCSS('./rtlcss.css') 
  else
     changeCSS('./ltrcss.css') 
  $(".lang").each(function(index, element) {
    $(this).text(arrLang[lang][$(this).attr("key")]);
  });
});

// get/set the selected lang
$(".translate").click(function() {
  lang = $(this).attr("id");
  localStorage.setItem('lang', $(this).attr('id'));
  $(".lang").each(function(index, element) {
    $(this).text(arrLang[lang][$(this).attr("key")]);
  });
  if(lang == 'fa')
   changeCSS('./rtlcss.css') 
  else
   changeCSS('./ltrcss.css') 
});

// set Toggler for change lang
$("#show-lang").click(function() {
    $(".translate").toggle(300);
});

// just for change css file 
function changeCSS(cssFile) {
    let oldlink = document.getElementById("stylesheets");
    let link = oldlink.href.split('/')
    
    if(cssFile.split('/')[1] == link[link.length - 1])
        return false
    
    let newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);
    newlink.setAttribute("id", "stylesheets");

    document.getElementsByTagName("head")[0].replaceChild(newlink, oldlink);
}

