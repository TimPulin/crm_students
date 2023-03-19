function createFooter() {
  const footer = document.createElement('footer');
  const container = createDiv(['container', 'container--footer']);

  footer.classList.add('footer');

  footer.append(container);

  return {
    footer,
    container,
  }
}

function renderFooter() {
  const app = document.getElementById('app');
  const footer = createFooter();

  app.append(footer.footer);

  renderButtonAddClient(footer.container);
}

function renderButtonAddClient(container) {
  const button = createButton(['btn-secondarys'], 'Добавить клиента');
  container.append(button);
}
