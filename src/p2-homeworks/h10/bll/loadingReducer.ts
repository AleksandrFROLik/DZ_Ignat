
export type Type = {
    loading:boolean
}

 const initState = {
    loading:false
}

export const loadingReducer = (state:Type = initState, action: LoadingACType): Type => { // fix any
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