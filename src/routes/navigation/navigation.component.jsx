import { Fragment } from 'react';

import {Outlet, Link} from 'react-router-dom';

import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';

import './navigation.styles.scss';

const Navigation = () => {
    return(
      <Fragment>
        <div className='navigation'>
            <Link className='navigation_logo' to='/'><CrwnLogo className='logo'/></Link>
            <div className='navigation_menu'>
                <Link className='nav-link' to='/shop'>Shop</Link>
                <Link className='nav-link' to='/sign-In'>Sign In</Link>
                
            
            </div>      
        </div>
        <Outlet />
      
      </Fragment>
    );
  }

  export default Navigation;