function initProps(el) {
    const scrollMultiple = 2.5;
    var imageHeight = el.height;
    el.style.bottom = `-${imageHeight - 350}px`;
    el.style.setProperty("--top", `-${imageHeight - 350}px`);
    el.style.setProperty(
      "--animation-duration",
      `${scrollMultiple * imageHeight}ms`
    );
  }
  







// penting
const dropItems = document.getElementById("drop-items");

new Sortable(dropItems, {
  animation: 150,
  chosenClass: "sortable-chosen",
  dragClass: "sortable-drag",
  store: {
    set: (sortable) => {
      const order = sortable.toArray();
      localStorage.setItem(sortable.options.group.name, order.join("|"));
    },

    get: (sortable) => {
      const order = localStorage.getItem(sortable.options.group.name);
      return order ? order.split("|") : [];
    }
  }
});