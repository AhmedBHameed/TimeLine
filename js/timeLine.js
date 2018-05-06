/*! WOW - v1.1.3 - 2016-05-06
* Copyright (c) 2016 Matthieu Aussaguel;*/(function(){var a,b,c,d,e,f=function(a,b){return function(){return a.apply(b,arguments)}},g=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in b)d=b[c],null==a[c]&&(a[c]=d);return a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a.prototype.createEvent=function(a,b,c,d){var e;return null==b&&(b=!1),null==c&&(c=!1),null==d&&(d=null),null!=document.createEvent?(e=document.createEvent("CustomEvent"),e.initCustomEvent(a,b,c,d)):null!=document.createEventObject?(e=document.createEventObject(),e.eventType=a):e.eventName=a,e},a.prototype.emitEvent=function(a,b){return null!=a.dispatchEvent?a.dispatchEvent(b):b in(null!=a)?a[b]():"on"+b in(null!=a)?a["on"+b]():void 0},a.prototype.addEvent=function(a,b,c){return null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c},a.prototype.removeEvent=function(a,b,c){return null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]},a.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function a(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return a.notSupported=!0,a.prototype.observe=function(){},a}()),d=this.getComputedStyle||function(a,b){return this.getPropertyValue=function(b){var c;return"float"===b&&(b="styleFloat"),e.test(b)&&b.replace(e,function(a,b){return b.toUpperCase()}),(null!=(c=a.currentStyle)?c[b]:void 0)||null},this},e=/(\-([a-z]){1})/g,this.WOW=function(){function e(a){null==a&&(a={}),this.scrollCallback=f(this.scrollCallback,this),this.scrollHandler=f(this.scrollHandler,this),this.resetAnimation=f(this.resetAnimation,this),this.start=f(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),null!=a.scrollContainer&&(this.config.scrollContainer=document.querySelector(a.scrollContainer)),this.animationNameCache=new c,this.wowEvent=this.util().createEvent(this.config.boxClass)}return e.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},e.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},e.prototype.start=function(){var b,c,d,e;if(this.stopped=!1,this.boxes=function(){var a,c,d,e;for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.all=function(){var a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(e=this.boxes,c=0,d=e.length;d>c;c++)b=e[c],this.applyStyle(b,!0);return this.disabled()||(this.util().addEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new a(function(a){return function(b){var c,d,e,f,g;for(g=[],c=0,d=b.length;d>c;c++)f=b[c],g.push(function(){var a,b,c,d;for(c=f.addedNodes||[],d=[],a=0,b=c.length;b>a;a++)e=c[a],d.push(this.doSync(e));return d}.call(a));return g}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},e.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},e.prototype.sync=function(b){return a.notSupported?this.doSync(this.element):void 0},e.prototype.doSync=function(a){var b,c,d,e,f;if(null==a&&(a=this.element),1===a.nodeType){for(a=a.parentNode||a,e=a.querySelectorAll("."+this.config.boxClass),f=[],c=0,d=e.length;d>c;c++)b=e[c],g.call(this.all,b)<0?(this.boxes.push(b),this.all.push(b),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(b,!0),f.push(this.scrolled=!0)):f.push(void 0);return f}},e.prototype.show=function(a){return this.applyStyle(a),a.className=a.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(a),this.util().emitEvent(a,this.wowEvent),this.util().addEvent(a,"animationend",this.resetAnimation),this.util().addEvent(a,"oanimationend",this.resetAnimation),this.util().addEvent(a,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(a,"MSAnimationEnd",this.resetAnimation),a},e.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},e.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),e.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.style.visibility="visible");return e},e.prototype.resetAnimation=function(a){var b;return a.type.toLowerCase().indexOf("animationend")>=0?(b=a.target||a.srcElement,b.className=b.className.replace(this.config.animateClass,"").trim()):void 0},e.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},e.prototype.vendors=["moz","webkit"],e.prototype.vendorSet=function(a,b){var c,d,e,f;d=[];for(c in b)e=b[c],a[""+c]=e,d.push(function(){var b,d,g,h;for(g=this.vendors,h=[],b=0,d=g.length;d>b;b++)f=g[b],h.push(a[""+f+c.charAt(0).toUpperCase()+c.substr(1)]=e);return h}.call(this));return d},e.prototype.vendorCSS=function(a,b){var c,e,f,g,h,i;for(h=d(a),g=h.getPropertyCSSValue(b),f=this.vendors,c=0,e=f.length;e>c;c++)i=f[c],g=g||h.getPropertyCSSValue("-"+i+"-"+b);return g},e.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=d(a).getPropertyValue("animation-name")}return"none"===b?"":b},e.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},e.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},e.prototype.scrollHandler=function(){return this.scrolled=!0},e.prototype.scrollCallback=function(){var a;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},e.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},e.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,e=f+Math.min(this.element.clientHeight,this.util().innerHeight())-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},e.prototype.util=function(){return null!=this._util?this._util:this._util=new b},e.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},e}()}).call(this);

