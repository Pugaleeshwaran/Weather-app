import axios from "axios"
import { useState } from "react"
import clear from "./img/clear.png"
import clouds from './img/clouds.png'
import drizzle from "./img/drizzle.png"
import hum from "./img/humidity.png"
import mist from "./img/mist.png"
import snow from "./img/snow.png"
import rain from "./img/wind.png"
function Weather() {
    const [city, setcity] = useState("")
    const [weather, setweather] = useState("")
    const [tem, settem] = useState("")
    const [des, setdes] = useState("")
    const [check, setcheck] = useState(true)
    var [img, setImg] = useState();
    var [wind,setwind]=useState("")

    const handlechange = (event) => {
        setcity(event.target.value)
    }
    const getweather = () => {
        var weatherdata = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=aa9f7d43dd00e2fe018868876af5aaff`)

        weatherdata.then(function (report) {
            console.log(report.data.wind.gust)
            setweather(report.data.weather[0].main)
            settem((report.data.main.temp - 273.15).toFixed(2))
            setdes(report.data.weather[0].description)
            setwind(report.data.wind.gust)
            setcheck(true)

            const iconMap = {
                clouds: clouds,
                clear: clear,
                rain: rain,
                drizzle: drizzle,
                mist: mist,
                hum: hum,
                snow: snow,
            };
            const main = report.data.weather[0].main.toLowerCase();

            if (iconMap[main]) {
                setImg(iconMap[main]);
                console.log(img)
            }


        })
            .catch(function (err) {
                setImg(false)
                setcheck(false)
                console.log(err)
                console.log(check)
            })
    }

    return (
        <div className="weather-report">
            <div className="weather-report-header">
                <h1>Weather Report</h1>
                <p>I can Give Your Weather Report About Your City</p>
            </div>
            <div className="weather-report-input">
                <div className="glass">
                    <input onChange={handlechange} value={city} type="text" placeholder="Enter your City Name"></input>
                    <i class="fa-solid fa-magnifying-glass"></i>

                </div>


                <button onClick={getweather}>Get Report</button>
            </div>
            <img src={img} alt="" />
            {check ? <div className="weather-report-des">
                <h2>Weather :{weather}</h2>
                <h2>Temprature :{tem}&#176;C</h2>
                <h2>Description :{des}</h2>
                <h2>Wind Gust :{wind}</h2>
            </div> : <h3 className="errmsg">Invalid City Name Please Enter Correct City Name or Check the Spelling</h3>}


        </div>

    )
}
export default Weather