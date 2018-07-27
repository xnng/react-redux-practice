import axios from 'axios'

export const api = process.env.REACT_APP_RECORDS_API_URL || "https://5b5a93b350bab80014e5f79c.mockapi.io"

export const getAll = () => axios.get(`${api}/api/v1/records`)