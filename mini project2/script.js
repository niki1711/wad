document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.sliding-images img');
    let index = 0;

    function nextImage() {
        index = (index + 1) % images.length;
        showImage();
    }

    function showImage() {
        const container = document.querySelector('.image-container');
        container.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(nextImage, 3000); // Change image every 3 seconds
});
