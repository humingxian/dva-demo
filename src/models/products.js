export default {
  namespace: 'products',
  state: [],
  reducers: {
    'delete'(state, { payload: id }){
      return state.filter(item => item.id !== id);
    },
    'add'(state) {
      return state.concat([{name:"react", id: 3}])
    }
  },
};