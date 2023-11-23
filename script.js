//1 º pegar o valor no html da classe do botao

const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector('.currency-select-for');


//3º criar uma função para converter valores
function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector('.currency-value-to-convert');
    const currencyValueToConvert2 = document.querySelector('.currency-value-to-convert2');
    const currencyValueConverted = document.querySelector('.currency-value');



    const dolarToday = 4.91;
    const euroToday = 5.35;
    const bitcoinToday = 183.418;
    const libraToday = 6.14;
    const realToday = 0.20;


    // Conversão : DE

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday);
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday);

    }

    if(currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday);
    }

    if(currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday);
    }




    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
   



    


}

function changeCurrency() {
    const currencyName = document.getElementById('currency-name');
    const currencyImage = document.querySelector('.currency-img');

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = 'Dolar Americano';
        currencyImage.src = './assets/estados-unidos (1) 1.png'
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = 'Euro';
        currencyImage.src = './assets/eur.png'
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = 'Bitcoin';
        currencyImage.src = './assets/bitcoin 1.png'
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = 'Libra';
        currencyImage.src = './assets/libra 1.png'
    }

    if (currencySelect.value == "real") {
        currencyName.innerHTML = 'Real';
        currencyImage.src = './assets/brasil 2.png'
    }


    convertValues()
}


//2º adicionar um ouvinte de eventos

currencySelect.addEventListener('change', changeCurrency)
convertButton.addEventListener('click', convertValues)

//4º saber o valor que a pessoa digitou no input




