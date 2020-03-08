import React from 'react'
import {BasicButton} from '../layouts/Buttons/BasicButton/BasicButton'
import {GradientButtons} from '../layouts/Buttons/GradientButtons/GradientButtons'
import {OutlineButtons} from '../layouts/Buttons/OutlineButtons/OutlineButtons'
import {RoundButtons} from '../layouts/Buttons/RoundButtons/RoundButtons'
import {RoundOutline} from '../layouts/Buttons/RoundOutline/RoundOutline'

import './Button.css'

export function Button() {
    return (
        <>
            <div className="main">
                <div className="container">
                    <h1>Basic Buttons</h1>
                    <div className="wraper">
                        <BasicButton value="basic" type="basic-primary" text="primary"/>
                        <BasicButton value="basic" type="basic-danger" text="danger"/>
                        <BasicButton value="basic" type="basic-info" text="info"/>
                        <BasicButton value="basic" type="basic-default" text="default"/>
                        <BasicButton value="basic" type="basic-success" text="success"/>
                        <BasicButton value="basic" type="basic-secondary" text="secondary"/>
                        <BasicButton value="basic" type="basic-warning" text="warning"/>
                    </div>
                </div>

                <div className="container">
                    <h1>Gradient Buttons</h1>
                    <div className="wraper">
                        <GradientButtons value="gradient" type="blue"/>
                        <GradientButtons value="gradient" type="orange"/>
                        <GradientButtons value="gradient" type="red"/>
                        <GradientButtons value="gradient" type="green"/>
                    </div>
                </div>

                <div className="container">
                    <h1>Outline Buttons</h1>
                    <div className="wraper">
                        <OutlineButtons value="outline" type="outline-primary"text="primary"/>
                        <OutlineButtons value="outline" type="outline-danger"text="danger"/>
                        <OutlineButtons value="outline" type="outline-info"text="info"/>
                        <OutlineButtons value="outline" type="outline-default"text="default"/>
                        <OutlineButtons value="outline" type="outline-success"text="success"/>
                        <OutlineButtons value="outline" type="outline-secondary"text="secondary"/>
                        <OutlineButtons value="outline" type="outline-warning"text="warning"/>
                    </div>
                </div>

                <div className="container">
                    <h1>Round Buttons</h1>
                    <div className="wraper">
                        <RoundButtons value="round" type="round-primary" text="primary"/>
                        <RoundButtons value="round" type="round-danger" text="danger"/>
                        <RoundButtons value="round" type="round-info" text="info"/>
                        <RoundButtons value="round" type="round-default" text="default"/>
                        <RoundButtons value="round" type="round-success" text="success"/>
                        <RoundButtons value="round" type="round-secondary" text="secondary"/>
                        <RoundButtons value="round" type="round-warning" text="warning"/>
                    </div>
                </div>

                <div className="container">
                    <h1>Round Outline Buttons</h1>
                    <div className="wraper">
                        <RoundOutline value="r-out" type="r-out-primary" text="primary"/>
                        <RoundOutline value="r-out" type="r-out-danger" text="danger"/>
                        <RoundOutline value="r-out" type="r-out-info" text="info"/>
                        <RoundOutline value="r-out" type="r-out-default" text="default"/>
                        <RoundOutline value="r-out" type="r-out-success" text="success"/>
                        <RoundOutline value="r-out" type="r-out-secondary" text="secondary"/>
                        <RoundOutline value="r-out" type="r-out-warning" text="warning"/>
                    </div>
                </div>
            </div>
            
        </>
    )
}
