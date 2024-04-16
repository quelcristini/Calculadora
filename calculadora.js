function calculate() {
    const num1 = parseFloat(document.querySelector('#num1').value);
    const num2 = parseFloat(document.querySelector('#num2').value);
    const operation = document.querySelector('#operation').value;
    let result;

    switch(operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if(num2 != 0) {
                result = num1 / num2;
            } else {
                alert(' Não é divisivel por 2');
                return;
            }
            break;
        default:
            alert('Operação invalida');
            return;
    }

    document.querySelector('#result').textContent = `O resultado foi: ${result}`;
}