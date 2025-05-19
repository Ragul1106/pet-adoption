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

  function validateForm() {
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const reason = document.getElementById("reason").value.trim();
    const email = document.getElementById("email").value.trim();

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const phonePattern = /^[0-9]{10}$/;

    if (!name || !phone || !reason || !email) {
      alert("Please fill out all fields.");
      return;
    }

    if (!phonePattern.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }


    openThankYouModal(); 
  }