document.addEventListener('DOMContentLoaded', () => {

    // helpers
    function clearActiveClass(arr, activeClass) {
        arr.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    // burger
    function burger(burger, burgerActiveClass, menu, menuActiveClass) {
        const _burger = document.querySelector(burger);
        const _menu = document.querySelector(menu);
        _burger.addEventListener('click', () => {
            _burger.classList.toggle(burgerActiveClass);
            _menu.classList.toggle(menuActiveClass);
        });
    }

    burger('.header__burger', 'header__burger--active', '.header-menu', 'header-menu--active');

    //bacground-image in main__card
    function bgImg(mainCard, path, ext) {
        const _mainCards = document.querySelectorAll(mainCard);
        _mainCards.forEach((item, index) => {
            item.style.backgroundImage = `url(${path}/img${index + 1}.${ext})`;
        });
    }

    bgImg('.main__card', './img/main', 'png');
    bgImg('.info-cert__card', './img/info', 'png');

    // slider in main
    function sliderMain(card, cardActiveClass, prev, next, section) {
        const cards = document.querySelectorAll(card),
              buttonPrev = document.querySelector(prev),
              buttonNext = document.querySelector(next),
              _section = document.querySelector(section);
        let counter = 0,
            interval;

        if (buttonPrev) {
            const prevSlide = () => {
                counter--;
                if (counter < 0) {
                    counter = cards.length - 1;
                }
                clearActiveClass(cards, cardActiveClass);
                cards[counter].classList.add(cardActiveClass);
            };
    
            const nextSlide = () => {
                counter++;
                if (counter > cards.length - 1) {
                    counter = 0;
                }
                clearActiveClass(cards, cardActiveClass);
                cards[counter].classList.add(cardActiveClass);
            };
    
            interval = setInterval(nextSlide, 8000);
    
            buttonPrev.addEventListener('click', () => {
                prevSlide();
            });
    
            buttonNext.addEventListener('click', () => {
                nextSlide();
            });
    
            _section.addEventListener('mouseover', () => {
                clearInterval(interval);
            });
    
            _section.addEventListener('mouseout', () => {
                interval = setInterval(nextSlide, 8000);
            });
        }
    }

    sliderMain('.main__card', 'main__card--active', '.main__arrow--prev', '.main__arrow--next', '.main');


    //numbers

    // ??????????
    function prettify(num) {
        var n = num.toString();
        return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
    }

    function numbers(number, limit, duration) {
        const _number = document.querySelector(number);

        const anim = (timestamp) => {
            let progress = timestamp * (limit/duration);
            if (progress > limit) {
                progress = limit;
                _number.textContent = prettify(progress);
                return;
            }
            _number.textContent = prettify(Math.floor(progress));
            window.requestAnimationFrame(anim);
        };
        anim();
    }

    function scrollListener(container) {
        const _container = document.querySelector(container);
        if (_container) {
            function scrolling() {
                if (document.documentElement.scrollTop >= _container.offsetTop - 100) {
                    numbers('.Iadv__card__title--1 span', 4500, 3000);
                    numbers('.Iadv__card__title--2 span', 1800, 3000);
                    numbers('.Iadv__card__title--3 span', 3190, 3000);
                    numbers('.Iadv__card__title--4 span', 13, 3000);
    
                    document.removeEventListener('scroll', scrolling);
                }
            }
            document.addEventListener('scroll',scrolling);
        }
    }
    scrollListener('.Iadv__container');


    // ?????????????? ymaps.ready() ?????????? ??????????????, ??????????
    // ???????????????????? ?????? ???????????????????? API, ?? ?????????? ?????????? ?????????? ???????????? DOM-????????????.
    ymaps.ready(init);
    function init(){
        // ???????????????? ??????????.
        if (document.getElementById('map')) {
            var myMap = new ymaps.Map("map", {
                // ???????????????????? ???????????? ??????????.
                // ?????????????? ???? ??????????????????: ??????????????, ????????????????.
                // ?????????? ???? ???????????????????? ???????????????????? ???????????? ?????????? ??????????????,
                // ???????????????????????????? ???????????????????????? ?????????????????????? ??????????????????.
                center: [53.098246, 50.042488],
                // ?????????????? ??????????????????????????????. ???????????????????? ????????????????:
                // ???? 0 (???????? ??????) ???? 19.
                zoom: 12
            });
    
            myMap.geoObjects.add(new ymaps.Placemark([53.092932, 49.964125], {
                balloonContent: '?????????? - ??????????????????-?????????????????????????? ???????????????? ????????????, ?????????????????? ??????????????, ????????????????????????????, ?????????? ????????????????????????, 13 ?????????????????????? ????????????, ??????????????????, ???????????? ????????????????????????',
                iconCaption: '?????????? - ??????????????????-?????????????????????????? ????????????????'
            }, {
                preset: 'islands#greenDotIconWithCaption'
            }));
            myMap.geoObjects.add(new ymaps.Placemark([52.976661, 49.705707], {
                balloonContent: '????????????????-?????????????????????? ???????????????? ?????????? ??. ????????????????',
                iconCaption: '????????????????-?????????????????????? ???????????????? ?????????? ??. ????????????????'
            }, {
                preset: 'islands#greenDotIconWithCaption'
            }));
            myMap.geoObjects.add(new ymaps.Placemark([53.203230, 50.177924], {
                balloonContent: '????????????????-?????????????????????? ???????????????? ?????????? ??. ????????????',
                iconCaption: '????????????????-?????????????????????? ???????????????? ?????????? ??. ????????????'
            }, {
                preset: 'islands#greenDotIconWithCaption'
            }));
            myMap.behaviors.disable('scrollZoom');            
        }
        // ???????????????? ??????????.
        if (document.getElementById('map2')) {
            var myMap2 = new ymaps.Map("map2", {
                // ???????????????????? ???????????? ??????????.
                // ?????????????? ???? ??????????????????: ??????????????, ????????????????.
                // ?????????? ???? ???????????????????? ???????????????????? ???????????? ?????????? ??????????????,
                // ???????????????????????????? ???????????????????????? ?????????????????????? ??????????????????.
                center: [53.092932, 49.964125],
                // ?????????????? ??????????????????????????????. ???????????????????? ????????????????:
                // ???? 0 (???????? ??????) ???? 19.
                zoom: 12
            });
    
            myMap2.geoObjects.add(new ymaps.Placemark([53.092932, 49.964125], {
                balloonContent: '????????????????-?????????????????????? ???????????????? ??????????',
                iconCaption: '????????????????-?????????????????????? ???????????????? ??????????'
            }, {
                preset: 'islands#greenDotIconWithCaption'
            }));
            myMap2.behaviors.disable('scrollZoom');            
        }
        // ???????????????? ??????????.
        if (document.getElementById('map3')) {
            var myMap3 = new ymaps.Map("map3", {
                // ???????????????????? ???????????? ??????????.
                // ?????????????? ???? ??????????????????: ??????????????, ????????????????.
                // ?????????? ???? ???????????????????? ???????????????????? ???????????? ?????????? ??????????????,
                // ???????????????????????????? ???????????????????????? ?????????????????????? ??????????????????.
                center: [52.976661, 49.705707],
                // ?????????????? ??????????????????????????????. ???????????????????? ????????????????:
                // ???? 0 (???????? ??????) ???? 19.
                zoom: 12
            });
    
            myMap3.geoObjects.add(new ymaps.Placemark([52.976661, 49.705707], {
                balloonContent: '????????????????-?????????????????????? ???????????????? ?????????? ??. ????????????????',
                iconCaption: '????????????????-?????????????????????? ???????????????? ?????????? ??. ????????????????'
            }, {
                preset: 'islands#greenDotIconWithCaption'
            }));
            myMap3.behaviors.disable('scrollZoom');            
        }
        // ???????????????? ??????????.
        if (document.getElementById('map4')) {
            var myMap4 = new ymaps.Map("map4", {
                // ???????????????????? ???????????? ??????????.
                // ?????????????? ???? ??????????????????: ??????????????, ????????????????.
                // ?????????? ???? ???????????????????? ???????????????????? ???????????? ?????????? ??????????????,
                // ???????????????????????????? ???????????????????????? ?????????????????????? ??????????????????.
                center: [53.203230, 50.177924],
                // ?????????????? ??????????????????????????????. ???????????????????? ????????????????:
                // ???? 0 (???????? ??????) ???? 19.
                zoom: 12
            });
    
            myMap4.geoObjects.add(new ymaps.Placemark([53.203230, 50.177924], {
                balloonContent: '????????????????-?????????????????????? ???????????????? ?????????? ??. ????????????',
                iconCaption: '????????????????-?????????????????????? ???????????????? ?????????? ??. ????????????'
            }, {
                preset: 'islands#greenDotIconWithCaption'
            }));
            myMap4.behaviors.disable('scrollZoom');            
        }

    }


    // ?????????????? ?????? ??????????????

    function calcScroll() {
        let div = document.createElement('div');
      
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';
      
        document.body.appendChild(div);
        let scarollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
      
        return scarollWidth;
    }

    let scrollWidth = calcScroll();

    function modal(modal, modalActiveClass, triggers, modalClose) {
        const triggers_ = document.querySelectorAll(triggers),
              modal_ = document.querySelector(modal),
              modalClose_ = document.querySelector(modalClose);

        if (triggers_.length > 0) {
            triggers_.forEach(item => {
                item.addEventListener('click', () => {
                    modal_.classList.add(modalActiveClass);
                    document.body.style.overflow = 'hidden';
                    document.body.style.marginRight = `${scrollWidth}px`;
                });
            });

            modalClose_.addEventListener('click', () => {
                modal_.classList.remove(modalActiveClass);
                document.body.style.overflow = '';
                document.body.style.marginRight = '0px';
            });
    
            modal_.addEventListener('click', (e) => {
                if (e.target.classList.contains(modal.replace(/\./, ''))) {
                    modal_.classList.remove(modalActiveClass);
                    document.body.style.overflow = '';
                    document.body.style.marginRight = '0px';
                }
            });
        }
    }

    modal('.modal-Icontacts', 'modal--active', '[data-modalIcontacts]', '.modal-Icontacts__close');
    modal('.modal-main', 'modal--active', '[data-modalMain]', '.modal-main__close');
    modal('.modal-info', 'modal--active', '.info-cert__card', '.modal-info__close');

    //msg
    function msg(elem, elemActiveClass, elemClickedClass) {
        const _elem = document.querySelector(elem);

        _elem.addEventListener('click', () => {
            _elem.classList.toggle(elemActiveClass);
            _elem.classList.add(elemClickedClass);
        });
    }

    msg('.msg-wrap', 'msg-wrap--click', 'msg-wrap--clicked');

    function msgModal(modal, trigger, modalActiveClass) {
        const _modal = document.querySelector(modal),
              _trigger = document.querySelector(trigger);

        _trigger.addEventListener('click', () => {
            _modal.classList.toggle(modalActiveClass);
        });
    }

    msgModal('.modal-second', '[data-modalSecond]', 'modal-second--active');


    // send image to modal

    function sendImgToModal (elem, img) {
        const elems = document.querySelectorAll(elem);
        const _img = document.querySelector(img);

        elems.forEach(el => {
            el.addEventListener('click', (e) => {
                const path = e.target.getAttribute('data-path');
                console.log(path, _img);
                _img.setAttribute('src', path);
            });
        });
    }

    sendImgToModal('.info-cert__card', '.modal-info__img');

});