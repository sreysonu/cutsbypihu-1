
var isInIFrame = (window.self !== window.top) ? true : false;

if (!isInIFrame) {
    var jsData = ["showcase-cta", "https:\/\/websitedemos.net\/video-editor-04\/wp-content\/plugins\/astra-sites-server\/admin\/showcase-cta\/switcher\/dist\/style-main.css?ver=308d53dc52d1fcf8ca1e"];
    var style = document.createElement('link');
    style.setAttribute('id', jsData[0]);
    style.setAttribute('rel', 'stylesheet');
    style.setAttribute('type', 'text/css');
    style.setAttribute('media', 'all');
    style.setAttribute('href', jsData[1]);

    document.head.appendChild(style);
}


var isInIFrame = (window.self !== window.top) ? true : false;

if (!isInIFrame) {
    var jsData = ["showcase-cta-google-fonts", "\/\/fonts.googleapis.com\/css?family=DM%20Sans%3A400%2C500%2C700&subset=latin%2Clatin-ext"];
    var style = document.createElement('link');
    style.setAttribute('id', jsData[0]);
    style.setAttribute('rel', 'stylesheet');
    style.setAttribute('type', 'text/css');
    style.setAttribute('media', 'all');
    style.setAttribute('href', jsData[1]);

    document.head.appendChild(style);
}

window._wpemojiSettings = { "baseUrl": "https:\/\/s.w.org\/images\/core\/emoji\/15.0.3\/72x72\/", "ext": ".png", "svgUrl": "https:\/\/s.w.org\/images\/core\/emoji\/15.0.3\/svg\/", "svgExt": ".svg", "source": { "concatemoji": "https:\/\/websitedemos.net\/video-editor-04\/wp-includes\/js\/wp-emoji-release.min.js?ver=6.6.2" } };
/*! This file is auto-generated */
!function (i, n) { var o, s, e; function c(e) { try { var t = { supportTests: e, timestamp: (new Date).valueOf() }; sessionStorage.setItem(o, JSON.stringify(t)) } catch (e) { } } function p(e, t, n) { e.clearRect(0, 0, e.canvas.width, e.canvas.height), e.fillText(t, 0, 0); var t = new Uint32Array(e.getImageData(0, 0, e.canvas.width, e.canvas.height).data), r = (e.clearRect(0, 0, e.canvas.width, e.canvas.height), e.fillText(n, 0, 0), new Uint32Array(e.getImageData(0, 0, e.canvas.width, e.canvas.height).data)); return t.every(function (e, t) { return e === r[t] }) } function u(e, t, n) { switch (t) { case "flag": return n(e, "\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f", "\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f") ? !1 : !n(e, "\ud83c\uddfa\ud83c\uddf3", "\ud83c\uddfa\u200b\ud83c\uddf3") && !n(e, "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f", "\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f"); case "emoji": return !n(e, "\ud83d\udc26\u200d\u2b1b", "\ud83d\udc26\u200b\u2b1b") }return !1 } function f(e, t, n) { var r = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? new OffscreenCanvas(300, 150) : i.createElement("canvas"), a = r.getContext("2d", { willReadFrequently: !0 }), o = (a.textBaseline = "top", a.font = "600 32px Arial", {}); return e.forEach(function (e) { o[e] = t(a, e, n) }), o } function t(e) { var t = i.createElement("script"); t.src = e, t.defer = !0, i.head.appendChild(t) } "undefined" != typeof Promise && (o = "wpEmojiSettingsSupports", s = ["flag", "emoji"], n.supports = { everything: !0, everythingExceptFlag: !0 }, e = new Promise(function (e) { i.addEventListener("DOMContentLoaded", e, { once: !0 }) }), new Promise(function (t) { var n = function () { try { var e = JSON.parse(sessionStorage.getItem(o)); if ("object" == typeof e && "number" == typeof e.timestamp && (new Date).valueOf() < e.timestamp + 604800 && "object" == typeof e.supportTests) return e.supportTests } catch (e) { } return null }(); if (!n) { if ("undefined" != typeof Worker && "undefined" != typeof OffscreenCanvas && "undefined" != typeof URL && URL.createObjectURL && "undefined" != typeof Blob) try { var e = "postMessage(" + f.toString() + "(" + [JSON.stringify(s), u.toString(), p.toString()].join(",") + "));", r = new Blob([e], { type: "text/javascript" }), a = new Worker(URL.createObjectURL(r), { name: "wpTestEmojiSupports" }); return void (a.onmessage = function (e) { c(n = e.data), a.terminate(), t(n) }) } catch (e) { } c(n = f(s, u, p)) } t(n) }).then(function (e) { for (var t in e) n.supports[t] = e[t], n.supports.everything = n.supports.everything && n.supports[t], "flag" !== t && (n.supports.everythingExceptFlag = n.supports.everythingExceptFlag && n.supports[t]); n.supports.everythingExceptFlag = n.supports.everythingExceptFlag && !n.supports.flag, n.DOMReady = !1, n.readyCallback = function () { n.DOMReady = !0 } }).then(function () { return e }).then(function () { var e; n.supports.everything || (n.readyCallback(), (e = n.source || {}).concatemoji ? t(e.concatemoji) : e.wpemoji && e.twemoji && (t(e.twemoji), t(e.wpemoji))) })) }((window, document), window._wpemojiSettings);


