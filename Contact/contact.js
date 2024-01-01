document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        console.log('Form Data:', data);

        // Here you would typically make an AJAX request to your server
        // For example using fetch() or XMLHttpRequest

        alert('Form submitted! Check the console for the data.');
    });
});
