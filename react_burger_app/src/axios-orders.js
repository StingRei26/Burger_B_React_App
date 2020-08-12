import axios from 'axios'; 

const instance = axios.create({
    baseURL: 'https://react-my-burger-cd26f.firebaseio.com/'
})

export default instance; 