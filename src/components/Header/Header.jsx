
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className='container mx-auto flex justify-between '>
                <div>Logo</div>
                <div className='flex gap-5'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/login'>Login</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;