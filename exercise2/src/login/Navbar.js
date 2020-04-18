import React, { Component } from 'react';
import '../style/log_in_page/Navbar.css';
import {Row, Col} from 'antd';

export default class Navbar extends Component {
    render() {
        return (
            <Row className="Navbar">
                <Col className="top">
                    <div>
                        <a>
                            <i class="fb_logo img sp_Vgu5hh_52BR_1_5x sx_13437d"><u>Facebook</u></i>
                        </a>
                    </div>
                    <div>
                        <table>
                            <tr>
                                <td>Email or phone</td>
                                <td>Password</td>
                            </tr>
                            <tr>
                                <td><input type="text" /></td>
                                <td><input type="text" /></td>
                                <td><button>Log In</button></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td style={{color: "white"}}>Forgotten account?</td>
                            </tr>
                        </table>
                    </div>
                </Col>
            </Row>
        );
    };
};