import React from 'react';
import { IconContext } from 'react-icons';
import { BsArrowRightCircle } from 'react-icons/bs';
import classes from './Banner.module.css';

const Banner = (props) => {
    return (
        <div className={classes.banner}>
            <p>
                <strong>{props.title}</strong>
            </p>
            <p>{props.body}</p>
            <div
                style={{
                    width: '100%',
                    textAlign: 'right',
                    height: '30px',
                    display: 'flex',
                    justifyContent: 'end',
                }}
            >
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
        </div>
    );
};

export default Banner;
