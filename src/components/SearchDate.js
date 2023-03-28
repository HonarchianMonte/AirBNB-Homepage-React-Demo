import "react-date-range/dist/styles.css";
import 'react-date-range/dist/theme/default.css';
import "./searchDate.css";

import React, {useState} from 'react';

import { DateRangePicker } from 'react-date-range';

function SearchDate() {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

    const selectRange ={
      startDate: startDate,
      endDate: endDate,
      key: "selection"
    }

    const handleSelect = (ranges) => {
      setStartDate(ranges.selection.startDate)
      setEndDate(ranges.selection.endDate)
    }

  return (
    <div className='search_container'>
      <DateRangePicker ranges={[selectRange]} onChange={handleSelect}/>
    </div>
    
    
  )
}

export default SearchDate