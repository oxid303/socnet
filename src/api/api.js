import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0',
  withCredentials: true,
  headers: {
    "API-KEY": "11413268-0a83-4855-8886-a27de6220b24"
  }
})

export const APIgetUsersPage = (currentPage = 1, pageSize = 10) => {
  return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
    .then(responce => responce.data)
}
export const APIauthMe = () => {
  return instance.get('/auth/me')
    .then(responce => responce.data)
}
export const APIgetUserData = (id) => {
  return instance.get(`/profile/${id}`)
    .then(responce => responce.data)
}
export const APIfollowUser = (id) => {
  return instance.post(`/follow/${id}`)
    .then(responce => responce.data.resultCode)
}
export const APIunfollowUser = (id) => {
  return instance.delete(`/follow/${id}`)
    .then(responce => responce.data.resultCode)
}
export const APIgetStatus = (id) => {
  return instance.get(`/profile/status/${id}`)
}
export const APIupdateStatus = (text) => {
  return instance.put(`/profile/status`, {
    status: text
  })
}
