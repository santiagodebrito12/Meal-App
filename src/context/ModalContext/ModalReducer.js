export const ModalReducer = (state,action)=>{
    const{type,payload}=action;


    switch(type){

            case 'GET_RECETA':
                return{
                    ...state,
                    receta:payload
                }


                default:
                    break;

    }
    






}