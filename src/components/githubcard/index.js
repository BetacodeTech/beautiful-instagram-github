import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import "./style.css"
import {useSelector} from "react-redux";

const GitHubCard = () => {

    const codeType = useSelector(state => state.github.codeType);
    const description = useSelector(state => state.github.description);
    const repository = useSelector(state => state.github.repository);
    const organization = useSelector(state => state.github.organization);

    return (
        <div className="github-card">
            <h1 className="title">
                <FontAwesomeIcon icon={faGithub} className="icon"/>
                <span className="content">
                <span> at </span>
                <span className="org">{organization}/</span>
                <span className="name">{repository}</span>
                </span>
            </h1>
            <p className="description">{description}</p>
            <div className="tech">
                <span id="SPAN_1"><span id="SPAN_2"></span> <span id="SPAN_3">{codeType}</span></span>
            </div>
            <div className="contributors">

            </div>
        </div>
    )
};

export default GitHubCard;
