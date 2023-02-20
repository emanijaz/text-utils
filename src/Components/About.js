import React from 'react'
import { Link } from 'react-router-dom';

export default function  About(props) {
  return (
    <div className={`container text-${props.mode=== 'light' ? 'dark' : 'light'}`}>
      <p>
        This is my <Link to="/"> Text Utils </Link>application. It applies various features like UpperCase, LowerCase, Bold, Removing Extra Spaces, Copy Text etc on the text to fulfill
        basic task manipulations.
      </p>
    </div>
  )
}
