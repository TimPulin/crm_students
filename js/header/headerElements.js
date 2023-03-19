
function createHeader() {
  const header = document.createElement('header');
  const container = createDiv();
  const wrapHeader = createDiv();

  header.classList.add('header');
  container.classList.add('container');
  wrapHeader.classList.add('header__wrap');

  header.append(container);
  container.append(wrapHeader);

  return {
    header,
    container,
    wrapHeader,
  };
}

function createLogo() {
  const blockLogo = createDiv();
  const img = document.createElement('img');

  blockLogo.classList.add('logo-block');
  img.classList.add('logo-block__img');
  img.setAttribute('src', './img/icon-logo-skb.svg');

  blockLogo.append(img);

  return blockLogo;
}

function createSearch() {
  const blockSearch = createDiv();
  const input = createInput([], 'Введите запрос');

  blockSearch.classList.add('header__search-block');
  input.classList.add('header__search-input');

  blockSearch.append(input);

  return {
    blockSearch,
    input,
  };
}
