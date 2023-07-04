import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

export function Collapsible(props) {
  const [isActive, setIsActive] = useState(false);
  const [maxHeight, setMaxHeight] = useState('0px');

  const content = useRef(null);

  const toggleIsActive = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    setMaxHeight(isActive ? `${content.current.scrollHeight}px` : '0px');
  }, [isActive]);

  return (
    <div className="collapsible">
      <div className={`collapse ${isActive ? 'active' : ''} ${props.classText}`} onClick={toggleIsActive}> 
        <p className='collapse__title'>{props.title}</p>
        <FontAwesomeIcon className={`collapse__arrowUp ${isActive ? 'rotate' : ''}`} icon={faChevronUp} />
      </div>
      <div
        ref={content}
        style={{
          maxHeight: `${maxHeight}`,
          transition: 'max-height 0.2s ease-in',
          overflow: 'hidden',
        }}
        className="content"
      >
        <div className="content-inner">{props.children}</div>
      </div>
    </div>
  );
}
