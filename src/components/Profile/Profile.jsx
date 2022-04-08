import { background } from '../../hoc/background';
import styles from './Profile.module.css';

const Profile = (props) => {

    const userDeleteHandler = () => {
        props.userDeleteHandler(props.userIndex);
    }

    return (
        <div className={styles.container}>
            <div className={styles.fname}>{props.fname}</div>
            <div className={styles.email}>{props.email}</div>
            <img className={styles.userImg} src={props.userImg} alt="user" />
            <div>
                <button onClick={userDeleteHandler}>Delete</button>
            </div>
        </div>
    );
};

export default background(Profile, '#ddd');