
var requestOptions = {
  method: "GET",
};

export const getProducts = () => {
  return fetch('https://newsapi.org/v2/everything?q=newyear&apiKey=a6bc6e06db53418ba33c9f6c27098880&page=2', requestOptions)
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
