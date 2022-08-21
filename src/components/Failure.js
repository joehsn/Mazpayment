import React from "react";
import { Alert } from 'react-bootstrap'
import { FaTimes } from "react-icons/fa";
export default function Failure() {
    return (<>
        <Alert variant="danger" className='text-center'>
            <Alert.Heading>لقد فشل ألارسال! <FaTimes className='ms-1' /></Alert.Heading>
            <hr />
            <span>تأكد من سلامة البينات التي دخلتها!</span>
        </Alert>
    </>)
}