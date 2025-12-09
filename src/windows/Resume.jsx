import React from 'react'
import WindowsControls from '../components/WindowsControls'
import WindowWrapper from '../hoc/WindowWrapper'

const Resume = () => {
    return (
        <>
            <div className='window-header'>
                <WindowsControls target='resume' />
                <h2>Resume.pdf</h2>
                <a href="files/resume.pdf"></a>
            </div>
        </>
    )
}

const ResumeWindow = WindowWrapper(Resume, 'resume')  //This Higher-Order-Compononent takes Terminal and returns a modified version of it

export default ResumeWindow