import axios from 'axios';

export const api = process.env.REACT_APP_RECORDS_API_URL

export const getAll = () =>
   axios.get(`${api}/v1/records`)

