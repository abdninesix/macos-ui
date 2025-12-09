import React from 'react'
import WindowsControls from '../components/WindowsControls'

const Resume = () => {
    return (
        <>
            <div className='window-wrapper'>
                <WindowsControls target='resume' />
            </div>
        </>
    )
}

const ResumeWindow = WindowWrapper(Resume, 'resume')  //This Higher-Order-Compononent takes Terminal and returns a modified version of it

export default ResumeWindow