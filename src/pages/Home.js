import React from 'react'
import avatar from './../components/Avatar/avatar.png'
import './../App.css'
import GitHubIcon from '@material-ui/icons/GitHub'
import * as IoIcons from 'react-icons/io'
import { Link } from 'react-router-dom'
import { IconButton } from '@material-ui/core'

const Home = () => {
    return (
        <div className='home'>
            <img className='avatar' src={avatar} alt='Me' />
                <h1>Hello, I'm Eric</h1>
                <p>Welcome to my portfolio made using React library, feel free to look around!</p>
                <div>
                    <IconButton>
                        <Link target='_blank' to={'//github.com/dpflr0714'}>
                            <GitHubIcon />
                        </Link>
                    </IconButton>
                    <IconButton>
                        <Link target='_blank' to={'//www.linkedin.com/in/ericjunpark/'}>
                            <IoIcons.IoLogoLinkedin />
                        </Link>
                    </IconButton>
                </div>
        </div>
    )
}

export default Home
