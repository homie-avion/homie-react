import React from 'react'
import { Link } from 'react-router-dom';

const Dropdown = ({ isOpen, toggle }) => {
    return (
        <div
            className={
                isOpen
                ? 'grid grid-rows-2 items-center bg-white px-6'
                : 'hidden'
            }
            onClick={toggle}
            >
            <Link to="/signin" className="h-12 flex items-center justify-end whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 px-4">
                Sign In
            </Link>
            <Link to="/signup" className="h-12 flex items-center justify-end whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 border-b-2 border-gray-100 px-4">
                Sign Up
            </Link>
        </div>
    )
}

export default Dropdown
