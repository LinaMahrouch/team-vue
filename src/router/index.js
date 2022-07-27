import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EmployeeManager from "@/views/EmployeeManager"
import AddEmployee from "@/views/AddEmployee"
import EditEmployee from "@/views/EditEmployee"
import ViewEmployee from "@/views/ViewEmployee"
import PageNotFound from "@/views/PageNotFound";
import childProp from "@/views/childProp";
import parentView from "@/views/parentView";

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: "/employees",
    component: HomeView
  },
  {
    path: '/employees',
    name: 'EmployeeManager',
    
    component: EmployeeManager
  },
  {
    path: '/employees/add',
    name: 'AddEmployee',
  
    component: AddEmployee
  },

  {
    path: '/employees/edit/:contactId',
    name: 'EditEmployee',
  
    component: EditEmployee
  },

  {
    path: '/employees/view/:contactId',
    name: 'ViewEmployee',
  
    component: ViewEmployee
  },
  {
    path: '/child',
    name: 'childProp',
    
    component: childProp
  },
  {
    path: '/parent',
    name: 'parentView',
    
    component: parentView
  },
  {
    //regular expression used for mnin page is not found
    path: '/:patchMatch(.*)*',
    name: 'PageNotFound',
  
    component: PageNotFound
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
