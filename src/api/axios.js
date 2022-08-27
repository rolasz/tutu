import axios from "axios";

const axiosClient = axios.create({
	baseURL:
		"https://book-store-94bee-default-rtdb.asia-southeast1.firebasedatabase.app/",
	headers: {
		"Content-Type": "application/json",
	},
});

export default axiosClient