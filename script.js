document.querySelector(".container").addEventListener('click', ()=>{
    document.querySelector('.mobile-menu').classList.toggle("menuup");
})

let darkmode = localStorage.getItem('darkmode');

const toggleDarkmode = document.querySelector('#themeBtn');

const enableDarkMode =() =>{
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'enabled');
};
const disableDarkMode =() =>{
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
};  

if (darkmode === 'enabled'){
    enableDarkMode();
}

toggleDarkmode.addEventListener('click', ()=>{
    darkmode = localStorage.getItem('darkmode');
    if(darkmode !== 'enabled'){
        enableDarkMode()
    }
    else{
        disableDarkMode()
    }
})