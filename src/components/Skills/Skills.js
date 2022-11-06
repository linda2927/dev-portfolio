import React from 'react';
import classes from './Skills.module.css';
import Title from '../UI/Title';
import SkillCategory from './SkillCategory';
import {
    Html5,
    CssThree,
    Javascript,
    ReactJs,
    Nextdotjs,
    Vuedotjs,
    Django,
    Python,
    Fastapi,
    Express,
    Nodedotjs,
    Mongodb,
    Mysql,
    Spring,
    Swagger,
    Flutter,
    Amazonaws,
    Heroku,
    Vercel,
    Github,
    Discord,
    Notion,
    Confluence,
    Jira,
    Figma,
    Asana,
    Slack,
    Postgresql,
} from '@icons-pack/react-simple-icons';

const Skills = (props, ref) => {
    return (
        <section
            className={classes.skills}
            id={props.sectionId}
            ref={(el) => (ref.current[2] = el)}
        >
            <Title title={'Skills'} />
            <div>
                <SkillCategory category={'Frontend'}>
                    <Html5 color="#E34F26" size={70} />
                    <CssThree color="#1572B6" size={70} />
                    <Javascript color="#F7DF1E" size={70} />
                    <ReactJs color="#61DAFB" size={70} />
                    <Nextdotjs color="#000000" size={70} />
                    <Vuedotjs color="#4FC08D" size={70} />
                </SkillCategory>
                <SkillCategory category={'Mobile'}>
                    <Flutter color="#02569B" size={70} />
                </SkillCategory>
                <SkillCategory category={'Backend'}>
                    <Django color="#092E20" size={70} />
                    <Python color="#3776AB" size={70} />
                    <Fastapi color="#009688" size={70} />
                    <Express color="#000000" size={70} />
                    <Nodedotjs color="#339933" size={70} />
                    <Mongodb color="#47A708" size={70} />
                    <Mysql color="#4479A1" size={70} />
                    <Postgresql color="#4169E1" size={70} />
                    {/* <Spring color="#6DB33F" size={70} /> */}
                    <Swagger color="#85EA2D" size={70} />
                </SkillCategory>
                <SkillCategory category={'Deploy'}>
                    <Amazonaws color="#232F3E" size={70} />
                    <Heroku color="#430098" size={70} />
                    {/* <Replit color="#667881" size={70} /> */}
                    <Vercel color="#000000" size={70} />
                </SkillCategory>
                <SkillCategory category={'Version Control'}>
                    <Github color="#181717" size={70} />
                </SkillCategory>
                <SkillCategory category={'Communication'}>
                    <Discord color="#5865F2" size={70} />
                    <Notion color="#000000" size={70} />
                    <Slack color="#4A154B" size={70} />
                    <Asana color="#273347" size={70} />
                    <Figma color="#F24E1E" size={70} />
                    <Confluence color="#172B4D" size={70} />
                    <Jira color="#0052CC" size={70} />
                </SkillCategory>
            </div>
        </section>
    );
};

const ForwardRefSkills = React.forwardRef(Skills);
export default ForwardRefSkills;
