import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Person from "../../utility/actions/renders/person";
import ScrollList from "../../utility/actions/scrollList.action";

function Home() {
    const scrollListRef = useRef<HTMLUListElement>(null);

    return (
        <div>
            <h1 className='page-title'>Home</h1>
            {/* <div className="scroll-buttons">
                <ScrollList listRef={scrollListRef} />
            </div> */}


            <div className="scroll-container">
                <ul className="scroll-list column" ref={scrollListRef}>
                    <li className="column scroll-list-item container">
                        <Person />
                        <h2>Hi there!</h2>
                        <p>My name is Yngve Nykås. I'm a musician and programmer living in Oslo, Norway.</p>
                        <p>My style is to just try something and see if it's cool, and sometimes it actually works. Sometimes</p>
                        <div className="row social-links">
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
                                aria-label='Link to Linkedin'
                            >
                                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                            </a>
                        </div>
                    </li>
                    {/* <li className="column scroll-list-item container">
                        <h2>Music</h2>
                        <p>As a musician I've got most of my experience with vocals, guitar, and piano.</p>
                        <p>I'm also an amateur music producer using Logic Pro</p>
                        <a className="btn-primary btn" href="/music">Check out my music here</a>
                    </li>
                    <li className="column scroll-list-item container">
                        <h2>Programming</h2>
                        <p>I'm a Noroff student learning front end development.</p>
                        <p>But I've also gone to university learning much back end, mostly using SQL and C#</p>
                        <a className="btn-primary btn" href="/developer">Check out some of my work here</a>
                    </li> */}
                </ul>
            </div>
        </div>

    );
}

export default Home;
