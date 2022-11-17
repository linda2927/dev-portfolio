import React from 'react';
import { IconContext } from 'react-icons';
import { BsArrowRightCircle } from 'react-icons/bs';
import classes from './Banner.module.css';

const Banner = (props) => {
    return (
        <div className={classes.banner}>
            <div
                style={{
                    width: '100%',
                    textAlign: 'right',
                    height: '30px',
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <p>
                    <strong>{props.title}</strong>
                </p>
                <a
                    href={props.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: 'none', color: 'black' }}
                >
                    <IconContext.Provider value={{ size: 30 }}>
                        <>
                            <BsArrowRightCircle />
                        </>
                    </IconContext.Provider>
                </a>
            </div>
            <p>{props.body}</p>
        </div>
    );
};

export default Banner;
