import React from 'react'
import WindowWrapper from '../hoc/WindowWrapper';
import { techStack } from '../constants/data';
import { Check } from 'lucide-react';
import { Flag } from 'lucide-react';
import WindowsControls from '../components/WindowsControls';

const Terminal = () => {
    return (
        <>
            <div id='window-header'>
                <WindowsControls target="terminal" />
                <h2>Tech Stack</h2>
            </div>

            <div className='techstack'>
                <p>
                    <span className='font-bold'>@abdninesix % </span>
                    show-tech-stack
                </p>

                <div className='label'>
                    <p className='w-32'>Catergory</p>
                    <p>Technologies</p>
                </div>

                <ul className='content'>
                    {techStack.map(({ category, items }) => (
                        <li key={category} className='flex items-center'>
                            <Check size={20} />
                            <h3>{category}</h3>
                            <ul>
                                {items.map((item, i) => (
                                    <li key={i}>{item} {i < items.length - 1 ? "," : ""}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>

                <div className='footnote'>
                    <p><Check size={20} /> {techStack.length} of {techStack.length} stacks loaded successfully.</p>
                    <p className='text-black'><Flag size={15} fill='black' /> Render time. 6ms</p>
                </div>
            </div>
        </>
    )
};

const TerminalWindow = WindowWrapper(Terminal, 'terminal')  //This Higher-Order-Compononent takes Terminal and returns a modified version of it

export default TerminalWindow;