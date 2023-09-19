import type {RouteLocationNormalized, RouteLocationNormalizedLoaded, RouteRecordRaw} from "vue-router";
import type { Plugin} from "vue";
import {createRouter, createWebHistory} from "vue-router";
import logger from "@/utils/logger";
export const installRouter: Plugin = (app)=> {
  logger.info('installRouter plugin instanced')

  const routes: Array<RouteRecordRaw>  = [
    {
      path: '/',
      component: () => import('@/layout/MainLayout.vue'),
      children: [
        {
          path: '/',
          name: 'Home',
          component: () => import('@/views/HomeView.vue')
        },
        {
          path: '/about',
          name: 'About',
          component: () => import('@/views/AboutMeView.vue')
        },
        {
          path: '/projects',
          name: 'Projects',
          component: () => import('@/views/ProjectsView.vue')
        },
        {
          path: '/contact',
          name: 'Contact',
          component: () => import('@/views/ContactMeView.vue')
        },
        {
          path: '/:pathMatch(.*)*',
          name: 'NotFound',
          component: () => import('@/views/NotFoundView.vue')
        }
      ]
    },
  ];
  logger.info('installRouter routes created')
  const Router = createRouter({
    history: createWebHistory('/'),
    routes:routes,
    scrollBehavior(_to: RouteLocationNormalized, _from: RouteLocationNormalizedLoaded, savedPosition) {
      return savedPosition || { left: 0, top: 0 };
    },
  });
  app.use(Router)
}
