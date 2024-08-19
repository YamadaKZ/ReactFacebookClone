import MockAdapter from "axios-mock-adapter";
import api from "./api";
import { USER_INFO_1, USER_INFO_2, USER_INFO_3 } from "../utils/constant";

const mock = new MockAdapter(api);

mock.onGet("/users").reply(200, [USER_INFO_1, USER_INFO_2, USER_INFO_3]);

export default mock;


