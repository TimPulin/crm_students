function addClass(element, elementClass) {
  for (let i = 0; i < elementClass.length; i++) {
    element.classList.add(elementClass[i]);
  }
}

function createDiv(elementClass = []) {
  const div = document.createElement('div');
  addClass(div, elementClass)

  return div;
}

function createSpan(elementClass = []) {
  const span = document.createElement('span');
  addClass(span, elementClass)

  return span;
}

function createInput(elementClass = [], placeholder = '', type = 'text') {
  const input = document.createElement('input');

  input.classList.add('form-control');
  addClass(input, elementClass)
  input.setAttribute('type', type);
  input.setAttribute('placeholder', placeholder);

  return input;
}

function  createButton(elementsClass = [], title = '') {
  const button = document.createElement('button');
  button.classList.add('btn-reset');
  button.textContent = title;
  addClass(button, elementsClass);

  return button;
}
