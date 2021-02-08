import React from 'react';
import * as icons from 'react-icons/di';

const SkillsIcons = ({ skills: { ReactIco, JS, Html, Css, Sass } }) => {
    return (
        <>
            {ReactIco && <icons.DiReact />}
            {Sass && <icons.DiSass />}
            {Css && <icons.DiCss3 />}
            {Html && <icons.DiHtml5 />}
            {JS && <icons.DiJavascript1 />}
        </>
    );
};

export default SkillsIcons;
