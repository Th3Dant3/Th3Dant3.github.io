document.addEventListener('DOMContentLoaded', function () {
  var clickCount = 0;

  document.querySelector('#button').addEventListener('click', function () {
    clickCount++;

    if (clickCount <= 3) {
      // If clicked less than or equal to 3 times, show "Stop That!" image
      this.value = 'Stop that!';
      showImage('imagines/levelup.jpg');
    } else {
      // After 3 clicks, show "Down Level" image
      this.value = 'Down Level';
      showImage('imagines/leveldown.jpg');
    }
  });

  function showImage(imageSrc) {
    // Create an img element
    var imgElement = document.createElement('img');
    imgElement.src = imageSrc;
    imgElement.alt = 'Image';

    // Set styles for the image
    imgElement.style.width = '100%';
    imgElement.style.maxWidth = '400px'; // Adjust the max width as needed

    // Append the img element to the body
    document.body.appendChild(imgElement);
  }
});
