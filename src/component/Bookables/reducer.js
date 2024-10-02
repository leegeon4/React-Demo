export default function reducer(state, action){
    switch (action.type){
        case "SET_GROUP":
            return{
                ...state,
                group:action.payload,
                bookableIndex: 0
            }

        case "SET_BOOKABLE":
            return{
                ...state,
                bookableIndex: action.payload
            }

        case "TOGGLE_HAS_DETAILS":
            return{
                ...state,
                hasDetails: !state.hasDetails   /* hasDEtails 는 not 연산*/
            }

        case "NEXT_BOOKABLE":
        {
            // const count = state.bookables.filter(
            // b=> b.group === state.group).length;
            return{
                ...state,
                bookableIndex: (state.bookableIndex +1) % action.payload
            };
        }

        default:    //꼭 필요함.
            return state;

    }
}