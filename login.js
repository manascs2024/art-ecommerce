const toggleForms = () => {
    const loginContainer = document.querySelector('.login-container');
    const registerContainer = document.querySelector('.register-container');
    
    loginContainer.classList.toggle('hidden');
    registerContainer.classList.toggle('hidden');
};

const toggleFormLinks = document.querySelectorAll('.toggle-form');
toggleFormLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        toggleForms();
    });
});