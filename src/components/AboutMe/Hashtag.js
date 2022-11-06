import classes from './Hashtag.module.css';

const Hashtag = (props) => {
    return (
        <div className={classes.tag}>
            <p>
                # <span>{props.text}</span>
            </p>
        </div>
    );
};

export default Hashtag;
