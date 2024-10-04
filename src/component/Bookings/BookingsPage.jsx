import WeekPicker from "./WeekPicker.jsx";
import BookablesList from "../Bookables/BookablesList.jsx";
import {useState} from "react";
import Bookings from "./Bookings.jsx";

function BookingsPage(){
    const [bookable, setBookable] =useState(null)

    return(
        <main className="bookings-page">
            <BookablesList
                bookable={bookable}
                setBookable={setBookable}/>
       {/* 선택한 bookable 객체는 부모, 형제*/}
            <Bookings bookable={bookable}/>
            <div>예약하기</div>
          {/*  <WeekPicker date="" day="" month=""/>
                WeekPicker 에서 받을 값이 3개 -> 함수에서 props 로 받거나
                또는 오브젝트 분해하여 {date, day, month}
          */}
            {/* WeekPicker 에게 초기값으로 date 속성을 전달합니다.*/}
            <WeekPicker date={new Date()}/>
        </main>
    )
}
export default BookingsPage