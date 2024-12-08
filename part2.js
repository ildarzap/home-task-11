const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.textContent = 'Введение в DOM';
const li2 = document.createElement('li');
li2.textContent = 'Создание элементов';
const li3 = document.createElement('li');
li3.textContent = 'Изменение атрибутов';
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
const infoSection = document.getElementById('info');
infoSection.appendChild(ul);

const a = document.createElement('a');
a.textContent = 'Мой профиль в Github';
a.href = 'https://github.com/ildarzap';
a.target = '_blank';
header.appendChild(a);

const section = document.createElement('section');
section.classList.add('dynamic');
const h2 = document.createElement('h2');
h2.textContent = 'Обучение JavaScript';
const p = document.createElement('p');
p.textContent = 'Динамическое создание элементов позволяет улучшить интерфейс пользователя';
section.appendChild(h2);
section.appendChild(p);
const main = document.getElementById('main');
main.insertBefore(section, main.firstChild);

const firstP = infoSection.querySelector('p');
infoSection.removeChild(firstP);

const footer = document.getElementById('footer');
footer.innerHTML = '';
