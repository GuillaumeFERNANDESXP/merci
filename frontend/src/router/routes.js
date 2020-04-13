
const routes = [
  {
    path: '/',
    component: () => import('layouts/BaseLayout.vue'),
    children: [
      {
        path: '/',
        name: 'HomePage',
        props: true,
        component: () => import('pages/HomePage.vue')
      },
      {
        path: '/upload',
        name: 'Upload',
        props: true,
        component: () => import('pages/Upload.vue')
      },
      {
        path: '/uploadTest',
        name: 'UploadTest',
        props: true,
        component: () => import('pages/uploadTest.vue')
      },
      {
        path: '/adminbravoes',
        name: 'Admin',
        props: true,
        component: () => import('pages/Admin.vue')
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
