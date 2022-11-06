import React, { useEffect, useState, useRef } from 'react';
import classes from './ScrollPage.module.css';
import ForwardRefHome from '../Home/Home';
import ForwardRefAboutMe from '../AboutMe/AboutMe';
import ForwardRefSkills from '../Skills/Skills';
import ForwardRefProjects from '../Projects/Projects';
import ForwardRefStudy from '../Study/Study';

const ScrollPage = () => {
    const sectionRefs = useRef([]);
    const [startSimulation, setStartSimulation] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('last') === '#projects') {
            document.getElementById('projects').scrollIntoView();
        }
    }, []);

    const [canvasWidth, setCanvasWidth] = useState(null);

    useEffect(() => {
        if (sectionRefs.current[4])
            setCanvasWidth(sectionRefs.current[4].offsetWidth);
    }, [sectionRefs]);

    const observerOptions = {
        root: document.getElementById('main-scroll'),
        rootMargin: '0px',
        threshold: 0.3,
    };

    const onIntersectionScroll = (targets) => {
        console.log(targets);
        targets.forEach((t) => {
            if (t.isIntersecting) {
                console.log(t.target.id);
                window.location.hash = '#' + t.target.id;
                localStorage.setItem('last', '#' + t.target.id);
                if (t.target.id === 'study') setStartSimulation(true);
            } else {
                if (t.target.id === 'study') setStartSimulation(false);
            }
        });
    };

    const sectionObserver = new IntersectionObserver(
        onIntersectionScroll,
        observerOptions
    );

    useEffect(() => {
        const refs = sectionRefs.current;
        refs.forEach((el) => sectionObserver.observe(el));
    }, [sectionRefs, sectionObserver]);

    return (
        <div
            id="main-scroll"
            className={`${classes.wrapper} disable-scrollbars`}
            // onScroll={test}
        >
            <ForwardRefHome sectionId="home" ref={sectionRefs} />
            <ForwardRefAboutMe sectionId="about-me" ref={sectionRefs} />
            <ForwardRefSkills sectionId="skills" ref={sectionRefs} />
            <ForwardRefProjects sectionId="projects" ref={sectionRefs} />
            <ForwardRefStudy
                sectionId="study"
                startSimulation={startSimulation}
                ref={sectionRefs}
                canvasWidth={canvasWidth}
            />
        </div>
    );
};

export default ScrollPage;
