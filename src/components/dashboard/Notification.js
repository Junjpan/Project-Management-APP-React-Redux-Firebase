import React from "react";

function Notification({ notifications }) {
  return (
    <div className='section '>
      <div className='card z-depth-1 blue lighten-2 white-text'>
        <div className='card-content'>
          <span className='card-title'>Notifications</span>
          <ul className='notifications'>
            {notifications &&
              notifications.map((item) => {
                return(
                  <li key={item.id}>
                    <span className='red-text'>{item.user} </span>
                    <span> {item.content}</span>
                    <div className="note-date">
                        {item.time.toDate().toLocaleString()}
                    </div>
                    <br />
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Notification;
