"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'
import { cn } from '@/lib/utils';
import { Category } from '../../types';

interface MainNavProps {
    data: Category[];
}

const MainNav = ({data}:MainNavProps) => {

    const pathname = usePathname();

    const routes = data.map((route) => ({
        label: route.name,
        href: `/category/${route.id}`,
        active: pathname === `/category/${route.id}`
    }))

  return (
    <nav className='mx-6 flex items-center space-x-4 lg:space-x-6'>
        { routes.map((route, index) => (
            <Link
                key={index}
                href={route.href}
                className={cn('text-sm font-medium transition-colors hover:text-black', 
                    route.active ? "text-black" : "text-neutral-500")}
            >
                {route.label}
            </Link>
        )) }
    </nav>
  )
}

export default MainNav