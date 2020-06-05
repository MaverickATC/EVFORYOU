import './Benefits.css';
import React, { Component } from 'react'
import BFCarousel from './BFCarousel';

export default class Benefits extends Component {
    render() {
        return (
            <div className="bf-wrapper gray-bg">
                <div className="text-center">
                    <h2 className="d-u-td pt-5">НАШИ <span className="t-hl-bf">ПРЕИМУЩЕСТВА</span></h2>
                    <BFCarousel />
                </div>
            </div>
        )
    }
}
