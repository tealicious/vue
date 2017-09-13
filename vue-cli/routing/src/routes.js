import Home from './components/Home.vue';
import User from './components/user/User.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';
import UserStart from './components/user/UserStart.vue';

export const routes =  [
  { path: '', component: Home},
  //{ path: '/user/:id', component: User, props: true }, // '/:{{key}}' expects user/some-sub-url-path
  { path: '/user', component: User, props: true, children: [
    { path: '', component: UserStart, props: true }, // a new nav template
    { path: ':id', component: UserDetail , props: true}, // a pariable id (i.e. userName)
    { path: ':id/edit', component: UserEdit, name: 'userEdit' } // some alt view paried to that id
    // nested routes need to have a new component created somewhere (Use.vue)
  ] }
];
