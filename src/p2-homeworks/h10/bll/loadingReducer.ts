
export type InitStateType = {
    loading:boolean
}

 const initState = {
    loading:false
}

export const loadingReducer = (state:InitStateType = initState, action: LoadingACType): InitStateType => { // fix any
    switch (action.type) {
        case 'CHANGE_LOADING': {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state
    }
}

export type LoadingACType = ReturnType<typeof loadingAC>
export const loadingAC = (loading:boolean) => {
    return {
        type: 'CHANGE_LOADING',
        payload:{
            loading: !loading
        }
    } as const
} // fix any