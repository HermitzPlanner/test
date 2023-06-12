// Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      //console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('not-invis');
      } else {
        //entry.target.classList.remove('not-invis');
      }
    });
  });
  const hiddenElements = document.querySelectorAll('.invis');
  hiddenElements.forEach((e1) => observer.observe(e1));