import React from 'react'
import WindowWrapper from '../hoc/WindowWrapper';
import { techStack } from '../constants/data';
import { Check } from 'lucide-react';

const Terminal = () => {
    return (
        <>
            <div id='window-header'>
                <p>Window Controls</p>
                <h2>Tech Stack</h2>
            </div>

            <div className='techstack'>
                <p>
                    <span className='font-bold'>@abdninesix % </span>
                    show tech stack
                </p>

                <div className='label'>
                    <p className='w-32'>Catergory</p>
                    <p>Technologies</p>
                </div>

                <ul className='content'>
                    {techStack.map(({ category, items }) => (
                        <li key={category} className='flex'>
                            <Check size={20} />
                            <h3>{category}</h3>
                            <ul>
                                {items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
};

const TerminalWindow = WindowWrapper(Terminal, 'terminal')  //This Higher-Order-Compononent takes Terminal and returns a modified version of it

export default TerminalWindow;