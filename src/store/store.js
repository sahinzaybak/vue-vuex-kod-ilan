import service from "../services/services";

const state = {
  jobList: [],
  positions: [],
  jobDetails: [],
  similarAdverts: [],
}

const mutations = {
  SET_JOB_LİST(state, setValue) {
    state.jobList = setValue;
    state.jobList.forEach(element => {
      if (!state.positions.includes(element.position))
        state.positions.push([element.position, element.slug]);
    })
  },
  SET_JOB_DETAİL(state, detailSlug) {
    state.jobDetails = state.jobList.filter(joblist => joblist.slug == detailSlug
    )
  },
  SET_SİMİLAR_ADVERT(state) {
    var firstWorld = state.jobDetails[0].position.split(" ");
    state.similarAdverts = state.jobList.filter(x => x.position.includes(firstWorld[0])
    )
  },
  SET_DİSTRİCT_LİST(state, districtName) {
    state.jobList = state.jobList.filter(x => x.location == districtName)
  },
  SET_COMPANY_LİST(state, companyName) {
    state.jobList = state.jobList.filter(x => x.company.slug == companyName)
  },
  SET_TAG_LİST(state, tagName) {
    state.jobList = state.jobList.filter(x => x.tags[0].name == tagName); //soralım ?
  }
}

const actions = {
  fetchjobList({ commit }) {
    service.fetchJobList().then(value => {
      commit("SET_JOB_LİST", value);
    })
  },
  fetchJobDetail({ commit }, setDetailSlug) {
    commit("SET_JOB_DETAİL", setDetailSlug);
  },
  fetchSimilarAdverts({ commit }) {
    commit("SET_SİMİLAR_ADVERT");
  },
  fetchDistrictJobList({ commit }, setDistrictName) {
    commit("SET_DİSTRİCT_LİST", setDistrictName);
  },
  fetchCompanyJobList({ commit }, setCompanyName) {
    commit("SET_COMPANY_LİST", setCompanyName);
  },
  fetchTagJobList({ commit }, setTagName) {
    commit("SET_TAG_LİST", setTagName);
  },
  fetchSendForms({ commit }, payload) {
    service.fetchSendForm(
      payload.setMail,
      payload.setPosition,
      payload.setLocation,
      payload.setURL,
      payload.setTags,
      payload.setType,
      payload.setCompanyName,
      payload.setLogo,
      payload.setWebAdress,
      payload.setLinkedin,
      payload.setContent
    ).then(value => {
        console.log(value)
    })
  }
}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
};
