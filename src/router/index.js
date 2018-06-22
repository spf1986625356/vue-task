import Vue from 'vue'
import Router from 'vue-router'
import login from '../pages/login'
import layout from '../pages/layout'
import task from '../pages/task'
import todayTask from '../pages/todayTask'
import todayProgre from '../pages/todayProgre'
import weekCondition from '../pages/weekCondition'
import user from '../pages/user'
import friend from '../pages/firend'
import photo from '../pages/photo'
import file from '../pages/files'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: layout,
      children: [
        {
          path: 'task',
          name: 'task',
          component: task,
          children: [
            {
              path: 'todaytask',
              name: 'todayTask',
              component: todayTask
            },
            {
              path: 'progre',
              name: 'todayProgre',
              component: todayProgre
            },
            {
              path: 'con',
              name: 'weekCondition',
              component: weekCondition
            }
          ]
        },
        {
          path: '/user',
          name: 'user',
          component: user
        },
        {
          path: '/friend',
          name: 'friend',
          component: friend
        },
        {
          path: '/photo',
          name: 'photo',
          component: photo
        },
        {
          path: '/file',
          name: 'file',
          component: file
        }
      ]
    }
  ]
})
