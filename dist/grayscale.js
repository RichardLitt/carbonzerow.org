$(window).scroll(function(){$(".navbar").offset().top>50?$(".navbar-fixed-top").addClass("top-nav-collapse"):$(".navbar-fixed-top").removeClass("top-nav-collapse")}),$(function(){$(".page-scroll a").bind("click",function(e){var t=$(this);$("html, body").stop().animate({scrollTop:$(t.attr("href")).offset().top},1500,"easeInOutExpo"),e.preventDefault()})});var shareUrl="http://accessland.org";function getParameterByName(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&/#]*)").exec(location.search);return null==t?"":decodeURIComponent(t[1].replace(/\+/g," "))}$.ajax("https://d28jjwuneuxo3n.cloudfront.net/?networks=facebook,twitter,googleplus&url="+shareUrl,{success:function(e,t){$.each(e,function(e,t){var o=t;o/1e4>1&&(o=Math.ceil(o/1e3)+"k"),$('[data-network="'+e+'"]').attr("count",o)})},dataType:"jsonp",cache:!0,jsonpCallback:"myCallback"}),Object.keys||(Object.keys=function(e){if(e!==Object(e))throw new TypeError("Object.keys called on a non-object");var t,o=[];for(t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.push(t);return o}),$(".fblinkthis").click(function(){var e=$(this).attr("href");return window.open(e,"Share on Facebook","width=650,height=500"),!1}),$(".twlinkthis").click(function(){var e=$(this).attr("href");return window.open(e,"Twitter","width=550,height=420"),!1}),$(".gpluslinkthis").click(function(){var e=$(this).attr("href");return window.open(e,"Share on Google Plus","width=500,height=436"),!1});