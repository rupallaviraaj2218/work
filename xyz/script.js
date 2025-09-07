// Simple form submission handling (demo only)
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const name = e.target.name.value;
  const email = e.target.email.value;
  const message = e.target.message.value;
  
  alert(`Thank you, ${name}! We received your message:\n"${message}"\nWe’ll contact you at ${email}.`);
  
  e.target.reset();
});
