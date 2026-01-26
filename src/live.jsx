import chennai from "./img/city/chennai.jpg"
const Live=()=>{
return(
    <div className="live-report">
        <div className="live-report-container">
            <div className="live-report-header">
                <h3>Live Report</h3>
            </div>
            <div className="live-report-body">
                <div className="live-report-city">
                    <img src={chennai} alt="" />
                    <h4>Chennai</h4>
                    <p>30C</p>
                </div>
            </div>
        </div>
    </div>
)
}
export default Live