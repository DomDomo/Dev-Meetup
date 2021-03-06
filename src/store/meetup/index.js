import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";

export default {
  state: {
    loadedMeetups: [
      {
        id: "sdfjlsfjlsfj",
        title: "Meetup in New York",
        date: new Date(),
        imageUrl:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffm.cnbc.com%2Fapplications%2Fcnbc.com%2Fresources%2Fimg%2Feditorial%2F2017%2F04%2F12%2F104400487-Empire_state_building_nyc.1910x1000.jpg%3Fv%3D1492015557&f=1&nofb=1",
        location: "New York",
        description: "Coool cool place to hang",
      },

      {
        id: "qwertyuikjnhbf",
        title: "Meetup in Paris",
        date: new Date(),
        imageUrl:
          "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi.huffpost.com%2Fgen%2F2735806%2Fimages%2Fo-PARIS-facebook.jpg&f=1&nofb=1",
        location: "Paris",
        description: "Chill place and fun times",
      },
    ],
  },
  mutations: {
    setLoadedMeetups(state, payload) {
      state.loadedMeetups = payload;
    },
    createMeetup(state, payload) {
      state.loadedMeetups.push(payload);
    },
    updateMeetup(state, payload) {
      const meetup = state.loadedMeetups.find((meetup) => {
        return meetup.id === payload.id;
      });
      if (payload.title) {
        meetup.title = payload.title;
      }
      if (payload.description) {
        meetup.description = payload.description;
      }
      if (payload.date) {
        meetup.date = payload.date;
      }
    },
  },
  actions: {
    loadMeetups({ commit }) {
      commit("setLoading", true);
      firebase
        .database()
        .ref("meetups")
        .once("value")
        .then((data) => {
          const meetups = [];
          const obj = data.val();
          for (let key in obj) {
            meetups.push({
              id: key,
              creatorId: obj[key].creatorId,
              title: obj[key].title,
              location: obj[key].location,
              imageUrl: obj[key].imageUrl,
              description: obj[key].description,
              date: obj[key].date,
            });
          }
          commit("setLoadedMeetups", meetups);
          commit("setLoading", false);
        })
        .catch((error) => {
          console.error(error);
          commit("setLoading", false);
        });
    },
    createMeetup({ commit }, payload) {
      const meetup = {
        creatorId: this.getters.user.id,
        title: payload.title,
        location: payload.location,
        description: payload.description,
        date: payload.date.toISOString(),
      };
      let imageUrl;
      let key;
      firebase
        .database()
        .ref("meetups")
        .push(meetup)
        .then((response) => {
          key = response.key;
          return key;
        })
        .then((key) => {
          const filename = payload.image.name;
          const ext = filename.slice(filename.lastIndexOf("."));
          return firebase
            .storage()
            .ref("meetups/" + key + "." + ext)
            .put(payload.image);
        })
        .then((fileData) => {
          return fileData.ref.getDownloadURL();
        })
        .then((url) => {
          imageUrl = url;
          return firebase
            .database()
            .ref("meetups")
            .child(key)
            .update({ imageUrl: imageUrl });
        })
        .then(() => {
          commit("createMeetup", { ...meetup, imageUrl: imageUrl, id: key });
        })
        .catch((error) => {
          console.error(error);
        });
    },
    updateMeetupData({ commit }, payload) {
      commit("setLoading", true);
      const updateObj = {};
      if (payload.title) {
        updateObj.title = payload.title;
      }
      if (payload.description) {
        updateObj.description = payload.description;
      }
      if (payload.date) {
        updateObj.date = payload.date;
      }
      firebase
        .database()
        .ref("meetups")
        .child(payload.id)
        .update(updateObj)
        .then(() => {
          commit("setLoading", false);
          commit("updateMeetup", payload);
        })
        .catch((error) => {
          console.log(error);
          commit("setLoading", false);
        });
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
};
