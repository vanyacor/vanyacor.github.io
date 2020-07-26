document.addEventListener("DOMContentLoaded", function () {
    const navBtn = document.querySelectorAll(".nav-btn");

    function removeClass() {
        navBtn.forEach(function (e) {
            e.classList.remove("active");
        });
    }
    navBtn.forEach(function (e) {
        e.addEventListener('click', function () {
            removeClass();
            this.classList.add('active');
        });
    });
});