import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Bank from '../views/Bank.vue'
import Employees from '../views/Employees.vue'
import EditEmployees from "../views/EditEmployees"
import AddEmployee from "../views/AddEmployee"
import Clicker from "../views/Clicker"

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
            return import(/* webpackChunkName: "about" */ '../views/About.vue')
        }
    },
    {
        path: "/register",
        name: "Register",
        component: Register
    },
    {
        path: "/bank",
        name: "Bank",
        component: Bank
    },
    {
        path: "/employees",
        name: "Employees",
        component: Employees
    },
    {
        path: "/editemployees/:id",
        name: "EditEmployees",
        component: EditEmployees
    },
    {
        path: "/addemployee",
        name: "AddEmployee",
        component: AddEmployee
    },
    {
        path: "/clicker",
        name: "Clicker",
        component: Clicker
    },
]

const router = new VueRouter({
    routes
})

export default router
