export const increment = (nr) => {
    return {
        type: 'INCREMENT',
        payload: nr
    }
}

export const change = ([startyear, endyear]) => {
    return {
        type: 'CHANGE',
        payload: [startyear, endyear] 
    }
}

export const name = (name) => {
    return {
        type: 'NAME1',
        payload: name
    }
}

export const name2 = (name) => {
    return {
        type: 'NAME2',
        payload: name
    }
}

export const increase = (nr) => {
    return {
        type: 'INCREASE',
        payload: nr
    }
}

export const decrease = (nr) => {
    return {
        type: 'DECREASE',
        payload: nr
    }
}