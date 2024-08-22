import SignIn from './Routes/SignIn';
import { LOCAL_STORAGE_USER_ID } from '../constants';



const ProtectedRoute = (WrappedComponent:any) => {
    return ()=>{
        const user = localStorage.getItem(LOCAL_STORAGE_USER_ID);

        if (!user) {
          return <SignIn/>
        }
      
        return <WrappedComponent />;
    }

};

export default ProtectedRoute;