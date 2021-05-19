import React from 'react';
import './FeatureBox.css';
import ExtraInfo from './ExtraInfo'

function FeatureBox(props) {
    const { img, title, description, img2, background, Info } = props;
    return (
        <div className="Content">
            <div style={{
                backgroundImage: `url(${background})`,
                height: "100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}>
                <div className="FeatureWrapper">
                    <div className="FeatureImage">
                        <img src={img} />
                        <img src={img2} style={{ maxHeight: "191px" }} />
                    </div>
                </div>
                <div className="Description">
                    {description}
                </div>
            </div>
        </div>
    );
}

export default FeatureBox;