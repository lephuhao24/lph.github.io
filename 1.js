document.addEventListener("DOMContentLoaded", function () {
    var nut = document.querySelectorAll(".chuyenslide li");
    var slide = document.querySelectorAll(".cacslide ul li");
    for (var j = 0; j < nut.length; j++) {
        nut[j].addEventListener("click", function () {
            for (var i = 0; i < nut.length; i++) {
                nut[i].classList.remove("active");
            }
            this.classList.add("active");

            nutkichhoat = this;
            var vitri = 0;
            for (vitri = 0; nutkichhoat = nutkichhoat.previousElementSibling ; vitri++) {}
            console.log(vitri);
            
            for (var k = 0; k < slide.length; k++) {
                slide[k].classList.remove("active");
            }
            slide[vitri].classList.add("active");
        })
    }


})