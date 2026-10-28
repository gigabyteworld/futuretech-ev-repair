// ============================================
// FUTURE TECHNOLOGIES - EV REPAIR WEBSITE
// ============================================
// WhatsApp number with India country code.
// Do not include + or spaces in the number.
const WHATSAPP_NUMBER = "919347883070";
// ============================================
// MOBILE NAVIGATION
// ============================================
const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");
if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Toggle navigation"
    );
    menuToggle.textContent = isOpen ? "×" : "☰";
  });
  // Close the mobile menu after selecting a navigation link.
  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Toggle navigation");
      menuToggle.textContent = "☰";
    });
  });
}
// ============================================
// SERVICE ENQUIRY LINKS
// ============================================
document.querySelectorAll("[data-service]").forEach((link) => {
  link.addEventListener("click", () => {
    const problemField = document.getElementById("problem");
    if (problemField && !problemField.value.trim()) {
      problemField.value =
        "I need help with " +
        link.dataset.service +
        ". Please contact me regarding diagnosis and repair.";
    }
  });
});
// ============================================
// WHATSAPP CONTACT FORM
// ============================================
const repairForm = document.getElementById("repairForm");
const formStatus = document.getElementById("formStatus");
if (repairForm) {
  repairForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // Get customer details.
    const name = document
      .getElementById("customerName")
      .value
      .trim();
    const vehicle = document
      .getElementById("vehicleName")
      .value;
    const problem = document
      .getElementById("problem")
      .value
      .trim();
    // Validate required fields.
    if (!name || !vehicle || !problem) {
      formStatus.textContent =
        "Please complete all required fields.";
      return;
    }
    // Prepare the WhatsApp message.
    const message = [
      "Hello Future Technologies!",
      "",
      "I would like to enquire about EV repair.",
      "",
      "Name: " + name,
      "Vehicle / Bike Name: " + vehicle,
      "Problem: " + problem,
      "",
      "Please contact me regarding diagnosis and repair.",
      "Thank you."
    ].join("\n");
    // Encode the message for the WhatsApp URL.
    const whatsappURL =
      "https://wa.me/" +
      WHATSAPP_NUMBER +
      "?text=" +
      encodeURIComponent(message);
    formStatus.textContent =
      "Opening WhatsApp with your enquiry...";
    // Open WhatsApp in a new tab or app.
    const whatsappWindow = window.open(
      whatsappURL,
      "_blank",
      "noopener,noreferrer"
    );
    // Fallback in case the browser blocks a new window.
    if (!whatsappWindow) {
      window.location.href = whatsappURL;
    }
  });
}
// ============================================
// AUTOMATIC COPYRIGHT YEAR
// ============================================
const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
// ============================================
// SCROLL REVEAL ANIMATIONS
// ============================================
const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observerInstance.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );
  revealItems.forEach((item) => {
    observer.observe(item);
  });
} else {
  // Show everything if IntersectionObserver is unavailable.
  revealItems.forEach((item) => {
    item.classList.add("is-visible");
  });
}