document.title = 'Ildar Zapparov';

const header = document.getElementById('header');
const h1 = header.querySelector('h1');
h1.textContent = 'Изучение JavaScript';

const menuLinks = document.querySelectorAll('.menu-link');
menuLinks.forEach((link) => {
  console.log(link.textContent);
});

const featuresList = document.querySelectorAll('.features-list li');
featuresList[1].innerHTML = 'Поддержка <b> API </b>';
