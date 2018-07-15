import Api from '../api'

export const GET_CARDS = 'GET_CARDS'
export const FAIL_GETTING_CARDS = 'FAIL_GETTING_CARDS'
export const PATCH_CARD = 'PATCH_CARD'
export const FAIL_PATCHING_CARDS = 'FAIL_PATCHING_CARDS'
export const SEND_TO_PATCH = 'SEND_TO_PATCH'

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

export const getCards = () => dispatch => {
  // return Api.get()
  // .then(res => {
  //   console.log('getCards', res)
  //   return dispatch(gettingCards(res))})
  // .catch(res => dispatch(failGettingCards(res)))
  return fetch('https://fakeprovider.herokuapp.com/', {
    method: 'GET', mode: 'cors'
  }).then(res => res.json()).then(data => {
    console.log('data', data)
    dispatch(gettingCards(data))}
  )
    .catch(err => dispatch(failGettingCards(err)))
}