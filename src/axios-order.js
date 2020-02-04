import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-77f0a.firebaseio.com/'
})

export default instance;