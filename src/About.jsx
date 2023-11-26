import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate()
    const GotoHome = () => {
        navigate('/')
    }
    return (
        <div>
            this is amuy about
            <button onClick={() => GotoHome()}>goto home page</button>
        </div>

    )
}

export default About;

