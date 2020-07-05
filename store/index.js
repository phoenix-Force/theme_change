export const state =  {
  ThemeName: null
}

export const mutations = {
  SET_NAME_MUTATION (state, theme) {
    state.ThemeName = theme
  }
}
export const actions = {
  setTheme ({commit}, value) {
    commit('SET_NAME_MUTATION', value)
  }
}
export const getters = {
  Selected_theme : (state) => {
    return state.ThemeName
  }
}
