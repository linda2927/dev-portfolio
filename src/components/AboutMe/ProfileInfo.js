import classes from './ProfileInfo.module.css';
import Hashtag from './Hashtag';
import React from 'react';

const ProfileInfo = () => {
    const likes = [
        'Coding 💻',
        'Futsal ⚽️',
        'Cats 🐱',
        'Coffee ☕️',
        'Journals ✏️',
        'Movies 🎬',
        'Music 🎶',
    ];

    return (
        <section className={classes['profile-info']}>
            <div className={classes.col}>
                <div>
                    <p className="profile-category">Name</p>
                    <p>이지수</p>
                </div>
                <div>
                    <p className="profile-category">Date of Birth</p>
                    <p>00.07.29</p>
                </div>
                <div>
                    <p className="profile-category">Address</p>
                    <p>Sungdongu, Seoul</p>
                </div>
                <div>
                    <p className="profile-category">Phone</p>
                    <p>010-2927-7729</p>
                </div>
                <div>
                    <p className="profile-category">E-mail</p>
                    <p>earthlyz9.dev@gmail.com</p>
                </div>
            </div>
            <div className={classes.col}>
                <p className={`profile-category ${classes.likes}`}>Likes</p>
                <div className={classes.tags}>
                    {likes.map((item, index) => (
                        <Hashtag key={index} text={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProfileInfo;
