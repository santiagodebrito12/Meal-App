import React,{useContext} from 'react'
import FormContext from '../../context/FormContext/FormContext';
import ModalContext from '../../context/ModalContext/ModalContext';
import './ResContainer.css';

const ResContainer = () => {
   
   const {res} =useContext(FormContext)
   const {getReceta} = useContext(ModalContext);

    return (
        <div className="contenedor-res">
            {(res.length>0)
        
            &&
            res.map(meal=>{
                
                return(
                    <div key={meal.idMeal} className="card-meal">
                            <img src={meal.strMealThumb} alt="imagen" className="w-50"/>
                            <h2 className="text-center">{meal.strMeal}</h2>
                            <button className="button-primary" onClick={()=>{
                                getReceta(meal.idMeal)
                            }}>Ver Receta </button>
                    </div>
                )
            })
            
            
            }
    
    
        </div>
    )
}

export default ResContainer;
