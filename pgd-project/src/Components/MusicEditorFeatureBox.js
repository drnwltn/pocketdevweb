import React from 'react';
import './MusicEditorFeatureBox.css';
import ExtraInfo from './ExtraInfo'

function MusicEditorFeatureBox(props) {
    const { img, title, description, background } = props;
    return (
        <div className="Content">
            <div style={{
                backgroundImage: `url(${background})`,
                height: "100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}>
                <div className="MusicDescription">
                    {description}
                </div>
                <div className="MusicImage">
                    <img src={img} />

                </div>
            </div>
        </div>
    );
}

export default MusicEditorFeatureBox;