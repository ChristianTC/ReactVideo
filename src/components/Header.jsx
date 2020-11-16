import React from 'react';
// connect se encarga de proveer nuestro estado al componente
import { connect } from 'react-redux';
// Link para manejar los enlaces
import { Link } from 'react-router-dom';

import classNames from 'classnames';

// gravatar fue la funcion para traer las imagenes
import gravatar from '../utils/gravatar';
// logoutRequest fue nuestro action para cerrar sesion
import { logoutRequest } from '../actions';

import PropTypes from 'prop-types';

import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = props => {
    
    const { user, isLogin, isRegister } = props;

    //validacionn para saber si tiene o no al usuario
    const hasUser = Object.keys(user).length > 0;

    const handleLogout = () =>{
        props.logoutRequest({})
    } 

    const headerClass = classNames('header', {
        isLogin, 
        isRegister,
    })

    return(
    <header className={headerClass}>

        <Link to="/">
            <img className="header__img" src={logo} alt="Platzi Video" />
        </Link>
        
        <div className="header__menu">
            <div className="header__menu--profile">
                {
                    hasUser 
                    ? <img src={gravatar(user.email)} alt={user.email} />
                    : <img src={userIcon} alt="" />
                }

                <p>Perfil</p>
            </div>
            <ul>

                {
                    hasUser 
                    ? <li><a href="/">{user.name}</a></li>
                    : null
                }

                {
                    hasUser 
                    ? <li>
                        <Link to="#logout" onClick={handleLogout}>
                            Cerrar sesión
                        </Link>
                    </li>
                    : <li>
                        <Link to="/login">
                            Iniciar Sesión
                        </Link>
                    </li>
                }

            </ul>
        </div>
    </header>
)}

Header.propTypes = {
    user: PropTypes.object,
};

// Se encarga de mapear nuestras propiedades del estado
const mapStateToProps = state => {
    return {
        user: state.user
    };
};

// mapear la informacion, acciones para enviar al documento
const mapDispatchToProps = {
    logoutRequest,
}

//export default Header;
export default connect(mapStateToProps, mapDispatchToProps)(Header);