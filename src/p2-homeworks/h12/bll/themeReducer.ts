

const initState = {
    themes:['some']
}

export const themeReducer = (state = initState, action: ChangeThemeCType): typeof initState => { // fix any
    switch (action.type) {
        case 'CHANGE-THEME': {
             return {...state, themes:[action.theme]}
            //return state
        }
        default: return state;
    }
};

type ChangeThemeCType = ReturnType<typeof changeThemeC >
export const changeThemeC = (theme: string)  => {
    return {
        type: 'CHANGE-THEME',
        theme,
    }as const
}; // fix any