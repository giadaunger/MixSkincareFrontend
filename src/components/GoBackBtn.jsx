import React from 'react'
import { useNavigate } from 'react-router-dom'
import { KeyboardArrowLeft } from 'styled-icons/material';

function GoBackBtn() {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate(-1)}
            className="flex items-center bg-[#ffb6c1] p-2 rounded-md border font-semibold mt-6 ml-4 shadow-md transition duration-300 hover:scale-105 hover:bg-[#bde1ed] hover:border-[#71bfd9]" >
            <KeyboardArrowLeft className="w-12 h-12" />
            <p className="mr-4">Go back</p>
        </button>
    )
}

export default GoBackBtn