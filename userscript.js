// ==UserScript==
// @name         JVC sans vidéos publicitaires
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Un petit script qui enlève le footer (bas de page) pour les gens qui ont une connexion internet avec données limitées
// @author       Shwitin
// @match       http://www.jeuxvideo.com/forums/*
// @match       https://www.jeuxvideo.com/forums/*
// @match       http://www.jeuxvideo.com/recherche/forums/*
// @match       https://www.jeuxvideo.com/recherche/forums/*
// @match       http://www.jeuxvideo.com/messages-prives/*
// @match       https://www.jeuxvideo.com/messages-prives/*
// @match       http://www.jeuxvideo.com/profil/*
// @match       https://www.jeuxvideo.com/profil/*
// @match       http://www.jeuxvideo.com/sso/*
// @match       https://www.jeuxvideo.com/sso/*
// @icon        https://cdn.gtricks.com/2018/06/YouTube-Sound-Works-But-No-Video-is-Showing-Heres-How-to-Fix.jpg
// @grant        none
// ==/UserScript==

(function() {

    const elementToRemoveName = "layout__videoFooter";
    function removeElementsByClass(elementToRemove){
    const elements = document.getElementsByClassName(elementToRemove);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}
    window.addEventListener('load', function() {
       removeElementsByClass(elementToRemoveName)
}, false);
    'use strict';
})();