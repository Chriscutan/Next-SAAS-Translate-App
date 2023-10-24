import Link from 'next/link'
import React from 'react'
import { AspectRatio } from './ui/aspect-ratio'

function Logo() {
  return (
    <Link href="/" className='overflow-hidden' prefetch={false}>
        <div className='flex items-center w-72 h-14'>
            <AspectRatio ratio={16/9} className='flex items-center justify-center'>
                <p className='dark:filter dark:invert font-bold text-xl'>ChatAnywhere</p>
            </AspectRatio>
        </div>
    </Link>
  )
}

export default Logo