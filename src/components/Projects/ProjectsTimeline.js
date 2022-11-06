import React from 'react';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useNavigate } from 'react-router-dom';
import './timeline.css';

const ProjectsTimeline = (props) => {
    const navigate = useNavigate();

    const clickTimelineElementHandler = (param) => {
        if (!param.complete) {
            alert('이 프로젝트는 아직 진행중이에요!');
        } else {
            navigate(`/projects/${param.path}`, {
                state: {
                    filename: param.filename,
                    name: param.path,
                },
            });
        }
    };

    return (
        <VerticalTimeline lineColor={'lightgrey'}>
            {props.projects.map((project, index) => (
                <VerticalTimelineElement
                    key={index}
                    className="vertical-timeline-element--work"
                    contentStyle={{
                        background: project.color,
                        color: project.textColor,
                    }}
                    contentArrowStyle={{
                        borderRight: `7px solid  ${project.color}`,
                    }}
                    onTimelineElementClick={() =>
                        clickTimelineElementHandler(project)
                    }
                    date={project.date}
                    iconStyle={{
                        background: project.color,
                        color: '#fff',
                    }}
                    icon={project.icon}
                >
                    <h3 className="vertical-timeline-element-title">
                        {project.title}
                    </h3>
                    <h5 className="vertical-timeline-element-subtitle">
                        {project.subtitle}
                    </h5>
                    <p>{project.description}</p>
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
    );
};

export default ProjectsTimeline;
