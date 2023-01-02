import {computed, ref} from 'vue'
import { defineStore } from 'pinia'
import {useRoute} from "vue-router";

export const useDataStore = defineStore('dataStore', () => {
    const route = useRoute();
    const developer = ref({
        name: 'Tadeo Armenta',
        fullName: 'Carlos Gustavo Tadeo Armenta Andrade',
        email: 'contact@tadeoarmenta.com',
        website: 'https://tadeoarmenta.com',
        github: 'TadeoArmenta',
        twitter: 'TadeoArmenta',
        linkedin: 'TadeoArmenta',
        social: [
            {
                name: 'Github',
                url: 'https://github.com/TadeoArmenta',
                icon: 'github'
            },
            {
                name: 'Twitter',
                url: 'https://twitter.com/TadeoArmenta',
                icon: 'twitter'
            }
        ],
    });
    const pages = ref([
        {name: '_hello', path: '/', current: computed(() => route.path === '/')},
        {name: '_about-me', path: '/about', current: computed(() => route.path === '/about')},
        {name: '_projects', path: '/projects', current: computed(() => route.path === '/projects')},
    ])

  return { developer, pages }
})
