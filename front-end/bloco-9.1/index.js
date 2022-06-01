// Exercicios de Fixação
// 1 - 
const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;
const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser = callback => {
  setTimeout(() => {
    const user = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian",
    };
    return console.log(callback(user));
  }, delay());
};
// se usar o console log nas funções vai gerar undefined pois precisar rececer a callback do setTimeout
// getUser(userFullName); 
// getUser(userNationality); 

// Tratando erro - Exercicio de Fixação

const countryName = ({ name }) => console.log(`Returned country is ${name}`);
const countryCurrency = ({ name, currency }) => console.log(`${name}'s currency is the ${currency}`);
const delay1 = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);
const printErrorMessage = (error) => console.log(`Error getting country: ${error}`);

const getCountry = (onSuccess, printErrorMessage) => {
  setTimeout(() => {
    const didOperationSucceed = Math.random() >= 0.5;
    if(didOperationSucceed) {
      const country = {
        name: "Brazil",
        hdi: 0.759,
        currency: "Real",
      };
      onSuccess(country);
    } else {
      const errorMessage = "Country could not be found";
      printErrorMessage(errorMessage);
    }
  }, delay1());
};

// Deve imprimir "Returned country is Brazil" no sucesso ou "Error getting country: Country could not be found" em caso de falha
// getCountry(countryName, printErrorMessage);

// Deve imprimir "Brazil's currency is the Real" no sucesso, ou "Error getting country: Country could not be found" em caso de falha
// getCountry(countryCurrency, printErrorMessage);

// Questão 3 - Inserir Timeout
const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  setTimeout(()=> {
    console.log("Returned planet: ", mars);
  }, 4000);
};

// getPlanet(); 

// 4 questão - O Curiosity envia para a Terra a temperatura atual em Marte( 5 seg)
// 5 questão - Passa para função sendTemperatura uma callback
// 6 questão - Adicionar tratamento de erro

// criar uma função delay
const delay2 = () => Math.floor(Math.random() * 5000);
// criar uma função para retornar o valor da temperatura
const temperatureMarte = () => Math.floor(Math.random() * 58);
// criar função para trasnformar a temperatura em Farenheint
const toFahrenheit = (tempCelsius) => (tempCelsius * 9/5) + 32;
// criar função pra imprimir o valor de fahrenheit
const sendFahrenheit = (temp) => console.log(`A temperatura é ${toFahrenheit(temp)}°F em Marte.`);
// criar uma função para imprimir o valor em celsis
const sendCelsius = (temp) => console.log(`A temperatura é ${temp}°C em Marte.`) 
// criar uma função pra gerar temperatura de marte

const sendTemperature = (callback) => {
  setTimeout(() => {
    const temp = temperatureMarte();
    return callback(temp);
  }, delay2());
}

sendTemperature(sendCelsius);
sendTemperature(sendFahrenheit);

