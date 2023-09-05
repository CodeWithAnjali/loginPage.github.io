let wrapper = document.querySelector('.wrapper'),
    signUpLink = document.querySelector('.link .signup-link'),
    signInLink = document.querySelector('.link .signin-link');

signUpLink.addEventListener('click', () => {
    wrapper.classList.add('animated-signin');
    wrapper.classList.remove('animated-signup');
});

signInLink.addEventListener('click', () => {
    wrapper.classList.add('animated-signup');
    wrapper.classList.remove('animated-signin');
});





document.addEventListener("DOMContentLoaded", function () {
    const welcomeContainer = document.querySelector(".welcome-container");
    setTimeout(function () {
        welcomeContainer.style.display = "block";
    }, 1000); 
});


