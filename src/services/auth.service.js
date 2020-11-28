// auth.service.js

import axios from "axios";

const API_URL = "https://api-goingto.azurewebsites.net/api/users/";

class AuthService {
    login(user) {
        return axios
            .post(API_URL + "/authenticate", {
                email: user.email,
                password: user.password,
            })
            .then((response) => {
                if (response.data.token) {
                    console.log("user:" + response.data);
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                return response.data;
            });
    }
    logout() {
        localStorage.removeItem("user");
    }
    register(user) {
        return axios.post(API_URL, {
            email: user.email,
            password: user.password,
        });
    }
}

export default new AuthService();
