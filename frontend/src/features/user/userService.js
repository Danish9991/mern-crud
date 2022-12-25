import axios from 'axios'

const API_URL = '/api/users';

const getUsers = async() => {
    const { data } = await axios.get(API_URL);
    return data
}

const createUser = async(userData) => {
    const { data } = await axios.post(API_URL, userData)
    return data
}

const deleteUser = async(id) => {
    const { data } = await axios.delete(`${API_URL}/${id}`)
    return data
}

const updateUser = async(id, userData) => {
    const { data } = await axios.put(`${API_URL}/${id}`, userData)
    return data
}

const getUser = async(id) => {
    const { data } = await axios.get(`${API_URL}/${id}`)
    return data
}

const userService = {
    getUsers,
    createUser,
    deleteUser,
    updateUser,
    getUser
}

export default userService;