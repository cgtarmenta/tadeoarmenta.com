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
    workPhone: '+1 (619) 719-0373',
    website: 'https://tadeoarmenta.com',
    github: 'cgtarmenta',
    twitter: 'TadeoArmenta',
    linkedin: 'tadeoarmenta',
    social: [
      {
        name: 'Github',
        url: 'https://github.com/cgtarmenta',
        icon: 'github'
      },
      {
        name: 'Gitlab',
        url: 'https://gitlab.com/cgtarmenta',
        icon: 'gitlab'
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
      {
        name: 'Telegram',
        url: 'https://t.me/dat30',
        icon: 'telegram'
      },
    ],
    about: "I'm Tadeo Armenta, a senior JS/ TS full-stack developer from Spain. I'm a 40 years old guy, with 3 beautiful kids, so, as you can imagine, I'm dead serious about working matters, I'm extremely disciplined, proactive, and a proficient developer, with broad experience in NodeJS and its stacks. I have more than 15-year experience in front and backend development. I work mainly with NodeJS and have broad experience leading development teams and working as a one-man wolfpack. I got profuse knowledge in MongoDB and ExpressJS for API development, winch is part of my main skills. I'm a hard worker, committed, auto-disciplined, and goal-oriented guy."
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
