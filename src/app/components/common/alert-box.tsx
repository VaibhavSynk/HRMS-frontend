import React from 'react'
import { Alert } from 'react-bootstrap'

interface AlertBoxProps {
    message: string,
    variant: string
}

export default function AlertBox(props: AlertBoxProps) {
    const { message,variant } = props;
    return (
    <>
     <Alert variant={variant} >{message}</Alert>
    </>
)}