const slider = document.querySelector(".slider");
const modeText = document.getElementById('mode-text')

slider.addEventListener("click", ()=>{
    document.body.classList.toggle("light-mode");
    if(document.body.classList.contains('light-mode')){
        slider.parentElement.classList.add('active');
        modeText.innerText = "Light Mode";
    }
    else{
        slider.parentElement.classList.remove('active');
        modeText.innerText = "Dark Mode";
    }
});