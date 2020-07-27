import {CONFIG} from '../config/api';


export function listAll(){
    return fetch(`${CONFIG.apiUrl}category/list-all`).then(response => {
        return response.json();
    })
}