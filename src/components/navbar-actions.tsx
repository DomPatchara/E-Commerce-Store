'use client'

import { useState, useEffect } from 'react'
import Button from './ui/Button'
import { ShoppingBag } from 'lucide-react'
import useCart from '@/store/use-cart'
import { useRouter } from 'next/navigation'

const NavBarActions = () => {

    const [isMounted, setIsMounted] = useState(false)
    const cart = useCart();
    const count = cart.items.length;

    const router = useRouter();


    useEffect(()=>{
        setIsMounted(true)
    }, [])

    if(!isMounted) {
        return null ;
    }


  return (
    <div className='ml-auto flex items-center gap-4'>
        <Button onClick={()=>router.push('/cart')}  className='flex items-center rounded-full bg-black px-4 py-2'>
            <ShoppingBag size={20} color='white'/>
            <span className='ml-2 text-sm font-medium text-white'>
                {count}
            </span>
        </Button>
    </div>
  )
}

export default NavBarActions;