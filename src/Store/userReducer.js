import { createSlice } from '@reduxjs/toolkit';
import { userService } from '../services/user';

const initialState = null;

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, action){
            if(action.payload)
                return action.payload;
            else
                return null;
        },
        getUser(state, action){
            return state
        }
    }
});

export const { setUser, getUser } = userSlice.actions;
export default userSlice.reducer;


export const loginUser = (credentials) => {
    return async(dispatch) => {
        const response = await userService.login(credentials);
        console.log('reducer', response)
        if(response.success === true){
            dispatch(setUser(response.data));
            localStorage.setItem('user', JSON.stringify(response.data));
            //localstorage set user
        }else{
            //error code
        }
    }
};

export const logoutUser = () => {
    return async(dispatch) => {
        dispatch(setUser(null));
        localStorage.removeItem('user');
    }
}

export const initializeUser = () => {
    return async(dispatch) => {
        let user = dispatch(getUser());
        if(!user){
            user = localStorage.getItem('user'); 
        }
        return user;
    }
}
