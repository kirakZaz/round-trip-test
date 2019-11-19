import React from "react"
import {Container, Row, Col, Button, Dropdown} from "react-bootstrap";
import data from "../../../../data.json"
import "./TopFiltering.scss"


class TopFiltering extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            active: "cheapest",
            filterBy: data.filterBy[0].value,
        }
    }

    handleFilterBy = (e) => {
        const { name } = e.target;
        this.setState({
            filterBy: name
        })
    };

    handleChangeActive = (btn) => {
        this.setState({active: btn.name});
    };

    renderTopFilteringButtons = () => {
        return(
            <Row>
                <Col>
                    <div className="topButtons">
                        {
                            data.buttons.map((btn, index) => {
                                return(
                                    <Button
                                        key={index}
                                        value={btn}
                                        className={
                                            `${btn.name}Button ${btn.name === this.state.active
                                                ? 'active'
                                                : ''}`
                                        }
                                        name={btn.name}
                                        onClick={() => this.handleChangeActive(btn)}
                                    >
                                        {btn.text}
                                    </Button>


                                )
                            })
                        }
                    </div>
                </Col>
            </Row>
        )
    };

    renderTopFilteringBy = () => {
        return(
            <Row className={"mt-4"}>
                <Col xs={6} className={"resultsTitle"}>
                    <span>נמצאו X תוצאות</span>
                </Col>
                <Col xs={6} className={"resultsFilter"}>
                    <div>
                        <span>מיין לפי</span>
                        <Dropdown  className="filterBy">
                            <Dropdown.Toggle variant="" dir={'ltr'} id="dropdownFilterBy">
                                {`מחיר: ${this.state.filterBy}`}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {
                                    data.filterBy.map((filt, index) => {
                                        return <Dropdown.Item
                                            href={`#/action-${index}`}
                                            size="sm"
                                            key={index}
                                            onClick={this.handleFilterBy}
                                            name={filt.value}
                                            value={filt.name}
                                        >
                                            {filt.value}
                                        </Dropdown.Item>
                                    })
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </Col>
            </Row>
        )
    };

    render(){
        return(
            <div className={"TopFiltering"}>
                 <Container>
                     {
                         this.renderTopFilteringButtons()
                     }
                     {
                         this.renderTopFilteringBy()
                     }

                </Container>
            </div>
        )
    }
}
 export default TopFiltering