import React,{useState,useEffect,useContext} from 'react'
import axios from 'axios'
import './Main.css';
import FormContext from '../../context/FormContext/FormContext';

const Main = () => {
    const {categories,getCategories,categorySelect,getRes} = useContext(FormContext)
    
    useEffect(() => {
       
        getCategories();
    
    }, [])
    

   
    return (
        <div className="col-6 p-5 m-auto">
            <h1>Buscador de Comidas</h1>
            
            <form type="submit" onSubmit={(e)=>{
               e.preventDefault()
               getRes();
           }}>

           <select className="w-75 " onChange={(e)=>{
               categorySelect(e.target.value)}}>
         
           {categories.map(category=>{
               return(
                   <option key={category.idCategory} className="option">{category.strCategory}</option>
               )
           })}
           </select>
           <button className="button button-primary m-3" >Buscar</button>
           </form>
        </div>
    )
}

export default Main;
