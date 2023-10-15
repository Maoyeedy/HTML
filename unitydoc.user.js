// ==UserScript==
// @name        Unity Docs Syntax Hightligher Fork
// @namespace   https://github.com/Maoyeedy
// @version     1.2.3
// @author      Maoyeedy
// @license     MIT
// @description Adds syntax highlighting to the Unity Documentation. Forked from hyblocker.
// @icon        https://unity.com/favicon.ico
//
// @match       https://docs.unity3d.com/Manual/*
// @match       https://docs.unity3d.com/ScriptReference/*
// @match       https://docs.unity3d.com/*/Manual/*
// @match       https://docs.unity3d.com/*/ScriptReference/*
//
// @grant       GM_getResourceText
// @grant       GM_addStyle
//
// @require     https://cdn.jsdelivr.net/npm/prismjs@1/prism.min.js
// @require     https://cdn.jsdelivr.net/npm/prismjs@1/components/prism-c.min.js
// @require     https://cdn.jsdelivr.net/npm/prismjs@1/components/prism-clike.min.js
// @require     https://cdn.jsdelivr.net/npm/prismjs@1/components/prism-csharp.min.js
// @require     https://cdn.jsdelivr.net/npm/prismjs@1/components/prism-hlsl.min.js
// @resource    PRISM_THEME_LIGHT  https://cdn.jsdelivr.net/gh/PrismJS/prism-themes/themes/prism-one-light.min.css
// @resource    PRISM_THEME_DARK  https://cdn.jsdelivr.net/gh/PrismJS/prism-themes/themes/prism-one-dark.min.css
//
// Recommended Light Themes
// https://cdn.jsdelivr.net/npm/prismjs/themes/prism.min.css
// https://cdn.jsdelivr.net/gh/PrismJS/prism-themes/themes/prism-one-light.min.css
//
// Recommended Dark Themes
// https://cdn.jsdelivr.net/gh/PrismJS/prism-themes/themes/prism-xonokai.min.css
// https://cdn.jsdelivr.net/gh/PrismJS/prism-themes/themes/prism-duotone-dark.min.css
// https://cdn.jsdelivr.net/gh/PrismJS/prism-themes/themes/prism-duotone-space.min.css
// Extra Themes
// https://github.com/PrismJS/prism-themes

//
// ==/UserScript==

(function () {
  "use strict"
  GM_addStyle(GM_getResourceText("PRISM_THEME_LIGHT"))

  /* InjectCustomCSS */
  const customCSS = `
    code[class*="language-"],
    pre[class*="language-"] {
      border-radius: .5em;
      font-family: 'Jetbrains Mono', monospace !important;
      font-size: 0.875em !important;
      line-height: 1.5 !important;
      text-shadow: none !important;
    }
    .token.keyword,
    .token.bold {
      font-weight: normal !important;
    }
  `

  const styleElement = document.createElement("style")
  styleElement.setAttribute("type", "text/css")
  styleElement.appendChild(document.createTextNode(customCSS))
  document.head.appendChild(styleElement)

  /* Create Button */
  const switchButton = document.createElement("button")
  switchButton.style.cursor = "pointer"
  switchButton.style.position = "fixed"
  switchButton.style.bottom = "16px"
  switchButton.style.right = "16px"
  switchButton.style.width = "32px"
  switchButton.style.height = "32px"
  switchButton.style.borderRadius = "16px"
  switchButton.style.border = "1px solid #2a2734"
  switchButton.style.fontSize = "16px"
  switchButton.style.paddingBottom = "4px"

  switchButton.style.backgroundColor = "#f9f9f9"
  switchButton.style.color = "#2a2734"
  switchButton.textContent = "🌞"

  document.body.appendChild(switchButton)

  /*  Switch between dark and light themes */
  let isDarkTheme = false
  switchButton.addEventListener("click", () => {
    if (isDarkTheme) {
      GM_addStyle(GM_getResourceText("PRISM_THEME_LIGHT"))
      switchButton.style.backgroundColor = "#f9f9f9"
      switchButton.style.color = "#2a2734"
      switchButton.textContent = "🌞"
      isDarkTheme = false
    } else {
      GM_addStyle(GM_getResourceText("PRISM_THEME_DARK"))
      switchButton.style.backgroundColor = "#2a2734"
      switchButton.style.color = "#f9f9f9"
      switchButton.textContent = "🌙"
      isDarkTheme = true
    }
  })
})()

const CSHARP = 0
const HLSL = 1

var waitForGlobal = function (key, callback) {
  if (window[key]) {
    callback()
  } else {
    setTimeout(function () {
      waitForGlobal(key, callback)
    }, 100)
  }
}
function waitForLangLoad (lang, callback) {
  if (Prism.util.getLanguage(lang) != null) {
    callback()
  } else {
    setTimeout(function () {
      waitForLangLoad(lang, callback)
    }, 100)
  }
}

function detectCodeLanguage (elem) {
  if (elem.classList.contains("codeExampleCS")) {
    return CSHARP
  }

  if (
    elem.innerHTML.match(/CGPROGRAM|ENDCG|CGINCLUDE|#pragma|SubShader \"/g) !=
    null
  ) {
    return HLSL
  }

  return CSHARP
}

waitForGlobal("Prism", () => {
  waitForLangLoad("csharp", () => {
    waitForLangLoad("hlsl", () => {
      document.querySelectorAll(".content-wrap pre").forEach((el) => {
        el.innerHTML = el.innerHTML.replace(/\<br\>/g, "\n")
        if (detectCodeLanguage(el) == CSHARP) {
          el.classList.add("language-csharp")
        } else {
          el.classList.add("language-hlsl")
        }
        if (el.firstChild.nodeName != "CODE") {
          el.innerHTML = `<code>${el.innerHTML}</code>`
        }
      })
    })
  })
})
