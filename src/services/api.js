import axios from 'axios'

const token = "d9a58f68b032567df17dbf974fe13148"
export default axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Authorization: `Bearer ${token}`
    }
})