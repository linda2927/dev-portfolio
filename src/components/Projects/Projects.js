import React from 'react';
import classes from './Projects.module.css';
import Title from '../UI/Title';
import ProjectsTimeline from './ProjectsTimeline';
import { HiOutlineUserGroup, HiOutlineUser } from 'react-icons/hi';

const Projects = (props, ref) => {
    const projects = [
        {
            path: 'bruteforce',
            title: '개발자의 길이 열리다, Bruteforce',
            filename: 'Bruteforce.md',
            subtitle: 'Django 로 시작한 웹풀스택 개발',
            description:
                '너도 할 수 있어! 코딩 학습의 진입 장벽을 낮추기 위한 교육 사업 Bruteforce, 더불어 공부하는 힘을 되살리다',
            date: '2021.07 ~ 2021.12',
            icon: <HiOutlineUser />,
            color: '#323442',
            textColor: 'white',
            complete: true,
        },
        {
            path: 'groovy',
            title: '대학생들의 링크드인, 그 첫걸음 Groovy',
            filename: 'Groovy.md',
            subtitle: 'DRF 로 시작된 백엔드 개발자로서의 꿈',
            description:
                '다들 뭐하고 살지...? 대학생들은 레퍼런스가 부족해! 진로에 대해 고민하는 새로운 방법을 제시하다',
            date: '2022.01 ~ 2022.06',
            icon: <HiOutlineUserGroup />,
            color: '#4b51ba',
            textColor: 'white',
            complete: true,
        },
        {
            path: 'icaan',
            title: 'ICAAN 프로젝트의 SW 연구원',
            subtitle: '설계부터 배포까지, React + Node.js + MongoAtlas',
            description:
                '질병관리청 국립보건연구원 주관 ICAAN 프로젝트의 어드민 페이지와 피험자 웹앱 구현을 도맡다!',
            date: '2022.05 ~ present',
            icon: <HiOutlineUserGroup />,
            color: '#FFBF36',
            textColor: 'black',
            complete: false,
        },
        {
            path: 'space-gem',
            title: 'Space Gem',
            filename: 'SpaceGem.md',
            subtitle: 'Unity 로 배우는 C#',
            description:
                '질병관리청 국립보건연구원 주관 ICAAN 프로젝트의 어드민 페이지와 피험자 웹앱 구현을 도맡다!',
            date: '2022.10',
            icon: <HiOutlineUser />,
            color: '#2fd8e8',
            textColor: 'black',
            complete: true,
        },
    ];

    return (
        <section
            className={classes.projects}
            id={props.sectionId}
            ref={(el) => (ref.current[3] = el)}
        >
            <Title title={'Projects'} />
            <ProjectsTimeline projects={projects} />
        </section>
    );
};

const ForwardRefProjects = React.forwardRef(Projects);
export default ForwardRefProjects;
