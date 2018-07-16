import Api from '../api'
import axios from 'axios'

export const GET_CARDS = 'GET_CARDS'
export const FAIL_GETTING_CARDS = 'FAIL_GETTING_CARDS'
export const PATCH_CARD = 'PATCH_CARD'
export const FAIL_PATCHING_CARDS = 'FAIL_PATCHING_CARDS'
export const SEND_TO_PATCH = 'SEND_TO_PATCH'
export const PATCHING_CARD = 'PATCHING_CARD'
export const FAIL_PATCHING_CARD = 'FAIL_PATCHING_CARD'

axios.defaults.headers.common['Authorization'] = 'Bearer fasdfadfa9fj987afsdf'
axios.defaults.headers.common['Content-Type'] = 'application/json'

const ROOT_URL = 'https://fakeprovider.herokuapp.com/'

export const gettingCards = payload => ({
  type: GET_CARDS,
  payload
})

export const failGettingCards = payload => ({
  type: FAIL_GETTING_CARDS,
  payload
})

export const sendToPatch = payload => ({
  type: SEND_TO_PATCH,
  payload
})

export const patchingCard = payload => ({
  type: PATCHING_CARD,
  payload
})

export const failOnPatch = payload => ({
  type: FAIL_PATCHING_CARD,
  payload
})

export const getCards = () => dispatch => {
  return fetch(ROOT_URL, {
    method: 'GET', mode: 'cors'
  }).then(res => res.json()).then(data => {
    console.log('data', data)
    dispatch(gettingCards(data))}
  )
    .catch(err => dispatch(failGettingCards(err)))
}


export const patchCard = body => dispatch => {
  console.log('body', body)
  const bodyToSend = body.data_to_send
  const id = body.id
  console.log('toPatch', bodyToSend)
  console.log('idToPatch', id)
  // return fetch(`${ROOT_URL}cards/${id}/info`, {
  //   headers: {
  //     'credentials': 'include',
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json',
  //     'Authorization': 'Bearer fasdfadfa9fj987afsdf'
  //   },
  //   method: 'PATCH', mode: 'no-cors',
  //   body: JSON.stringify(bodyToSend)
  // }).then(res => res.json()).then(data => {
  //   console.log('dataPatch', data)
  //   dispatch(patchingCard(data))
  // }).catch(err => dispatch(failOnPatch(err)))

  return axios.patch(`${ROOT_URL}cards/${id}/info`, bodyToSend)
  .then(res => dispatch(patchingCard(res)))
  .catch(err => dispatch(failOnPatch(err)))
}