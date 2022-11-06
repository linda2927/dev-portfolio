import ReactDOM from 'react-dom';
import { Fragment } from 'react';
import classes from './Drawer.module.css';
import Sidebar from '../Layout/Sidebar';

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const DrawerOverlay = (props) => {
    return (
        <div
            id="drawer"
            className={`${classes.drawer} ${
                props.isToggleOpen ? 'slide-in' : 'slide-out'
            }`}
        >
            <Sidebar onMenuClick={props.onClose} />
        </div>
    );
};

const portalElement = document.getElementById('overlays');

const Drawer = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(
                <Backdrop onClose={props.onClose} />,
                portalElement
            )}
            {ReactDOM.createPortal(
                <DrawerOverlay
                    onClose={props.onClose}
                    isToggleOpen={props.isToggleOpen}
                />,
                portalElement
            )}
        </Fragment>
    );
};

export default Drawer;
