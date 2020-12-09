const initialstate = {
    player1: 0,
    player2: 0
}

const pointsReducer = (state = initialstate, action) => {
    switch(action.type){
        case 'INCREASE1':
            return {
                ...state,
                player1: state.player1 = action.payload
            } 
        case 'INCREASE2':
            return {
                ...state,
                player2: state.player2 = action.payload
            }
        default:
            return state;
    }
}

export default pointsReducer;