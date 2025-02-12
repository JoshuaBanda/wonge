import { useState } from "react";

const HomeOptions = ({text,myBackgroudColor,myTextColor}) => {
    return (
        <>
            <div>
                        
                <div style={{
                    position:"relative",
                    width:"150px",
                    height:"35px",
                    border:"1px solid rgba(0,0,0,0.3)",
                    borderRadius:"20px",
                    backgroundColor:myBackgroudColor,
                    color:myTextColor,
                    padding:"3px 10px",
                    margin:"0px 0px 0px 0px"

                }}
                >
                    {text}
                </div>
            </div>
        </>
    );
}
 
export default HomeOptions;