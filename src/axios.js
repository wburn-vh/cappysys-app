import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://cappy-sys.firebaseio.com/'
});

export default instance;