import React from 'react';
import './start.css';

const StartButton = ({text}) => <div 
    className="startbutton_box">
    <div className="startbutton_box_inner">
        {text}
    </div>
</div>

StartButton.defaultProps = {
    text:"Default Button",
}

export default StartButton;