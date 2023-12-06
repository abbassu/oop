function changeShapeColor() {
  const colorInput = document.getElementById("colorInput");
  const shape = document.getElementById("shape");
  const selectedColor = colorInput.value;

  shape.style.backgroundColor = selectedColor;
}
