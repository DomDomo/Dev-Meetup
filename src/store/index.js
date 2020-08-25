import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        id: "sdfjlsfjlsfj",
        title: "Meetup in New York",
        date: "2020-08-25",
        imageUrl:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffm.cnbc.com%2Fapplications%2Fcnbc.com%2Fresources%2Fimg%2Feditorial%2F2017%2F04%2F12%2F104400487-Empire_state_building_nyc.1910x1000.jpg%3Fv%3D1492015557&f=1&nofb=1",
      },
      {
        id: "qwertyuikjnhbf",
        title: "Meetup in Paris",
        date: "2020-08-26",
        imageUrl:
          "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi.huffpost.com%2Fgen%2F2735806%2Fimages%2Fo-PARIS-facebook.jpg&f=1&nofb=1",
      },
    ],
    user: {
      id: "sdfhljkasf28520jsdkf",
      registeredMeetups: ["sdfjlsfjlsfj"],
    },
  },
  mutations: {
    createMeetup(state, payload) {
      state.loadedMeetups.push(payload);
    },
  },
  actions: {
    createMeetup({ commit }, payload) {
      const meetup = {
        id: "sdfjslfj;sdfjsklsdfjlsdjflsdfj",
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
      };
      commit("createMeetup", meetup);
    },
  },
  getters: {
    loadedMeetups(state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date;
      });
    },
    featuredMeetups(state, getters) {
      return getters.loadedMeetups.slice(0, 5);
    },
    loadedMeetup(state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId;
        });
      };
    },
  },
});
