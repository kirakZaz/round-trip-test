import React from "react";
import { connect } from 'react-redux';
import {Container, Row, Col} from "react-bootstrap";
import './Aside.scss'
import RangeSlider from "../../../../helpers/RangeSlider/RangeSlider"
import SingleSlider from "../../../../helpers/RangeSlider/SingleSlider"
import Form from "react-bootstrap/esm/Form";
import * as filterAction from '../../../../actions/filterAction.js';

class Aside extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            priceValues: [100, 1000],
            flightTimeThereString: ["00:00", "24:00"],
            flightTimeReturnString: ["00:00", "24:00"],
            flightTimeReturn: [0, 24],
            flightTimeThere: [0, 24],
            flightHoursReturn: 12,
            flightHoursThere: 12,
            flightHoursReturnString: "12:00",
            flightHoursThereString: "12:00",
        }
    }

    handleChangePrice = value => {
        const { sendPricesRangeChanges } = this.props;
        this.setState({
            priceValues: value
        });
        sendPricesRangeChanges(value)

    };

    handleChangeFlightTimeThere = value => {
        const { sendFlightTimeThereChanges } = this.props;
        this.setState({
            flightTimeThere: value,
            flightTimeThereString: this.convertValueToTime(value)
        });
        sendFlightTimeThereChanges(value)
    };

    handleChangeFlightTimeReturn = value => {
        const { sendFlightTimeReturnChanges } = this.props;
        this.setState({
            flightTimeReturn: value,
            flightTimeReturnString: this.convertValueToTime(value)
        });
        sendFlightTimeReturnChanges(value)
    };

    handleChangeFlightHoursThere = value => {
        const { sendFlightHoursThereChanges } = this.props;
        this.setState({
            flightHoursThere: value,
            flightHoursThereString: this.convertValueToTime(value)
        });
        sendFlightHoursThereChanges(value)
    };

    handleChangeFlightHoursReturn = value => {
        const { sendFlightHoursReturnChanges } = this.props;
        this.setState({
            flightHoursReturn: value,
            flightHoursReturnString: this.convertValueToTime(value)
        });
        sendFlightHoursReturnChanges(value)
    };

    convertValueToTime = (value) => {
        const time = [];
        for (let i = 0; i < value.length; i++) {
            time.push(this.formatTime(value[i]))
        }
        return time
    };

    formatTime = (num) => {
        if (num < 10) {
            return ('0' + num + ':00')
        } else {
            return (num + ':00')
        }
    };

    render(){
        const {
            priceValues,
            flightTimeThere,
            flightTimeReturn,
            flightTimeReturnString,
            flightTimeThereString,
            flightHoursThere,
            flightHoursReturn,
            flightHoursThereString,
            flightHoursReturnString
        } = this.state;
        return(
            <div className={'Aside'}>
                <Container>
                    <Row className={"borderBottom"}>
                        <Col>
                            <span className={"asideTitle"}>טווח מחירים לאדם</span>
                            <RangeSlider
                                min={100}
                                max={1000}
                                defaultValue={priceValues}
                                tipFormatter={value => `${value}$`}
                                marks={{100:100, 1000:1000}}
                                name={"priceValues"}
                                onChange={this.handleChangePrice}
                            />
                            <span className="filterResults">{`${priceValues[1]} - ${priceValues[0]}`}</span>
                        </Col>
                    </Row>
                    <Row className={"borderBottom"}>
                        <Col>
                            <span className={"asideTitle"}>עצירות</span>
                            <div className={"asideCheckbox"}>
                                <Form.Group className="checkBoxes">
                                    <Form.Check label="עצירה 1" />
                                </Form.Group>
                                <span>$515</span>
                            </div>

                        </Col>
                    </Row>
                    <Row className={"borderBottom"}>
                        <Col>
                            <span className={"asideTitle"}>חברות תעופה</span>
                            <div className={"asideCheckbox"}>
                                <Form.Group className="checkBoxes">
                                    <Form.Check label="Turkish Airlines" />
                                </Form.Group>
                                <span>$539</span>
                            </div>
                            <div className={"asideCheckbox"}>
                                <Form.Group className="checkBoxes">
                                    <Form.Check label="Pegasus Airlines" />
                                </Form.Group>
                                <span>$602</span>
                            </div>
                            <div className={"asideCheckbox"}>
                                <Form.Group className="checkBoxes">
                                    <Form.Check label="KLM Royal Duthc" />
                                </Form.Group>
                                <span>$602</span>
                            </div>
                            <a href={"/#"}>הצג עוד</a>
                        </Col>
                    </Row>
                    <Row className={"borderBottom"}>
                        <Col>
                            <span className={"asideTitle"}>שעות טיסת</span>
                            <div style={{"position": "relative", "height": "75px"}}>
                                <span className={"asideSecondaryTitle"}>טיסה הלוך</span>
                                <RangeSlider
                                    min={0}
                                    max={24}
                                    defaultValue={flightTimeThere}
                                    tipFormatter={value => `${value}`}
                                    marks={{0.0:0.0, 24.00:24.00}}
                                    onChange={this.handleChangeFlightTimeThere}
                                />
                                <span className="filterResults">
                                    {`${flightTimeThereString[1]} : ${flightTimeThereString[0]}`}
                                </span>
                            </div>
                            <div style={{"position": "relative", "height": "75px"}}>
                                <span className={"asideSecondaryTitle"}>טיסת חזור</span>
                                <RangeSlider
                                    min={0}
                                    max={27}
                                    defaultValue={flightTimeReturn}
                                    tipFormatter={value => `${value}`}
                                    marks={{0.0:0.0, 24.00:24.00}}
                                    onChange={this.handleChangeFlightTimeReturn}
                                />
                                <span className="filterResults">
                                    {`${flightTimeReturnString[1]} : ${flightTimeReturnString[0]}`}
                                </span>
                            </div>
                        </Col>
                    </Row>
                    <Row className={"borderBottom"}>
                        <Col>
                            <span className={"asideTitle"}>משך טיסה</span>
                            <div style={{"position": "relative", "height": "75px"}}>
                                <span className={"asideSecondaryTitle"}>טיסה הלוך</span>
                                <SingleSlider
                                    min={4}
                                    max={27}
                                    defaultValue={flightHoursThere}
                                    tipFormatter={value => `${value}`}
                                    marks={{4.40:4.40, 27:27}}
                                    onChange={this.handleChangeFlightHoursThere}
                                />
                                    <span className="filterResults">
                                    {`${flightHoursThere}`}
                                </span>
                            </div>
                            <div style={{"position": "relative", "height": "75px"}}>
                                <span className={"asideSecondaryTitle"}>טיסת חזור</span>
                                <SingleSlider
                                    min={4}
                                    max={27}
                                    defaultValue={flightHoursReturn}
                                    tipFormatter={value => `${value}`}
                                    marks={{4.40:4.40, 27:27}}
                                    onChange={this.handleChangeFlightHoursReturn}
                                />
                                <span className="filterResults">
                                    {`${flightHoursReturn}`}
                                </span>
                            </div>
                        </Col>
                    </Row>
                    <Row className={"borderBottom"}>
                        <Col>
                            <span className={"asideTitle"}>חברות תעופה</span>
                            <div className={"asideCheckbox"}>
                                <Form.Group className="checkBoxes">
                                    <Form.Check label="Turkish Airlines" />
                                </Form.Group>
                                <span>$539</span>
                            </div>
                            <div className={"asideCheckbox"}>
                                <Form.Group className="checkBoxes">
                                    <Form.Check label="Pegasus Airlines" />
                                </Form.Group>
                                <span>$602</span>
                            </div>
                            <div className={"asideCheckbox"}>
                                <Form.Group className="checkBoxes">
                                    <Form.Check label="KLM Royal Duthc" />
                                </Form.Group>
                                <span>$602</span>
                            </div>
                            <a href={"/#"}>הצג עוד</a>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const { filterData } = state;

    return {
        filterData: filterData
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        sendPricesRangeChanges: (value) => dispatch(filterAction.sendPricesRangeChanges(value)),
        sendFlightTimeThereChanges: (value) => dispatch(filterAction.sendFlightTimeThereChanges(value)),
        sendFlightTimeReturnChanges: (value) => dispatch(filterAction.sendFlightTimeReturnChanges(value)),
        sendFlightHoursThereChanges: (value) => dispatch(filterAction.sendFlightHoursThereChanges(value)),
        sendFlightHoursReturnChanges: (value) => dispatch(filterAction.sendFlightHoursReturnChanges(value))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Aside);