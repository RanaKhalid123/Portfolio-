import React from 'react';
import { BsGithub, BsTwitter, BsFileCode } from 'react-icons/bs';
import { FaLinkedin, FaFile } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <div className="app__social">
            <div>
                <a href="https://www.linkedin.com/in/khalidrasool/" title="LinkedIn">
                    <FaLinkedin />
                </a>
            </div>
            <div>
                <a href="https://github.com/RanaKhalid123" title="Github">
                    <BsGithub />
                </a>
            </div>
            <div>
                <a target="_blank" href="https://shorturl.at/bjnP4" title="Resume">
                    <FaFile />
                </a>
            </div>
            <div>
                <a target="_blank" href="https://shorturl.at/alps1" title="Portfolio">
                    <FaFile />
                </a>
            </div>
            <div>
                <a  target="_blank" href="https://linktr.ee/khalidrasool" title="Linktree">
                    <BsFileCode />
                </a>
            </div>
        </div>
    );
}

export default SocialMedia;
