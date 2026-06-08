/**
 * Mutkule Ashish Santosh — Portfolio JavaScript
 * ------------------------------------------------
 * Features:
 *  1. Scroll-reveal animation using IntersectionObserver
 *  2. Skill bar fill animation on scroll into view
 */

/**
 * 1. Scroll Reveal
 * Adds the "visible" class to any element with the "reveal"
 * class once it enters the viewport (12% threshold).
 */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => {
  revealObserver.observe(el);
});

/**
 * 2. Skill Bar Animation
 * Each .skill-bar starts at width: 0 and animates to its
 * target width (set inline via style="width: X%") once
 * the bar scrolls into view.
 */
document.querySelectorAll('.skill-bar').forEach(bar => {
  const targetWidth = bar.style.width;
  bar.style.width = '0%';

  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          bar.style.transition = 'width 1s ease';
          bar.style.width = targetWidth;
        }, 200);
        barObserver.unobserve(bar);
      }
    });
  }, { threshold: 0.5 });

  barObserver.observe(bar);
});
