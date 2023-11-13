import axios from 'axios';

export class ApiService {

    constructor(baseURL) {
        this.axiosInstance = axios.create({
            baseURL: baseURL,
            timeout: 120000, // 2 minutes
            headers: {
                'Content-Type': 'application/json',
            }
        })
     
    }


}