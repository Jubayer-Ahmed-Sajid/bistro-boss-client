import { AuthContext } from '../Providers/AuthProviders/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types'
import { useContext } from 'react';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <h2>loading...</h2>
    }
    if(user){
        return children
    }
    return <Navigate to="/login" state={{from: location}} replace ></Navigate>
};
PrivateRoute.propTypes = {
    children: PropTypes.node
}
export default PrivateRoute;