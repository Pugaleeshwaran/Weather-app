import axios from "axios"
import DateTime from "./data"
import { useState } from "react"
import hum from "./img/humidity.png"
import rain from "./img/wind.png"
import icon1 from "./img/icons/icon-1.svg"
import umber from "./img/icons/umber.png"
import windi from "./img/icons/wind.png"
import composs from "./img/icons/compass.png"
import suncloud from "./img/icon-3.svg"
import cloud from "./img/icon-5.svg"
import cloudhaze from "./img/icon-7.svg"
import cloudtunder from "./img/icon-12.svg"
import cloudrain from "./img/icon-13.svg"
import cloudsnow from "./img/icon-14.svg"

function Weather() {
    const [city, setcity] = useState("")

    const [weather, setweather] = useState("")
    const [tem, settem] = useState("")
    const [des, setdes] = useState("")
    const [check, setcheck] = useState(true)
    var [img, setImg] = useState();
    var [wind, setwind] = useState("")
    var [humi, sethumi] = useState("")
    const [statict, setstatict] = useState("Chennai")
    const [statem, setstatem] = useState("");
    const [stahum, setstahum] = useState("");
    const [stawind, setstawind] = useState("");
    const handlechange = (event) => {
        setcity(event.target.value)
    }


    axios(`https://api.openweathermap.org/data/2.5/weather?q=${statict}&appid=aa9f7d43dd00e2fe018868876af5aaff`)

        .then(function (report) {
            console.log(report)
            setweather(report.data.weather[0].main)
            settem((report.data.main.temp - 273.15).toFixed(1))
            setdes(report.data.weather[0].description)
            setwind(report.data.wind.speed)
            sethumi(report.data.main.humidity)
            // setstatem((report.data.main.temp - 273.15).toFixed(1));
            // setstahum(report.data.main.humidity)
            // setstawind(report.data.wind.speed)
            const iconMap = {
                clouds: cloud,
                clear: suncloud,
                rain: cloudrain,
                drizzle: cloudsnow,
                mist: cloudhaze,
                hum: hum,
                snow: cloudsnow,
            };
            const main = report.data.weather[0].main.toLowerCase();

            if (iconMap[main]) {
                setImg(iconMap[main]);
                console.log(img)
            }
        })
        .catch(function (err) {
            console.log(err)
        })



    const getweather = () => {
        var weatherdata = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=aa9f7d43dd00e2fe018868876af5aaff`)


        weatherdata.then(function (report) {
            console.log(report.data.main)
            setweather(report.data.weather[0].main)
            settem((report.data.main.temp - 273.15).toFixed(1))
            setdes(report.data.weather[0].description)
            setwind(report.data.wind.speed)
            sethumi(report.data.main.humidity)
            setcheck(true)
            setstatict(city.charAt(0).toUpperCase() + city.slice(1))


            const iconMap = {
                clouds: cloud,
                clear: suncloud,
                rain: cloudrain,
                drizzle: cloudsnow,
                mist: cloudhaze,
                hum: hum,
                snow: cloudsnow,
            };
            const main = report.data.weather[0].main.toLowerCase();

            if (iconMap[main]) {
                setImg(iconMap[main]);
                console.log(img)
            }


        })
            .catch(function (err) {
                // setImg(false)
                setcheck(false)
                console.log(err)
                console.log(check)
            })
    }

    return (

        <div className="weather-report">
            <div className="weather-report-input">
                <input onChange={handlechange} value={city} type="text" placeholder="Enter the Location...."></input>
                <button onClick={getweather}>Find</button>
            </div>
            {check ? <div className="weather-report-des">
            </div> : <h3 className="errmsg">Invalid City Name Please Enter Correct City Name or Check the Spelling</h3>}
            <div className="report-board">
                <div className="report-mon">
                    <div className="mon-head">
                        <div className="mon-head-one">
                            <h3>Today</h3>
                        </div>
                        <div className="mon-head-two">
                            <h3><DateTime /></h3>
                        </div>
                    </div>

                    <div className="mon-body">

                        <h3>{statict}</h3>
                        <div className="mon-deg">
                            <p>{tem}</p>
                            <img src={img} alt="icon"></img>
                        </div>

                        <div className="mon-sub">
                            <div className="mon-sub">
                                <img src={umber} />
                                <p>{humi}%</p>

                            </div>
                            <div className="mon-sub">
                                <img src={windi} />
                                <p>{wind}</p>
                            </div>
                            <div className="mon-sub">
                                <img src={composs} />
                                <p>East</p>
                            </div>
                        </div>

                    </div>


                </div>
                <div className="report-sub1">
                    <div className="sub1-head">
                        <h3>Monday</h3>
                    </div>
                    <div className="sub1-body">
                        <div className="sub1-body1">
                            <img src={suncloud} alt="suncloud-icon" />
                        </div>
                        <div className="sub1-body2">
                            <p>35°C</p>
                        </div>
                    </div>
                </div>
                <div className="report-sub2">
                    <div className="sub2-head">
                        <h3>Tuesday</h3>
                    </div>
                    <div className="sub2-body">
                        <div className="sub2-body1">
                            <img src={cloud} alt="suncloud-icon" />
                        </div>
                        <div className="sub2-body2">
                            <p>25°C</p>
                        </div>
                    </div>
                </div>
                <div className="report-sub1">
                    <div className="sub1-head">
                        <h3>Wednesday</h3>
                    </div>
                    <div className="sub1-body">
                        <div className="sub1-body1">
                            <img src={cloudhaze} alt="suncloud-icon" />
                        </div>
                        <div className="sub1-body2">
                            <p>35°C</p>
                        </div>
                    </div>
                </div>
                <div className="report-sub2">
                    <div className="sub2-head">
                        <h3>Thursday</h3>
                    </div>
                    <div className="sub2-body">
                        <div className="sub2-body1">
                            <img src={cloudtunder} alt="suncloud-icon" />
                        </div>
                        <div className="sub2-body2">
                            <p>35°C</p>
                        </div>
                    </div>
                </div>
                <div className="report-sub1">
                    <div className="sub1-head">
                        <h3>Friday</h3>
                    </div>
                    <div className="sub1-body">
                        <div className="sub1-body1">
                            <img src={cloudrain} alt="suncloud-icon" />
                        </div>
                        <div className="sub1-body2">
                            <p>35°C</p>
                        </div>
                    </div>
                </div>
                <div className="report-sub2">
                    <div className="sub2-head">
                        <h3>Saturday</h3>
                    </div>
                    <div className="sub2-body">
                        <div className="sub2-body1">
                            <img src={cloudsnow} alt="suncloud-icon" />
                        </div>
                        <div className="sub2-body2">
                            <p>35°C</p>
                        </div>
                    </div>
                </div>
                <div className="report-sub3">
                    <div className="sub3-head">
                        <h3>Sunday</h3>
                    </div>
                    <div className="sub3-body">
                        <div className="sub1-body1">
                            <img src={suncloud} alt="suncloud-icon" />
                        </div>
                        <div className="sub1-body2">
                            <p>35°C</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}
export default Weather