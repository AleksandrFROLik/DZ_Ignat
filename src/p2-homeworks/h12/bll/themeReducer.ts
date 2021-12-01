

const initState = {
    themes: [1]
}

export const themeReducer = (state = initState, action: ChangeThemeCType): typeof initState => { // fix any
    switch (action.type) {
        case 'CHANGE-THEME': {
            return {...state
                }
            //return state
        }
        default: return state;
    }
};

type ChangeThemeCType = ReturnType<typeof changeThemeC >
export const changeThemeC = (theme: number)  => {
    return {
        type: 'CHANGE-THEME',
        theme,
    }as const
}; // fix any