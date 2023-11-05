import axios from 'axios';
import authHeader from '../helpers/authHeader';

export default axios.create({ headers: { common: authHeader() } });
