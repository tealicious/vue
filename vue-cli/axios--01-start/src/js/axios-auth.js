import axios from 'axios'
//custom axios instance
const instance = axios.create({
    baseURL: "https://www.googleapis.com/identitytoolkit/v3/relyingparty"
});

export default instance