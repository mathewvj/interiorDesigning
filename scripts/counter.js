// Counter Animation
  const counters = document.querySelectorAll('.counter');
  let started = false;

  function startCounters() {
    if (started) return;
    if (window.scrollY + window.innerHeight >= document.querySelector('.counter-section').offsetTop) {
      counters.forEach(counter => {
        let target = +counter.getAttribute('data-target');
        let count = 0;
        let speed = Math.ceil(target / 1000); // adjust speed
        let updateCounter = setInterval(() => {
          count += speed;
          if (count >= target) {
            counter.textContent = target;
            clearInterval(updateCounter);
          } else {
            counter.textContent = count;
          }
        }, 30);
      });
      started = true;
    }
  }

  window.addEventListener('scroll', startCounters);