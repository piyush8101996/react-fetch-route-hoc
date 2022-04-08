import { useEffect, useState } from 'react';
import Profile from '../Profile/Profile';
import styles from './Profiles.module.css';
import { getUsers, userDelete } from './../../services/users';

const Profiles = (props) => {

    const [profiles, setProfiles] = useState([]);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const {page} = props;

    useEffect(()=>{
        setIsError(false);
        setIsLoading(true);
        getUsers(page)
        .then((data)=>{
            setProfiles(data.data);
            setIsLoading(false);
        })
        .catch(()=>{
            setIsError(true);
            setIsLoading(false);
        });
    },[page]);

    const userDeleteHandler = (userIndex) => {
        const users = [...profiles];
        const userId = users[userIndex].id;
        userDelete(userId)
        .then((isDeleted)=>{
            if(isDeleted){
                users.splice(userIndex,1);
                setProfiles(users);
            }else{
                // Error to show that user is not delete
            }
        });
       
    };
    
    const users = profiles.map((profile, index)=>(
        <Profile 
            key={index} 
            fname={profile.first_name}
            email={profile.email}
            userImg={profile.avatar}
            userIndex={index}
            userDeleteHandler={userDeleteHandler}/>
    ));

    return (
        <div className={styles.container}>
            {isLoading && (<div> Loading... </div>)}
            {!isLoading && (
                <>
                    {isError && (
                        <div className={styles.errorMsg}>There is some Error, Please try after sometime</div>
                    )}
                    {!isError && users}
                </>
            )}
        </div>
    );
};

export default Profiles;