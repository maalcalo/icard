import {BASE_API} from '../utils/constants'

export async function loginApi(formValue) {
    try {
        const url = `${BASE_API}/api/auth/login/`
        const params = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formValue),
        };

        const response = await fetch(url, params);

        if(response.status  !== 200) {
            throw new Error('Usuario o Contrasena incorecto')
        }

        const resul = await response.json();
        return resul;
    } catch (error) {
        throw error;
    }
}

export async function getMeApi(token) {
    try {
        const url = `${BASE_API}/api/auth/me/`;
        const params = {
            headers:{
                Authorization: `Bearer ${token}`
            }
        }
        const response = await fetch(url, params);
        const resul = await response.json();
        return resul;
    } catch (error) {
        throw error;
        
    }
}