import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import ActualIncomesCarousel from './ActualIncomesCarousel'

export default class ActualIncomes extends Component {
    render() {
        return (
            <div className="ai-wrapper">
                <Container className="text-center">
                    <h2 className="d-u-td pt-5">АКТУАЛЬНЫЕ <span className="t-hl-bf">ПОСТУПЛЕНИЯ</span></h2>
                    <ActualIncomesCarousel />
                </Container>                
            </div>
        )
    }
}
