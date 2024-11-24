
const typed = new Typed('.multiple-text', {
    strings: ['Website Developer', 'Software Developer', 'WordPress Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// alert("Before you consider hiring me, make sure to take a quick look at my skills and experience!")


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const offset = 6 * 16; // Navbar height (6rem converted to px)
        const targetPosition = target.offsetTop - offset;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

const typed2 = new Typed('.multiple-text-2', {
    strings: ['Website Developer', 'Software Developer', 'WordPress Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


function contactWhatsApp() {
    // Your WhatsApp number with country code, without '+' sign
    var phoneNumber = "923122908060"; // Replace with your number
    var whatsappURL = "https://wa.me/" + phoneNumber + "?text=Hi!%20I%20want%20to%20get%20in%20touch.";

    // Open WhatsApp in a new tab
    window.open(whatsappURL, '_blank');
  }

  function sendToWhatsApp() {
    // Get form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    // Make sure fields are filled out
    if(name === "" || email === "" || message === "") {
      alert("Please fill in all fields");
      return;
    }

    // WhatsApp number
    var phoneNumber = "923002752759"; // Replace with your WhatsApp number, remove leading zero and add country code

    // Generate WhatsApp message text
    var whatsappMessage = "Name: " + name + "%0AEmail: " + email + "%0AMessage: " + message;

    // WhatsApp API link
    var whatsappURL = "https://wa.me/" + phoneNumber + "?text=" + whatsappMessage;

    // Open WhatsApp in a new tab
    window.open(whatsappURL, '_blank');
  }

  document.querySelector('.footer-container i').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default anchor behavior
    window.scrollTo({
        top: 0, // Scroll to the top
        behavior: 'smooth' // Smooth scrolling effect
    });
});


