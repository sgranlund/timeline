const yearReducer = (state = 0, action) => {
    switch(action.type){
        case 'CHANGE':
            return state = action.payload;
        default:
            return state;
    }
}
export default yearReducer;