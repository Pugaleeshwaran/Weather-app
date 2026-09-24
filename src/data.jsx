import { useEffect, useState } from "react"

function DateTime() {
    const [date, setdate] = useState(new Date());
    useEffect(function () {
        const timer = setInterval(()=>setdate(new Date()),1000)
        return () => clearInterval(timer)
    }, [])
    return (
        <div>
           <p>{date.toDateString()}</p>
        </div>

    )
}
export default DateTime