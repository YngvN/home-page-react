import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Person from "../../utility/actions/renders/person";


function Home() {
    return (
        <div>
            <h1 className='page-title'>Home</h1>
            <div className="row container home-container">


                <div className="">
                    <Person />
                    <div className="column child">
                        <h2>Hi there!</h2>
                        <p>My name is Yngve Nykås. I'm a musician and programeer living in Oslo, Norway.</p>
                        <p>My style is to just try something and see if it's cool, and sometimes it actually works</p>

                    </div>
                    <div className="row social-links child">
                        <a
                            className='btn-github btn'
                            onClick={(e) => {
                                e.stopPropagation();
                                window.open('https://github.com/YngvN', '_blank');
                            }}
                            aria-label='Link to Github'

                        >
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                        </a>
                        <a
                            className='btn-linkedin btn'
                            onClick={(e) => {
                                e.stopPropagation();
                                window.open('https://www.linkedin.com/in/yngve-nyk%C3%A5s-363b28bb/', '_blank');
                            }}
                            aria-label='Link to Github'

                        >
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;

