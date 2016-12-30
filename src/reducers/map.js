export default (state = [], action) => {
  switch (action.type){
    case 'POSITION_SET':
        return [
          ...state,
          Object.assign({}, {position: action.position})
        ];
    default:
          return state;
  }
};
