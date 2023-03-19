function createMain() {
  const main = document.createElement('main');
  const container = createDiv(['container']);
  const h1 = document.createElement('h1');

  main.classList.add('main');

  container.setAttribute('id', 'container-app');

  h1.classList.add('title', 'title__h1');
  h1.textContent = 'Клиенты';

  app.append(main);
  main.append(container);
  container.append(h1);

  return main;
}

function renderMain() {
  const app = document.getElementById('app');
  const main = createMain();

  app.append(main);
}
