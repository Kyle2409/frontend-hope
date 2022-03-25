import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'https://pinkay-and-kuro-final.herokuapp.com/products';
class UserService {
  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }
  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}
export default new UserService();
