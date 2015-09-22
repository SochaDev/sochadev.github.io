!function(t){"use strict";String.prototype.hashCode=function(){var t=0;if(0==this.length)return t;for(var e=0;e<this.length;e++){var i=this.charCodeAt(e);t=(t<<5)-t+i,t&=t}return t};var e={attach:function(e,i){this.header=t("header",e),this.headerScrollOffset=this.header.height()+2*i.theme.margin,this.scrollStickyStuff(e,i),this.contactForm(e,i),this.toolTips(e,i),this.projectList(e,i)},scrollMain:function(e,i){t("html, body").animate({scrollTop:i.theme.top},2*i.theme.animation.speed)},scrollStickyStuff:function(i,n){t(window).scroll(function(){var i=t(window).scrollTop();i>e.header.outerHeight()?e.header.fadeIn(n.theme.animation.speed):e.header.is(":visible")&&e.header.fadeOut(n.theme.animation.speed)}),t("a.top",e.header).click(function(a){a.preventDefault(),n.theme.top=0,t("#modal, fieldset.contact, .messages, .tooltip .tip",i).fadeOut(n.theme.animation.speed),e.scrollMain(i,n)}),"/"==n.page.url&&t("p a[href*=#]",i).click(function(a){a.preventDefault(),n.theme.top=t(this.hash).offset().top-e.headerScrollOffset+1,e.scrollMain(i,n)})},toolTips:function(e,i){t(".tooltip",e).click(function(n){n.preventDefault();var a=t(this),r=a.attr("data-tip");if(r){var o=t(".tip",a);o.length||(o=t(document.createElement("div")).addClass("tip").html(r.replace(/\\n/g,"<br>")).hide(),a.append(o));var s=t(window).width()-a.offset().left,h=o.outerWidth()/2;s-o.outerWidth()>=o.outerWidth()?h=-o.outerWidth():s-o.outerWidth()<=0&&(h=Math.abs(s-o.outerWidth())+i.theme.margin),o.outerWidth()>=s&&o.css({marginLeft:-h+"px"}),t(".tip",e).not(o).hide(),o.toggle()}})},contactForm:function(i,n){var a=t("fieldset.contact",i);if(a.length){var r=t("a.form-toggler",i);r.click(function(e){e.preventDefault(),a.is(":visible")?a.slideUp(n.theme.animation.speed):(t(".messages",a).hide(),a.slideDown(n.theme.animation.speed))}),"#contact"===document.location.hash&&(a.hide(),r.first().click());var o=function(){function t(t,e){return Math.floor(Math.random()*(e-t+1))+t}a.find('input[type="text"], input[type="password"], input[type="file"], input[type="hidden"], input[type="email"], input[type="tel"], select, textarea').val("").find('input[type="radio"], input[type="checkbox"]').removeAttr("checked").removeAttr("selected");var e=t(0,10),i=t(0,10),n=parseInt(e+i).toString().hashCode(),r=a.find("input#human"),o=r.parent(".form-item");r.attr("placeholder","* Human check! What is "+e+" + "+i+"?"),o.find("input#human-valid").val(n),o.find("input#human-valid-input1").val(e),o.find("input#human-valid-input2").val(i)};o();var s=function(t,r){for(var s=a.find(".messages").removeClass("error success").hide(),h="<ul>",l=0;l<r.length;l++)r[l].length>0&&(h+="<li>"+r[l]+"</li>");h+="</li>",s.html(h).addClass(t?"success":"error").fadeIn(),n.theme.top=s.offset().top-e.headerScrollOffset,e.scrollMain(i,n),o()},h=function(e,i){var n=new Array;a.find("input#human");if(t.each(t(".required",a),function(e,i){var a=t(i);a.val()||n.push(a.attr("data-msg"))}),1===i){var r=parseInt(e.human_valid_input1),o=parseInt(e.human_valid_input2),h=parseInt(r+o).toString(),l=h.hashCode().toString();(h!==e.human||l!==e.human_valid)&&n.push("Sorry"+(e.name.length?" "+e.name:"")+", you don't seem to have a human thing to discuss with us.")}return n.length&&s(!1,n),0===n.length};a.submit(function(e){e.preventDefault();var i=a.serializeArray().reduce(function(t,e){return t[e.name]=e.value.trim(),t},{}),r=h(i,0);return r&&(r=h(i,1)),r?void t.post(n.api.baseUri+"/contact",JSON.stringify(i),function(t){s(!0,t.messages)},"json").fail(function(){s(!1,["Error occurred sending data to <i>"+n.api.baseUri+"</i>."])}):!1})}},projectList:function(i,n){var a=t("#modal",i);t("ul.projects a",i).click(function(r){r.preventDefault();var o=t(this),s=n.projects[o.attr("data-project")],h=a.children(".modal");h.find(".name").text(s.name).attr("href",s.url).show(),h.find(".client").text(s.client).attr("href",s.clientUrl).show(),h.find(".partner").toggle(s.client!==s.name),h.find(".description").html(s.description.replace(/\\n\\n/g,"</p><p>")),h.removeClass("white-label"),s.image?h.find("img").attr("src",0!==s.image.indexOf("http")?n.theme.images+"/projects/"+s.image+".jpg":s.image).attr("alt",s.name):h.find("img").attr("src",""),s.whiteLabel?(h.find(".name, .client").hide(),h.find(".name-anon").text(s.name).show(),h.find(".client-anon").text(s.client).show(),h.addClass("white-label")):h.find(".name-anon, .client-anon").text("").hide(),t(window).width()>n.theme.breakpoints.md&&h.height(h.hasClass("white-label")?"auto":a.parents(".stripe").height()-6*n.theme.margin),a.fadeIn(n.theme.animation.speed),n.theme.top=a.offset().top-e.headerScrollOffset,e.scrollMain(i,n)}),a.click(function(t){a.fadeOut(n.theme.animation.speed)})}},i=t("body");e.attach(i,settings)}(jQuery);