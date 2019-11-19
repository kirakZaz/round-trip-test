import React from "react";
import { Typeahead } from 'react-bootstrap-typeahead';
import { Container, Row, Col, Dropdown, Form, Button } from 'react-bootstrap';
import data from "../../../data";
import "./MainSearch.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import ModernDatepicker from 'react-modern-datepicker';
import calendar from '../../../images/calendar.JPG';
import moment from 'moment';

class MainSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            destinationFrom: data.destinations[0],
            destinationTo: data.destinations[1],
            startDate: new Date(),
            endDate: moment(this.startDate).add(5, 'd')._d,
            peopleCount: data.peopleCount[0],
            minEndDate: []
        }
    }

    destinationFromChange = (selected) => {
        this.setState({
            destinationFrom: selected[0]
        });
    };

    destinationToChange = (selected) => {
        this.setState({
            destinationTo: selected[0]
        });
    };

    handleDateFromChange = (date) => {
        this.setState({
            startDate: date
        });
    };

    handleDateToChange = (date) => {
        this.setState({
            endDate: date,
        });
    };

    peopleCountChange = (e) => {
        const { name } = e.target;
        this.setState({
            peopleCount: name
        })
    };

    destinationsRadio = () => {
        return(
            <Form.Row style={{height: "39px"}}>
                <Col col-12 col-xs-4>
                    <div className="mb-0 color-white font14">
                        <Container>
                            <Form.Group as={Row}>
                                <Form.Check
                                    type={'radio'}
                                    id={"two-destinations"}
                                    label={"הלוך ושוב"}
                                    name={"destination"}
                                />

                                <Form.Check
                                    type={"radio"}
                                    id={"one-destination"}
                                    label={"כיוון אחד"}
                                    name={"destination"}
                                />
                                <Form.Check
                                    type="radio"
                                    id="combined-destination"
                                    label="יעדים מרובים"
                                    name="destination"
                                />
                            </Form.Group>
                        </Container>
                    </div>
                </Col>
            </Form.Row>
        )
    };

    destinationPlaces = () => {
      return(
          <div className={'destinationPlaces'}>
              <div className={'from'}>
                  <Form.Label className={"color-white font14 mb-0"}>המראה</Form.Label>
                  <Typeahead
                      labelKey="name"
                      options={data.destinations}
                      name={"destinationFrom"}
                      id={"destinationFrom"}
                      onChange={this.destinationFromChange}
                      selected={this.state.selected}
                      placeholder={'Select a country'}
                      defaultInputValue={this.state.destinationFrom.name}
                  />
              </div>
              <div className={'to'}>
                  <Form.Label className={"color-white font14  mb-0"}>המראה</Form.Label>
                  <Typeahead
                      labelKey="name"
                      options={data.destinations}
                      name={"destinationTo"}
                      id={"destinationTo"}
                      onChange={this.destinationToChange}
                      selected={this.state.selected}
                      placeholder={'Select a country'}
                      defaultInputValue={this.state.destinationTo.name}
                  />
              </div>
          </div>
      )
    };

    destinationTimes = () => {
        return(
            <div className={'destinationTimes'}>
                <div className={'from'}>
                    <Form.Label className={"color-white font14 mb-0"}>יציאה</Form.Label>
                    <ModernDatepicker
                        icon={calendar}
                        date={this.state.startDate}
                        format={'DD-MM-YYYY'}
                        minDate={new Date()}
                        showBorder
                        onChange={date => this.handleDateFromChange(date)}
                        placeholder={'Select a date'}
                    />
                </div>

                <div className={'to'}>
                    <Form.Label className={"color-white font14 mb-0"}>חזרה</Form.Label>
                    <ModernDatepicker
                        icon={calendar}
                        date={this.state.endDate}
                        minDate={this.state.startDate}
                        showBorder
                        onChange={date => this.handleDateToChange(date)}
                        placeholder={'Select a date'}

                    />
                </div>
            </div>
        )
    };

    peopleCount = () => {
        return(
            <Form.Group as={Col}  className="peopleCount col-lg-1 col-md-3 col-xs-6">
                <Form.Label className={"color-white font14 mb-0"}>נוסיעם</Form.Label>
                <Dropdown>
                    <Dropdown.Toggle variant="" dir={'ltr'} id="dropdown-basic">
                        {this.state.peopleCount}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {
                            data.peopleCount.map((people, index) => {
                                return <Dropdown.Item
                                    href={`#/action-${index}`}
                                    size="sm"
                                    key={index}
                                    onClick={this.peopleCountChange}
                                    value={people}
                                    name={people}
                                >
                                    {people}
                                </Dropdown.Item>
                            })
                        }
                    </Dropdown.Menu>
                </Dropdown>
            </Form.Group>
        )
    };

    render() {
        return (
            <div className="mainSearch">
                <Container>
                    <Form className="mainSearchAlign">
                        {
                            this.destinationsRadio()
                        }
                        <Form.Row style={{minHeight: "66px", marginTop: "8px"}}>
                                <Form.Group as={Col} xs="12" md="12" lg={6} controlId="validationFormik01">
                                    {
                                        this.destinationPlaces()
                                    }
                                </Form.Group>
                                <Form.Group as={Col} xs="12" md="6" lg="3">
                                    {
                                        this.destinationTimes()
                                    }
                                </Form.Group>
                                {
                                    this.peopleCount()
                                }

                            <Form.Group as={Col} xs={6} md={3} lg={2} className="sendButton">
                                <Button>חיפוש</Button>
                            </Form.Group>
                            </Form.Row>
                        <Form.Group as={Row} className="checkBoxes" controlId="formHorizontalCheck">
                            <Form.Check label="טיסות ישירות בלבד" />
                            <Form.Check label="חיפוש גמיש (יום אחד +\-)" />
                        </Form.Group>
                    </Form>
                </Container>
            </div>
        )
    }

}

export default MainSearch;