import React from 'react';
import Navbar from './components/Navbar';
import './styles/style.scss';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home';
import { AnimatePresence } from 'framer-motion';
import Model from './components/Model';
import ProjectsContextProvider from './components/context/ProjectsContext';

function App() {
    const location = useLocation();
    return (
        <ProjectsContextProvider>
            <header className="wrapper">
                <Navbar logoState={location.pathname === '/'} />
                <AnimatePresence>
                    <Switch location={location} key={location.key}>
                        <Route path="/projects" component={Projects} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/">
                            <Home />
                        </Route>
                        <Redirect to="/" />
                    </Switch>
                    <Switch location={location} key={'model'}>
                        <Route path="/projects/:id" component={Model} />
                    </Switch>
                </AnimatePresence>
            </header>
        </ProjectsContextProvider>
    );
}

export default App;
