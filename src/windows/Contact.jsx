import React from 'react'
import WindowsControls from '../components/WindowsControls'
import WindowWrapper from '../hoc/WindowWrapper'
import { socials } from '../constants/data'

const Contact = () => {

    return (
        <>
            <div id='window-header'>
                <WindowsControls target='contact' />
                <h2>Contact</h2>
            </div>

            <div className='p-5 space-y-5'>
                <img src="/images/adrian.jpg" alt="someone" className='w-20 rounded-full' />
                <h3>Let&apos;s connect</h3>
                <p>Got an idea? A bug to squash? Or just wanna talk tech? I&apos;m in.</p>
                <ul>
                    {socials.map((id, bg, link, icon, text) => (
                        <li key={id} style={{ backgroundColor: bg }}>
                            <a href={link} target='_blank' rel='noopener noreferrer'>
                                <img src={icon} alt="social" className='size-5' />
                                <p>{text}</p>
                            </a>

                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

const ContactWindow = WindowWrapper(Contact, 'contact')  //This Higher-Order-Compononent takes Terminal and returns a modified version of it

export default ContactWindow;
