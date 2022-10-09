function copyCSS(){
    let cssStyles = ''
  
    // Started at index 1 for index 0 is browser's user agent stylesheet.
    for (let i = 1; i < document.styleSheets.length; i++) {
      let style = null
  
      try {
        if (document.styleSheets[i]) {
          const classes =
            document.styleSheets[i].cssRules || document.styleSheets[i].rules
  
          if (classes) style = classes
        }
        for (const item in style) {
          if (style[item].cssText != undefined) cssStyles += style[item].cssText
        }
      } catch (e) {
        continue
      }
  
      
    }
  
    return cssStyles
  }

document.querySelector(".copy-btn").addEventListener("click",(e)=>{
    let html = e.srcElement.parentElement.outerHTML;
    //let obj = dumpCSSText(e.srcElement.parentElement);
    //console.log("."+e.srcElement.parentElement.className+"{"+obj+"}");
    console.log(typeof copyCSS())
})