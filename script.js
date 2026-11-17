document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      hamburger.classList.toggle('toggle');

      navLinks.querySelectorAll('li').forEach((link) => {
        link.classList.toggle('fade');
      });
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('toggle');

        navLinks.querySelectorAll('li').forEach((item) => {
          item.classList.remove('fade');
        });
      });
    });
  }
});

window.addEventListener('resize', () => {
  const navLinks = document.querySelector('.nav-links');
  const hamburger = document.querySelector('.hamburger');

  if (window.innerWidth > 800 && navLinks) {
    navLinks.classList.remove('open');
    navLinks.querySelectorAll('li').forEach((item) => item.classList.remove('fade'));
  }

  if (hamburger) {
    hamburger.classList.remove('toggle');
  }
});

if (document.getElementById('image-track')) {
  const track = document.getElementById('image-track');

  const handleOnDown = (e) => {
    track.dataset.mouseDownAt = String(e.clientX);
  };

  const handleOnUp = () => {
    track.dataset.mouseDownAt = '0';
    track.dataset.prevPercentage = track.dataset.percentage || '0';
  };

  const handleOnMove = (e) => {
    if (track.dataset.mouseDownAt === '0') return;

    const mouseDelta = Number(track.dataset.mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth / 2;
    const percentage = (mouseDelta / maxDelta) * -100;
    const nextPercentageUnconstrained = (Number(track.dataset.prevPercentage || 0) + percentage);
    const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    track.dataset.percentage = String(nextPercentage);

    if (track.animate) {
      track.animate({ transform: `translate(${nextPercentage}%, -50%)` }, { duration: 1200, fill: 'forwards' });
    }

    for (const image of track.getElementsByClassName('image')) {
      if (image.animate) {
        image.animate({ objectPosition: `${100 + nextPercentage}% center` }, { duration: 1200, fill: 'forwards' });
      }
    }
  };

  window.onmousedown = handleOnDown;
  window.ontouchstart = (e) => handleOnDown(e.touches[0]);
  window.onmouseup = handleOnUp;
  window.ontouchend = (e) => handleOnUp(e.touches[0]);
  window.onmousemove = handleOnMove;
  window.ontouchmove = (e) => handleOnMove(e.touches[0]);
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.jude');
hiddenElements.forEach((el) => observer.observe(el));

(function () {
  'use strict';

  const items = document.querySelectorAll('.timeline li');

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (let i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add('in-view');
      }
    }
  }

  window.addEventListener('load', callbackFunc);
  window.addEventListener('resize', callbackFunc);
  window.addEventListener('scroll', callbackFunc);
})();

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('toggle');
  });
}

if (navLinks) {
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      if (hamburger) hamburger.classList.remove('toggle');
    });
  });
}

if (typeof IntersectionObserver === 'undefined') {
  document.querySelectorAll('.jude').forEach((el) => el.classList.add('show'));
}







"use strict";

const nav = document.querySelector('.nav-links');
if (nav) {
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });
}

if (document.querySelector('.hamburger')) {
  document.querySelector('.hamburger').addEventListener('click', () => {
    if (nav) nav.classList.toggle('open');
  });
}

if (document.querySelector('.hamburger')) {
  document.querySelector('.hamburger').classList.remove('toggle');
}

if (window.innerWidth <= 800 && nav) {
  nav.classList.remove('open');
}

if (document.querySelector('.toggle')) {
  document.querySelector('.toggle').classList.remove('toggle');
}

















































































































































































































































