import React from 'react'
import { useEffect } from 'react';

function Test() {
    const handleClick = (e) => {
      e.preventDefault();
      // console.log('The link was clicked.');
    }

    useEffect(() => {
      let handler = () => {
        // console.log('click');
      };

      document.addEventListener('mousedown', handler);
    }, []);
  
    return (
    <button onClick={handleClick}>
      Click me
    </button>
    );
  }
export default Test