import { useEffect, useState } from "react"
import { data } from "react-router-dom";

function DateTime() {
    const [date, setdate] = useState(new Date());
    useEffect(function () {
        setInterval(()=>setdate(new Date()),1000)
    }, [])
    return (
        <div>
           <p>{date.toDateString()}</p>
        </div>

    )
}
export default DateTime