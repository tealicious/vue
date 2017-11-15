import Home from './components/Home.vue';
import Header from './components/Header.vue';
// import User from './components/user/User.vue';
// import UserDetail from './components/user/UserDetail.vue';
// import UserEdit from './components/user/UserEdit.vue';
// import UserStart from './components/user/UserStart.vue';


// asynchronously load modules when they are called via router to minimize initial page load
// lazy loading syntax for WebPack
const User = resolve => {
  require.ensure(['./components/user/User.vue'], () => {
    resolve(require('./components/user/User.vue'))
  }, 'user'); // <-- can pass a grouping paramater to group lazy load components
};
const UserDetail = resolve => {
  require.ensure(['./components/user/UserDetail.vue'], () => {
    resolve(require('./components/user/UserDetail.vue'))
  });
};
const UserEdit = resolve => {
  require.ensure(['./components/user/UserEdit.vue'], () => {
    resolve(require('./components/user/UserEdit.vue'))
  });
};
const UserStart = resolve => {
  require.ensure(['./components/user/UserStart.vue'], () => {
    resolve(require('./components/user/UserStart.vue'))
  });
};


export const routes = [{
    path: '',
    component: Home
  },
  //{ path: '/user/:id', component: User, props: true }, // '/:{{key}}' expects user/some-sub-url-path
  {
    path: '/user',
    component: User,
    children: [ // I THINK the children object automatically tells the router that <router-view> will start rendering the components designated to it
      {
        path: '',
        component: UserStart
      }, // @ no string render the UserStart.vue component
      {
        path: ':id',
        component: UserDetail,
        beforeEnter: (to, from, next) => {
          console.log('inside routes setup');
          next(); // explicitly tell beforeEach method to allow route actions to continues
        }
      }, // @id (we use names here) render the url + '/id' via the userDetail component
      {
        path: ':id/edit',
        component: UserEdit,
        name: 'userEdit'
      } // I think the name key bings the links in the vue to this route ? not sure
    ]
  },
  {
    path: '*',
    redirect: '/'
  } // catch all unhandled routes (404's)
];