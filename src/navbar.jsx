import logo from "./img/logo.png"
function Navbar() {
    return (

        <nav className="navbar">
            <div className="nav_left">
                <img src={logo} alt="side logo" />
                <h3>Perfect Weather</h3>
            </div>
            <div className="nav_right">
                <h3>Home</h3>
                <h3>About Us</h3>
                <h3>Popular  Cities</h3>
                <h3>News</h3>
            </div>

        </nav>

    )
}
export default Navbar