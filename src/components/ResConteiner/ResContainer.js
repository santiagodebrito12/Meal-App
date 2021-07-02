import React,{useContext,useState} from 'react'
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import FormContext from '../../context/FormContext/FormContext';
import ModalContext from '../../context/ModalContext/ModalContext';
import './ResContainer.css';


  
  function getModalStyle() {
    const top = 50;
    const left = 50;
    const height = 400;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'fixed',
      width: 400,
    //   height:600,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  
const ResContainer = () => {
    const classes = useStyles();
  
    const [modalStyle] = React.useState(getModalStyle);
     const [open, setOpen] = React.useState(false);
  
    const {res,getRes} =useContext(FormContext)
    const {getReceta,receta} = useContext(ModalContext);
    console.log(receta);
   
   
    const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
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
                                getReceta(meal.idMeal);
                                handleOpen();
                            }}>Ver Receta </button>
                                 
                    </div>
                )
            })
            
            }
    
                          <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                        >
                           <div style={modalStyle} className={classes.paper}>
                                <h2 id="simple-modal-title" className="info-modal mt-2">{receta.strMeal}</h2>
                                <img src={receta.strMealThumb} alt="imagen-meal" className="w-100 "/>
                             <p id="simple-modal-description" className="info-modal mt-4">
                            {receta.strInstructions}
                                 </p>
      
                     </div>
                        </Modal>
    
        </div>
    )
}

export default ResContainer;
