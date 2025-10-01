
   


 document.addEventListener("DOMContentLoaded", function () {

   AOS.init({
    duration: 1200,   
    once: false     
    
  });

    const form = document.getElementById("contactform");
    const alertBox = document.getElementById("formAlert");
    const submitButton = form.querySelector("button");

    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alertBox.textContent = "Please fill out all fields!";
            alertBox.className = "text-red-600 mt-4 font-semibold";
            return;
        }

        submitButton.disabled = true;
        submitButton.textContent = "Sending...";

        try {
            let res;

            if (window.location.hostname === "localhost") {
                // 🖥️ Localhost → use Spring Boot backend
                res = await fetch("http://localhost:8080/api/sendMessage", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name, email, message })
                });
            } else {
                // 🌍 Live site → use Formspree
                const formData = new FormData(form);
                res = await fetch("https://formspree.io/f/xqayqwyd", {
                    method: "POST",
                    body: formData,
                    headers: { "Accept": "application/json" }
                });
            }

            if (!res.ok) throw new Error("Failed to send message");

            alertBox.textContent = "Message sent successfully!";
            alertBox.className = "text-green-600 mt-4 font-semibold";
            form.reset();
        } catch (err) {
            console.error(err);
            alertBox.textContent = "Something went wrong! Please try again.";
            alertBox.className = "text-red-600 mt-4 font-semibold";
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = "Send Message";
        }
    });
});


 

    // ===== MODAL LOGIC =====
    const details = {
        frontend: "Built responsive websites using HTML, CSS, Tailwind, and JS. Implemented modern designs and interactive UI.",
        backend: "Created REST APIs and handled server-side logic in Java & Spring Boot. Integrated with database and external services.",
        database: "Designed and managed MySQL databases. Optimized queries and ensured data integrity for applications.",
        ssc: "Completed SSC with 90.20%, from G.B.M.M. High School, Hinganghat, Wardha, Maharashtra.",
        diploma: "Completed Diploma in Computer Engineering with Distinction (79.26%) from Goverment polytechnic,Arvi. Arvi, Wardha, Maharashtra. Learned programming & Collaboration.",
        btech: "Currently in 3rd year of B.Tech IT From Kavikulguru Institute of Technology and Science, Ramtek, Nagpur, Maharashtra. Focused on software development, web & mobile applications."
    };

    window.openModal = function(key) {
        document.getElementById('modal-title').textContent = key.charAt(0).toUpperCase() + key.slice(1);
        document.getElementById('modal-content').textContent = details[key];
        document.getElementById('modal').classList.remove('hidden');
        document.getElementById('modal').classList.add('flex');
    };

    window.closeModal = function() {
        document.getElementById('modal').classList.add('hidden');
        document.getElementById('modal').classList.remove('flex');
    };


const btn = document.getElementById("menu-btn");
  const menu = document.getElementById("menu");

  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });