import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Header from '../components/Header';
import Nav from '../components/Nav';
import AboutPage from '../components/AboutPage';
import ContactPage from '../components/ContactPage';
import ProjectsPage from '../components/ProjectsPage';
import Footer from '../components/Footer';

const AppRouter = () => (
    <BrowserRouter>
        <div className='wrapper'>
            <Header/>
            <Nav/>
            <Footer/>
            <section className="content">
                <Switch>
                    <Redirect from="/" to ="/about" exact={true}/>
                    <Route path="/about" component={AboutPage}/>
                    <Route path="/projects" component={ProjectsPage}/>
                    <Route path="/contact" component={ContactPage}/>
                </Switch>
            </section>
        </div>
    </BrowserRouter>
);

export default AppRouter;