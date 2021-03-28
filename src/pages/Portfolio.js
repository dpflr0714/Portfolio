import React from 'react'
import { Paper, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'
 
const Projects = () => {

    return (
        <>
            <Grid container spacing={10} direction='column' justify='center' alignItems='center'>
                <Grid item xs={12} md={6}>
                    <Paper>
                        <Typography variant='h3'>React Weather Application</Typography>
                        <Typography variant='body1'>A web application that retrieves real time weather metrics and conditions.
                        This was my first project that I created using React library also the first time using
                        API in any way. I was able to get familiar with components in React and also optimizing codes
                        in a way where you can reuse them and maintain them easier. Click on the link for <Link target='_blank' to={'//dpflr0714.github.io/Weather-App-React/'}>live demo.</Link></Typography>
                        
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper>
                        <Typography variant='h3'>Calculator App</Typography>
                        <Typography variant='body1'>A web application that uses Javascript, HTML, and CSS to allow users to express themselves using
                        a form of art. 
                        This was my first project that I created using React library. I was able to get familiar with components in React and also optimizing codes
                        in a way where you can reuse them and maintain them easier. Click on the link for <Link target='_blank' to={'//dpflr0714.github.io/Calculator/'}>live demo.</Link></Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper>
                        <Typography variant='h3'>Etch-A-Sketch</Typography>
                        <Typography variant='body1'>A web application that uses Javascript, HTML, and CSS to allow users to express themselves using
                        a form of art. 
                        This was my first project that I created using React library. I was able to get familiar with components in React and also optimizing codes
                        in a way where you can reuse them and maintain them easier. Click on the link for <Link target='_blank' to={'//dpflr0714.github.io/Etch-A-Sketch/'}>live demo.</Link></Typography>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}

export default Projects