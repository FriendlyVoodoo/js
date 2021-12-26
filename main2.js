const next = document.getElementById('btn-next')
prev = document.getElementById('btn-prev')
dots = document.querySelectorAll('.dot')
slieds = document.querySelectorAll('.slide')

let index = 0

const prepareCurrentSlide = ind => {
    activeDot(index);
    activeSlied(index);
}

const activeDot = n => {
    for (dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const activeSlied = n => {
    for (slied of slieds) {
        slied.classList.remove('active');
    }
    slieds[n].classList.add('active');
}

const nextSlide = () => {
    if (index == slieds.length - 1) {
        index = 0
        prepareCurrentSlide(index);
    } else {
        index++
        prepareCurrentSlide(index);
    }
}

const prevSlide = () => {
    if (index == 0) {
        index = slieds.length - 1
        prepareCurrentSlide(index);
    } else {
        index--
        prepareCurrentSlide(index);
    }
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
    })
});

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);