import React from 'react'

const SubmitButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (...props) => {
    return (
        <button
            className="w-full bg-primary text-secondary flex-1 p-2 text-md rounded-md"
            {...props}
            type="submit"
        >
            دخول
        </button>)
}

export default SubmitButton