import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questions: [
      {
        question: "Quel révolutionnaire et grand orateur a déclaré en 1792 : “De l’audace, encore de l’audace, toujours de l’audace.”",
        answers: [
          'Desmoulin',
          'Danton',
          'Robespierre',
          'Saint Just'
        ],
        ok: 1
      },
      {
        question: "Dans quel pays peut-on trouver le mont Elbrouz ?",
        answers: [
          'Russie',
          'Azerbaïdjan',
          'Géorgie',
          'Iran'
        ],
        ok: 0
      },
      {
        question: "Qui a dit “Ich bin ein Berliner” ?",
        answers: [
          'Bismarck',
          'Reagan',
          'De Gaulle',
          'Kennedy'
        ],
        ok: 3
      }
    ]
  },
  mutations: {

  },
  actions: {

  }
})