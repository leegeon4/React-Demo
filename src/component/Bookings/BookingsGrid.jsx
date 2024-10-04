import {useState} from "react";
import {formatDateDay} from "../utils/date-utils.js";
import {getGrid} from "./grid-builder.js";

export  default  function BookingsGrid ({week, bookable, booking, setBooking}){
    //const [bookings, setBookings] = useState(null) {

    const bookings = [
            {
                "session": "Lunch",
                "date": "2024-09-23",
                "bookableId": 3,
                "title": "Football Challenge",
                "bookerId": 3,
                "id": 2
            },
            {
                "session": "Breakfast",
                "date": "2024-09-26",
                "bookableId": 3,
                "title": "Tiddlywinks",
                "bookerId": 2,
                "id": 5
            }
        ]
    const  {grid, dates, sessopns}
            =bookable? getGrid(bookable,week.start):{}
    return (
        <table className={bookings? "bookingsGrid active":"bookingsGrid"}
        >
            <thead>
                <tr>
                    {dates && dates.map(d => (
                        <th key={d}>
                            {formatDateDay(new Date(d))}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
            {sessions && sessions.map(session =>(
                <tr key={session}>
                    <th>{session}</th>
                    {dates.map(date => "")}
                </tr>
            ))}
            </tbody>
        </table>
    )

}