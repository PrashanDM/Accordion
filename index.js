const accordions = document.querySelectorAll('.ac');

accordions.forEach(accordions => {
    accordions.addEventListener('click', e =>{
        accordions.classList.toggle('active')
        
    })

})
