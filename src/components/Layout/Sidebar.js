import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import {
    FcHome,
    FcBusinesswoman,
    FcSupport,
    FcIdea,
    FcReading,
} from 'react-icons/fc';
import { GrMail } from 'react-icons/gr';
import { FaGithubAlt } from 'react-icons/fa';
import classes from './Sidebar.module.css';
import { IconContext } from 'react-icons';

const Sidebar = (props) => {
    const location = useLocation();
    return (
        <nav className={`${classes.nav} ${props.className && props.className}`}>
            <div className={classes.profile}>
                <div className={classes['profile-img']}>
                    <img src="img/tiny.png" alt={'profileImage'} />
                </div>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/linda2927"
                >
                    <IconContext.Provider value={{ size: 30 }}>
                        <>
                            <FaGithubAlt />
                        </>
                    </IconContext.Provider>
                </a>
            </div>
            <div className={classes.items}>
                <NavHashLink
                    to={'/#home'}
                    className={
                        location.hash === '#home' && classes['menu-item']
                    }
                    onClick={props.onMenuClick && props.onMenuClick}
                >
                    <FcHome />
                    Home
                </NavHashLink>
                <NavHashLink
                    to="/#about-me"
                    className={
                        location.hash === '#about-me' && classes['menu-item']
                    }
                    onClick={props.onMenuClick && props.onMenuClick}
                >
                    <FcBusinesswoman />
                    About Me
                </NavHashLink>
                <NavHashLink
                    to={'/#skills'}
                    className={
                        location.hash === '#skills' && classes['menu-item']
                    }
                    onClick={props.onMenuClick && props.onMenuClick}
                >
                    <FcSupport />
                    Skills
                </NavHashLink>
                <NavHashLink
                    to={'/#projects'}
                    activestyle={{ backgroundColor: '#77a8a4' }}
                    className={
                        location.hash === '#projects' && classes['menu-item']
                    }
                    onClick={props.onMenuClick && props.onMenuClick}
                >
                    <FcIdea />
                    Projects
                </NavHashLink>
                <NavHashLink
                    to={'/#study'}
                    className={
                        location.hash === '#study' && classes['menu-item']
                    }
                    onClick={props.onMenuClick && props.onMenuClick}
                >
                    <FcReading />
                    Study
                </NavHashLink>
            </div>
            <div className={classes.contact}>
                <a
                    href="mailto:earthlyz9.dev@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IconContext.Provider value={{ size: 18 }}>
                        <>
                            <GrMail />
                        </>
                    </IconContext.Provider>
                    Contact Me!
                </a>
            </div>
        </nav>
    );
};

export default Sidebar;
