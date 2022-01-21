import React from 'react';
import icons from './icons';

const App = () => {
    return (
        <div className='wrapper'>
            <img
                src='https://randomuser.me/api/portraits/men/28.jpg'
                alt='random-user'
                className='user-image'
            />
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
                <select id='gender' name='gender'>
                    <option value='all'>all genders</option>
                    <option value='male'>male</option>
                    <option value='feemale'>feemale</option>
                </select>
                <button type='button' className='btn'>
                    generate
                </button>
            </form>
        </div>
    );
};

export default App;
