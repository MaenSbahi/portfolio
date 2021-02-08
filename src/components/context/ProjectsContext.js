import React, { createContext, useState } from 'react';
import placeholder from '../../Assets/pro_placeholder.png';
import placeholderII from '../../Assets/pro_placeholderII.png';

export const ProjectsContext = createContext();
const ProjectsContextProvider = ({ children }) => {
    /*eslint-disable-next-line */
    const [Projects, setProjects] = useState([
        {
            id: 1,
            title: 'MSAAD Is Assistant For Your Daily Tasks',
            desc:
                'This project is created on demand to be performed any type of tasks, the skills behind it is: React as a front interface, CSS (SCSS) for styling and Javascript',
            placeholder,
            // url: '#',
            skills: {
                ReactIco: true,
                Html: true,
                Css: true,
                Sass: true,
                JS: true,
            },
        },
        {
            id: 2,
            title: 'Elena Joy Is A Professional Photographer',
            desc:
                'This project is created on demand to be performed a portfolio to a photographer, the skills behind it is: React as a front interface, CSS (SCSS) for styling and Javascript',
            placeholder: placeholderII,
            skills: {
                ReactIco: true,
                Html: false,
                Css: false,
                Sass: true,
                JS: true,
            },
        },
    ]);
    return (
        <ProjectsContext.Provider value={Projects}>
            {children}
        </ProjectsContext.Provider>
    );
};

export default ProjectsContextProvider;
