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

export const increase1 = (nr) => {
    return {
        type: 'INCREASE1',
        payload: nr
    }
}

export const increase2 = (nr) => {
    return {
        type: 'INCREASE2',
        payload: nr
    }
}