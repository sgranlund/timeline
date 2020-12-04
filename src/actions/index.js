export const increment = (nr) => {
    return {
        type: 'INCREMENT',
        payload: nr
    }
}

export const increase = ([startyear, endyear]) => {
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