export const state = () => ({
  heroImages: [],
})

export const mutations = {
  SET_HERO_IMAGES(state, value) {
    state.heroImages = value
  },
}

export const actions = {
  async nuxtServerInit({ commit }, context) {
    const heroImages = await context.$content('heroimages').fetch()
    commit('SET_HERO_IMAGES', heroImages)
  },
}
