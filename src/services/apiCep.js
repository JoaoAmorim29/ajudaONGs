import axios from "axios";
// https://viacep.com.br/ws/01001000/json/

const apiCep = axios.create({
	baseURL: `https://viacep.com.br/ws/`
})

export default apiCep;