var elementorFrontendConfig = { "environmentMode": { "edit": false, "wpPreview": false, "isScriptDebug": false }, "i18n": { "shareOnFacebook": "Share on Facebook", "shareOnTwitter": "Share on Twitter", "pinIt": "Pin it", "download": "Download", "downloadImage": "Download image", "fullscreen": "Fullscreen", "zoom": "Zoom", "share": "Share", "playVideo": "Play Video", "previous": "Previous", "next": "Next", "close": "Close", "a11yCarouselWrapperAriaLabel": "Carousel | Horizontal scrolling: Arrow Left & Right", "a11yCarouselPrevSlideMessage": "Previous slide", "a11yCarouselNextSlideMessage": "Next slide", "a11yCarouselFirstSlideMessage": "This is the first slide", "a11yCarouselLastSlideMessage": "This is the last slide", "a11yCarouselPaginationBulletMessage": "Go to slide" }, "is_rtl": false, "breakpoints": { "xs": 0, "sm": 480, "md": 768, "lg": 1025, "xl": 1440, "xxl": 1600 }, "responsive": { "breakpoints": { "mobile": { "label": "Mobile Portrait", "value": 767, "default_value": 767, "direction": "max", "is_enabled": true }, "mobile_extra": { "label": "Mobile Landscape", "value": 880, "default_value": 880, "direction": "max", "is_enabled": false }, "tablet": { "label": "Tablet Portrait", "value": 1024, "default_value": 1024, "direction": "max", "is_enabled": true }, "tablet_extra": { "label": "Tablet Landscape", "value": 1200, "default_value": 1200, "direction": "max", "is_enabled": false }, "laptop": { "label": "Laptop", "value": 1366, "default_value": 1366, "direction": "max", "is_enabled": false }, "widescreen": { "label": "Widescreen", "value": 2400, "default_value": 2400, "direction": "min", "is_enabled": false } } }, "version": "3.23.4", "is_static": false, "experimentalFeatures": { "e_optimized_css_loading": true, "additional_custom_breakpoints": true, "container_grid": true, "e_swiper_latest": true, "e_nested_atomic_repeaters": true, "e_onboarding": true, "home_screen": true, "ai-layout": true, "landing-pages": true, "e_lazyload": true }, "urls": { "assets": "https:\/\/websitedemos.net\/video-editor-04\/wp-content\/plugins\/elementor\/assets\/", "ajaxurl": "https:\/\/websitedemos.net\/video-editor-04\/wp-admin\/admin-ajax.php" }, "nonces": { "floatingButtonsClickTracking": "7ec81809c5" }, "swiperClass": "swiper", "settings": { "page": [], "editorPreferences": [] }, "kit": { "active_breakpoints": ["viewport_mobile", "viewport_tablet"], "global_image_lightbox": "yes", "lightbox_enable_counter": "yes", "lightbox_enable_fullscreen": "yes", "lightbox_enable_zoom": "yes", "lightbox_enable_share": "yes", "lightbox_title_src": "title", "lightbox_description_src": "description" }, "post": { "id": 6, "title": "Home%20-%20Video%20Editor", "excerpt": "", "featuredImage": false } };

window.scope_array = [];
window.backend = 0;
jQuery.cachedScript = function (url, options) {
    // Allow user to set any option except for dataType, cache, and url.
    options = jQuery.extend(options || {}, {
        dataType: "script",
        cache: true,
        url: url
    });
    // Return the jqXHR object so we can chain callbacks.
    return jQuery.ajax(options);
};
jQuery(window).on("elementor/frontend/init", function () {
    elementorFrontend.hooks.addAction("frontend/element_ready/global", function ($scope, $) {
        if ("undefined" == typeof $scope) {
            return;
        }
        if ($scope.hasClass("uael-particle-yes")) {
            window.scope_array.push($scope);
            $scope.find(".uael-particle-wrapper").addClass("js-is-enabled");
        } else {
            return;
        }
        if (elementorFrontend.isEditMode() && $scope.find(".uael-particle-wrapper").hasClass("js-is-enabled") && window.backend == 0) {
            var uael_url = uael_particles_script.uael_particles_url;

            jQuery.cachedScript(uael_url);
            window.backend = 1;
        } else if (elementorFrontend.isEditMode()) {
            var uael_url = uael_particles_script.uael_particles_url;
            jQuery.cachedScript(uael_url).done(function () {
                var flag = true;
            });
        }
    });
});
jQuery(document).on("ready elementor/popup/show", () => {
    if (jQuery.find(".uael-particle-yes").length < 1) {
        return;
    }
    var uael_url = uael_particles_script.uael_particles_url;
    jQuery.cachedScript = function (url, options) {
        // Allow user to set any option except for dataType, cache, and url.
        options = jQuery.extend(options || {}, {
            dataType: "script",
            cache: true,
            url: url
        });
        // Return the jqXHR object so we can chain callbacks.
        return jQuery.ajax(options);
    };
    jQuery.cachedScript(uael_url);
});



