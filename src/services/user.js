import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL

const login = async (credentials) => {
    try{
        const response = await axios.post(`${baseUrl}/login`, credentials);
        return response.data;
    }catch(error){
        throw new Error(error)
    }
}

const getAccessToken = async () =>{
    //create your config and add current token
    const response = await axios.post(`${baseUrl}/login`, {}, {});
    return response.data
}

const logout = async () => {
    const response = await axios.post(`${baseUrl}/logout`);
    return response.data;
}

export const userService = {
    login,
    getAccessToken,
    logout
}