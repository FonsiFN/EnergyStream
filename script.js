document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll('.info-box');

    boxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            box.style.transition = "all 0.2s ease-in-out";
            box.style.transform = "rotate(2deg)";
        });

        box.addEventListener('mouseleave', () => {
            box.style.transform = "rotate(0deg)";
        });
    });
});
