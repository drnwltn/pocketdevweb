import React from 'react';
import './TitleFeatureBox.css';
import ExtraInfo from './ExtraInfo'

function TitleFeatureBox(props) {
    const { img, title, description, img2, background, Info } = props;
    return (
        <div className="ContentTitleBox">
            <div style={{
                backgroundImage: `url(${background})`,
                height: "100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}>
                <div className="FeatureWrapper">
                    <li className="FlexItem">
                        <img src={img} className="FlexImage"/>
                    </li>
                    <li className="FlexItem">
                        <img src={img2} className="FlexImage"/>
                    </li>
                </div>
                <div className="Description">
                    {description}
                </div>
            </div>
        </div>
    );
}

export default TitleFeatureBox;