import logo from '../logo192.png';
export default function Navbar() {
    return (
        <>
            <nav className='nav-bar'>
                <img src={logo} width="100px" />
                <ul className='nav-items'>
                    <li>
                        <small>@bats_pm_techentry</small></li>
                    {/* <li>
                        Postnewtweet
                    </li>
                    <li>
                        Recenttweet
                    </li> */}
                </ul>
            </nav>
            <div className='header'>
                <h3>Welcome Techies! Lets spill the beans!</h3>

            </div>
        </>
    );
}