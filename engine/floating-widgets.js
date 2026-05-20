function makeDraggable(widget, handle){
  let isDown = false;
  let offsetX = 0;
  let offsetY = 0;

  handle.addEventListener("mousedown", (e) => {
    isDown = true;
    const rect = widget.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    widget.style.right = "auto";
    widget.style.bottom = "auto";
  });

  document.addEventListener("mousemove", (e) => {
    if(!isDown) return;

    const x = Math.max(8, Math.min(window.innerWidth - widget.offsetWidth - 8, e.clientX - offsetX));
    const y = Math.max(8, Math.min(window.innerHeight - widget.offsetHeight - 8, e.clientY - offsetY));

    widget.style.left = x + "px";
    widget.style.top = y + "px";
  });

  document.addEventListener("mouseup", () => {
    isDown = false;
  });
}

function initFloatingWidgets(){
  const widget = document.getElementById("fxWidget");
  const head = document.getElementById("fxWidgetHead");

  makeDraggable(widget, head);

  document.getElementById("btnMinimizeFx").addEventListener("click", () => {
    widget.classList.toggle("minimized");
  });
}
