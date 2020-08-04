import React, { Component } from 'react'

import './Header.css'

export default class Header extends Component {
    render() {
        return (
                <div className="container">
                    <div className="voyagesID">Voyages ID</div>
                    <div className="airplane"></div>
                    <div>
                        <div className="planeAnimation"></div>
                    </div>
                </div>
        )
    }
}
