import classes from './Title.module.css';

const Title = (props) => {
    return (
        <div
            className={`${classes.title} ${props.className && props.className}`}
        >
            <h1>{props.title}</h1>
        </div>
    );
};

export default Title;
