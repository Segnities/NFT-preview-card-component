function imgsOnDragStartPreventDefault() {
  const query = document.querySelectorAll("img");

  query.forEach((img) =>
    img.addEventListener("dragstart", (e) => e.preventDefault())
  );
}

imgsOnDragStartPreventDefault();


