// Suponha que você precise simular uma mensagem enviada do robô Curiosity de Marte para a Terra. O Curiosity envia para a Terra a temperatura atual em Marte, gastando um tempo variável de até 5 segundos para que termine o envio. Crie a função sendMarsTemperature , que imprime a temperatura em Marte.

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
// Abaixo o que eu fiz:
const sendMarsTemperature = (() => {
  setTimeout (() => console.log(`Mars temperature is: ${getMarsTemperature()} degree Celsius `), 5000);
})

sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo

// Abaixo o gabarito:
const sendMarsTemperature = () => {
  const currentTemperature = getMarsTemperature();
  setTimeout(() => console.log(`Mars temperature is: ${currentTemperature} degree Celsius`), messageDelay());
};

// Ambos iguais resultados, mas como eu provavelmente deveria ter usado a funcmessageDelay, a construção da func sendMarsTemperature fica melhor da maneira do gabarito. 