import React from 'react';
import BasicButton from '../comps/BackNextButton';


export default {
    title: "Default Button",
    component: BasicButton
};

export const MyBasicButton = () => <BasicButton />;

export const PageWithCustomButtons = () => <div>
    <BasicButton text="Next"/>
    <BasicButton text="Back" color="rgb(105,138,137)"/>
</div>