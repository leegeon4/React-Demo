import {days as daysArray, sessions as sessionsArray} from "../../static.json"
import {FaCloudUploadAlt, FaTrash, FaWindowClose} from "react-icons/fa";
import {Link} from "react-router-dom";

// BookableNew 에서는 handleSubmit 함수만 전달

export default function BookableForm({formState={}}){
    //state 가 undefined 일때를 위한 초기값 필요
    const {state={},setState, handleDelete, handleSubmit} = formState
    const {title="",group="",notes=""} = state
    const {days=[], sessions=[]} = state

    function handleChange(e){
        // setState 로 값을 변경 -> input 요소에 변화가 보입니다.
        // input 요소는 name, value 속성값 한쌍으로 저장되어야 합니다.
        setState({
            ...state,   // 현재 state 객체값 복사
            [e.target.name]: e.target.value  // 이벤트 발생시킨 input 요소만 업데이트
        })
    }

    function handleChecked(e){
        // setState 로 값을 변경
        const {name, value, checked} = e.target
        // 체크박스 name 은 두개중 하나. days, sessions
        const values = new Set(state[name])
        // 클릭한 체크박스의 value 문자열을 정수로 변환하여 저장
        const intValue = parseInt(value, 10)
        // 일단 해당 intValue 를 values 배열에서 삭제하기
        values.delete(intValue)
        // 다시 확인 체크 상태인지 확인하여 values 배열에 추가
        if (checked) values.add(intValue)

        setState({
            ...state,
            [name] : [...values]        // days 또는 sessions 배열을 수정
        })
    }
    console.log("BookableForm state---", state)

    return (
        <main className="bookables-form">
            <div className="item item-form">
                <div className="item-header">
                    <h2>{handleDelete ? "Edit" : "New"} Bookable</h2>
                </div>

                <label htmlFor="title" className="field">Title</label>
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={handleChange}
                />

                <label htmlFor="group" className="field">Group</label>
                <input
                    type="text"
                    name="group"
                    value={group}
                    onChange={handleChange}
                />
                <div>
                    <label htmlFor="notes" className="field">Notes</label>
                    <textarea
                        name="notes"
                        value={notes}
                        onChange={handleChange}
                        rows="4"
                    />
                </div>
                <div className="bookable-availability">
                    <ul>
                        {daysArray.map((day, i) => (
                            <li key={day}><label>
                                <input
                                    checked={days.indexOf(i) !== -1}
                                    type="checkbox"
                                    name="days"
                                    value={i}
                                    onChange={handleChecked}
                                />
                                {day}
                            </label></li>
                        ))}
                    </ul>

                    <ul>
                        {sessionsArray.map((session, i) => (
                            <li key={session}><label>
                                <input
                                    checked={sessions.indexOf(i) !== -1}
                                    type="checkbox"
                                    name="sessions"
                                    value={i}
                                    onChange={handleChecked}
                                />
                                {session}
                            </label></li>
                        ))}
                    </ul>
                </div>
            </div>

            <p className="controls">
                {handleDelete && (
                    <button className="btn btn-delete controls-alt"
                            onClick={handleDelete}>
                        <FaTrash/><span>삭제</span>
                    </button>
                )}
                <Link className="btn" to={state.id ? `/bookables/${state.id}` : `/bookables`}>
                    <FaWindowClose/><span>닫기</span>
                </Link>
                <button className="btn" onClick={handleSubmit}>
                    <FaCloudUploadAlt/><span>저장</span>
                </button>
            </p>
        </main>
    )
}

