import React from 'react';
import './NavBar.css';
import Logo from '../Assets/straypixellogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faYoutube, faDiscord, faGooglePlay } from '@fortawesome/free-brands-svg-icons'

library.add(faTwitter, faYoutube, faDiscord, faGooglePlay)

function magnifyTwitterIcon(icon) {
    icon.target.style.transition = "0.5s";
    icon.target.style.boxShadow = "0px 0px 10px 10px rgb( 101, 177, 255 ) inset";
    icon.target.style.color = "blue";

}

function revertTwitterIcon(icon) {
    icon.target.style.color = "black";
    icon.target.style.textDecoration = "none";
    icon.target.style.boxShadow = "none";
    icon.target.style.transition = "0.5s";
}

function magnifyYoutubeIcon(icon) {
    icon.target.style.transition = "0.5s";
    icon.target.style.boxShadow = "0px 0px 10px 10px rgba(255, 0, 0, 0.432) inset";
    icon.target.style.color = "red";

}

function revertYoutubeIcon(icon) {
    icon.target.style.color = "black";
    icon.target.style.textDecoration = "none";
    icon.target.style.boxShadow = "none";
    icon.target.style.transition = "0.5s";
}

function magnifyDiscordIcon(icon) {
    icon.target.style.transition = "0.5s";
    icon.target.style.boxShadow = "0px 0px 10px 10px rgba(50, 83, 133, 0.432) inset";
    icon.target.style.color = "rgb(50, 83, 133)";

}

function revertDiscordIcon(icon) {
    icon.target.style.color = "black";
    icon.target.style.textDecoration = "none";
    icon.target.style.boxShadow = "none";
    icon.target.style.transition = "0.5s";
}

function magnifyGoogleIcon(icon) {
    icon.target.style.transition = "0.5s";
    icon.target.style.boxShadow = "0px 0px 10px 10px rgba(31, 156, 31, 0.432) inset";
    icon.target.style.color = "rgb(31, 156, 31)";

}

function revertGoogleIcon(icon) {
    icon.target.style.color = "black";
    icon.target.style.textDecoration = "none";
    icon.target.style.boxShadow = "none";
    icon.target.style.transition = "0.5s";
}

function NavBar() {
    return (
        <div>
            <header>
                <script src="https://kit.fontawesome.com/279ada5f46.js" crossOrigin="anonymous"></script>
            </header>
            <body>
                <div className="Menu">
                    <li className="BarItem" >
                        <a href="https://play.google.com/store/apps/details?id=com.pocketgamedev&hl=en_US&gl=US" onMouseEnter={magnifyGoogleIcon} onMouseLeave={revertGoogleIcon}>
                        <FontAwesomeIcon icon={faGooglePlay} />
                        </a>
                    </li>
                    <li className="BarItem">
                        <a href="https://discord.gg/s883ZQmDbK" onMouseEnter={magnifyDiscordIcon} onMouseLeave={revertDiscordIcon}>
                        <FontAwesomeIcon icon={faDiscord} />
                        </a>
                    </li>
                    <li className="BarItem">
                        <a href="https://www.youtube.com/channel/UCRSPDL9OZsv0xVVm3H31m_Q" onMouseEnter={magnifyYoutubeIcon} onMouseLeave={revertYoutubeIcon}>
                        <FontAwesomeIcon icon={faYoutube} className="YoutubeIcon" />
                        </a>
                    </li>
                    <li className="BarItem">
                        <a href="https://twitter.com/straypixelgames" onMouseEnter={magnifyTwitterIcon} onMouseLeave={revertTwitterIcon}>
                            <FontAwesomeIcon icon={faTwitter} className="TwitterIcon" />
                        </a>
                    </li>
                </div>
            </body>
        </div>
    );
}

export default NavBar;