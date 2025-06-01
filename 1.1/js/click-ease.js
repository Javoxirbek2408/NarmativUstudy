const btn = document.querySelector('#openbtn')
const openbtn = document.querySelector('.easeOne')
const clousebtn = document.querySelector('.yopishbtn')

console.log(btn);



btn.addEventListener('click', () => {
    openbtn.style.scale = '1';
})
clousebtn.addEventListener('click', () => {
    openbtn.style.scale = '0';

})

window.addEventListener("click", () => {
    openbtn.style.display = "none"
})