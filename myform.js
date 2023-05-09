function insert() {
  const type = document.querySelector('#type').value;
  const label = document.querySelector('#label').value;
  let el, container;

  switch (type) {
    case 'text':
      el = createInput('text', 'form-control my-2', label);
      container = createContainer('input-container', el);
      break;
    case 'button':
      el = createButton('button', 'btn btn-primary my-2', label);
      container = createContainer('button-container', el);
      break;
    case 'radio':
      el = createInput('radio', 'form-check-input', '');
      const labelEl = createLabel('form-check-label', label, el.id);
      container = createContainer('radio-container', el, labelEl);
      break;
    case 'checkbox':
      el = createInput('checkbox', 'form-check-input', '');
      const labelEl2 = createLabel('form-check-label', label, el.id);
      container = createContainer('checkbox-container', el, labelEl2);
      break;
  }

  document.querySelector('#display').append(container);
}

function createInput(type, className, label) {
  const input = document.createElement('input');
  input.type = type;
  input.className = className;
  input.placeholder = label || 'No label';
  return input;
}

function createButton(type, className, label) {
  const button = document.createElement('button');
  button.type = type;
  button.className = className;
  button.textContent = label || 'No label';
  return button;
}

function createLabel(className, textContent, forInput) {
  const label = document.createElement('label');
  label.className = className;
  label.textContent = textContent;
  label.htmlFor = forInput;
  return label;
}

function createContainer(className, ...children) {
  const container = document.createElement('div');
  container.className = className;
  children.forEach((child) => container.append(child));
  return container;
}

function removeInsertedElement() {
  const insertedElement = document.querySelector('#display > *:last-child');
  if (insertedElement) {
    insertedElement.remove();
  }
}
