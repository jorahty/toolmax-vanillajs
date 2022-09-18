function Title() {
  removeChildren(document.body);
  
  const form = createElement(document.body, 'form');
  
  const textfield = createElement(form, 'input', {
    type: 'text',
    placeholder: 'name',
    value: localStorage.nickname || '',
  });
  
  const go = createElement(form, 'input', {
    type: 'submit',
    value: 'go',
    disabled: !isValid(textfield.value),
  });

  textfield.oninput = () => {
    go.disabled = !isValid(textfield.value);
  }

  form.onsubmit = e => {
    e.preventDefault();
    localStorage.nickname = textfield.value;
    Game(textfield.value);
  }

  Game('jimmy'); // temporary
}
