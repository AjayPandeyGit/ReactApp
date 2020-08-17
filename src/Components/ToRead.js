import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import ImageInfo from '../data/imageInfo.json'

class ToRead extends Component {

    render() {
        return (
            <div className="toread-wrap">
                <ul>
                    {ImageInfo.map((img, index) => {
                        return <li>
                            <div className="img-wrap">
                                <img src={img.imgURL} />
                                <p className="img-num">{img.imgID} </p>
                            </div>
                            <div className="img-info-wrap">
                                <p>{img.imgName}</p>
                                <FontAwesomeIcon icon={faChevronRight} className="icon-right" />
                            </div>
                        </li>
                    })}
                </ul>
            </div>

        );
    }
}

ToRead.propTypes = {
};

ToRead.defaultProps = {
};

export default ToRead;
