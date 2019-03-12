export default function(state = initialState, action) {
    switch (action.type) {
      case 'FETCH_DATA':
        return 'hello';
    default:
        return state;
    }
}