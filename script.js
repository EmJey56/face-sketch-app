document.getElementById('face').addEventListener('click', function () {
   resetImageVisibility();
   document.querySelector('.selected-images-displaying').classList.add('show-images1')
});

document.getElementById('hair').addEventListener('click', function () {
    resetImageVisibility();
    document.querySelector('.selected-images-displaying').classList.add('show-images2')
 });

 document.getElementById('eye').addEventListener('click', function () {
    resetImageVisibility();
    document.querySelector('.selected-images-displaying').classList.add('show-images3')
 });

 document.getElementById('eyebrow').addEventListener('click', function () {
    resetImageVisibility();
    document.querySelector('.selected-images-displaying').classList.add('show-images4')
 });

 document.getElementById('nose').addEventListener('click', function () {
    resetImageVisibility();
    document.querySelector('.selected-images-displaying').classList.add('show-images5')
 });

 document.getElementById('lips').addEventListener('click', function () {
    resetImageVisibility();
    document.querySelector('.selected-images-displaying').classList.add('show-images6')
 });

 document.getElementById('mustache').addEventListener('click', function () {
    resetImageVisibility();
    document.querySelector('.selected-images-displaying').classList.add('show-images7')
 });

 document.getElementById('more').addEventListener('click', function () {
    resetImageVisibility();
    document.querySelector('.selected-images-displaying').classList.add('show-images8')
 });
 


function resetImageVisibility() {
    var imageContainer = document.querySelector('.selected-images-displaying');
    imageContainer.classList.remove('show-images1', 'show-images2', 'show-images3', 'show-images4', 'show-images5', 'show-images6', 'show-images7', 'show-images8')
}

//to select image and display it in center box

document.getElementById('box1').addEventListener('click', function (event) {
   if (event.target.classList.contains('clickable-image')) {
       var clickedImageSrc = event.target.src;
       displayClickedImageInCenterBox(clickedImageSrc, 'centerbox');
   }
});

function displayClickedImageInCenterBox(imageSrc, centerBoxClass) {
   var centerBox = document.querySelector('.' + centerBoxClass);
   var existingImage = centerBox.querySelector('img[src="' + imageSrc + '"]');

   if (existingImage) {
       // If the clicked image is already displayed, remove it
       centerBox.removeChild(existingImage);
   } else {
       // Create an image element for the clicked image
       var clickedImage = document.createElement('img');
       clickedImage.src = imageSrc;

       // Append the clicked image to centerbox
       centerBox.appendChild(clickedImage);
   }
}

document.getElementById('box2').addEventListener('click', function (event) {
   if (event.target.classList.contains('clickable-image')) {
       var clickedImageSrc = event.target.src;
       displayClickedImageInCenterBox(clickedImageSrc, 'centerbox');
   }
});

document.getElementById('box3').addEventListener('click', function (event) {
   if (event.target.classList.contains('clickable-image')) {
       var clickedImageSrc = event.target.src;
       displayClickedImageInCenterBox(clickedImageSrc, 'centerbox');
   }
});

document.getElementById('box4').addEventListener('click', function (event) {
   if (event.target.classList.contains('clickable-image')) {
       var clickedImageSrc = event.target.src;
       displayClickedImageInCenterBox(clickedImageSrc, 'centerbox');
   }
});

document.getElementById('box5').addEventListener('click', function (event) {
   if (event.target.classList.contains('clickable-image')) {
       var clickedImageSrc = event.target.src;
       displayClickedImageInCenterBox(clickedImageSrc, 'centerbox');
   }
});

document.getElementById('box6').addEventListener('click', function (event) {
   if (event.target.classList.contains('clickable-image')) {
       var clickedImageSrc = event.target.src;
       displayClickedImageInCenterBox(clickedImageSrc, 'centerbox');
   }
});

document.getElementById('box7').addEventListener('click', function (event) {
   if (event.target.classList.contains('clickable-image')) {
       var clickedImageSrc = event.target.src;
       displayClickedImageInCenterBox(clickedImageSrc, 'centerbox');
   }
});

