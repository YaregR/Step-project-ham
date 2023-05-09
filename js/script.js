//Our Services
const services = document.querySelector('.services-menu');
services.addEventListener('click', function (ev) {
    let data = ev.target.dataset.type;
    document.querySelector('.active-item').classList.remove('active-item');
    ev.target.classList.add('active-item');
    document.querySelector('.active-tab').classList.remove('active-tab');
    document.querySelector(`[data-li = "${data}"]`).classList.add('active-tab');
});

//Our Amazing Work
const works = document.querySelector('.work-menu');
const btnLoad = document.querySelector('.btn-load');
const workCard = document.querySelectorAll('.work-card');


works.addEventListener('click', function (ev) {
    let data = ev.target.dataset.filter;
    document.querySelector('.work-item-active').classList.remove('work-item-active');
    ev.target.classList.add('work-item-active');

    if (data != 'all') {
        const view = document.querySelectorAll('.view');
        btnLoad.classList.remove('hide');
        view.forEach((el) => {
            el.classList.remove('view');
        });
    } else {
        workCard.forEach((el) => {
            el.classList.add('view');
        });
        btnLoad.classList.add('hide');
    }
      
    let filterView = document.querySelectorAll(`[data-img = "${data}"]`);
    filterView.forEach((el) => {
        el.classList.add('view');
    });       
});

btnLoad.addEventListener('click', () => {
    workCard.forEach((el) => {
        el.classList.add('view');
        btnLoad.classList.add('hide');
    })
});


//What People Say About the Ham
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
const imgSmall = document.querySelector('.img-small-wrapper');

imgSmall.addEventListener('click', function (ev) {
    let data = ev.target.dataset.img;
    document.querySelector('.active-img').classList.remove('active-img');
    ev.target.classList.add('active-img');
    document.querySelector('.feedback-block-view').classList.remove('feedback-block-view');
    document.querySelector(`[data-img-name = "${data}"]`).classList.add('feedback-block-view');
});

btnRight.addEventListener('click', () => {
    imgSmall.scrollBy(97, 0);
})

btnLeft.addEventListener('click', () => {
    imgSmall.scrollBy(-97, 0);   
})