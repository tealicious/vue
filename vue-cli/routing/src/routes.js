import Home from './components/Home.vue';
import User from './components/user/User.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';
import UserStart from './components/user/UserStart.vue';

export const routes =  [
  { path: '', component: Home},
  //{ path: '/user/:id', component: User, props: true }, // '/:{{key}}' expects user/some-sub-url-path
  { path: '/user', component: User, children: [ // I THINK the children object automatically tells the router that <router-view> will start rendering the components designated to it
    { path: '', component: UserStart }, // @ no string render the UserStart.vue component
    { path: ':id', component: UserDetail ,}, // @id (we use names here) render the url + '/id' via the userDetail component
    { path: ':id/edit', component: UserEdit, name: 'userEdit' } // I think the name key bings the links in the vue to this route ? not sure
  ] },
  { path: '/redirect-me', redirect: '/user'}
];
