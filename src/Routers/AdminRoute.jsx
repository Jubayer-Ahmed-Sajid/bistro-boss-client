import { AuthContext } from '../Providers/AuthProviders/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types'
import { useContext } from 'react';

const AdminRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const [data,isAdminLoading] = useContext
    const location = useLocation()
    if(loading || isAdminLoading){
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