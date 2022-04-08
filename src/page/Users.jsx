import Profiles from '../components/Profiles/Profiles';
import { useParams } from 'react-router-dom';

const Users = () => {
    let { page } = useParams();
    return (
        <>
            <h1>Hello Users!!</h1>
            <Profiles page={page}/>
        </>
    );
};

export default Users;