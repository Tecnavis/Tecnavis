 // Open the video modal automatically when the page loads
 document.addEventListener('DOMContentLoaded', function () {
    openVideoModal();
  });

  function openVideoModal() {
    document.getElementById('videoModal').style.display = 'flex';
  }

  function closeVideoModal() {
    document.getElementById('videoModal').style.display = 'none';
    // Pause the video when closing the modal
    document.querySelector('video').pause();
  }