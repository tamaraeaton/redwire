import * as api from '../api';


export const registerUser = (values) => ({
    type:'AUTH_USER',
    payload: api.registerUser(values)
})