export default (state = 1, action) => {
    switch (action.type) {
        case 'INCREMENT':
            console.log(action.name)
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};