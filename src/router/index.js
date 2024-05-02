import {createRouter, createWebHistory} from "vue-router";
import CompanyPage from "../profiles/pages/company-page.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/home', component: CompanyPage, meta: { title: 'Home'}},

        // { path: '/tutorials', component: TutorialManagementComponent, meta: { title: 'Tutorials' } },
        // { path: '/about', component: AboutComponent, meta: { title: 'About us'}},
        { path: '/', redirect: '/home'}
    ]
});

export default router;