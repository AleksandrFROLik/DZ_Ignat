import {initialPeopleType} from "../HW8";


export const homeWorkReducer = (state: initialPeopleType, action: homeWorkReducerType): initialPeopleType => { // need to fix any
    switch (action.type) {
        case 'sortUp': {
            // need to fix
            return [...state.sort((a, b)=> a.name < b.name ? -1 : 1)]
        }

        case 'sortDown': {
            // need to fix
            return [...state.sort((a, b)=> a.name > b.name ? -1 : 1)]
        }

        case 'check': {
            return state.filter(people=>people.age > action.payload)
        }
        default:
            return state
    }
}
export type homeWorkReducerType = sortACType   | sortDownACType |  checkACType
export type sortACType = ReturnType<typeof sortUpAC>

export const sortUpAC = () => {
    return {
        type: 'sortUp',
        payload: 'up'
    } as const
}
export type sortDownACType = ReturnType<typeof sortDownAC>
export const sortDownAC = () => {
    return {
        type: 'sortDown',
        payload: 'down'
    } as const
}

export type checkACType = ReturnType<typeof checkAC>
export const checkAC = () => {
    return {
        type: 'check',
        payload: 18
    } as const
}