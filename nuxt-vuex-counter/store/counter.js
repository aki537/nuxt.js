export const state = () => ({
  count: 0
})

export const mutations = {
  countUp: function(state) {
    state.count += 1
  },
  reset: function(state) {
    state.count = 0
  }
}

export const actions = {
  updateMessageAction(context, payload) {
    context.commit('updateMessage', payload)
  }
}