/*! timeLine - v1.2 - 2016-09-16
* Copyright (c) 2016 Ahmed Hameed;*/

/*! timeLine - v1.1 - 2016-09-16 with some bugs fix
* Copyright (c) 2016 Ahmed Hameed;*/

/*! timeLine - v1.2 - 2016-09-16 we can add video items
* Copyright (c) 2016 Ahmed Hameed;*/

/*! timeLine - v1.4 - 2016-09-16 Bugs solved
* Copyright (c) 2016 Ahmed Hameed;*/
(function($) {

        $.fn.timeLine = function(prop)
        {
            'use strict';
            var settings = $.extend({
                                        myTimeLine: this,
                                        mainColor: '',    //Main color of timeLine
                                        opacity: '0.5',
                                        offset: '400',
                                        itemAnimateDuration: 2,
                                        lineColor: '#DDDDDD',
                                        LeftAnimation: 'rotateInUpRight',                                        
                                        RightAnimation: 'rotateInUpLeft',                                       
                                    }, prop);


            $(document).ready(function()
            {
                'use strict';
                var PositionBottom = 80,
                    item = settings.myTimeLine.find('.item'),
                    title = item.find('.title'),
                    video = item.find('video'),
                    text = item.find('.textContent'),
                    itemDuration,
                    i,
                    showMSG = true;

                function rgb2hex(rgb)
                {
                    'use strict';
                     rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
                     return (rgb && rgb.length === 4) ? "#" +
                      ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
                      ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
                      ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
                }
                function colorCheck(value)
                {
                    'use strict';
                    var check = /^#[0-9A-Fa-f]{3,6}$/i.test(value);
                    if(!check && showMSG)
                        {
                            console.log('%cWarning!!! Unkown or undefined color format, please set your color format like this example #FFFFFF or #FFF. default color will be set', 'font-size: 21px; color: red');
                            showMSG = false;
                            return [check, '#DDD'];
                        }else
                        {
                            return [check, value];
                        }

                }
                function hexToRgbaColor(color)
                {
                    'use strict';
                    console.log(color);
                    var isColor = colorCheck(color)[0],
                        defaultColor = '#b50000',
                        neigborDefaultColor = '#5E0000';
                    if(isColor)
                    {
                        var newColor = color;
                        if(color && color.length == 4)
                        {
                            newColor = color.replace(/[0-9A-F]{1}/ig, '$&$&');
                        }
                        var s = newColor,
                        patt = /^#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/,
                        matches = patt.exec(s),
                        rgba = "rgba("+parseInt(matches[1], 16)+","+parseInt(matches[2], 16)+","+parseInt(matches[3], 16)+","+settings.opacity+")",
                        neigborRGBA = "rgba("+(((parseInt(matches[1], 16))-94) <= 0 ? 0 : ((parseInt(matches[1], 16))-94)) +","+parseInt(matches[2], 16)+","+parseInt(matches[3], 16)+")";
                        return [rgba, rgb2hex(neigborRGBA)];
                    }else
                    {
                        return [defaultColor, neigborDefaultColor];
                    }
                }
                function titleAnimate(iteration)
                {
                    'use strict';
                    title.eq(iteration).animate({bottom: '10px' ,opacity: 1}, 2000);
                }
                function playVideo()
                {
                    video.after('<div class="controll"><i style="font-size: 250px" class="fa fa-play-circle" aria-hidden="true"></i></div>');
                    var controll = item.find('.controll');
                    controll.click(function(e)
                    {
                        $(this).stop(true, true);
                        $(this).fadeOut(200);
                        $(this).parents('.image').find('video').get(0).play();
                        e.stopPropagation();
                    });
                    controll.parents('.image').find('video').on( 'ended', function()
                            {
                                    console.log('click');
                                    $(this).next().fadeIn(200);
                                    $(this).next().children().fadeIn(200);
                                    $(this).get(0).load();
                            });
                    video.click(function(e)
                    {
                        $(this).stop(false, true);
                        if(!$(this).get(0).paused)
                        {
                            $(this).get(0).pause();
                            $(this).parent().find('.controll').fadeIn(200);
                            $(this).parent().find('.controll i').fadeIn(200);
                        }
                        e.stopPropagation();
                    });
                }
                function init()
                {
                    'use strict';
                    var color = hexToRgbaColor(settings.mainColor)[0], colorNeigbor = hexToRgbaColor(settings.mainColor)[1];
                        settings.myTimeLine.find('.item:even').addClass('wow '+settings.LeftAnimation).attr('data-wow-offset', settings.offset).attr('data-wow-duration', settings.itemAnimateDuration + 's');
                        settings.myTimeLine.find('.item:odd').addClass('wow pull-right '+settings.RightAnimation).attr('data-wow-duration', settings.itemAnimateDuration + 's');
                    settings.myTimeLine.find('.pull-right').attr('data-wow-delay', '0.5s');
                    item.find('.title').css({backgroundColor: color});
                    item.find('.star').css({backgroundColor: color});
                    title.css({bottom: PositionBottom + 'px', opacity: 0, cursor: 'pointer'});
                    title.click(function(e)
                    {
                        $(e.target).closest('.caption').find('.textContent').stop(true, false);
                        if(!$(e.target).closest('.caption').find('.textContent').hasClass('in'))
                        {
                            $(e.target).closest('.caption').find('.textContent').slideDown(400).addClass('in');
                            $(e.target).closest('.caption').find('.title i').css({transform: 'rotate(90deg)', transition: 'transform 0.4s ease-out'});
                        }else
                        {
                            $(e.target).closest('.caption').find('.textContent').slideUp(400).removeClass('in');
                            $(e.target).closest('.caption').find('.title i').css({transform: 'rotate(0deg)'});
                        }
                        // console.log($(':animated'));
                    });
                    text.find('p').css({borderLeft: '5px solid '+color});
                    text.hide();
                    $('head').append('<style>.timeLine .row .item .caption .image .title:before{border-top: 10px solid '
                        +colorNeigbor+
                        '}.timeLine .row .item .caption .star:before{border-right: 10px solid '+colorNeigbor+'}.timeLine .row .pull-right:before,.timeLine .row .item:before{border: 3px solid '
                        +color+
                        '}.timeLine .row .lineHeader:after{background-color: '
                        +colorCheck(settings.lineColor)[1]+
                        '}.timeLine .row .lineHeader:before,.timeLine .row .lineFooter:before{color: '+colorCheck(settings.lineColor)[1]+'}</style>');
                    new WOW().init();
                }
                function apply()
                {
                    'use strict';
                    itemDuration = (settings.itemAnimateDuration - (settings.itemAnimateDuration * 0.75)) * 1000;
                        $(window).scroll(function()
                        {
                            for(i=0; i< title.length; i++)
                            {
                                if(item.eq(i).css('visibility') == 'visible' && !item.eq(i).hasClass('done'))
                                {
                                    item.eq(i).addClass('done')
                                    window.setTimeout(titleAnimate, itemDuration, i);
                                }
                            }
                        });
                        for(i=0; i< title.length; i++)
                        {
                            if(item.eq(i).css('visibility') == 'visible' && !item.eq(i).hasClass('done'))
                            {
                                item.eq(i).addClass('done')
                                window.setTimeout(titleAnimate, itemDuration, i);
                            }
                        }
                        playVideo();
                }
                
                init();
                window.setTimeout(apply, 1000);
            });
        }
})(jQuery) 