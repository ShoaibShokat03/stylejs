window.addEventListener("load", () => {
  const st = document.querySelector(".status");
  st.textContent = "Loaded";

  var classId = 0;
  function genUniqueClass() {
    classId++;
    const generatedClass = "e-class-id-" + classId;
    return generatedClass;
  }

  const longStyles = {
    // Styles keys short keys long values
    w: "width",
    h: "height",
    m: "margin",
    p: "padding",
    jc: "justify-content",
    ai: "align-items",
    d: "display",
    bg: "background",
    bgc: "background-color",

    // Style values short keys long values
    sb: "space-between",
  };
  const shortStyles = Object.keys(longStyles);

  function getLongStyle(shortStyle) {
    return longStyles[shortStyle];
  }

  var elementStyles = ``;

  const elements = document.querySelectorAll(
    "[Stylejs]" || "[styleJs]" || "[stylejs]" || "[StyleJs]"
  );
  const isElements = elements.length > 0;
  if (isElements) {
    // console.log(elements.length);
    elements.forEach((element) => {
      const tagName = element.tagName;
      let elementClassAttribute = element.getAttribute("styleJs");
      elementClassAttribute = elementClassAttribute
        .replaceAll("\n", "")
        .trim()
        .split(" ");
      //   console.log(elementClassAttribute);

      const elementUniqueClassId = genUniqueClass();
      element.classList.add(elementUniqueClassId);
      //   start wrapping a element in class
      elementStyles += `.${elementUniqueClassId}{\n`;

      let mediaQuries = [];
      let hoverEffects = ``;
      elementClassAttribute.forEach((eClass) => {
        if (eClass !== "" || eClass !== "\n") {
          //   console.log(eClass);
          const isKeyPariStyle = eClass.includes(":");
          const isNotKeyPairStyle = !eClass.includes(":");
          if (isKeyPariStyle) {
            const eClassArray = eClass.split(":");
            const isNormalStyle = eClassArray.length == 2;

            //   if normal styling
            if (isNormalStyle) {
              let eStyle = eClassArray[0];
              let eStyleValue = eClassArray[1];
              const isShortStyle = getLongStyle(eStyle);
              const isShortStyleValue = getLongStyle(eStyleValue);
              if (isShortStyle) {
                eStyle = isShortStyle;
              }
              if (isShortStyleValue) {
                eStyle = isShortStyleValue;
              }
              //   console.log("Short", isShortStyle);
              // console.log(eClassArray);
              // console.log(eClass, eStyle, eStyleValue);
              elementStyles += `\t${eStyle}:${eStyleValue};\n`;
            }

            const isHover = eClass.startsWith("hover:");
            if (isHover) {
              let eStyle = eClassArray[1];
              let eStyleValue = eClassArray[2];
              const isShortStyle = getLongStyle(eStyle);
              const isShortStyleValue = getLongStyle(eStyleValue);
              if (isShortStyle) {
                eStyle = isShortStyle;
              }
              if (isShortStyleValue) {
                eStyle = isShortStyleValue;
              }
              //   console.log("Short", isShortStyle);
              // console.log(eClassArray);
              // console.log(eClass, eStyle, eStyleValue);
              hoverEffects += `\t${eStyle}:${eStyleValue};\n`;
            }

            //   If is there any media query
            const isMediaQuery = eClass.startsWith("ww-");
            if (isMediaQuery) {
              let mediaQuery = eClassArray[0].split("-");
              //   console.log(mediaQuery);
              let isOnly = mediaQuery[1] == "only";
              let mediaQuerycondition = mediaQuery[2];

              let mediaQueryActual = "";
              if (!isOnly) {
                let maxMin = mediaQuery[1];
                mediaQueryActual =
                  "@media screen and (" +
                  maxMin +
                  "-width:" +
                  mediaQuerycondition +
                  ")";
              }
              //   console.log(mediaQueryActual);
              let eStyle = eClassArray[1];
              let eStyleValue = eClassArray[2];
              const isShortStyle = getLongStyle(eStyle);
              const isShortStyleValue = getLongStyle(eStyleValue);
              if (isShortStyle) {
                eStyle = isShortStyle;
              }
              if (isShortStyleValue) {
                eStyle = isShortStyleValue;
              }
              //   console.log("Short", isShortStyle);
              // console.log(eClassArray);
              // console.log(eClass, eStyle, eStyleValue);
              let mediaQueryStylePair = `${eStyle}:${eStyleValue};`;
              let objectPair = {
                query: mediaQueryActual,
                element_style: mediaQueryStylePair,
              };
              mediaQuries.push(objectPair);
            }
          }
        }
      });
      elementStyles += `}\n`;
      elementStyles += `.${elementUniqueClassId}:hover{\n`;
      elementStyles += hoverEffects;
      elementStyles += `}\n`;
      const addedQueries = [];
      mediaQuries.forEach((query) => {
        if (!addedQueries.includes(query.query)) {
          elementStyles += `${query.query}{\n`;
          elementStyles += `\t.${elementUniqueClassId}{\n`;
          elementStyles += `\t\t${query.element_style}\n`;
          elementStyles += `\t}\n`;
          elementStyles += `}\n`;
          addedQueries.push(query.query);
        }
      });

      const styleElement = document.createElement("style");
      styleElement.innerHTML = elementStyles;
      document.head.appendChild(styleElement);

      //   end wrapping element class
    });
    console.log(elementStyles);
  }
});
