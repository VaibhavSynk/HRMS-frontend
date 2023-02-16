import React from 'react'
import { Spinner } from 'react-bootstrap';


interface SpinnerProps {
    isShow: boolean | false;
}

export default function Spinners(props:SpinnerProps) {
    const { isShow } = props;
  return (
    <>
       {isShow && <Spinner animation='border' style={{color: "#0e79cd"}} />} 
    </>
  )
}
