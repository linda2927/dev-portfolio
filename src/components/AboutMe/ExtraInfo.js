import React from 'react';
import classes from './ExtraInfo.module.css';

const ExtraInfo = () => {
    return (
        <div className={classes.extra}>
            <div className={classes.education}>
                <p className="profile-category">Education</p>
                <ul>
                    <li>
                        <span className="number">2019</span> 동탄국제고등학교
                        졸업
                    </li>
                    <li>
                        <span className="number">2019 ~</span> 연세대학교
                        경영학과
                    </li>
                    <li>
                        <span className="number">2022.01 ~ 2022.05</span>{' '}
                        조지워싱턴대학교 교환학생
                    </li>
                    <li>
                        <span className="number">2022.01</span> 컴퓨터과학과
                        복수전공 진입
                    </li>
                </ul>
            </div>
            <div className={classes.certificates}>
                <p className="profile-category">Certificates</p>
                <ul>
                    <li>
                        <span className="number">2010 ~ 2014</span> ITQ 한글,
                        엑셀, 파워포인트
                    </li>
                    <li>
                        <span className="number">2019</span> 컴퓨터활용능력 1급
                    </li>
                    <li>
                        <span className="number">2020.04</span> TOEFL 111점
                    </li>
                    <li>
                        <span className="number">2021</span> 바리스타 2급
                    </li>
                    <li>
                        <span className="number">2022.09</span> TOEIC 990점
                    </li>
                    {/* <li> */}
                    {/*    <span className="number">2023</span> 정보처리기사 예정 */}
                    {/* </li> */}
                </ul>
            </div>
        </div>
    );
};

export default ExtraInfo;
