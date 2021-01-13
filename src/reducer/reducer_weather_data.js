export default function (state = [], action) {
    switch (action.type) {
        case 'FORECAST_TYPE':
         return [action.payload,...state]
    }
    return state
}