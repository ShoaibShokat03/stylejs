document.addEventListener("DOMContentLoaded", function () {
  // ...existing code...

  function applyStyles(element, styles) {
    // ...existing code...
    styles.split(" ").forEach((style) => {
      if (style.startsWith("hover:")) {
        const hoverStyles = style.slice(6).split("~").map(s => s.replace(/_/g, " "));
        element.addEventListener("mouseover", () => {
          hoverStyles.forEach(hs => {
            const [property, value] = hs.split(":");
            element.style[property] = value;
          });
        });
        element.addEventListener("mouseout", () => {
          hoverStyles.forEach(hs => {
            const [property] = hs.split(":");
            element.style[property] = "";
          });
        });
      } else {
        const [property, value] = style.split(":");
        element.style[property] = value.replace(/_/g, " ");
      }
    });
  }

  // ...existing code...
});
