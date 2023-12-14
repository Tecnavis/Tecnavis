  // Open the video modal automatically when the page loads
  document.addEventListener('DOMContentLoaded', function () {
    openVideoModal();
  });

  function openVideoModal() {
    document.getElementById('videoModal').style.display = 'flex';
  }

  function closeVideoModal() {
    console.log("close");
    document.getElementById('videoModal').style.display = 'none';

    // Pause and reset the video when closing the modal
    var video = document.querySelector('#videoModal video');
    video.pause();
    video.currentTime = 0;
  }