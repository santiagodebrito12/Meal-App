export const FormReducer = (state,action) =>{
    const{type,payload}=action;


    switch(type){

            case 'GET_CATEGORIES':
                return {
                    ...state,
                    categories:payload,
                }

            case 'CATEGORY_SELECT':
                return{
                    ...state,
                    selectCategory:payload,
                }

            case 'GET_RES':
                return{
                    ...state,
                    res:payload,
                }


        default:
            break;
    }
        






}