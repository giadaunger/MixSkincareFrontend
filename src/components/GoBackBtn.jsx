import React from 'react'
import { useNavigate } from 'react-router-dom'
import { KeyboardArrowLeft } from 'styled-icons/material';

function GoBackBtn() {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate(-1)}
            className="flex bg-[#ffb6c1] py-2 px-4 rounded-md border font-semibold mt-2 shadow-md transition duration-300 hover:scale-125 hover:bg-[#bde1ed] hover:border-[#71bfd9]" >
            <KeyboardArrowLeft />
            Go back
        </button>
    )
}

export default GoBackBtn