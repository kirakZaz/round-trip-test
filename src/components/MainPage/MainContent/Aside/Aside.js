import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import './Aside.scss'
import RangeSlider from "../../../../helpers/RangeSlider/RangeSlider"
import Form from "react-bootstrap/esm/Form";

class Aside extends React.Component {
    constructor(props, context) {
        super(props);
        this.state = {
            volume: 0
        }
    }



    render(){
        return(
            <div className={'Aside'}>
                <Container>
                    <Row className={"borderBottom"}>
                        <Col>
                            <span className={"asideTitle"}>טווח מחירים לאדם</span>
                            <RangeSlider
                                min={100}
                                max={1000}
                                defaultValue={[100, 250]}
                                tipFormatter={value => `${value}$`}
                                marks={{100:100, 1000:1000}}
                            />
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
                            <span className={"asideSecondaryTitle"}>טיסה הלוך</span>
                            <RangeSlider
                                min={0}
                                max={23.59}
                                defaultValue={[0, 23.59]}
                                tipFormatter={value => `${value}`}
                                marks={{0.0:0.0, 23.59:23.59}}
                            />
                            <span className={"asideSecondaryTitle"}>טיסת חזור</span>
                            <RangeSlider
                                min={0}
                                max={23.59}
                                defaultValue={[0, 23.29]}
                                tipFormatter={value => `${value}`}
                                marks={{0.0:0.0, 23.59:23.59}}
                            />
                        </Col>
                    </Row>
                    <Row className={"borderBottom"}>
                        <Col>
                            <span className={"asideTitle"}>משך טיסה</span>
                            <span className={"asideSecondaryTitle"}>טיסה הלוך</span>
                            <RangeSlider
                                min={4.40}
                                max={27}
                                defaultValue={[4.40, 27]}
                                tipFormatter={value => `${value}`}
                                marks={{4.40:4.40, 27:27}}
                            />
                            <span className={"asideSecondaryTitle"}>טיסת חזור</span>
                            <RangeSlider
                                min={4.40}
                                max={27}
                                defaultValue={[4.40, 27]}
                                tipFormatter={value => `${value}`}
                                marks={{4.40:4.40, 27:27}}
                            />
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

export default Aside;