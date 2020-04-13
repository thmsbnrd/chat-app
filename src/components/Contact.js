import React from 'react';
import PropTypes from 'prop-types';
import './Contact.css';

function Contact(props) {
  return (
    <div className="Contact">
        <img className="avatar" src={props.avatar} alt={props.name} />
        <div>
            <h4 className="name">{props.name}</h4>
            <div className="status">
                <div className={props.online ? "status-online" : "status-offline"}></div>
                <p className="status-text">{props.online ? "Online" : "Offline"}</p>
            </div>
        </div>
    </div>
  );
}

Contact.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  online: PropTypes.bool,
};

export default Contact;
