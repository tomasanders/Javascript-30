const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  // grabs the 'px' from the dataset
  const suffix = this.dataset.sizing || '';
  // sets the css property, appends the suffix variable (equal to px or '')
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
};

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
