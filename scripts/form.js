// form.js

// Initialize EmailJS
(function () {
    emailjs.init("7KSknPXIWzQysSlMP"); // Replace with your EmailJS public key
})();

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    if (form) {
        form.addEventListener("submit", async function (event) {
            event.preventDefault();

            // Validation
            let isValid = true;
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const countryCode = document.getElementById("country-code").value;
            const services = document.getElementById("services").value;
            const company = document.getElementById("company").value.trim();
            const message = document.getElementById("message").value.trim();

            // Reset error messages
            document.querySelectorAll(".error-message").forEach(el => el.textContent = "");

            // Name validation
            if (name.length < 3) {
                document.getElementById("nameError").textContent = "Name must be at least 4 characters";
                isValid = false;
            }

            // Email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                document.getElementById("emailError").textContent = "Please enter a valid email address";
                isValid = false;
            }

            // Phone validation
            const phonePattern = /^\d{7,15}$/;
            if (!phonePattern.test(phone)) {
                document.getElementById("phoneError").textContent = "Phone number must be 7-15 digits";
                isValid = false;
            }

            // Services validation
            if (!services) {
                document.getElementById("servicesError").textContent = "Please select a service";
                isValid = false;
            }

            // Company validation
            if (company.length < 2) {
                document.getElementById("companyError").textContent = "Company name must be at least 2 characters";
                isValid = false;
            }

            // Message validation
            if (message.length < 20) {
                document.getElementById("messageError").textContent = "Message must be at least 20 characters";
                isValid = false;
            }

            // Send if valid
            if(!isValid) return

            const submitButton = document.getElementById("submitButton")
            submitButton.disabled = true
            submitButton.innerHTML = `<span class="spinner-border spinner-border-sm"></span> Sending...`

            const formData = {
                name: name,
                email: email,
                phone:phone,
                countryCode: countryCode,
                services: services,
                company: company,
                message: message
            }

            try {
                await emailjs.send("service_9cnu4dn","template_d7lpmrk", formData)

                Swal.fire({
                    icon: "success",
                    title: "Message Submitted!",
                    text: "Our team will reach out to you shortly",
                    confirmButtonColor: "#3085d6"
                })
                document.getElementById("contact-form").reset()
            } catch (error) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong! Please try again.",
                    confirmButtonColor: "#d33"
                }),
                console.error("Error:", error)
            }finally{
                submitButton.disabled = false;
                submitButton.innerHTML = "Send Message"
            }
        });
    }
});
