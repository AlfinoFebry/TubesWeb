const signInButtonLink = document.querySelector('.signin-link');
const signUpButtonLink = document.querySelector('.signup-link');
const wrapper = document.querySelector('.container');

signUpButtonLink.addEventListener('click', ()=>{
    wrapper.classList.toggle('active');
})

signInButtonLink.addEventListener('click', ()=>{
    wrapper.classList.toggle('active');
})