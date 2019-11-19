import React from 'react';
import logo from '../../images/logo.JPG';
import data from '../../data.json';
import "./Header.scss"
import {Container, Row, Col, Dropdown, Button} from 'react-bootstrap';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currency: data.currencies[0],
            language: data.languages.he,
            showMenu: 'block',
            showButton: "none",
            menuClassAbsolute: false
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
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

    handleShowMenu = () => {
        const { showMenu } = this.state;
        this.setState({
            menuClassAbsolute: true,
            showMenu: !showMenu
        })
    };

    resize() {
        if(window.innerWidth <= 990){
            this.setState({
                showButton: "block",
                showMenu: false
            });
        }

    }


    render() {
        const { showButton, menuClassAbsolute, showMenu } = this.state;
        const displayMenu = showMenu ? "block" : "none";
        const position = menuClassAbsolute ? "fixed" : "relative";
        return (
            <div className={"header"}>
                <Container>
                    <Row>

                        <Col  xl={8} lg={8} md={2} sm={2} xs={3} className="navigation order-lg-3" navigation order-md-1 col-xl-8 col-md-2>
                            <div style={{"display": `${showButton}`}}>
                                <Button
                                    className="filterButton"
                                    onClick={this.handleShowMenu}
                                >
                                    {!showMenu
                                        ? <i className="fa fa-bars" aria-hidden="true"></i>
                                        : <i class="fa fa-times" aria-hidden="true"></i>
                                    }
                                </Button>
                            </div>
                            <div style={{"display": `${displayMenu}`, "position": `${position}`}}>
                                <ul>
                                    {
                                        data.navigation.map((k, i) => {
                                            return <li key={i}><a href={"#/"}>{k}</a></li>
                                        })
                                    }
                                </ul>
                            </div>
                        </Col>
                        <Col xl={2} lg={2} md={8} sm={8} xs={6} className='settings order-lg-3'>
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
                        <Col xl={2} lg={2} md={2} sm={2} xs={3} className="logo order-lg-1"><img src={logo} alt="logo"/></Col>

                    </Row>
                </Container>
            </div>
        );
    }
}

export default Header;