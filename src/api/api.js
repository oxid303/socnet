import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0',
  withCredentials: true,
  headers: {
    "API-KEY": "11413268-0a83-4855-8886-a27de6220b24"
  }
})

const defaultUserData = {
  aboutMe: null,
  contacts: {
    facebook: null,
    github: null,
    instagram: null,
    mainLink: null,
    twitter: null,
    vk: null,
    website: null,
    youtube: null
  },
  fullName: 'No such user or directory',
  lookingForAJob: false,
  lookingForAJobDescription: null,
  photos: {
    large: null,
    small: null
  },
  userId: null
}

export const getUsersPage = (currentPage = 1, pageSize = 10) => {
  return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
    .then(responce => responce.data)
}

export const authMe = () => {
  return instance.get('/auth/me')
    .then(responce => responce.data)
}

export const getUserData = (id) => {
  return instance.get(`/profile/${id}`)
    .then(responce => responce.data)
    .catch(() => defaultUserData)
}

export const followUser = (id) => {
  return instance.post(`/follow/${id}`)
    .then(responce => responce.data.resultCode)
}

export const unfollowUser = (id) => {
  return instance.delete(`/follow/${id}`)
    .then(responce => responce.data.resultCode)
}
