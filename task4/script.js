const testTextField = document.querySelector('#testTextField');

testTextField.addEventListener('click', function(event) {
      event.preventDefault();
        var newText = prompt('Введите новый текст для ссылки:', 'Новый текст');
    if (newText !== null) {
        this.textContent = newText;
    }
});
