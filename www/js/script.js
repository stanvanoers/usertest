var UserTest,bind=function(t,e){return function(){return t.apply(e,arguments)}};UserTest=function(){function t(t,e,i,n){this.container=t;this.previous=e;this.next=i;this.$slideElement=n;this.customListener=bind(this.customListener,this);this.animateSlide=bind(this.animateSlide,this);this.previousSlide=bind(this.previousSlide,this);this.nextSlide=bind(this.nextSlide,this);this.customFunction=[];this.$container=document.querySelector("["+this.container+"]");this.$previous=this.$container.querySelector("["+this.previous+"]");this.$next=this.$container.querySelector("["+this.next+"]");this.slides=this.$container.querySelectorAll("["+this.$slideElement+"]");this.currentpage=this.$container.querySelectorAll("[current-page]");this.lastpage=this.$container.querySelectorAll("[last-page]");this.animateSlide(1)}t.prototype.nextSlide=function(t){return this.$next.addEventListener("click",function(){return t()})};t.prototype.previousSlide=function(t){return this.$previous.addEventListener("click",function(){return t()})};t.prototype.animateSlide=function(t){var e,i,n,s,r;s=this.slides;for(i=e=0,n=s.length;e<n;i=++e){r=s[i];this.removeClass("active",r);this.removeClass("before",r);this.removeClass("after",r);if(i+1<t){this.addClass("before",r)}if(i+1>t){this.addClass("after",r)}}this.addClass("active",this.slides[t-1]);this.currentpage[0].innerHTML=" 0"+t+" ";if(this.customFunction[t]!=null){return this.customFunction[t]()}};t.prototype.customListener=function(t,e){return this.customFunction[t]=e()};t.prototype.addClass=function(t,e){var i;i=e.className;if(i.indexOf(t)!==-1){return}if(i!==""){t=" "+t}return e.className=i+t};t.prototype.removeClass=function(t,e){var i,n;i=e.className;n=new RegExp("\\s?\\b"+t+"\\b","g");i=i.replace(n,"");return e.className=i};return t}();document.addEventListener("DOMContentLoaded",function(){var t,e,i;i=new UserTest("container","previous","next","slide");i.customFunction[0]=function(){return console.log("page 1")};i.customFunction[2]=function(){return console.log("page 2")};t=i.slides.length;e=1;i.lastpage[0].innerHTML=" 0"+t;i.previousSlide(function(){if(e>1){e-=1}return i.animateSlide(e)});return i.nextSlide(function(){if(e<t){e+=1}return i.animateSlide(e)})});