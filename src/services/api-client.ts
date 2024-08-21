import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'f70fdb24878c4cf289efb236fb372a60'
    }
})