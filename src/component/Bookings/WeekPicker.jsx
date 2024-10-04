import {formatDate} from "../utils/date-utils.js";
import {FaCalendarDay, FaChevronLeft, FaChevronRight} from "react-icons/fa";

// eslint-disable-next-line react/prop-types
function WeekPicker({week, dispatch}) {
    // week 객체가 존재하지 않거나 start, end 값이 없을 경우 기본값을 설정
    const startDate = week && week.start ? formatDate(week.start) : "Invalid Date";
    const endDate = week && week.end ? formatDate(week.end) : "Invalid Date";

    return (
        <div>
            <p className="date-picker">
                <button
                    className="btn"
                    onClick={() => dispatch({type: "PREV_WEEK"})}>
                    <FaChevronLeft/>
                    <span>PREV</span>
                </button>
                <input type="date" defaultValue={formatDate(new Date())}
                       onChange={(e) => dispatch({
                           type: "SET_DATE",
                           payload: e.target.value
                       })}
                />
                <input type="text" placeholder="yyyy-mm-dd"
                       defaultValue={formatDate(new Date())}
                       onChange={(e) => dispatch({
                           type: "SET_DATE",
                           payload: e.target.value
                       })}
                />
                <button
                    className="btn"
                    onClick={() => dispatch({type: "TODAY"})}>
                    <FaCalendarDay/>
                    <span>Today</span>
                </button>
                <button
                    className="btn"
                    onClick={() => dispatch({type: "NEXT_WEEK"})}>
                    <span>NEXT</span>
                    <FaChevronRight/>
                </button>
            </p>
            <p>
                {/* week 객체의 start와 end 값이 존재할 때만 출력 */}
                {startDate} ~ {endDate}
            </p>
        </div>
    );
}

export default WeekPicker;
