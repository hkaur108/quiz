import React from 'react';
import { MdAttachEmail } from "react-icons/md";



export default function Email(props) {
  const score=props.score;
  return (
    <div>
      <a href="mailto:''">
        <MdAttachEmail/>
      </a>
    </div>
  )
}
