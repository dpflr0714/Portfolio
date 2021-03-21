import React from 'react'
import { Paper, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'

const Experience = () => {
    return (
        <div className="experience">
            <Grid container spacing={10} direction='column' justify='center' alignItems='center'>
                <Grid item xs={12} md={6}>
                    <Paper>
                        <Typography variant='h4'>
                            CIS-121 Fundamentals of Web Site Development
                        </Typography>
                        <Typography variant='body1'>
                            My peers and I created a website for one of the local restaurant. It was developed in 5 weeks in agile methodology. It was first time I got into web develpment.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper>
                        <Typography variant='h4'>
                            CIS-234 Object-oriented Programming with Java
                        </Typography>
                        <Typography variant='body1'>
                            It was my first time learning Java. I was able to make a game where a player goes around the map and interact with items in differnt areas of the map.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper>
                        <Typography variant='h4'>
                            CIS-304 Intermediate Java Programming for Business
                        </Typography>
                        <Typography variant='body1'>
                            One of the most hardest project from this class was making a pizza ordering application. It was built with simply GUI and learned more advanced data structures in programming.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper>
                        <Typography variant='h4'>
                            CIS-305 Database Design and Development
                        </Typography>
                        <Typography variant='body1'>
                            Designed and created MYSQL database and Erwin data modeler to imiate real life database in a company to create queries for real life business use.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper>
                        <Typography variant='h4'>
                            CIS-315 Introductions to Systems Analysis and Design
                        </Typography>
                        <Typography variant='body1'>
                            Learned and implemented creating systems that works together to create a infrastructure using unified modeling language (UML).
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper>
                        <Typography variant='h4'>
                            CIS-491 Secure Web Applications
                        </Typography>
                        <Typography variant='body1'>
                            Development of appropriate security mechanisms in the logic, coding, testing, and debugging of Web applications. Practices such as SQL injection, data sanitization, preventing cross site scriptings were implemented during projects.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Experience
