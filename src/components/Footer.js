import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <section className="footer">
                <div>
                    <a href="https://twitter.com/virre89?ref_src=twsrc%5Etfw"><i className="fab fa-twitter-square fa-2x"></i></a>
                    <a href="https://www.linkedin.com/in/viktor-karlsson-310b2671/"><i className="fab fa-linkedin fa-2x"></i></a>
                    <a href="https://www.facebook.com/virre89"><i className="fab fa-facebook fa-2x"></i></a>
                </div>
            </section>
        );
    }
}