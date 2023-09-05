import {computed, ref} from 'vue'
import { defineStore } from 'pinia'
import {useRoute} from "vue-router";

export const useDataStore = defineStore('dataStore', () => {
  const route = useRoute();
  const developer = ref({
    name: 'Tadeo Armenta',
    fullName: 'Carlos Gustavo Tadeo Armenta Andrade',
    description: 'Experienced Software Developer, I\'m adept in bringing forth expertise in design, installation, testing and maintenance of software systems. Proficient in various platforms, languages, and embedded systems. Experienced with the latest cutting edge development tools and procedures.   Able to effectively self-manage during independent projects, as well as collaborate as part of a productive team.',
    title: 'Senior Software Developer',
    email: 'contact@tadeoarmenta.com',
    website: 'https://tadeoarmenta.com',
    github: 'TadeoArmenta',
    twitter: 'TadeoArmenta',
    linkedin: 'TadeoArmenta',
    social: [
      {
        name: 'Github',
        url: 'https://github.com/cgtarmenta',
        icon: 'github'
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/TadeoArmenta',
        icon: 'twitter'
      },
      {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/tadeoarmenta',
        icon: 'linkedin'
      },
      {
        name: 'Upwork',
        url: 'https://www.upwork.com/freelancers/~0130e45a6e324fd76a?viewMode=1',
        icon: 'upwork'
      },
    ],
  });
  const pages = ref([
    {name: '_hello', path: '/', current: computed(() => route.path === '/')},
    {
      name: '_about-me',
      path: '/about',
      current: computed(() => route.path === '/about'),
      menu: {

      }
    },
    {name: '_projects', path: '/projects', current: computed(() => route.path === '/projects')},
  ])

  return { developer, pages }
})
