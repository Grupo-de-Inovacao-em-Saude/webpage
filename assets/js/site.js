document.addEventListener('DOMContentLoaded', () => {
  // Update footer years
  const currentYear = new Date().getFullYear();
  document.querySelectorAll('[data-current-year]').forEach((el) => {
    el.textContent = currentYear;
  });

  // Sticky header shadow
  const header = document.getElementById('main-header');
  if (header) {
    const toggleHeaderShadow = () => {
      if (window.scrollY > 20) {
        header.classList.add('shadow-lg');
      } else {
        header.classList.remove('shadow-lg');
      }
    };
    window.addEventListener('scroll', toggleHeaderShadow);
    toggleHeaderShadow();
  }

  // Mobile navigation
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileMenu.addEventListener('click', (event) => {
      if (event.target.tagName === 'A') {
        mobileMenu.classList.add('hidden');
      }
    });
  }

  // Scroll progress bar
  const progressBar = document.getElementById('scroll-progress-indicator');
  if (progressBar) {
    const updateProgressBar = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const totalScrollable = scrollHeight - clientHeight;
      if (totalScrollable > 0) {
        const scrollPercent = (scrollTop / totalScrollable) * 100;
        progressBar.style.width = `${scrollPercent}%`;
      }
    };

    window.addEventListener('scroll', updateProgressBar);
    updateProgressBar();
  }

  // Parallax background accents for profile pages
  const parallaxLayers = document.querySelectorAll('[data-parallax]');
  if (parallaxLayers.length > 0) {
    const updateParallax = () => {
      parallaxLayers.forEach((layer) => {
        const speed = parseFloat(layer.dataset.parallax) || 0.2;
        const container = layer.closest('[data-parallax-container]');
        if (!container) return;
        const rect = container.getBoundingClientRect();
        const offset = rect.top * speed;
        layer.style.transform = `translate3d(0, ${offset}px, 0)`;
      });
    };

    updateParallax();
    window.addEventListener('scroll', updateParallax, { passive: true });
    window.addEventListener('resize', updateParallax);
  }

  // Intersection observer for animated sections
  const animatedSections = document.querySelectorAll('.animated-section');
  if (animatedSections.length > 0) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        });
      },
      { threshold: 0.2 }
    );

    animatedSections.forEach((section) => sectionObserver.observe(section));
  }

  // Hero slider logic
  const slides = document.querySelectorAll('#home .slide');
  const dotsContainer = document.querySelector('.slider-dots');
  if (slides.length > 0 && dotsContainer) {
    let currentSlide = 0;
    const dots = [];
    let slideIntervalId = null;

    const goToSlide = (index) => {
      if (slides[currentSlide]) {
        slides[currentSlide].classList.remove('active');
      }
      if (dots[currentSlide]) {
        dots[currentSlide].classList.remove('bg-white');
        dots[currentSlide].classList.add('bg-white/40');
      }

      currentSlide = (index + slides.length) % slides.length;

      if (slides[currentSlide]) {
        slides[currentSlide].classList.add('active');
      }
      if (dots[currentSlide]) {
        dots[currentSlide].classList.add('bg-white');
        dots[currentSlide].classList.remove('bg-white/40');
      }
    };

    const startInterval = () => {
      if (slides.length > 1) {
        slideIntervalId = window.setInterval(() => {
          goToSlide(currentSlide + 1);
        }, 7000);
      }
    };

    const resetInterval = () => {
      if (slideIntervalId) {
        window.clearInterval(slideIntervalId);
      }
      startInterval();
    };

    slides.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.className = 'w-3 h-3 rounded-full bg-white/40 transition-all duration-300 backdrop-blur-sm';
      dot.addEventListener('click', () => {
        goToSlide(index);
        resetInterval();
      });
      dotsContainer.appendChild(dot);
      dots.push(dot);
    });

    if (dots[0]) {
      dots[0].classList.add('bg-white');
      dots[0].classList.remove('bg-white/40');
    }

    startInterval();
  }

  // Interactive timelines
  const timelines = document.querySelectorAll('[data-timeline]');
  if (timelines.length > 0) {
    timelines.forEach((timeline) => {
      const triggers = timeline.querySelectorAll('[data-timeline-trigger]');
      const panels = timeline.querySelectorAll('[data-timeline-panel]');

      if (triggers.length === 0 || panels.length === 0) {
        return;
      }

      let activeIndex = 0;

      const setActive = (index) => {
        activeIndex = index;
        triggers.forEach((trigger, triggerIndex) => {
          if (triggerIndex === activeIndex) {
            trigger.classList.add('is-active');
          } else {
            trigger.classList.remove('is-active');
          }
        });

        panels.forEach((panel, panelIndex) => {
          if (panelIndex === activeIndex) {
            panel.classList.add('is-active');
          } else {
            panel.classList.remove('is-active');
          }
        });
      };

      triggers.forEach((trigger, index) => {
        trigger.addEventListener('click', () => setActive(index));
      });

      setActive(0);
    });
  }
});
