document.addEventListener('DOMContentLoaded', function (){
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const container = document.querySelector('.column-container');
    let current = 0;

    setInterval(() => {
        current++;
        slider.style.transition = 'transform 0.8s ease-in-out';
        slider.style.transform = `translateX(-${current * container.offsetWidth}px)`;

        if( current === slides.length - 1){
            setTimeout(() => {
                slider.style.transition = 'none';
                slider.style.transform = `translateX(0px)`;
                current = 0;
            }, 850);
        }
    }, 2000);

    window.addEventListener('resize', () => {
        slider.style.transition = 'none';
        slider.style.transform = `translateX(-${current * container.offsetWidth}px)`;
    });
})

