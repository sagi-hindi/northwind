import { useEffect, useState } from "react";
import "./Clock.css";

function Clock(): JSX.Element {

    const [time, setTime] = useState("")

    // useEffect(()=>{
    //     setInterval(()=>{
    //         console.log(Math.random())
    //         const now = new Date()
    //         now.toLocaleTimeString()
    //     },1000)

    // }, []);
    
    // setInterval(()=>{
    //     console.log(Math.random())
    //     const now = new Date()
    //     now.toLocaleTimeString()

    // },1000)
    const now = new Date()

    // setTime(now.toLocaleTimeString())
    // // alert(time)
    // useEffect(()=>{
    //     setInterval(()=>{
    //         console.log(Math.random())
    //         now.toLocaleTimeString()
    //     },1000)

    // }, []);

    
    // function showTime():void{
    //     // const now = new Date()
    //     setTime(now.toLocaleTimeString())
    //     // alert(time)
    //     useEffect(()=>{
    //         setInterval(()=>{
    //             console.log(Math.random())
    //             const now = new Date()
    //             now.toLocaleTimeString()
    //         },1000)
    
    //     }, []);
    // }

    return (
        <div className="Clock Box">
            {/* <span>{time}</span> */}
			
        </div>
    );
}

export default Clock;
