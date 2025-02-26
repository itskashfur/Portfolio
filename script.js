document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const section = document.querySelector(this.getAttribute("href"));
            section.scrollIntoView({ behavior: "smooth" });
        });
    });

        // Function to open the project page when clicked
    function openProject(page) {
        window.open(page, "_blank"); // Opens project page in a new tab
    }


    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Message Sent Successfully!");
    });
});
