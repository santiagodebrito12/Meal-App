import axios from 'axios';
import React, { useReducer } from 'react'
import ModalContext from './ModalContext';
import {ModalReducer} from './ModalReducer';

const ModalState = (props) => {
    const initialState = {
        receta:{},
        modal:false
    }
    
    const[state , dispatch] = useReducer(ModalReducer,initialState);



    const getReceta = async(id) =>{
        const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        
        dispatch({
            type:'GET_RECETA',
            payload:res.data.meals[0]
        
        })
      
    }

    return (
        <ModalContext.Provider value={
            {
                getReceta,
            }
        }>
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalState;
