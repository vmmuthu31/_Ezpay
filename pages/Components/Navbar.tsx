import { ConnectButton } from '@rainbow-me/rainbowkit'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div>
        <div className='flex  justify-between pt-10  px-20  '>
            <Link href="/"> <img src="https://blogger.googleusercontent.com/img/a/AVvXsEi0Mf1wBXxzRyBZX_6L1dk0eSmpupougjaSWD8WEvhLWx1YepcL4--j9CN56ZS3IJ3t6iQZVObl0PuQuAIR4YbM5osTo0NmAap67aifxKgUGxaboLk7d9Z-7flM3FxKBhypS4cKZqGkGMXY4Ty-_kI8zh3lQztLlGxtk5u1FbIQqiAznXAfFKzO8Gvwch0"className='h-12 w-auto' /></Link>
            <ConnectButton />
        </div>
    </div>
  )
}

export default Navbar