let loaderAnimation = document.querySelector('.loader-animation')

setTimeout(() =>{
 loaderAnimation.style.display = 'none'
},3000)

let passwordEye = document.querySelector('.password-eye')
passwordEye.addEventListener('click', () =>{
    passwordEye.classList.toggle('bi-eye')
    passwordEye.classList.toggle('bi-eye-close')
})