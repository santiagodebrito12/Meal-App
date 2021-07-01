import React,{useReducer} from 'react'
import axios from 'axios';
import FormContext from './FormContext';
import { FormReducer } from './FormReducer';

const FormState = (props) => {
   
    const initialState = {
        categories:[],
        selectCategory:{},
        res:[],    
    }
    const [state, dispatch] = useReducer(FormReducer, initialState)
    
    const getCategories = async() =>{
        const res = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php'); 
        dispatch({
            type:'GET_CATEGORIES',
            payload:res.data.categories,
        })
    }

    const categorySelect = (category) =>{
        dispatch({
            type:'CATEGORY_SELECT',
            payload: category,
        })
    } 

    const getRes = async() =>{
        const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${state.selectCategory}`);
        dispatch({
            type:'GET_RES',
            payload:res.data.meals,
        })
    }

    
    

    return (
        <FormContext.Provider value={{
            categories:state.categories,
            selectCategory:state.selectCategory,
            res:state.res,
            getCategories,
            categorySelect,
            getRes,

        }}>
            {props.children}
        </FormContext.Provider>
    )
}

export default FormState;
