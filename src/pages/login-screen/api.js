import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const api = axios.create({
<<<<<<< HEAD
  baseURL: 'http://your-api-base-url.com', // 実際のAPIのベースURLに置き換えてください
=======
  baseURL: 'http://localhost:5173/  ', // API URL
>>>>>>> remotes/origin/feature/mockAPI
});

const mock = new MockAdapter(api, { onNoMatch: "passthrough" });

<<<<<<< HEAD
// モックデータ
=======
// 
>>>>>>> remotes/origin/feature/mockAPI
const USER_INFO_DUM = {
    email: "yamada@rikkeisoft.com",
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