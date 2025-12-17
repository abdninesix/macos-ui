import React from 'react'
import { locations } from '../constants/data'

const projects = locations.work?.children ?? []

const Home = () => {
    return (
        <section id='home'>
            <ul>
                {projects.map((project) => (
                    <li key={project.id} className={`group folder ${project.windowPosition}`}>
                        <img src="/images/folder.png" alt={project.name} />
                        <p>{project.name}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Home