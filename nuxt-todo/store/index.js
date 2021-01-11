// vuexfire機能を読みこんで使えるようにする
import { vuexfireMutations } from 'vuexfire'

// mutationsを定義しvuexfireが提供しているvuexfireが使えるようになった
export const mutations = {
  ...vuexfireMutations
}