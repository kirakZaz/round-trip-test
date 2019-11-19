import React from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import data from "../../../../data.json";
import "./Results.scss"

class Results extends React.Component {

    render(){
        return(
            <div className={"Results"}>
                <Container>
                    <Col>
                {data.resultExamples.map((item, index)=>{
                    return(

                        <Row className={"flightItem"} key={index}>
                            <Col xs={9}>
                                <Row className={"flightInfo flightThere"}>
                                    <Col xs={2} className={"imageItem"}>
                                        <span className={"baggage"}>
                                            <span>טיסה סדירה</span>
                                            <span className={"baggageIcon"}>{
                                                item.baggage
                                                    ? <img src={"with-baggage.JPG"} alt={""}/>
                                                    : <img src={"/../../../../images/no-baggage.JPG"} alt={""}/>
                                            }</span>
                                            </span>
                                        <span style={{"background": "url(" + item.airlineFrom + ")"}}/>
                                    </Col>
                                    <Col xs={10}>
                                        <Row>
                                            <Col xs={3}>
                                                <span className={'timeSize'}>{item.timeFrom}</span>
                                                <span>{item.from}</span>
                                            </Col>
                                            <Col xs={6}>
                                                <span>{item.flightHours}</span>
                                                <span className={'stopsGraph'}>
                                                    <img src={item.flightGraphFrom} alt={''}/>
                                                </span>
                                                <span>{item.straightFlightFrom ? "טיסה ישירה" : ""}</span>
                                            </Col>
                                            <Col xs={3}>
                                                <span className={'timeSize'}>{item.timeTo}</span>
                                                <span>{item.to}</span>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row className={"flightInfo flightReturn"}>
                                    <Col xs={2}>
                                    </Col>
                                    <Col xs={10}>
                                        <Row>
                                            <Col xs={3}>
                                                <span className={'timeSize'}>{item.timeFrom}</span>
                                                <span>{item.from}</span>
                                            </Col>
                                            <Col xs={6}>
                                                <span>{item.flightHours}</span>
                                                <span className={'stopsGraph'}>
                                                    <img src={item.flightGraphTo} alt={''}/>
                                                </span>
                                                <span>{item.straightFlightTo ? "טיסה ישירה" : ""}</span>
                                            </Col>
                                            <Col xs={3}>
                                                <span className={'timeSize'}>{item.timeTo}</span>
                                                <span>{item.to}</span>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={3}></Col>
                                </Row>
                            </Col>
                            <Col xs={3} className={"totalSide"}>
                                <div> </div>
                                <div>מחיר לנוסעה</div>
                                <div className={"totalSide-price"}>{item.price}</div>
                                <div><Button>חיפוש</Button></div>
                            </Col>
                        </Row>
                    )
                    })}
                    </Col>
                </Container>
            </div>
        )
    }
}

export default Results;