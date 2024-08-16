import MockAdapter from "axios-mock-adapter";
import api from "./api";
import { USER_INFO_DUM } from "../utils/constant";


const mock = new MockAdapter(api, {onNoMatch: "passthrough"});

mock.onPost('/login').reply((config) => {
    const { email, password } = JSON.parse(config.data);
    if (email === USER_INFO_DUM.email && password === USER_INFO_DUM.Password) {
    return [200, { token: USER_INFO_DUM.token }];
    }
    return [400, { message: 'Invalid email or password' }];
});


export const login = async (email, password) => {
    try {
    const response = await api.post('/login', { email, password });
    return response.data;
    } catch (error) {
    throw error.response.data;
}
};

