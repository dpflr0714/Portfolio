import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        class: 'nav-text'
    },
    {
        title: 'Resume',
        path: '/resume',
        icon: <IoIcons.IoMdDocument />,
        class: 'nav-text'
    },
    {
        title: 'Projects',
        path: '/projects',
        icon: <IoIcons.IoMdFolderOpen />,
        class: 'nav-text'
    },
    {
        title: 'Experience',
        path: '/experience',
        icon: <IoIcons.IoIosTime />,
        class: 'nav-text'
    }
]