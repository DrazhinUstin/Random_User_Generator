import {
    FaUser,
    FaEnvelope,
    FaCalendarCheck,
    FaMapMarkedAlt,
    FaPhoneAlt,
    FaLock,
} from 'react-icons/fa';

const icons = [
    {
        id: 1,
        label: 'name',
        icon: <FaUser />,
    },
    {
        id: 2,
        label: 'email',
        icon: <FaEnvelope />,
    },
    {
        id: 3,
        label: 'age',
        icon: <FaCalendarCheck />,
    },
    {
        id: 4,
        label: 'adress',
        icon: <FaMapMarkedAlt />,
    },
    {
        id: 5,
        label: 'phone',
        icon: <FaPhoneAlt />,
    },
    {
        id: 6,
        label: 'password',
        icon: <FaLock />,
    },
];

export default icons;
