// Navbar page elements
let navbar=document.querySelector('.navbar');
let sections=document.querySelectorAll('section')
let navLinks=document.querySelectorAll('.navbar-middle a')

// Calculator page elements
let calculator=document.querySelector('.calculator')
let calculatorOpen=document.querySelectorAll('.main-btn2')
let calculatorClose=document.querySelector('.calculator-img')
let calculatorToConsultation=document.querySelector('#calculatorToConsultation')

// For calculator result
let surface=document.querySelector('#surface')
let height=document.querySelector('#height')
let result=document.querySelector('#result')
let calculate=document.querySelector('.calculator-btn')

// Consultation page elements
let consultation=document.querySelector('.consultation')
let consultationOpen=document.querySelectorAll('.main-btn1')
let consultationClose=document.querySelector('.consultation-img')
let consultationForm=document.querySelector('.consultation-form') 

// For show and hide modal
let modalForm=document.querySelector('.contact-form')
let modal=document.querySelector('.modal')
let modalCloseBtn=document.querySelector('#modalClose')

// Navbar mobile
const navbarMobile=document.querySelector('.navbar-mobile')
const burger=document.querySelector('.burger');

// Open and close navbar
burger.addEventListener('click',()=>{
    navbarMobile.classList.remove('hide')
    navbarMobile.classList.add('active12')
})
navbarMobile.addEventListener('click',()=>{
    navbarMobile.classList.add('hide')
})

// Show and hide modal where forms submited
function showModal(){
    modal.classList.remove('hide')
    setTimeout(()=>{
        modal.classList.add('hide')
        modalForm.reset();
        consultationForm.reset();
        consultation.classList.add('hide');
    },1500)
}

modalForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    showModal();
})

consultationForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    showModal();
})

modalCloseBtn.addEventListener('click',()=>{
    modal.classList.add('hide');
    modalForm.reset();
    consultationForm.reset();
    consultation.classList.add('hide');
})



// Active page on scroll
window.addEventListener('scroll',()=>{
    navbar.classList.toggle('sticky',window.scrollY>0)
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');
        if(top>=offset && top <offset + height){
            navLinks.forEach(link=>{
                link.classList.remove('active');
                document.querySelector('.navbar-middle a[href*='+id+']').classList.add('active')
            })
        }
    })
})



// Calculator open and close
calculatorOpen.forEach(btn=>{
    btn.addEventListener('click',()=>{
        calculator.classList.remove('hide')
    })
})
calculatorClose.addEventListener('click',()=>{
    calculator.classList.add('hide')
    console.log('sss')
})

// Calculate result
calculate.addEventListener('click',()=>{
    console.log('bosildi')
    if(height.value=='' || surface.value==''){
        press=false
        result.textContent='Пожалуйста, введите необходимую информацию'
        result.classList.add('errorMessage')
        setTimeout(()=>{
            result.classList.remove('errorMessage')
            result.textContent=''
        },3000)
    }
    else{
        result.classList.remove('errorMessage')
        result.textContent=height.value*surface.value*1.25+'$';
        height.value='';
        surface.value='';
        console.log(height.value)
    }
})


// Calculator close and open consultation
calculatorToConsultation.addEventListener('click',()=>{
    calculator.classList.add('hide')
    consultation.classList.remove('hide')
})


// Consultation open and close
consultationOpen.forEach(btn=>{
    btn.addEventListener('click',()=>{
        consultation.classList.remove('hide')
    })
})
consultationClose.addEventListener('click',()=>{
    consultation.classList.add('hide')
})













// links.forEach((link)=>{
//     link.addEventListener('click',(e)=>{
//         links.forEach((link)=>{
//             link.classList.remove('active')
//         })
//         e.target.classList.add('active')
//     })
// })
