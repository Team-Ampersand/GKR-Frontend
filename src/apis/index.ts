import axios from 'axios'

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_GKR_SERVER_URL,
  withCredentials: true,
})
