import React from 'react';
import StartButton from '../comps/StartButton';


export default {
    title: "Start Button",
    component: StartButton
};

export const MyStartButton = () => <StartButton />;

export const PageWithButtons = () => <div>
    <div>
    <StartButton text="Start"/>
    </div>
    <div>
    <StartButton text="Basic"/> 
    </div>
    <div>
    <StartButton text="Advanced" />
    </div>
</div>