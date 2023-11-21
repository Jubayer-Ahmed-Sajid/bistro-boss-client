import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types'
import useAuth from '../Components/hooks/useAuth';
import useAdmin from '../Components/hooks/useAdmin';

const AdminRoute = ({children}) => {
    const {user,loading} = useAuth()
    const [data,isLoading] = useAdmin()
    const location = useLocation()
    if(loading || isLoading){
        return <h2>loading...</h2>
    }
  
    if(user && data){
        return children
    }
    return <Navigate to="/login" state={{from: location}} replace > </Navigate>
};
AdminRoute.propTypes = {
    children: PropTypes.node
}
export default AdminRoute;