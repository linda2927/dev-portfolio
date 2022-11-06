import classes from './Main.module.css';
import { HashLink } from 'react-router-hash-link';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Project from '../Projects/Project';
import ScrollPage from './ScrollPage';

const Main = (props) => {
    const mainClasses = !props.isMobile ? classes.main : classes['main-mobile'];
    return (
        <div className={mainClasses}>
            <Routes>
                <Route path="/*" element={<ScrollPage />} />
                <Route path="/projects/:projectName" element={<Project />} />
            </Routes>
            <HashLink
                to="#home"
                className={`${classes['top-base']} ${
                    props.isMobile ? classes['top-mobile'] : classes['top-pc']
                }`}
                id="top"
            >
                <IconContext.Provider value={{ size: 15 }}>
                    <>
                        <AiOutlineArrowUp />
                    </>
                </IconContext.Provider>
            </HashLink>
        </div>
    );
};

export default Main;
