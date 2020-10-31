const SET_IS_OPEN = 'SET_IS_OPEN'

const initialState = {
    isOpen: true
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_OPEN:
            return { ...state, isOpen: action.payload }
        default:
            return state
    }
}


const setIsOpenAC = value => ({ type: SET_IS_OPEN, payload: value })





export const openAppThunk = value => dispatch => {
    new Promise(resolve => {
        setTimeout(() => {
            document.querySelector(".starWars__Img").style.width = "0"
            resolve()
        })
    }).then(() => {
        setTimeout(() => {
            dispatch(setIsOpenAC(value))
        }, 3000)
    })
}

export default appReducer;