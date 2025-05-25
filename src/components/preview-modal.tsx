'use client'

import usePreviewModel from '@/store/use-preview-model'
import React from 'react'
import Modal from './ui/modal'
import Gallery from './gallery'
import Info from './info'

const PreviewModal = () => {

    // from zustand
    const {isOpen, onClose} = usePreviewModel(); 
    const product =  usePreviewModel((state) => state.data)

    if(!product) {
        return null;
    }

  return (
    <Modal
        open={isOpen}  
        onClose={onClose}  
    >
        <div className='grid items-start w-full grid-cols-1 sm:grid-cols-12 gap-x-6 gap-y-8 lg:gap-x-8'>
            <div className='sm:col-span-5 lg:col-span-6'>
                <Gallery images={product.images}/>
            </div>
            <div className='sm:col-span-7 lg:col-span-6'>
                <Info data={product} />
            </div>
        </div>
    </Modal>
  )
}

export default PreviewModal