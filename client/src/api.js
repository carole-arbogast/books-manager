import axios from "axios";

export const getUserInfo = () => {
	return axios
		.get("/api/userInfo")
		.then(res => res.data.user, err => console.log(err));
};

export const updateUserInfo = (id, data) => {
	axios
		.post(`/api/userInfo/${id}`, data)
		.then(res => console.log(res.data))
		.catch(err => console.log(err));
};
