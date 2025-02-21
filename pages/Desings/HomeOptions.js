import { useState } from "react";

const HomeOptions = ({text,myBackgroudColor,myTextColor}) => {
    return (
        <>
            <div>
                        
                <div style={{
                    position:"relative",
                    width:"90px",
                    height:"35px",
                    border:"1px solid rgba(164, 120, 100, 0.24)",
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