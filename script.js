window.addEventListener('scroll', ()=>{
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
})

const navigation = document.querySelector('nav');

const classToggle = document.querySelector('.toggle');
classToggle.addEventListener('click', function(){
    this.classList.toggle('active')
    navigation.classList.toggle('active');
})

//buttons
const learnMore = document.querySelectorAll('.learn');
const sec3 = document.querySelector('.sec3');
const aLink = document.querySelector('.a-Link');

learnMore.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        e.preventDefault();
        sec3.scrollIntoView({behavior:"smooth"});
})
})
aLink.addEventListener('click', (e)=>{
    e.preventDefault();
    sec3.scrollIntoView({behavior:"smooth"})
})

const scrollToImages = document.querySelector('.a-Images');
const sec4 = document.querySelector('.sec4');
scrollToImages.addEventListener('click', (e)=>{
    e.preventDefault();
    sec4.scrollIntoView({behavior:"smooth"})
})
//scroll to designer info
const cardDesigner = document.querySelector('.card');
const cardScroll = document.querySelector('.cardScroll');
cardScroll.addEventListener('click', (e)=>{
    e.preventDefault();
    cardDesigner.scrollIntoView({behavior:"smooth"})
})