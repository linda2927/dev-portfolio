import { HiMenuAlt3 } from 'react-icons/hi';
import classes from './SidebarToggle.module.css';
import { IconContext } from 'react-icons';
import React from 'react';

const SidebarToggle = (props) => {
    const btnClickHandler = (event) => {
        event.preventDefault();

        props.onToggleClick();
    };
    return (
        <button className={classes.toggle} onClick={btnClickHandler}>
            <IconContext.Provider value={{ size: 25 }}>
                <>
                    <HiMenuAlt3 />
                </>
            </IconContext.Provider>
        </button>
    );
};

export default SidebarToggle;
