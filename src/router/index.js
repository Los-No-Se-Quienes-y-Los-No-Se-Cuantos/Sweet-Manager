import {createRouter, createWebHistory} from "vue-router";
import AccessContentComponent from "../iam/components/access-view/access-content.component.vue";
import ReportsViewComponent from "../analytics/components/reports-view/reports-view.component.vue";
import NotificationsContentComponent from "../interaction/components/notifications-content.component.vue";
import CompanyPage from "../profiles/pages/company-page.vue";
import SubscriptionsContentComponent from "../payment/pages/subscriptions-content.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: SubscriptionsContentComponent,},
        {path: '/dashboard', component: ReportsViewComponent, meta: {requiresAuth: true}},
    ]
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        const token = localStorage.getItem('id');

        // this route requires auth, check if logged in
        // if not, redirect to login page.
        next({path: '/'});
    } else {
        next(); // make sure to always call next()!
    }
})

export default router;