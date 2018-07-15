import axios from 'axios'

const API_BASE_URL = 'https://fakeprovider.herokuapp.com/'

class Api {
  static setAuthorizationHeader(){
    const token = 'fasdfadfa9fj987afsdf'
    if(token){
      axios.defaults.headers.common['authorization'] = `Bearer ${token}`
      console.log('token', axios.defaults.headers)
    } else {
      delete axios.defaults.headers.common['authorization']
    }
  }

  static patch(id, body){
    // return axios.patch(`${API_BASE_URL}/cards/${id}`)
  }
  static get(){
    fetch('https://fakeprovider.herokuapp.com/', {
      method: 'GET',
      mode: 'cors'
    }).then(res => res.json()).then(data => data)
  }
}


export default Api