'use strict';



document.addEventListener("scroll", () => {
    const contentOpacity = document.querySelector(".content__title");
    const serivceItemOpacity = document.querySelector(".service__item");
    const animationItem = document.querySelectorAll("#geos .animation__item");
    const mapContainerOpacity = document.querySelector(".map__container");
    const map = document.querySelectorAll(".map");
    const firstAnimation = document.querySelector("#parteners .inner--first");
    const secondAnimation = document.querySelector("#parteners .inner--second");
    const partenersItems = document.querySelectorAll(".parteners__item");
    const windowHeight = window.scrollY;
    console.log(windowHeight);
    if (windowHeight > "1236" && windowHeight < "1361") {
        contentOpacity.classList.add("content__visible");
    }
    else if (windowHeight > "1632" && windowHeight <= "1900") {
        serivceItemOpacity.classList.add("service__visible");
    }
    else if (windowHeight > "5870" && windowHeight <= "6400") {
        mapContainerOpacity.classList.add("slowin__animation__item");
    }
    else if (windowHeight > "7293" && windowHeight <= "7438") {
        firstAnimation.classList.add("first__slowin");
        secondAnimation.classList.add("second__slowin");
    }
    partenersItems.forEach((partenersAni) => {
        if (windowHeight > "7526" && windowHeight <= "7626") {
            partenersAni.classList.add("parteners__item__animation");
        }
    });

    animationItem.forEach((animate) => {
        if (windowHeight > "5268" && windowHeight <= "5303") {
            animate.classList.add("slowin__animation__item");
        }
    });
    map.forEach((Individual) => {
        if (windowHeight > "5870" && windowHeight <= "6400") {
            Individual.classList.add("slowin__Individual__map");
        }
    });

});

