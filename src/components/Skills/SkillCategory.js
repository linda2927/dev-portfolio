import Card from '../UI/Card';
import styles from './SkillCategory.module.css';

const SkillCategory = (props) => {
    return (
        <div className={styles['skill-category']}>
            <h1>{props.category}</h1>
            <Card>{props.children}</Card>
        </div>
    );
};

export default SkillCategory;
