export const loginReducer = (state = {}, action) => {
  console.log("reducerlogin")
    switch(action.type){
        case 'login':
          return{
            isAuth:true,
            isAdmin:action.payload.isAdmin,
            user:action.payload.user,
          };
        case 'logout':
            return{
                isAuth:false,
                isAdmin: false,
                user: undefined,
            } ;
        default:
            return state;     

    }
}