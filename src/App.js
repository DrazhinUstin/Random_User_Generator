import React, { useState, useEffect } from 'react';
import icons from './icons';

const App = () => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({});
    const [gender, setGender] = useState('all');

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
                picture: { large: image },
            } = data.results[0];
            const name = `${first} ${last}`;
            const adress = `${street.number} ${street.name}`;
            setUser({ name, age, adress, email, phone, image });
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };

    useEffect(() => {
        getRandomUser();
    }, []);

    return (
        <div className='wrapper'>
            <img src={user.image} alt='random-user' className='user-image' />
            <article className='user-info'>
                <p>My street is</p>
                <h2>465 Mcgowen St</h2>
            </article>
            <div className='btn-container'>
                {icons.map((item) => {
                    const { id, icon } = item;
                    return (
                        <button key={id} className='btn-icon'>
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
