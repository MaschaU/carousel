(function () {
    var kitties = document.querySelectorAll(".kitty-container img");
    const interval = 5000;
    var currentKitty = 0;
    var dots = document.getElementsByClassName("dot");
   
    for (var index=0; index<dots.length; index++) {
        dots[index].setAttribute("data-index",index);
        dots[index].addEventListener("click",function(e) {
            clearTimeout(timer);
            kitties[currentKitty].classList.add("offscreen-left");
            kitties[currentKitty].classList.remove("onscreen");
            timer = setTimeout(moveKitties,7000);

            for (var innerLoop=0; innerLoop<dots.length; innerLoop++) {
                
                if (dots[innerLoop]==e.target) {
                    currentKitty=innerLoop;
                    
                    dots[innerLoop].classList.add("on");
                    kitties[innerLoop].classList.add("onscreen");
                } else {
                    dots[innerLoop].classList.remove("on");
                }
            }
            
        });
    }
    function moveKitties() {
        kitties[currentKitty].classList.remove("onscreen");
        kitties[currentKitty].classList.add("offscreen-left");
        dots[currentKitty].classList.remove("on");
        currentKitty++;
        if (currentKitty >= kitties.length) {
            currentKitty = 0;
        }
        kitties[currentKitty].classList.add("onscreen");
        kitties[currentKitty].classList.remove("offscreen-left");
        dots[currentKitty].classList.add("on");
        timer = setTimeout(moveKitties, interval);
    }
    var timer = setTimeout(moveKitties, interval);

    document.addEventListener("transitionend", function () {
        for (var counter = 0; counter<kitties.length; counter++) {
            if (kitties[counter].classList.contains("offscreen-left")) {
                kitties[counter].classList.remove("offscreen-left");
            }
        }          
    });
})();


