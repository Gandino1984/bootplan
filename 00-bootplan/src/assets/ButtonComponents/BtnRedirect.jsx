import './BtnRedirect.css';
import React from 'react';
import { useState } from 'react';

export function BtnRedirect({Title}){
    return(
        <button className='btn'>{Title}</button>
    )
}

export default BtnRedirect;