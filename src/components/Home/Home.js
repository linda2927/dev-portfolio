import React from 'react';
import classes from './Home.module.css';

const Home = (props, sectionRefs) => {
    return (
        <section
            className={classes.home}
            id={props.sectionId}
            ref={(el) => (sectionRefs.current[0] = el)}
        >
            <h1 className={classes.title}>Earthlyz9 Dev Web Portfolio</h1>
        </section>
    );
};

const ForwardRefHome = React.forwardRef(Home);

export default ForwardRefHome;
