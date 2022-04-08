import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <div>
                <Link to="/users-images">User Images Galary</Link>
            </div>
            <div>
                <Link to="/counter">Counter</Link>
            </div>
            <div>
                <Link to="/mamos">Memos</Link>
            </div>
            <div>
                <Link to="/form">User Form</Link>
            </div>
            <div>
                <Link to="/1">Page 1</Link>
            </div>
            <div>
                <Link to="/2">Page 2</Link>
            </div>
        </>
    );
};

export default Nav;