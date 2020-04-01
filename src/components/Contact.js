import React from 'react';
import './Contact.css';

const name = "Landon Dixon";
const avatar = 'https://randomuser.me/api/portraits/men/82.jpg';
const online = true;

function Contact() {
  return (
    <div className="Contact">
        <img class="avatar" src={avatar} />
        <div>
            <h4 class="name">{name}</h4>
            <div class="status">
                <div class={online ? "status-online" : "status-offline"}></div>
                <p class="status-text">{online ? "Online" : "Offline"}</p>
            </div>
        </div>
    </div>
  );
}

export default Contact;

/*
const name = "Darth Plagueis";
const avatar = 'https://avatarfiles.alphacoders.com/798/79894.jpg';
const online = false;
const element = (
  <div className="person-item">
    <img className ="avatar" src={avatar} />
    <div>
      <h4>{name}</h4>
      <p>{online ? "Online" : "Offline"}</p>
    </div>
  </div>
);
*/