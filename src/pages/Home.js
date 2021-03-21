import React from 'react'
import avatar from './../components/Avatar/avatar.png'
import './../App.css'
import GitHubIcon from '@material-ui/icons/GitHub'

const Home = () => {
    return (
        <div className='home'>
            <img className='avatar' src={avatar} alt='Me' />
                <h1>Hello, I'm Eric</h1>
                <p>Welcome to my portfolio made using React library, feel free to look around!</p>
                <GitHubIcon />
        </div>
    )
}

export default Home
