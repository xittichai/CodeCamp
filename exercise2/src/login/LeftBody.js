import React, { Component } from 'react';
import {Row, Col} from 'antd';
import '../style/log_in_page/LeftBody.css';

export default class LeftBody extends Component {
    render() {
        return (
            <Col className="leftBody">
                <Row className="RowInLeft">Recent logins</Row>
                <Row className="RowInLeft">Click your picture or add an account.</Row>
                <Row className="RowInLeft">
                    <Col className="Card">
                        <img src="https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.0-1/380249_577445708937301_955894808_n.jpg?_nc_cat=101&_nc_sid=dbb9e7&_nc_oc=AQlwNKIPsc3dmuiIjg4zTc8M-D_XrMUgILN_JX1AduGHk8yWDMuv4rn3g7rxna81wC4&_nc_ht=scontent.fbkk12-1.fna&oh=f8f2eda30e5ba7bd3c56cba1b6adcd65&oe=5EB15FE2" />
                        <div>Sittichai</div>
                    </Col>
                </Row>
            </Col>
        );
    };
};