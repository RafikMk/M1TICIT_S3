import axios from 'axios'

class ContratService {
    baseURL = "http://localhost:8080/Contrat/";

  getAll() {
    return axios.get(this.baseURL);
  }

  get(id: number) {
    return axios.get(`${this.baseURL}/${id}`);
  }

  create(data :object) {
    return axios.post(`${this.baseURL}, data`);
  }

  update(id :number, data:object) {
    return axios.put(`${this.baseURL}/${id}`, data);
  }

  delete(id : number) {
    return axios.delete(`${this.baseURL}/${id}`);
  }

 /* deleteAll() {
    return axios.delete(`/tutorials`);
  }
*/
 
}

export default new ContratService();
