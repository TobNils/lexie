import * as React from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/css/navigation.css';

class Navigation extends React.Component {
    public render() {
        return (
            <div className="Navigation">
                <NavLink className="Navigation-link" to={'/'}>Home</NavLink>
                <NavLink className="Navigation-link" to={'/axios'}>Axios-test</NavLink>
            </div>
        );
    }
}

export default Navigation;
