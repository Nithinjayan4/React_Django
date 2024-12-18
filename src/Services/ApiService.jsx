import axios from "axios";



export function getpatient (){
    return axios.get(' http://127.0.0.1:8000/patient/')
    .then(response => response.data)
    
}
export function deletepatient(id){
    return axios.delete('http://127.0.0.1:8000/patient/' + id +'/')
    .then(response => response.data)
}