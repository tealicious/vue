import axios from 'axios'
//custom axios instance
const instance = axios.create({
    baseURL: "https://axios-tutorial.firebaseio.com"
});

export default instance