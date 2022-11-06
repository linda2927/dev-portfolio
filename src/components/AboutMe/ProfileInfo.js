import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <section className={classes['profile-info']}>
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
        </section>
    );
};

export default ProfileInfo;
