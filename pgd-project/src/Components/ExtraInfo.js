import React, { useState } from 'react';
import './ExtraInfo.css';
import LogoBox from '../Assets/LogoBox.png'
import LearnMore from '../Assets/LearnMore.png'

function ExtraInfo(props) {
    const [readMore, setReadMore] = useState(false);
    const { MoreInfo } = props;
    const extraContent = <div>
        <p className="Info">
            {MoreInfo}
      </p>
    </div>
    const linkName = readMore ? 'Read Less << ' : 'Read More >> '
    return (
        <div className="QuestionIcon">
            <a className="read-more-link" onClick={() => { setReadMore(!readMore) }}><img src={LearnMore} /></a>
            {readMore && extraContent}
        </div>
    );
}

export default ExtraInfo;