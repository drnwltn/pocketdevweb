import './App.css';
import FeatureBox from './Components/FeatureBox'
import TitleFeatureBox from './Components/TitleFeatureBox'
import MusicEditorFeatureBox from './Components/MusicEditorFeatureBox'
import NavBar from './Components/NavBar'
import LogoBox from './Assets/LogoBox.png'
import PhoneImage from './Assets/phone1.png'
import MusicImage from './Assets/music.png'
import SpriteEditorImage from './Assets/spriteeditor.png'
import LevelImage from './Assets/level.png'
import NinjcImage from './Assets/ninjca.png'
import LogoTitle from './Assets/pixel_font_pocket.png'
import CloudBackground from './Assets/cloud_backgroud.png'
import CheckerBoardBackground from './Assets/checkerboardbackground.png'


function App() {
    return (
        <div id="AppLayout">
            <NavBar />
            <div id="MainContent">
                <div className="Spinner">
                    <div className="PageBody">
                        <TitleFeatureBox img={LogoBox} img2={LogoTitle} title="A game engine-" background={CloudBackground}
                            description="A MOBILE GAME ENGINE" />

                        <FeatureBox img={PhoneImage} title="Built for Mobile!"
                            description="The power of creation in the palm of your hands." />

                        <MusicEditorFeatureBox title="Create Music!" img={MusicImage}
                            description="Mozart wishes he had a phone with this app downloaded." />

                        <FeatureBox img={SpriteEditorImage} title="Draw Sprites!"
                            description="It beats smearing ketchup and mustard on the table when no ones watching. Just barely though." />

                        <FeatureBox img={LevelImage} title="Design Levels!" background={CloudBackground}
                            Info="Here's a tip: better for it to be too easy than too hard." />

                        <FeatureBox img={NinjcImage} title="Make something Unique!"
                            Info="People that make stuff like this in the app really should be getting paid to do it. They are so cool."/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
