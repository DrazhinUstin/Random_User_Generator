import React, { useState, useEffect } from 'react';
import icons from './icons';
import default_image from './assets/default_image.jpg';

const App = () => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({});
    const [gender, setGender] = useState('all');
    const [label, setLabel] = useState('name');

    const getRandomUser = async () => {
        const url = `https://randomuser.me/api/`;
        const fullUrl = `${url}${gender !== 'all' ? `?gender=${gender}` : ''}`;
        setLoading(true);
        try {
            const response = await fetch(fullUrl);
            const data = await response.json();
            const {
                name: { first, last },
                dob: { age },
                email,
                phone,
                location: { street },
                login: { password },
                picture: { large: image },
            } = data.results[0];
            const name = `${first} ${last}`;
            const adress = `${street.number} ${street.name}`;
            setUser({ name, age, adress, email, password, phone, image });
            setLabel('name');
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };

    useEffect(() => {
        getRandomUser();
    }, []);

    const handleMouseOver = (e) => {
        const target = e.target.closest('button');
        if (!target) return;
        setLabel(target.dataset.label);
    };

    return (
        <div className='wrapper'>
            <img src={user.image || default_image} alt='random-user' className='user-image' />
            <article className='user-info'>
                <p>My {label} is</p>
                <h2>{user[label] || 'Lola Schmitt'}</h2>
            </article>
            <div className='btn-container'>
                {icons.map((item) => {
                    const { id, icon } = item;
                    return (
                        <button
                            key={id}
                            data-label={item.label}
                            className={`btn-icon ${item.label === label ? 'active' : ''}`}
                            onMouseOver={handleMouseOver}
                        >
                            {icon}
                        </button>
                    );
                })}
            </div>
            <form className='generate-user-form'>
                <select
                    id='gender'
                    name='gender'
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                >
                    <option value='all'>all genders</option>
                    <option value='male'>male</option>
                    <option value='female'>female</option>
                </select>
                <button
                    type='button'
                    className={`btn ${loading ? 'active' : ''}`}
                    onClick={getRandomUser}
                >
                    {loading ? 'loading...' : 'generate'}
                </button>
            </form>
        </div>
    );
};

export default App;
