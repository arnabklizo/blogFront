// dashboard close button 
let closeBtn = document.querySelector('.closeBtn');
let ctrlPannel = document.querySelector('.ctrlPannel');

closeBtn.addEventListener('click', function () {
    ctrlPannel.classList.toggle('hidesideBar');
})


document.querySelectorAll('.btnshort').forEach(button => {
    button.addEventListener('click', function () {
        console.log("Button clicked!");
        this.classList.toggle('btnRotate')
    });
});