// set up connection between client and server //
import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `http://localhost:8081/`
  })
}