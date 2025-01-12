import React from 'react'
import { useNavigate } from 'react-router-dom'
import { KeyboardArrowLeft } from 'styled-icons/material';

function GoBackBtn() {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate(-1)}
            className="flex items-center bg-[#FFDFE9] p-2 rounded-md border border-[#FFDFE9] font-semibold mt-6 ml-4 shadow-xl transition duration-300 hover:scale-105 hover:bg-[white] hover:border-[#E2A3B7] hover:text-[#E2A3B7]" >
            <KeyboardArrowLeft className="w-12 h-12" />
            <p className="mr-4">Go back</p>
        </button>
    )
}

export default GoBackBtn