function trackMousePosition() {
  const mousePosX = document.getElementById('mousePosX');
  const mousePosY = document.getElementById('mousePosY');

  document.addEventListener('mousemove', function (event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    console.log(`Mouse X: ${mouseX}, Mouse Y: ${mouseY}`);
    mousePosX.textContent = `Mouse X: ${mouseX}`;
    mousePosY.textContent = `Mouse Y: ${mouseY}`;
  });
}

export { trackMousePosition };
