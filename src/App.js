import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import FormState from './context/FormContext/FormState';
import ResContainer from './components/ResConteiner/ResContainer';
import ModalState from './context/ModalContext/ModalState';

function App() {
  return (
    <>
            <FormState>
            <ModalState>
              <Header/> 
              <div className="container">
                <div className="row">
                  <Main/>
                </div>
  
              </div>
             
              <ResContainer/>
              
              
              </ModalState>
              </FormState>
    </>
  );
}

export default App;
