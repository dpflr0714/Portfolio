import React , { useState } from 'react'
import pdf from '../../src/resume.pdf'
import { Paper, Typography } from '@material-ui/core';

const Resume = () => {

    return (
        <div className="resume">
            <Paper>
                <Typography variant='h3'>
                    Here is my resume if you want to check it out!
                </Typography>
            </Paper>
            <a href= {pdf} target='_blank'>Click Here</a>
        </div>
    )
}
export default Resume
