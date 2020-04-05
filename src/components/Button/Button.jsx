import React from 'react'
import {BasicButton} from '../layouts/BasicButton/BasicButton'
import {GradientButtons} from '../layouts/GradientButtons/GradientButtons'
import {OutlineButtons} from '../layouts/OutlineButtons/OutlineButtons'
import {RoundButtons} from '../layouts/RoundButtons/RoundButtons'
import {RoundOutline} from '../layouts/RoundOutline/RoundOutline'

import './Button.css'

export function Button() {
    return (
        <>
            <div className="main">
                <div className="container">
                    <h1>Basic Buttons</h1>
                    <div className="wraper">
                        <BasicButton type="primary">primary</BasicButton>
                        <BasicButton type="danger">danger</BasicButton>
                        <BasicButton type="info">info</BasicButton>
                        <BasicButton type="default">default</BasicButton>
                        <BasicButton type="success">success</BasicButton>
                        <BasicButton type="secondary">secondary</BasicButton>
                        <BasicButton type="warning">warning</BasicButton>
                    </div>
                </div>

                <div className="container">
                    <h1>Gradient Buttons</h1>
                    <div className="wraper">
                        <GradientButtons value="gradient" color="blue" />
                        <GradientButtons value="gradient" color="orange"/>
                        <GradientButtons value="gradient" color="red"/>
                        <GradientButtons value="gradient" color="green"/>
                    </div>
                </div>

                <div className="container">
                    <h1>Outline Buttons</h1>
                    <div className="wraper">
                        <OutlineButtons type="primary" value="primary"/>
                        <OutlineButtons type="danger"value="danger"/>
                        <OutlineButtons type="info"value="info"/>
                        <OutlineButtons type="default"value="default"/>
                        <OutlineButtons type="success"value="success"/>
                        <OutlineButtons type="secondary"value="secondary"/>
                        <OutlineButtons type="warning"value="warning"/>
                    </div>
                </div>

                <div className="container">
                    <h1>Round Buttons</h1>
                    <div className="wraper">
                        <RoundButtons type="primary" value="primary"/>
                        <RoundButtons type="danger" value="danger"/>
                        <RoundButtons type="info" value="info"/>
                        <RoundButtons type="default" value="default"/>
                        <RoundButtons type="success" value="success"/>
                        <RoundButtons type="secondary" value="secondary"/>
                        <RoundButtons type="warning" value="warning"/>
                    </div>
                </div>

                <div className="container">
                    <h1>Round Outline Buttons</h1>
                    <div className="wraper">
                        <RoundOutline type="primary" value="primary"/>
                        <RoundOutline type="danger" value="danger"/>
                        <RoundOutline type="info" value="info"/>
                        <RoundOutline type="default" value="default"/>
                        <RoundOutline type="success" value="success"/>
                        <RoundOutline type="secondary" value="secondary"/>
                        <RoundOutline type="warning" value="warning"/>
                    </div>
                </div>
            </div>
            
        </>
    )
}
