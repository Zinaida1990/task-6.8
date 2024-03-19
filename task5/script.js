document.querySelector('#myForm').addEventListener('submit', function(event) {
    // Предотвращаем стандартное поведение формы (отправку на сервер)
    event.preventDefault();

    // Получаем текст из поля ввода
    let inputText = document.querySelector('#textInput').value;

    // Выводим текст в консоль
    console.log('Введенный текст:', inputText);

    // Очищаем поле ввода
    document.querySelector('#textInput').value = '';

    // Выводим текст в текстовый блок duplicateField
    document.querySelector('#duplicateField').textContent = inputText;
});
 
