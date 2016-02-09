!function(t){"use strict";String.prototype.hashCode=function(){var t=0;if(0==this.length)return t;for(var e=0;e<this.length;e++){var i=this.charCodeAt(e);t=(t<<5)-t+i,t&=t}return t};var e={attach:function(e,i){this.header=t("header",e),this.headerScrollOffset=this.header.height()+2*i.theme.margin,this.scrollStickyStuff(e,i),this.contactForm(e,i),this.toolTips(e,i),this.projectList(e,i),this.comicPanels(e,i)},scrollMain:function(e,i){t("html, body").animate({scrollTop:i.theme.top},2*i.theme.animation.speed)},scrollStickyStuff:function(i,a){if("/"==a.page.url&&(t("p a[href*=#]",i).click(function(n){n.preventDefault(),a.theme.top=t(this.hash).offset().top-e.headerScrollOffset+1,e.scrollMain(i,a),document.location.hash=this.hash}),document.location.hash)){var n=t("p a[href="+document.location.hash+"]",i);n.length&&n.click()}t(window).scroll(function(){var i=t(window).scrollTop();i>e.header.outerHeight()?e.header.fadeIn(a.theme.animation.speed):1==e.header.css("opacity")&&e.header.fadeOut(a.theme.animation.speed)}),t("a.top",e.header).click(function(n){n.preventDefault(),a.theme.top=0,t("#modal, fieldset.contact, .messages, .tooltip .tip",i).fadeOut(a.theme.animation.speed),e.scrollMain(i,a)})},scrollFadeChildren:function(e,i){var a=t(window);if(!(a.width()<i.theme.breakpoints.md)){var n=function(){e.each(function(e,n){var o=t(n),r=o.offset().top+o.outerHeight()/3,s=a.scrollTop()+a.innerHeight();s>r?0==o.css("opacity")&&o.fadeTo(3*i.theme.animation.speed,1):1==o.css("opacity")&&o.fadeTo(i.theme.animation.speed,0)})};n(),a.scroll(function(){n()})}},toolTips:function(e,i){t(".tooltip",e).click(function(a){a.preventDefault();var n=t(this),o=n.attr("data-tip");if(o){var r=t(".tip",n);r.length||(r=t(document.createElement("div")).addClass("tip").html(o.replace(/\\n/g,"<br>")).hide(),n.append(r));var s=t(window).width()-n.offset().left,h=r.outerWidth()/2;s-r.outerWidth()>=r.outerWidth()?h=-r.outerWidth():s-r.outerWidth()<=0&&(h=Math.abs(s-r.outerWidth())+i.theme.margin),r.outerWidth()>=s&&r.css({marginLeft:-h+"px"}),t(".tip",e).not(r).hide(),r.toggle()}})},contactForm:function(i,a){var n=t("fieldset.contact",i);if(n.length){var o=t("a.form-toggler",i);o.click(function(e){e.preventDefault(),n.is(":visible")?n.slideUp(a.theme.animation.speed):(t(".messages",n).hide(),n.slideDown(a.theme.animation.speed))}),"#contact"===document.location.hash&&(n.hide(),o.first().click());var r=function(){function t(t,e){return Math.floor(Math.random()*(e-t+1))+t}n.find('input[type="text"], input[type="password"], input[type="file"], input[type="hidden"], input[type="email"], input[type="tel"], select, textarea').val("").find('input[type="radio"], input[type="checkbox"]').removeAttr("checked").removeAttr("selected");var e=t(0,10),i=t(0,10),a=parseInt(e+i).toString().hashCode(),o=n.find("input#human"),r=o.parent(".form-item");o.attr("placeholder","* Human check! What is "+e+" + "+i+"?"),r.find("input#human-valid").val(a),r.find("input#human-valid-input1").val(e),r.find("input#human-valid-input2").val(i)};r();var s=function(t,o){for(var s=n.find(".messages").removeClass("error success").hide(),h="<ul>",c=0;c<o.length;c++)o[c].length>0&&(h+="<li>"+o[c]+"</li>");h+="</li>",s.html(h).addClass(t?"success":"error").fadeIn(),a.theme.top=s.offset().top-e.headerScrollOffset,e.scrollMain(i,a),t&&r()},h=function(e,i){var a=new Array;n.find("input#human");if(t.each(t(".required",n),function(e,i){var n=t(i);n.val()||a.push(n.attr("data-msg"))}),1===i){var o=parseInt(e.human_valid_input1),r=parseInt(e.human_valid_input2),h=parseInt(o+r).toString(),c=h.hashCode().toString();(h!==e.human||c!==e.human_valid)&&a.push("Sorry"+(e.name.length?" "+e.name:"")+", you don't seem to have a human thing to discuss with us.")}return a.length&&s(!1,a),0===a.length};n.submit(function(e){e.preventDefault();var i=n.serializeArray().reduce(function(t,e){return t[e.name]=e.value.trim(),t},{}),o=h(i,0);return o&&(o=h(i,1)),o?void t.ajax(a.api.baseUri+"/contact",{method:"POST",contentType:"application/json",data:JSON.stringify(i),success:function(t){t=JSON.parse(t),s(!0,t.messages)},error:function(t){t=JSON.parse(t),s(!1,["Error occurred sending data to <i>"+a.api.baseUri+"</i>."])}}):!1})}},projectList:function(i,a){var n=t("#modal",i);if(t("ul.projects a",i).click(function(o){o.preventDefault();var r=t(this),s=a.projects[r.attr("data-project")],h=n.children(".modal");document.location.hash=this.hash,s.whiteLabel?document.title=a.page.title:document.title=s.name+" | "+a.site.title,h.find(".name").text(s.name).attr("href",s.url).show(),h.find(".name").parents("h3").attr("id","project-"+r.attr("data-project")),h.find(".client").text(s.client).attr("href",s.clientUrl).show(),h.find(".partner").toggle(s.client!==s.name),h.find(".description").html(s.description.replace(/\\n\\n/g,"</p><p>")),h.removeClass("white-label"),s.image?h.find("img").attr("src",0!==s.image.indexOf("http")?a.theme.images+"/projects/"+s.image:s.image).attr("alt",s.name):h.find("img").attr("src",""),s.image2x?h.find("img").attr("srcset",0!==s.image2x.indexOf("http")?a.theme.images+"/projects/"+s.image2x+" 2x":s.image2x+" 2x"):h.find("img").attr("srcset",""),s.whiteLabel?(h.find(".name, .client").hide(),h.find(".name-anon").text(s.name).show(),h.find(".client-anon").text(s.client).show(),h.find(".white-label-flag").show()):(h.find(".name-anon, .client-anon").text("").hide(),h.find(".white-label-flag").hide()),t(window).width()>a.theme.breakpoints.md&&h.height(h.hasClass("white-label")?"auto":n.parents(".stripe").height()-6*a.theme.margin),n.fadeIn(a.theme.animation.speed),a.theme.top=n.offset().top-e.headerScrollOffset,e.scrollMain(i,a)}),n.click(function(t){document.location.hash="projects",document.title=a.page.title,n.fadeOut(a.theme.animation.speed)}),document.location.hash){var o=t("ul.projects a[href="+document.location.hash+"]",i);o.length&&o.click()}},comicPanels:function(i,a){var n=t("ol.comic > li",i);n.length&&(n.each(function(e,i){var a=t(i),n=document.createElement("span");n.innerHTML=e+1,n.className="index",a.append(n)}),e.scrollFadeChildren(n,a))}},i=t("body");e.attach(i,settings)}(jQuery);