const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
  e.preventDefault(); // Corrected the method name

  // serviceID - templateID - #form - publicKey
  emailjs
    .sendForm(
      "service_1mo04c7",
      "template_w96hgtt",
      "#contact-form",
      "Rp6x5owKrWm-9FrFl"
    )
    .then(() => {
      contactMessage.textContent = "Message sent successfully ✅";

      setTimeout(() => {
        contactMessage.textContent = "";
      }, 5000);

      contactForm.reset();
    })
    .catch((error) => {
      console.error("Error sending email:", error);
    });
};

contactForm.addEventListener("submit", sendEmail);
