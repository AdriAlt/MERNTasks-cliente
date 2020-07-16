import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from '../../types';

// funcion que cambia los datos
export default (state, action) => {
    switch(action.type) {
        case MOSTRAR_ALERTA:
            return {
                alerta: action.payload //info q trae 
            }
        case OCULTAR_ALERTA:
            return {
                alerta: null
            }
        default:
            return state;
    }
}