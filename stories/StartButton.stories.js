import React from 'react';
import StartButton from '../comps/StartButton';


export default {
    title: "Start Button",
    component: StartButton
};

export const MyStartButton = () => <StartButton />;

export const PageWithButtons = () => <div>
    <div>
    <StartButton text="Start" bgcolor="#c8553D" />
    </div>
    <div>
    <StartButton text="Basic" bgcolor="#F28F3c" /> 
    </div>
    <div>
    <StartButton text="Advanced" bgcolor="#707070" />
    </div>
</div>


