import React from 'react'
import { MoveUpRight } from "lucide-react";
import HeroText from './mainText'
import Data from './Data'
import Arrow from './Arrow'

const Left_content = () => {
    return (
        <div className='relative h-180  rounded-xl w-1/4 bg-gray-100 px-8 py-4'>
            <HeroText />
            <Data />
            <Arrow/>
        </div>
    )
}

export default Left_content
