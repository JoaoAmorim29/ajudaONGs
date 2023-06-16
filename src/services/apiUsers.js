import axios from "axios";

const apiUsers = axios.create({
	baseURL: `http://192.168.1.9:5000`
})

export default apiUsers;