const nameReducer = (state={name1: "seb", name2: "em"}, action) => {
    switch (action.type) {
        case 'NAME1':
            return {
                ...state,
                name1:
                    [action.payload],
            }
        case 'NAME2':
            return {
                ...state,
                name2:
                    [action.payload]
            }
        default:
            return state;
    }
}

export default nameReducer;