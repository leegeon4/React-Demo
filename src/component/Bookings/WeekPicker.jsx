import {useReducer} from "react";
import reducer from "./weekReducer.js";
import getWeek from "./date-util.js";
import {FaChevronLeft, FaChevronRight, FaChevronUp} from "react-icons/fa";

function  WeekPicker({date}){
    // date 값으로 getWeek 함수를 통해 state(week) 를 초기화
    const [week, dispatch] = useReducer(reducer,date,getWeek)
    return(
        <div>
            <p className="date-picker">
                <button
                    className="btn"
                    onClick={() => dispatch({type: "PREV_WEEK"})}>
                    <span>PREV</span>
                    <FaChevronLeft/>
                </button>
                <button
                    className="btn"
                    onClick={() => dispatch({type: "TODAY"})}>
                    <span>Today</span>
                    <FaChevronUp/>
                </button>
                <button
                    className="btn"
                    onClick={() => dispatch({type: "NEXT_WEEK"})}>
                    <span>NEXT</span>
                    <FaChevronRight/>
                </button>
            </p>
            <p>
                {week.start.toLocaleString()} ~ {week.end.toLocaleString()}
            </p>
        </div>
    )

}


export default WeekPicker