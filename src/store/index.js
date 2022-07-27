import axios from "axios";
import { createStore } from 'vuex';
import { state } from 'vuex';
export default createStore({
  state: {
    groups: [],
    employees: []
  },
  getters: {
    getEmployees() {
      return state.employees;
    },
    getEmployeeById(contactId) {
      return state.employees.filter(employee => employee.contactId === contactId);
    },
    getGroups() {
      return state.groups;
    },
    getGroupById(groupId) {
      return state.groups.filter(group => group.id === groupId);
    }
  },
  mutations: {
    setEmployees(state, payload) {
      state.employees = payload;
    },
    setGroups () {}
  },
  actions: {
    getAllEmployees(context){
      let dataURL= `${this.serverURL}/employees`;
      context.commit("setEmployees", axios.get(dataURL))
  }
  },
  modules: {
  }
})
