import React, { useState, useRef, useEffect } from 'react';

export function Collapsible(props) {
  const [isActive, setIsActive] = useState(false);
  const [maxHeight, setMaxHeight] = useState('0px');

  const content = useRef(null);

  const toggleIsActive = () => {
    setIsActive((prevState) => !prevState);
  };

  useEffect(() => {
    setMaxHeight(isActive ? `${content.current.scrollHeight}px` : '0px');
  }, [isActive]);

  return (
    <div className="collapsible">
      <div className={`collapse ${isActive ? 'active' : ''}`} onClick={toggleIsActive}>
        <p className='collapse__title'>{props.title}</p>
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
