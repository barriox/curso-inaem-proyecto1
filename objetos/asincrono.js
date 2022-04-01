const countryContainer = document.querySelector(".countries");
const boton = document.querySelector("#botonPais");
const renderCountry = (data, optionalClass = "") => {
  const country = data.name.common;
  const flag = data.flags.svg;
  const { region, population } = data;
  const [language] = Object.values(data.languages);
  const [currency] = Object.values(data.currencies);

  // const {name: {common: country }} = data;
  const html = `
        <article class="country ${optionalClass}">
          <img class="country__img" src="${flag}" />
          <div class="country__data">
            <h3 class="country__name">${country}</h3>
            <h4 class="country__region">${region}</h4>
            <p class="country__row">${population}</p>
            <p class="country__row">${language}</p>
            <p class="country__row">${currency.name}(${currency.symbol})</p>
          </div>
        </article>
    `;
  countryContainer.innerHTML += html;
  countryContainer.style.opacity = 1;
};
const getCountryData1 = (country) => {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  request.addEventListener("load", function () {
    // const data = JSON.parse(this.responseText)[0];
    const [data] = JSON.parse(this.responseText);
    renderCountry(data);
    for (const neighbour of data.borders) {
      //  getNeighbourCountryData
      const request2 = new XMLHttpRequest();
      console.log(neighbour);
      request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
      request2.send();
      request2.addEventListener("load", function () {
        const [data] = JSON.parse(this.responseText);
        renderCountry(data, "neighbour");
      });
    }
  });
};

const getCountryData2 = (country) => {
  /* PROMESAS. Promise -> Pending -> Resolve() -> Fulfilled || Rejected
      para peticiones API -> fetch(), retorna una promesa
  */
  fetch(`https://restcountries.com/v3.1/name/${country}`) //primera promesa
    //.then((response) => {return response.json();})
    //EQUIVALENTE CON EL DE ABAJO ESTE SE USA SI HAY VARIAS INSTRUCCIONES
    //.then((response) => console.log(response); response.json()) //segunda promesa
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        throw Error(`Pais no encontrado. Código: ${response.statusText}`);
      }
      return response.json();
    })
    .then(([data]) => {
      renderCountry(data);
      for (const neighbour of data.borders) {
        const request2 = new XMLHttpRequest();
        request2.open(
          "GET",
          `https://restcountries.com/v3.1/alpha/${neighbour}`
        );
        request2.send();
        request2.addEventListener("load", function () {
          const [data] = JSON.parse(this.responseText);
          renderCountry(data, "neighbour");
        });
      }
    })
    .catch((err) => console.log("Mensaje error: ", err.message));
};

boton.addEventListener("click", () => {
  getCountryData2("spain");
  boton.style.display = "none";
});
