import React, {useContext, useState} from 'react';
import  DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {IsraGuruContext} from "../../utils/сontext";

const Calendar = () => {
    const {startDate, setStartDate, endDate, setEndDate} = useContext(IsraGuruContext);
    const setDate = (start, end) => {
        return start > end ? new Date() : setStartDate(start);
    };
    return (
        <>
            <div className='mr-3'>
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setDate(date,endDate)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                />
            </div>
            <div>
                <DatePicker
                    selected={endDate}
                    onChange={date => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                />
            </div>
        </>
    );
};

export default Calendar;