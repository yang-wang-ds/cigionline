import './css/twentieth_page_singleton.scss';
import 'swiper/swiper.scss';
import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

const swiperContainer = document.querySelector('.swiper-container');
if (swiperContainer) {
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,

    breakpoints: {
      768: {
        slidesPerView: 3,
      },
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  const setSwiperPadding = (slideIndex) => {
    const offsetHeight = (screen.width > 768 ? 70 : 20);
    swiperContainer.style.paddingBottom = `${
      offsetHeight + swiper.slides[slideIndex].querySelector('.gallery-text').offsetHeight
    }px`;
  };

  const timelineNavButtons = document.querySelectorAll(
    '#timeline-nav li button',
  );
  const years = JSON.parse(document.getElementById('years').textContent);

  const toggleYear = function() {
    [].map.call(timelineNavButtons, function(elem) {
      elem.classList.remove('active');
    });
    this.classList.add('active');
    swiper.slideTo(years.indexOf(this.dataset.year));
  };
  [].map.call(timelineNavButtons, function(elem) {
    elem.addEventListener('click', toggleYear, false);
  });

  swiper.on('activeIndexChange', function(e) {
    for (let i = 0; i < timelineNavButtons.length; i += 1) {
      if (timelineNavButtons[i].dataset.year === years[e.activeIndex]) {
        [].map.call(timelineNavButtons, function(elem) {
          elem.classList.remove('active');
        });
        timelineNavButtons[i].classList.add('active');
      }
    }

    setSwiperPadding(e.activeIndex);
  });

  setSwiperPadding(0);
  window.addEventListener('resize', function() { setSwiperPadding(swiper.activeIndex); });
}
