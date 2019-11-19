import React from "react";
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import Tooltip from 'rc-tooltip';

import "./RangeSlider.scss"

const Handle = Slider.Handle;


function RangeSlider(props) {
    const { min, max, defaultValue, marks, tipFormatter } = props;

    const handle = (props) => {
        const { value, dragging, index, ...restProps } = props;

        return (
            <Tooltip
                prefixCls="rc-slider-tooltip"
                overlay={value}
                visible={dragging}
                placement="bottom"
                key={index}
            >
                <Handle
                    value={value}
                    {...restProps}
                />
            </Tooltip>
        );
    };

    return(
        <Range
            min={min}
            max={max}
            defaultValue={defaultValue}
            tipFormatter={tipFormatter}
            handle={handle}
            marks={marks}
        />

    )

}

export default RangeSlider;



