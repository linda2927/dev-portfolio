import classes from './Wrapper.module.css';

const Wrapper = (props) => {
    const wrapperClasses = `${classes.wrapper} ${props.classes}`;
    return <div className={wrapperClasses}>{props.children}</div>;
};

export default Wrapper;
