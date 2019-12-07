import axios from "axios";

export default {
    fetchJobList() {
        return axios.get('https://kodilan-d27d8.firebaseio.com/data.json').then(value => {
            return value.data
        });
    }
}
