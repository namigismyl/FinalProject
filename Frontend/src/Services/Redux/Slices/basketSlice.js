import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name: "basket",
    initialState: {
        basketItems: localStorage.getItem("basketItems") ? JSON.parse(localStorage.getItem("basketItems")) : []
    },
    reducers: {
        addToBasket: (state, action) => {
            const items = action.payload
            const target = state.basketItems.find(x => x.item._id === items._id)
            if (!target) {
                state.basketItems.push({
                    item: items,
                    count: 1,
                    totalPrice: items.price
                })
            }
            else {
                target.count += 1
                target.totalPrice += items.price
            }
            localStorage.setItem("basketItems", JSON.stringify(state.basketItems))
        },
        removeFromBasket: (state, action) => {
            const items = action.payload
            state.basketItems = state.basketItems.filter(x => x.item._id !== items._id)
            localStorage.setItem("basketItems", JSON.stringify(state.basketItems))
        },
        increaseBasket: (state, action) => {
            const items = action.payload
            const target = state.basketItems.find(x => x.item._id === items._id)
            target.count += 1
            target.totalPrice += items.price
            localStorage.setItem("basketItems", JSON.stringify(state.basketItems))
        },
        decreaseBasket: (state, action) => {
            const items = action.payload
            const target = state.basketItems.find(x => x.item._id === items._id)
            if (target.count > 1) {
                target.count -= 1
                target.totalPrice -= items.price
            }
            localStorage.setItem("basketItems", JSON.stringify(state.basketItems))

        }

    }


}
)
export const { addToBasket, removeFromBasket, increaseBasket, decreaseBasket } = basketSlice.actions
export default basketSlice.reducer

