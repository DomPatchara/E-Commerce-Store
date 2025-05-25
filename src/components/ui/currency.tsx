'use client'

import React from 'react'
import { useState, useEffect } from 'react';

const formatter = new Intl.NumberFormat("en-US", {
  style: 'currency',
  currency: 'THB'
})

interface ValueProp {
    value?: string | number;
}

const Currency = ({value}: ValueProp) => {


    const [isMounted, setIsMounted] = useState(false);

    useEffect(()=>{
        setIsMounted(true);
    }, [])

    if(!isMounted) {
        return null;
    }
    
  return (
    <span className='font-semibold'>
        {formatter.format(Number(value))}
    </span>
  )
}

export default Currency