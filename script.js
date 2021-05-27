const currencies = [
  'EUR',
  'CAD',
  'HKD',
  'ISK',
  'PHP',
  'DKK',
  'HUF',
  'CZK',
  'AUD',
  'RON',
  'SEK',
  'IDR',
  'INR',
  'BRL',
  'RUB',
  'HRK',
  'JPY',
  'THB',
  'CHF',
  'SGD',
  'PLN',
  'BGN',
  'TRY',
  'CNY',
  'NOK',
  'NZD',
  'ZAR',
  'USD',
  'MXN',
  'ILS',
  'GBP',
  'KRW',
  'MYR'
]

const url = 'http://api.exchangeratesapi.io/v1/latest?access_key=b6f09ee3c8833ec82a4cec0be6a048c9'

const root = document.querySelector('#container')

let divHeader = document.createElement('div');
divHeader.innerHTML = '<h1>Currency Converter</h1>';
document.getElementById('header').appendChild(divHeader);

let Converter = document.createElement('h2')
Converter.innerText = 'Convert from ' + 'EURO ' +  'to ' + 'currency' 
divHeader.appendChild(Converter)

let originalCurrency = document.createElement('h2')
originalCurrency.innerText = 'EUR ' + '= ' 
root.appendChild(originalCurrency)

fetch(url)
.then((res) => res.json())
.then((data) => {
  console.log(data)
  let currencyConverted = document.createElement('h3')
  currencyConverted.innerText = data.rates.AED
  root.appendChild(currencyConverted)
})

let convertButton = document.createElement('button')
convertButton.innerText = 'Convert!'
root.appendChild(convertButton)
document.querySelector(#button).addEventListener.('click', //function, (event0))
{console.log(currencyConverted)} ;