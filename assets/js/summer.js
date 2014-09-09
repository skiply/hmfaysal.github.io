'use strict';

var summer = (function ($) {

    var indexPostClass = '.summer-index-post',
        mobileMenuButton = '.summer-mobile-menu a',
        mobileMenuCloseButton = '.summer-mobile-close-btn',
        mainMenu = '.summer-menu',
        bgCheckClass = '.bg-check',
        postBgImages = '.bg-img img',
        postCoverImg = '.summer-post-header .bg-img',
        tagsDiv = '.tags-loop',
        allAnimationTypes = ['simple', 'sliced', 'push'],

    // post animations on homepage 
    indexPostAnimate = function () {
        if ($('.animated-post').length && $('.post-loop-animations').length) {
            $(indexPostClass).each(function () {
            var postPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop(),
                windowHeight = $(window).height();
                if (postPos < topOfWindow + (windowHeight/ 1.4)) {
                    $(this).addClass('fadeInDown');
                }
            });
        }
    },

    mobileMenu = function () {
        if($(mainMenu).length) {
            $(mobileMenuButton).on('click', function(e){
                e.preventDefault();
                $(mainMenu).addClass('opened');
            });
            $(mobileMenuCloseButton).on('click', function(e){
                e.preventDefault();
                $(mainMenu).removeClass('opened');
            });
        }
    },

    headerTitlesBackgroundCheck = function () {
        if ($(bgCheckClass).length && $(postBgImages).length) {
            BackgroundCheck.init({
                targets: bgCheckClass,
                images: postBgImages
            });
        }
    },

    postHeaderCoverImg = function () {
        var coverImage = $('.summer-post-content [alt=cover-image]');
        if (coverImage.length) {
            $(postCoverImg).append('<img src="' + coverImage.attr('src') + '">');
            coverImage.remove();
            $('.post-template .intro-effect-fadeout').find('.summer-post-menu-header').addClass('transparent');
        }
    },

    // for now only this nasty hacks can do this
    // hiding animation types tags used to switching posts covers
    removeSimpleTagHelper = function () {
        if ($(tagsDiv).length) {
            $(tagsDiv).each(function () {
                var tagLink = $(this).find('.tag-link > a'),
                    tagPrefix = $(this).find('.tag-prefix');
                tagLink.each(function () {
                    if (allAnimationTypes.indexOf($(this).text()) !== -1) {
                        $(this).closest('.tag-link').remove();
                    }
                });
                if(tagPrefix.next().length === 0) {
                    tagPrefix.remove();
                };
            });
        }
    },

    // summer javascripts initialization
    init = function () {
        indexPostAnimate();
        $(window).on('scroll', function() {
            indexPostAnimate();
        });
        postHeaderCoverImg();
        mobileMenu();
        headerTitlesBackgroundCheck();
        $('p:has(> img)').addClass('with-image');
        removeSimpleTagHelper();
        $(document).foundation();
    };

    return {
        init: init
    };

})(jQuery);

(function () {
    summer.init();
})();
