import {bookables} from "../../static.json"


function BookList() {
    let bookalbes;
    console.log("bookables", bookalbes)
    const group="Kit"
    let bookableIndex = 3
    const bookableGroup = bookables.filter(b =>(b.group === group))

    function changeBookable(selectIndex){
        bookableIndex = selectIndex
    }

    return (
        <ul className="items-list-nav">
            {bookableGroup.map((b,i) => (
                <li key={b.id} className={i=== bookableIndex? "selected":null}>
                    <button className="btn"
                        onClick={()=> changeBookable(i)}>
                        {b.title}
                    </button>
                </li>
            ))}
        </ul>
    )
}

export  default BookList