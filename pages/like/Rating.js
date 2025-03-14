import { useEffect, useState } from "react";
import { FaRegStar, FaRegStarHalf, FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";

const Rating = ({likeCount}) => {
    const [likes,setLikes]=useState(0);

    useEffect(()=>{
        setLikes(likeCount);
    },[likeCount])
    const handleRates=()=>{
        if (likes==0){
            return(
                <>
                    <div style={{
                        position:'absolute',
                        display:'flex'
                    }}>
                        
                    <FaRegStar style={{
                        color:"sienna"
                    }}/>
                    <FaRegStar style={{
                        color:"sienna"
                    }}/>
                    <FaRegStar style={{
                        color:"sienna"
                    }}/>
                    <FaRegStar style={{
                        color:"sienna"
                    }}/>
                    </div>
                </>
            );
        }
        else if(likes==1){
            return(
                <div style={{position:'absolute',
                    display:'flex',
                }}>
                    <FaStar style={{
                        color:"sienna"
                    }}/>
                    <FaRegStar style={{
                        color:"sienna"
                    }}/>
                    <FaRegStar style={{
                        color:"sienna"
                    }}/>
                    <FaRegStar style={{
                        color:"sienna"
                    }}/>
                </div>
            )
        }
        
        else if(likes>=2&&likes<=5){
            return(
                <div style={{position:'absolute',
                    display:'flex',
                }}>
                    <FaStar style={{
                        color:"sienna"
                    }}/>
                    <FaStar style={{
                        color:"sienna"
                    }}/>
                    <FaRegStarHalfStroke style={{
                        color:"sienna"
                    }}/>
                    <FaRegStar style={{
                        color:"sienna"
                    }}/>
                </div>
            )
        }
    }
    return (
        <>
            <div>
                {handleRates()}
            </div>
        </>
    );
}
 
export default Rating;