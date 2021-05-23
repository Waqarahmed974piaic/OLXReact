import '../App.css';
function Footer() {
    return (
        <div className="footer">
            <div className="footerTop">
                <section>
                    POPULAR CATEGORIES
                <ul>
                        <li className="PCate">Cars</li>
                        <li className="PCate">Flats for rent</li>
                        <li className="PCate">Jobs</li>
                        <li className="PCate">Mobile Phones</li>
                    </ul>
                </section>

                <section>
                    TRENDING SEARCHES
                    <ul>
                        <li className="PCate">Cars</li>
                        <li className="PCate">Flats for rent</li>
                        <li className="PCate">Jobs</li>
                        <li className="PCate">Mobile Phones</li>
                    </ul>
                </section>


                <section>
                    ABOUT US
                    <ul>
                        <li className="PCate">About OLX Group</li>
                        <li className="PCate">OLX Group</li>
                        <li className="PCate">Contact Us</li>
                        <li className="PCate">OLX Business</li>
                    </ul>
                </section>

                <section>
                    OLX
                    <ul>
                        <li className="PCate">Help</li>
                        <li className="PCate">Sitemap</li>
                        <li className="PCate">Legal & Privacy information</li>
                    </ul>
                </section>



            </div>
            <div className="footerBottom">
                <span id="countrySpan">Other Countries</span>
                <span id="ISI">India-South Africe-Indonesia</span>
                <span id="pakistan">Free Classifieds in Pakistan . © 2006-2021 OLX</span>

            </div>
        </div>
    );
}
export default Footer