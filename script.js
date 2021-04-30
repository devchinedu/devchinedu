var darkTheme = document.getElementById("dark");

darkTheme.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        darkTheme.src = "./images/sun.png";
    }else{
        darkTheme.src = "./images/moon.png";
    }
}