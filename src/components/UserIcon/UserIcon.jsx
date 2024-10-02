import './UserIcon.css';
import { FaCircle } from 'react-icons/fa6';

const UserIcon = ({ intials, available, bgColor }) => {

    const circleColor = available ? "#50B053" : "#ccc"; 

    return (
        <div className='user'>
            <div className='user_icon' style={{ backgroundColor: bgColor || '#000' }}>
                {intials}
            </div>
            <div className='dot' style={{ color: circleColor }}>
                <FaCircle />
            </div>
        </div>
    );
};

export default UserIcon;
