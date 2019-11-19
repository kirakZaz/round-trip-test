import React from "react"
import MainSearch from "./MainSearch/MainSearch";
import TopFiltering from "./MainContent/TopFltering/TopFiltering.js"
import Aside from "./MainContent/Aside/Aside";
import {Container, Row, Col, Button} from "react-bootstrap";
import "./MainPage.scss"
import Results from "./MainContent/Results/Results.js"


class MainPage extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            showAside: "block",
            hideNav: false,
            showButton: "none",
            asideClassAbsolute: false
        }
    }
    handleShowAside = () => {
        const { showAside } = this.state;
        this.setState({
            asideClassAbsolute: true,
            showAside: !showAside
        })
    };

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    resize() {
        if(window.innerWidth <= 990){
            this.setState({
                hideNav: window.innerWidth <= 990,
                showButton: "block",
                showAside: false
            });
        }

    }


    render(){
        console.log(this.state)
        const { showButton, asideClassAbsolute, showAside } = this.state;
        const displayAside = showAside ? "block" : "none";
        const position = asideClassAbsolute ? "fixed" : "relative";
            return (
                <div className="MainPage" dir={"rtl"}>
                    <MainSearch/>
                    <Container>
                        <Row>
                            <div style={{"display": `${showButton}`}}>
                                <Button
                                    className="filterButton"
                                    onClick={this.handleShowAside}
                                >
                                    {!showAside ? "Filter" : "Close Filter"}
                                </Button>
                            </div>
                            <Col style={{"display": `${displayAside}`, "position": `${position}`}} className="asideColumn" md={12} lg={3}>
                                <Aside/>
                            </Col>
                            <Col lg={9} md={12}>
                                <Row><TopFiltering/></Row>
                                <Row><Results/></Row>
                            </Col>

                        </Row>
                    </Container>



                </div>
            );
    }

}

export default MainPage;