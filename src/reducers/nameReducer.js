const nameReducer = (state="", action) => {
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