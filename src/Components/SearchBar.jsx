import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import search_icon from '../assets/search.png';


const SearchBar = ({ onSearch, loading }) => {
    const inputRef = useRef();
    const [errorMessage, setErrorMessage] = useState('');


    const handleSearch = () => {
        const value = inputRef.current.value.trim();

        if (!value) {
            setErrorMessage('Please enter a city name');
            return;
        }

        setErrorMessage('');
        onSearch(value);
        inputRef.current.value = '';
    };



    return (
        <div className='w-full max-w-md'>
            <div className='flex items-center gap-3 mb-2'>
                <input
                    ref={inputRef}
                    type='text'
                    placeholder='Search for a city'
                    disabled={loading}
                    className='h-12 w-full px-6 py-3 text-gray-800 bg-white/80 dark:bg-gray-800 dark:text-white rounded-full placeholder-gray-500 focus:bg-white dark:focus:bg-gray-700 outline-none transition duration-300 ease-in-out'
                />


                <img
                    src={search_icon}
                    alt='Search'
                    onClick={handleSearch}
                    className='w-12 p-3 bg-white/80 dark:bg-gray-700 rounded-full cursor-pointer hover:bg-white dark:hover:bg-gray-600 transition-transform transform hover:scale-110 duration-300'
                />
            </div>


            {errorMessage && (
                <p className='text-gray-50 text-l mt-2'>{errorMessage}</p>
            )}
        </div>
    );
};


SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
};

export default SearchBar;
