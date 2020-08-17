import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { faUserCheck } from '@fortawesome/free-solid-svg-icons';
import Data from '../data/data.json';

class Todo extends Component {

    render() {
        return (
            <div className="list-item-wrap">
                <ul>
                    {Data.map((details, index) => {
                        return <li>
                            <div className="info-details-wrap">
                                <div className="appmnt-details">
                                    <h4>{details.appointmentName}</h4>
                                    <span>{details.drName}</span>
                                </div>
                                <p className="appmnt-time text-red">{details.date}</p>
                            </div>
                            <div className="info-icon-wrap"><FontAwesomeIcon icon={faUserCheck} /></div>
                        </li>
                    })}


                </ul>
            </div>
        );
    }
}

Todo.propTypes = {
};

Todo.defaultProps = {
};

export default Todo;
