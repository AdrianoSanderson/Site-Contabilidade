document.getElementById("button-menu").addEventListener("click", function(){
    const mobileMenu = document.querySelector(".mobile-menu")

    if(mobileMenu.classList.contains("exit")){
        mobileMenu.classList.remove("exit")
        document.querySelector(".icon").src = "assets/img/exit.png"
    }else{
        mobileMenu.classList.add("exit")
        document.querySelector(".icon").src = "assets/img/icons8-cardápio-50.png"
    }
})