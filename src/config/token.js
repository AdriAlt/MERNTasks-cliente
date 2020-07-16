import clienteAxios from './axios';

const tokenAuth = token => {
    if (token) {
        // cuando hagas el pedido mandas esto en el header 
        clienteAxios.defaults.headers.common['x-auth-token'] = token;
    } else {
        delete clienteAxios.defaults.headers.common['x-auth-token'];
    }
}

export default tokenAuth;