import bird from './svg/bird.svg'
import cow from './svg/cow.svg'
import bison from './svg/cow.svg'
import dog from './svg/dog.svg'
import cat from './svg/cat.svg'
import horse from './svg/horse.svg'
import heartImageSrc from './svg/heart.svg'
import { useState } from 'react'
import  "./AnimalShow.css"
const svgMap = {
    bird,
    cow,
    bison,
    dog,
    cat,
    horse
}
const AnimalShow = ({type,hasHeart}) => {
    const [heart,setHeart]=useState(false);
    const handleHeart = () => {
        setHeart(true)
    }
    const [clicks,setClick]=useState(false);
    const handleClick = () => {
        setClick(clicks+1)
    }

    return (

       
        <div  onClick={handleClick} className='animal-show'>
            <img src={svgMap[type]} alt="animal" className='animal'></img>
            <img
            alt="heart" 
           className='heart'
            style={{width:10+10*clicks}} src={heartImageSrc}></img>
        </div>

 );
}
export default AnimalShow