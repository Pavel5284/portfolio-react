import project01 from './../img/projects/01.jpg'
import project01Big from './../img/projects/01-big.jpg'

import project02 from './../img/projects/02.jpg'
import project02Big from './../img/projects/02-big.jpg'

import project03 from './../img/projects/03.jpg'
import project03Big from './../img/projects/03-big.jpg'



export const projectsList = [
    {
        id: 1,
        title: 'Cards',
        skills: 'React, TS, Redux, MaterialUI, SCSS',
        img: project01,
        imgBig: project01Big,
        gitHubLink: 'https://github.com/BDODINKA/cards',
    },
    {
        id: 2,
        title: 'Todolist',
        skills: 'React, Redux, TS, Storybook, TDD, RTK, MUI',
        img: project02,
        imgBig: project02Big,
        gitHubLink: 'https://pavel5284.github.io/Todolist',
    },
    {
        id: 3,
        title: 'Social Network',
        skills: 'React, Redux, TS, Ant Design',
        img: project03,
        imgBig: project03Big,
        gitHubLink: 'https://pavel5284.github.io/samurai-way/',
    },
]