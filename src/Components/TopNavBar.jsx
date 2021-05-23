import '../App.css';
import logo from './Image/—Pngtree—instagram icon instagram logo_3584853.png'
import serachLogo from './Image/—Pngtree—search icon_4699282.png'
import searchIcon from './Image/loupe.png'
function TopNavBar() {
    return (
        <>
        <div class="topNavBar">
            <img src={logo} alt="" width="48px" height="48px" class="image" />
            <div className="dd-wrapper">
                <img src={serachLogo} alt="" width="42px" height="42px" class="serachImage" />
                <select className="dd-list">
                    <option value="volvo" select="selected">Pakistan</option>
                    <option value="saab">Sindh</option>
                    <option value="mercedes">Islamabad Capital Territory</option>
                    <option value="audi">Khyber Pakhtunkhwa</option>
                </select>
            </div>
            <input type="search" placeholder="Find Cars,Mobile Phones and more..." className="dd-search"/>
            <div className="dd-box">
            </div>
            <img src={searchIcon} alt="" width="24px" height="24px" className="search-Icon" />
            <a href="#" className="link"><u>Login</u></a>
        </div>
        <div className="navBar">
            <ul>
                <li className="li-List">All Categories</li>
                <li>Mobile Phones</li>
                <li>Cars</li>
                <li>Motorcycles</li>
                <li>Houses</li>
                <li>TV-Audio-Video</li>
                <li>Tablet</li>
                <li>Land & Plots</li>
            </ul>
        </div>
        <div className="bg-image">
        </div>
        <span className="rec">Fresh recommendations</span>
        
        </>
    );
}
export { TopNavBar }