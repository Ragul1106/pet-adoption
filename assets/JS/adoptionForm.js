 function openModal() {
    document.getElementById("adoptModal").style.display = "block";
  }

  function closeModal() {
    document.getElementById("adoptModal").style.display = "none";
  }

  window.onclick = function(event) {
    let modal = document.getElementById("adoptModal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }