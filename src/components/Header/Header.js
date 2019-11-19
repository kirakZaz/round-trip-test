import React from 'react';
import logo from '../../images/logo.JPG';
import data from '../../data.json';
import "./Header.scss"
import { Container, Row, Col, Dropdown } from 'react-bootstrap';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currency: data.currencies[0],
            language: data.languages.he
        }
    }

    currencyChange = (e) => {
        const { name } = e.target;
        this.setState({
            currency: name
        })
    };

    languageChange = (e) => {
        const { name } = e.target;
        this.setState({
            language: name
        })
    };


    render() {
        return (
            <div className={"header"}>
                <Container>
                    <Row>
                        <Col xs={2} className="logo"><img src={logo} alt="logo"/></Col>
                        <Col xs={8} className="navigation">
                            <ul>
                                {
                                    data.navigation.map((k, i) => {
                                        return <li key={i}><a href={"#/"}>{k}</a></li>
                                    })
                                }
                            </ul>
                        </Col>
                        <Col xs={2} className='settings'>
                            <Dropdown  className="currency">
                                <Dropdown.Toggle variant="" dir={'ltr'} id="dropdown-currency">
                                    {this.state.currency}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {
                                        data.currencies.map((currency, index) => {
                                            return <Dropdown.Item
                                                href={`#/action-${index}`}
                                                size="sm"
                                                key={index}
                                                onClick={this.currencyChange}
                                                value={currency}
                                                name={currency}
                                            >
                                                {currency}
                                            </Dropdown.Item>
                                        })
                                    }
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown  className="language">
                                <Dropdown.Toggle variant="" dir={'ltr'} id="dropdown-basic">
                                    {this.state.language}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {
                                        Object.values(data.languages).map((lang, index) => {
                                            return <Dropdown.Item
                                                href={`#/action-${index}`}
                                                size="sm"
                                                key={index}
                                                onClick={this.languageChange}
                                                value={lang}
                                                name={lang}
                                            >
                                                {lang}
                                            </Dropdown.Item>
                                        })
                                    }
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Header;