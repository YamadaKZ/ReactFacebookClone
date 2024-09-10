import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';


const api = axios.create({
  baseURL: 'http://localhost:5173/  ', // API URL
});

const mock = new MockAdapter(api, { onNoMatch: "passthrough" });

// 
const USER_INFO_DUM = {
    email: "yamada@google.com",
    Password: '12345678',
    token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9...'
};

// ログインAPIのモック
mock.onPost('/login').reply((config) => {
    const { email, password } = JSON.parse(config.data);
    if (email === USER_INFO_DUM.email && password === USER_INFO_DUM.Password) {
    return [200, { token: USER_INFO_DUM.token }];
    }
    return [400, { message: 'Invalid email or password' }];
});

// ログイン関数
export const login = async (email, password) => {
    try {
    const response = await api.post('/login', { email, password });
    return response.data;
    } catch (error) {
    throw error.response.data;
}
};
