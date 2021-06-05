// A função getPlanet abaixo imprime o planeta Marte de forma síncrona. Modifique getPlanet , de forma que Marte seja impresso assincronamente, depois de 4 segundos.

const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  setTimeout(() => console.log("Returned planet: ", mars), 4000);
};

getPlanet(); // imprime Marte depois de 4 segundos

// Eu tinha feito da maneira á baixo e tinha tirado a linha 14, mas daí no gabarito ele coloca a func setTimeout no local do console.log. Os dois dão no mesmo, teoricamente. 

// setTimeout(() => getPlanet(), 4000);