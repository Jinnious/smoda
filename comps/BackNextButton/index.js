import React from 'react';
import './cb.css';

const BasicButton = ({text, color}) => <div 
style={{backgroundColor:color}}
className="custom_button_box">
    <div className="custom_button_box_inner">
        {text}
    </div>
</div>

BasicButton.defaultProps = {
    text: "Default",
    color: "rgb(242,143,60)"
}
export default BasicButton;