import {createSlice} from "@reduxjs/toolkit"

const loadItemFromStorage = () => {
    try {
        const storedItems = localStorage.getItem("bookedHomes")

        return storedItems ? JSON.parse(storedItems) : [] 
        } catch (error) {
          return[]
        }
}

const cartSlice = createSlice({
    name: 'cart',
    initialState : {
        items: loadItemFromStorage()
    },
    reducers : {
        addItem : (state, action) => {
            state.items.push(action.payload)
            localStorage.setItem("bookedHomes", JSON.stringify(state.items))
        },
        removeItem: (state,action) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
            localStorage.setItem("bookedHomes", JSON.stringify(state.items))
        },
        clearCart : (state) => {
            state.items.length = 0
            localStorage.removeItem("bookedHomes")
        } 
    }
}
)
export const {addItem, removeItem, clearCart} = cartSlice.actions

export default cartSlice.reducer
