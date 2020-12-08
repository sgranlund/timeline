const yearReducer = (state = [1000, 2020], action) => {
    switch(action.type){
        case 'CHANGE':
            return state = action.payload;
        default:
            return state;
    }
}
export default yearReducer;