document.getElementById('box8').addEventListener('click', function (event) {
   if (event.target.classList.contains('clickable-image')) {
       var clickedImageSrc = event.target.src;
       displayClickedImageInCenterBox(clickedImageSrc, 'centerbox');
   }
});

document.getElementById('box9').addEventListener('click', function (event) {
   if (event.target.classList.contains('clickable-image')) {
       var clickedImageSrc = event.target.src;
       displayClickedImageInCenterBox(clickedImageSrc, 'centerbox');
   }
});

/// TO MOVE THE IMAGE INSIDE THE CENTERBOX CONTAINER ///


document.getElementById('centerbox').addEventListener('mousedown', function (event) {
   if (event.target.tagName === 'IMG') {
       makeImageDraggable(event.target);
   }
});

function makeImageDraggable(image) {
   var offsetX, offsetY;

   image.style.zIndex = '1000';
   image.addEventListener('dragstart', function (e) {
       offsetX = e.clientX - image.getBoundingClientRect().left;
       offsetY = e.clientY - image.getBoundingClientRect().top;
       e.dataTransfer.setDragImage(new Image(), 0, 0);
   });

   document.addEventListener('mousemove', handleDrag);
   document.addEventListener('mouseup', function () {
       document.removeEventListener('mousemove', handleDrag);
   });

   function handleDrag(e) {
       var newX = e.clientX - offsetX;
       var newY = e.clientY - offsetY;

       var centerboxRect = document.getElementById('centerbox').getBoundingClientRect();

       // Ensure the image stays within the boundaries of centerbox
       newX = Math.max(centerboxRect.left, Math.min(newX, centerboxRect.right - image.width));
       newY = Math.max(centerboxRect.top, Math.min(newY, centerboxRect.bottom - image.height));

       image.style.left = newX + 'px';
       image.style.top = newY + 'px';
   }
}




/////////////////////// RESIZE ///////////////////////

document.getElementById('centerbox').addEventListener('dblclick', function (event) {
   if (event.target.tagName === 'IMG') {
       const newWidth = prompt('Enter the new width (in pixels):', event.target.width);
       const newHeight = prompt('Enter the new height (in pixels):', event.target.height);

       if (newWidth !== null && newHeight !== null) {
           resizeImage(event.target, parseInt(newWidth, 10), parseInt(newHeight, 10));
       }
   }
});

function resizeImage(image, newWidth, newHeight) {
   // Ensure the new size is not smaller than 10x10
   if (newWidth >= 10 && newHeight >= 10) {
       image.style.width = `${newWidth}px`;
       image.style.height = `${newHeight}px`;
   }
}



//////////////////////// Saving the Image ////////////////////////////////


    // Function to handle save button click
    document.querySelector('.button.save').addEventListener('click', handleSaveClick);

    function handleSaveClick() {
        // Create a canvas element
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        // Set canvas dimensions
        const width = document.getElementById('centerbox').offsetWidth;
        const height = document.getElementById('centerbox').offsetHeight;
        canvas.width = width;
        canvas.height = height;

        // Draw each image onto the canvas
        document.querySelectorAll('.centerbox img').forEach((image) => {
            const x = image.offsetLeft;
            const y = image.offsetTop;
            const imgWidth = image.width;
            const imgHeight = image.height;
            ctx.drawImage(image, x, y, imgWidth, imgHeight);
        });

        // Convert the canvas content to a data URL
        const dataURL = canvas.toDataURL('image/jpeg');

        // Create a link element for download
        const downloadLink = document.createElement('a');
        downloadLink.href = dataURL;
        downloadLink.download = 'merged_image.jpg';

        // Append the link to the body and trigger a click event to start the download
        document.body.appendChild(downloadLink);
        downloadLink.click();

        // Remove the link from the body
        document.body.removeChild(downloadLink);
    };


    ////////////// To Empty The Centerbox ////////////////////////////////////

    // Function to reset images inside the centerbox
function resetImages() {
   const centerbox = document.getElementById('centerbox');
   centerbox.innerHTML = ''; // Remove all child elements
 }
 


