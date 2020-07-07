export default {
  namespace: "todos",
  state: [
    { name: "hudada", age: 20, id: 1 },
    { name: "huyihui", age: 1, id: 2 }
  ],
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        console.log("subscriptions", pathname)
        if (pathname === '/products') {
          dispatch({
            type: 'products/add',
          });
        }
      });
    }
  },
  reducers: {
    delete: (state, action) => {
      console.log("delete:", action)
      return state.filter(item => item.id !== action.payload.id)
    },
    add: (state) => {
      const todos = state.slice();
      todos.push({name: `新来的${Math.round(Math.random() * 10000)}`, age: Math.round(Math.random() * 20 + 10), id: new Date().getTime() + Math.random()})
      return todos
    }
  },
  effects: {
    *delayDel(action, { put, call, select }) {
      console.log("delayDel:", action)
      const s = yield select(state => state)
      console.log("state:", s)
      const res = yield call(() => {
        return "我是 call 里面的函数的执行结果"
      });
      console.log(res)
      yield put({ type: "delete", payload: action.payload})
    },
    *saga(action, { take }) {
      while(true) {
        const event = yield take("click");
        console.log("时间对象：", event);
      }
    }
  }
}