import axios from "axios";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import ShopItems from "./home/ShopItems";

const Earching = () => {

    const [isSearching,setIsSearching]=useState(false);
    const [searchWord,setSearchWord]=useState("");

    const handleOnclick=async()=>{
        setIsSearching(true);
    }
    return (
        <>

        <div style={{
            position:"relative",
            margin:"80px 60px 10px 10px",
            display:"flex",
            border:"1px solid black",
            width:"330px",
            borderRadius:"20px"
        }}>
            <form style={{
                borderRight:"1px solid black"
            }}>
                <input style={{
                    backgroundColor:"white",
                    border:"1px solid rgba(0,0,0,0.0)",
                    width:"300px",
                    height:"30px",
                    borderTopLeftRadius:"20px",
                    borderBottomLeftRadius:"20px",
                    color:"black",
                    paddingLeft:"20px"
                }}
                value={searchWord}
                onChange={(e)=>setSearchWord(e.target.value)}
                >
                    
                </input>
            </form>
            <div style={{
                position:"relative",
                top:"2px",
                backgroundColor:"white",
                margin:"5px",

            }} onClick={handleOnclick}>
                <FaSearch color="black"/>
            </div>

        </div>
            {isSearching?(
                <div>
                    <ShopItems searchItem={searchWord}/>
                </div>
            ):(
                <div>
                    <div style={{
                        position:"relative",
                        margin:"80px 60px 20px 60px",
                        border:"1px solid rgba(240, 241, 221, 0.938)",
                        height:"300px",
                        width:"300px",
                        borderRadius:"15px",
                        backgroundColor:""

                    }}>
                        <div style={{
                            position:"relative",
                            top:'30px',
                            margin:'10px 10px 10px 30px',
                            width:"250px",
                            height:'20px',
                            border:"1px solid rgba(240, 241, 221, 0.938)",
                            borderRadius:"10px",
                            backgroundColor:"rgba(240, 241, 221, 0.938)"
                        }}>
                        </div>
                        
                        <div style={{
                            position:"relative",
                            top:'30px',
                            margin:'10px 10px 10px 80px',
                            width:"200px",
                            height:'20px',
                            border:"1px solid rgba(240, 241, 221, 0.938)",
                            borderRadius:"15px",
                            backgroundColor:"rgba(240, 241, 221, 0.938)"
                        }}></div>
                        
                        <div style={{
                            position:"relative",
                            top:'30px',
                            margin:'10px 10px 10px 10px',
                            width:"200px",
                            height:'180px',
                            border:"1px solid rgba(240, 241, 221, 0.938)",
                            borderRadius:"15px",
                            display:"flex",
                            justifyContent:"center",
                            alignItems:"center",
                            backgroundColor:"rgba(240, 241, 221, 0.938)",
                            
                        }}></div>


                        
                    </div>
                    <div style={{
                        position:"relative",
                        margin:"0px 60px 80px 60px",
                        border:"1px solid rgba(240, 241, 221, 0.938)",
                        height:"300px",
                        width:"300px",
                        borderRadius:"15px",
                        backgroundColor:""

                    }}>
                        <div style={{
                            position:"relative",
                            top:'30px',
                            margin:'10px 10px 10px 30px',
                            width:"250px",
                            height:'20px',
                            border:"1px solid rgba(240, 241, 221, 0.938)",
                            borderRadius:"10px",
                            backgroundColor:"rgba(240, 241, 221, 0.938)"
                        }}>
                        </div>
                        
                        <div style={{
                            position:"relative",
                            top:'30px',
                            margin:'10px 10px 10px 80px',
                            width:"200px",
                            height:'20px',
                            border:"1px solid rgba(240, 241, 221, 0.938)",
                            borderRadius:"15px",
                            backgroundColor:"rgba(240, 241, 221, 0.938)"
                        }}></div>
                        
                        <div style={{
                            position:"relative",
                            top:'30px',
                            margin:'10px 10px 10px 10px',
                            width:"200px",
                            height:'180px',
                            border:"1px solid rgba(240, 241, 221, 0.938)",
                            borderRadius:"15px",
                            display:"flex",
                            justifyContent:"center",
                            alignItems:"center",
                            backgroundColor:"rgba(240, 241, 221, 0.938)",
                            
                        }}></div>


                        
                    </div>
                </div>
            )
            }
        </>
    );
}
 
export default Earching;