/(trident|msie)/i.test(navigator.userAgent) && document.getElementById && window.addEventListener && window.addEventListener("hashchange", function () { var t, e = location.hash.substring(1); /^[A-z0-9_-]+$/.test(e) && (t = document.getElementById(e)) && (/^(?:a|select|input|button|textarea)$/i.test(t.tagName) || (t.tabIndex = -1), t.focus()) }, !1);

/* <![CDATA[ */
var wpforms_settings = { "val_required": "This field is required.", "val_email": "Please enter a valid email address.", "val_email_suggestion": "Did you mean {suggestion}?", "val_email_suggestion_title": "Click to accept this suggestion.", "val_email_restricted": "This email address is not allowed.", "val_number": "Please enter a valid number.", "val_number_positive": "Please enter a valid positive number.", "val_minimum_price": "Amount entered is less than the required minimum.", "val_confirm": "Field values do not match.", "val_checklimit": "You have exceeded the number of allowed selections: {#}.", "val_limit_characters": "{count} of {limit} max characters.", "val_limit_words": "{count} of {limit} max words.", "val_recaptcha_fail_msg": "Google reCAPTCHA verification failed, please try again later.", "val_turnstile_fail_msg": "Cloudflare Turnstile verification failed, please try again later.", "val_inputmask_incomplete": "Please fill out the field in required format.", "uuid_cookie": "", "locale": "en", "wpforms_plugin_url": "https:\/\/websitedemos.net\/video-editor-04\/wp-content\/plugins\/wpforms-lite\/", "gdpr": "", "ajaxurl": "https:\/\/websitedemos.net\/video-editor-04\/wp-admin\/admin-ajax.php", "mailcheck_enabled": "1", "mailcheck_domains": [], "mailcheck_toplevel_domains": ["dev"], "is_ssl": "1", "currency_code": "USD", "currency_thousands": ",", "currency_decimals": "2", "currency_decimal": ".", "currency_symbol": "$", "currency_symbol_pos": "left", "val_requiredpayment": "Payment is required.", "val_creditcard": "Please enter a valid credit card number.", "error_updating_token": "Error updating token. Please try again or contact support if the issue persists.", "network_error": "Network error or server is unreachable. Check your connection or try again later.", "token_cache_lifetime": "86400" }
/* ]]> */

const lazyloadRunObserver = () => {
    const lazyloadBackgrounds = document.querySelectorAll(`.e-con.e-parent:not(.e-lazyloaded)`);
    const lazyloadBackgroundObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                let lazyloadBackground = entry.target;
                if (lazyloadBackground) {
                    lazyloadBackground.classList.add('e-lazyloaded');
                }
                lazyloadBackgroundObserver.unobserve(entry.target);
            }
        });
    }, { rootMargin: '200px 0px 200px 0px' });
    lazyloadBackgrounds.forEach((lazyloadBackground) => {
        lazyloadBackgroundObserver.observe(lazyloadBackground);
    });
};
const events = [
    'DOMContentLoaded',
    'elementor/lazyload/observe',
];
events.forEach((event) => {
    document.addEventListener(event, lazyloadRunObserver);
});
var astra = { "break_point": "921", "isRtl": "", "is_scroll_to_id": "1", "is_scroll_to_top": "", "is_header_footer_builder_active": "1", "responsive_cart_click": "flyout" };



var starter_templates_zip_preview = { "AstColorPaletteVarPrefix": "--ast-global-color-", "AstEleColorPaletteVarPrefix": ["ast-global-color-0", "ast-global-color-1", "ast-global-color-2", "ast-global-color-3", "ast-global-color-4", "ast-global-color-5", "ast-global-color-6", "ast-global-color-7", "ast-global-color-8"] };


var starterTemplatesPreview = {
    "site_url": "https:\/\/websitedemos.net\/video-editor-04",
    "AstColorPaletteVarPrefix": "--ast-global-color-",
    "AstEleColorPaletteVarPrefix": ["ast-global-color-0", "ast-global-color-1", "ast-global-color-2", "ast-global-color-3", "ast-global-color-4", "ast-global-color-5", "ast-global-color-6", "ast-global-color-7", "ast-global-color-8"],
    "templateTheme": "astra"
};

(function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
    });
    var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-PW78FQ8');