import axios from "axios";

const api = axios.create({
  baseURL:
    "https://v6.exchangerate-api.com/v6/1eeccfb59edc61c8c944107e",
});


// we need to crate a  get request
export const currencyConverter = (fromCurrency, toCurrency, amount) => {
  return api.get(`/pair/${fromCurrency}/${toCurrency}/${amount}`);
};
