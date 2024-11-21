import { MdErrorOutline } from "react-icons/md";
import { CiCircleCheck } from "react-icons/ci";
import { useState, useEffect } from 'react';
import { CiWarning } from "react-icons/ci";

export const Toast = ({ message = "",duration,type = "" }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) {
    return null;
  }

  const getTypeColor = (type) => {
    return type === 'success' ? '#4CAF50' :
           type === 'error' ? '#f44336' :
           type === 'warning' ? '#ff9800' : 
           '#2196F3';
  };

  const icons = {
      success: <CiCircleCheck style={{fontSize:"2rem",color:getTypeColor(type)}}/>,
      warning: <CiWarning style={{fontSize:"2rem",color:getTypeColor(type)}}/>,
      error:  <MdErrorOutline style={{fontSize:"2rem",color:getTypeColor(type)}}/>
  }

  return (
    <div className='notification-wrapper'>
    <div className="notification" style={{border:"1px solid",borderColor:getTypeColor(type)}}>
      {icons[type]}
      <span style={{color:"#333"}}>{message}</span>
    </div>
    </div>
  );
};


