import React from 'react';
import { Alert } from 'react-bootstrap'
import { IoCheckmarkDoneSharp } from 'react-icons/io5'
import { FaHeart } from 'react-icons/fa'

export default function Success() {
    return (<>
        <Alert variant="success" className='text-center'>
            <Alert.Heading>تم الإرسال بنجاح! <IoCheckmarkDoneSharp className='ms-1' /></Alert.Heading>
            <hr />
            <span>سنقوم بالرد عليك في اقرب وقت! <FaHeart /></span>
        </Alert>
    </>)
}