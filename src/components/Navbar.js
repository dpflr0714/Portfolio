import React , { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


// CSS
const useStyles = makeStyles(theme =>({
    list: {
        width: "250"
    },
    fullList: {
        display: "flex",
        width: "auto"
    }
}))

export const Navbar = () => {
    const classes = useStyles()
    const [state, setState] = useState(false)
    
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
          }

          setState({...state, [anchor]: open })
    }
    
    const list = (anchor) => (
        <div
          className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
          })}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            <Link to='/' color='primary'>
            <ListItem button>
                <ListItemIcon>{<AiIcons.AiFillHome />}</ListItemIcon>
                <ListItemText primary={'Home'}/>
            </ListItem>
            </Link>
            <Link to='/projects'>
            <ListItem button>
                <ListItemIcon>{<IoIcons.IoMdFolderOpen />}</ListItemIcon>
                <ListItemText primary='Projects' />
            </ListItem>
            </Link>
            <Link to='/experience' color='primary'>
            <ListItem button>
                <ListItemIcon>{<IoIcons.IoIosTime />}</ListItemIcon>
                <ListItemText primary='Experience' />
            </ListItem>
            </Link>
            <Link to='/resume' color='primary'>
            <ListItem button>
                <ListItemIcon>{<IoIcons.IoMdDocument />}</ListItemIcon>
                <ListItemText primary='Resume' />
            </ListItem>
            </Link>
          </List>
        </div>
      );


      return (
        <div>
          {['left'].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)}>Menu</Button>
              <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </div>
      );
    }