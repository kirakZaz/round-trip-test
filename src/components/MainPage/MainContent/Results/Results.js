import React from "react";
import { connect } from 'react-redux';
import {Container, Row, Col, Button} from "react-bootstrap";
import data from "../../../../data.json";
import "./Results.scss"
import * as _ from "lodash"


class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resultsList: data.resultExamples,
            type: '',
            filteredPrices: [],
            filtersTimeFlightThere: [],
            filtersTimeFlightReturn: [],
            filtersHoursFlightThere: [],
            filtersHoursFlightReturn: [],
            airlinesValues: []
        }
    }

    UNSAFE_componentWillReceiveProps(prevProps) {

        const {
            pricesRange,
            flightTimeThere,
            flightTimeReturn,
            flightHoursThere,
            flightHoursReturn,
            airlinesValues
        } = this.props.filterData;


        if(prevProps.filterData.pricesRange !== pricesRange) {
            this.filteredPricesResults()
        }
        if(prevProps.filterData.flightTimeThere !== flightTimeThere) {
            this.filteredTimeThereResults()
        }
        if(prevProps.filterData.flightTimeReturn !== flightTimeReturn) {
            this.filteredTimeReturnResults()
        }
        if(prevProps.filterData.flightHoursThere !== flightHoursThere) {
            this.filteredHoursThereResults()
        }
        if(prevProps.filterData.flightHoursReturn !== flightHoursReturn) {
            this.filteredHoursReturnResults()
        }
        if(prevProps.filterData.airlinesValues !== airlinesValues) {
            this.filteredAirlinesResults(prevProps.filterData.airlinesValues);
        }
    }

    filteredAirlinesResults = (args) => {
        const checked = args;
        this.setState({
            airlinesResults: checked
        }, () => this.concatedData())
    };

    checkboxedData = (args) => {
        const { airlinesValues } = this.props.filterData;
        const { resultExamples } = data;

        const airlineFromChecked = airlinesValues.map(x => {
            return args.filter(item => {
                return (item.airlineFromValue === x.name && x.value === true)
            })
        });
        const airlineToChecked = airlinesValues.map(x => {
            return args.filter(item => {
                return (item.airlineToValue === x.name && x.value === true)
            })
        });

        const airlineFromCheckedArr = airlineFromChecked.flat();
        const airlineToCheckedArr = airlineToChecked.flat();
        const airlinesArr = airlineFromCheckedArr.concat(airlineToCheckedArr)
        const airlinesArrIds = airlinesArr.map(id => id.id)
        const findAllDuplicates = this.find_duplicate_in_array(airlinesArrIds);

        const filteredResult = findAllDuplicates.map(x=>{
            return resultExamples.filter((f)=>{
                return x === f.id
            })

        });
        const res = filteredResult.flat();
        this.setState({
            resultsList: res
        })
        return res

    };

    filteredPricesResults = () => {
        const { resultExamples } = data;
        const { pricesRange } = this.props.filterData;

        const resultsListByPrices = resultExamples.filter((price) => {
            return Number(price.price) >= pricesRange[0] && Number(price.price) <= pricesRange[1]
        });

        this.setState({
            filteredPrices: resultsListByPrices
        }, () => this.concatedData())
    };

    filteredTimeThereResults = () => {
        const { resultExamples } = data;
        const { flightTimeThere } = this.props.filterData;

        const resultsListByTimeFlightThere = resultExamples.filter((time) => {
            return time.timeThereFromValue >= flightTimeThere[0] && time.timeThereToValue <= flightTimeThere[1]
        });

        this.setState({
            filtersTimeFlightThere: resultsListByTimeFlightThere
        }, () => this.concatedData())

    };

    filteredTimeReturnResults = () => {
        const { resultExamples } = data;
        const { flightTimeReturn } = this.props.filterData;

        const resultsListByTimeFlightReturn = resultExamples.filter((time) => {
            return time.timeReturnFromValue >= flightTimeReturn[0] && time.timeReturnToValue <= flightTimeReturn[1]
        });

        this.setState({
            filtersTimeFlightReturn: resultsListByTimeFlightReturn
        }, () => this.concatedData())
    };

    filteredHoursThereResults = () => {
        const { resultExamples } = data;
        const { flightHoursThere } = this.props.filterData;

        const resultsListByHoursFlightThere = resultExamples.filter((time) => {
            return time.flightHoursThereValue <= flightHoursThere
        });
        this.setState({
            filtersHoursFlightThere: resultsListByHoursFlightThere
        }, () => this.concatedData())
    };

    filteredHoursReturnResults = () => {
        const { resultExamples } = data;
        const { flightHoursReturn } = this.props.filterData;

        const resultsListByHoursFlightReturn = resultExamples.filter((time) => {
            return time.flightHoursBackValue <= flightHoursReturn
        });
        this.setState({
            filtersHoursFlightReturn: resultsListByHoursFlightReturn
        }, () => this.concatedData())
    };

    find_duplicate_in_array = (arr) => {
        const object = {};
        const result = [];

        arr.forEach(function (item) {
            if(!object[item])
                object[item] = 0;
            object[item] += 1;
        });

        for (let prop in object) {
            if(object[prop] >= 2) {
                result.push(prop);
            }
        }

        return result;

    };

    checkByFilters = (_filter1, _filter2, _filter3, _filter4, _filter5) => {
        const { resultExamples } = data;
        const { flightHoursReturn, flightHoursThere, flightTimeReturn, flightTimeThere, pricesRange } = this.props.filterData;

        const filter1 = _filter1.length <= 0 && pricesRange.length > 0 ? ["no data"] : _filter1;
        const filter2 = _filter2.length <= 0 && flightTimeThere.length > 0 ? ["no data"] : _filter2;
        const filter3 = _filter3.length <= 0 && flightTimeReturn.length > 0 ? ["no data"] : _filter3;
        const filter4 = _filter4.length <= 0 && flightHoursThere.length > 0 ? ["no data"] : _filter4;
        const filter5 = _filter5.length <= 0 && flightHoursReturn.length > 0 ? ["no data"] : _filter5;

        const resultExamplesPricesValues = resultExamples.map(prices => { return prices.id});

        let filters = [];
        const clearFilteredResult = [];

        if(filter1.length > 0 && filter2.length <= 0  && filter3.length <= 0  && filter4.length <= 0  && filter5.length <= 0) {
            filters = filter1
        } else if(filter1.length <= 0) {
            filters = filter2.concat(filter3, filter4, filter5)
        } else {
            const filtersTocheck = filter2.concat(filter3, filter4, filter5);
            filters = _.intersectionWith(filtersTocheck, filter1, _.isEqual);
        }

        const findAllDuplicates = this.find_duplicate_in_array(filters);
        const checkedDuplicates = findAllDuplicates.length <= 0 ? filters : findAllDuplicates;
        const duplicatesValues = _.intersectionWith(checkedDuplicates, resultExamplesPricesValues, _.isEqual);
        const filteredResult = duplicatesValues.map(x=>{
            return resultExamples.filter((f)=>{
                return x === f.id
            })

        });

        filteredResult.forEach((obj) => clearFilteredResult.push(...obj));

        return clearFilteredResult
    };

    concatedData = () => {
        const { filteredPrices,
            filtersTimeFlightThere,
            filtersTimeFlightReturn,
            filtersHoursFlightThere,
            filtersHoursFlightReturn,
        } = this.state;

        const filteredPricesValues = filteredPrices.map(r => { return r.id });
        const filtersTimeFlightThereValues = filtersTimeFlightThere.map(r => { return r.id });
        const filtersTimeFlightReturnValues = filtersTimeFlightReturn.map(r => { return r.id });


        const filtersHoursFlightThereValues = filtersHoursFlightThere.map(r => { return r.id });
        const filtersHoursFlightReturnValues = filtersHoursFlightReturn.map(r => { return r.id });

        let resFinal = [];

        resFinal = this.checkByFilters(
            filteredPricesValues,
            filtersTimeFlightThereValues,
            filtersTimeFlightReturnValues,
            filtersHoursFlightThereValues,
            filtersHoursFlightReturnValues
        );
        const res = this.checkboxedData(resFinal);

        this.setState({
            resultsList: res
        })
    };

    render(){
        const { resultsList } = this.state;
        return(
            <div className={"Results"}>
                <Container>
                    <Col>
                {resultsList.map((item, index)=>{
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
                                        <span style={{"background": "url(" + item.airlineFrom + ")"}}>{item.airlineFromValue}</span>
                                    </Col>
                                    <Col xs={10}>
                                        <Row>
                                            <Col xs={3}>
                                                <span className={'timeSize'}>{item.timeThereFrom}</span>
                                                <span>{item.from}</span>
                                            </Col>
                                            <Col xs={6}>
                                                <span>{item.flightHoursThere}</span>
                                                <span className={'stopsGraph'}>
                                                    <img src={item.flightGraphFrom} alt={''}/>
                                                </span>
                                                <span>{item.straightFlightFrom ? "טיסה ישירה" : ""}</span>
                                            </Col>
                                            <Col xs={3}>
                                                <span className={'timeSize'}>{item.timeThereTo}</span>
                                                <span>{item.to}</span>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row className={"flightInfo flightReturn"}>
                                    <Col xs={2}>
                                        <span style={{"background": "url(" + item.airlineFrom + ")"}}>{item.airlineToValue}</span>
                                    </Col>
                                    <Col xs={10}>
                                        <Row>
                                            <Col xs={3}>
                                                <span className={'timeSize'}>{item.timeReturnFrom}</span>
                                                <span>{item.from}</span>
                                            </Col>
                                            <Col xs={6}>
                                                <span>{item.flightHoursBack}</span>
                                                <span className={'stopsGraph'}>
                                                    <img src={item.flightGraphTo} alt={''}/>
                                                </span>
                                                <span>{item.straightFlightTo ? "טיסה ישירה" : ""}</span>
                                            </Col>
                                            <Col xs={3}>
                                                <span className={'timeSize'}>{item.timeReturnTo}</span>
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
                                <div className={"totalSide-price"}>{`${item.price}$`}</div>
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

const mapStateToProps = (state) => {
    const { filterData } = state;

    return {
        filterData: filterData
    }
};

export default connect(mapStateToProps, null)(Results);