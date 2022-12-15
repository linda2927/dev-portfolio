import classes from './AboutMe.module.css';
import Title from '../UI/Title';
import ProfileInfo from '../AboutMe/ProfileInfo';
import { useLocation } from 'react-router-dom';
import React from 'react';
import ExtraInfo from './ExtraInfo';
import Banner from '../UI/Banner';

const aboutMe = (props, ref) => {
    const location = useLocation();
    location.hash = '#about-me';

    return (
        <section
            className={classes['about-me']}
            id={props.sectionId}
            ref={(el) => (ref.current[1] = el)}
        >
            <Title title={'About Me'} />
            {/* <p className={classes.summary}> */}
            {/*    어쩌구 저쩌구 ~ 핵심이 되는 한 문장 */}
            {/* </p> */}
            <div className={classes.intro}>
                <strong>For a Better Tomorrow!</strong>
                <br />
                어제보다 성장한 오늘의 나를 추구합니다. 고민, 역경, 배움, 성장의
                무한 굴레를 즐기는 <strong>지구력</strong>이 강한 개발자입니다.
                주로 Python 과 Node.js 기반 백엔드 프레임워크를 다루고 있으나
                재미있어 보이는 것이라면 무엇이든 해보는 호기심 많은 사람입니다.
            </div>
            <ProfileInfo />
            <ExtraInfo />
            <Banner
                title="생각의 기록 ✍️"
                body="개발자 지망생으로서, 생각하기와 글쓰기를
                    좋아하는 대학생으로서 기록한 생각의 흐름들."
                url="https://earthlyz9-dev.oopy.io/thoughts"
            />
        </section>
    );
};

const AboutMe = React.forwardRef(aboutMe);

export default AboutMe;
