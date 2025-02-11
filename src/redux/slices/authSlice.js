import { createSlice } from "@reduxjs/toolkit";
import axios  from "axios";

const signup =

const initialState = {
    isLoading : false,
    error : null,
    user : null
}


const authSlice = createSlice({
        name: 'auth',
        initialState,
        reducers : {
            setLoading : (state)=>{
                state.isLoading = true
            },
             
            setSuccess : (state,action)=>{
                state.isLoading = false
                state.user = action.payload,
                state.error = null
            },

            setError : (state, action) => {
                state.isLoading = False,
                state.error = action.payload
        }

    }
})

export const { setLoading,setSuccess,setError} = authSlice.actions;

// const signupUser = (data)=>{
//     return async dispatch => {
//         dispatch(setLoading())
//         try {
//             const response = await axios("http://localhost:5000/auth/signup",data);
//             dispatch(setSuccess(response.data.data))
//         } catch (error) {
//             dispatch(setError(error));
//         }
//     }
// }

export default authSlice.reducer;





















