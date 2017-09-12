<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <select class="form-control" v-model="node">
                  <option>data</option>
                  <option>alternative</option>
                </select>
                <br />
                <br />
                <form v-on:submit.prevent="submit">
                    <div class='form-group'>
                      <label>Username</label>
                      <input class='form-control' type='text' required="true"
                      v-model="user.name"/>
                    </div>
                    <div class='form-group'>
                      <label>Email</label>
                      <input class='form-control' type='email' required="true"
                      v-model="user.email"/>
                    </div>
                    <button class='btn btn-primary' type='submit'>Post Data</button>
                </form>
                <hr />
                <button class='btn btn-danger' @click="fetchData">Get Data</button>
                <br />
                <br />
                <ul class="list-group">
                    <transition-group name="fade" mode="out-in">
                        <li class='list-group-item'
                            style="cursor:pointer"
                            v-for="(u, index) in users"
                            :key="index"
                            @click="remove">
                            {{ u.name }} {{ u.email }}
                        </li>
                    </transition-group>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    name:'whoDat',
                    email:'boy@1000yearsRickandMorty.com'
                },
                users: [],
                requestUrl: "https://vuexhr.firebaseio.com/data.json",
                resource: {},
                node:'data'
            }
        },
        methods: {
            remove(index) {
                this.users.splice(index, 1);
            },
            submit() {
                this.resource.save({node: this.node}, this.user);
                //this.resource.saveAlt({node: this.node}, this.user);
                // Vue XML http request or AJAX replacement
                // vue-resource provides the $http object to work with
                // args
                // 1. URL to post to ('data.json must be added for this example in order for firebase to work')
                // 2. object to send
                // this.$http.post('data.json', this.user)
                // .then(response => { //once we get response back, do something with it
                //     console.log("response body name: " + response.body.name);
                // }, error => {
                //     console.log(error);
                // });
            },
            fetchData() {
                this.resource.getData({node: this.node})
                    .then(response => {
                        return response.json();
                    })
                    .then( fetchedData => {
                        const resultArray = [];
                        for (let key in fetchedData) {
                                // use the unique keynames to access their user objects
                                resultArray.push(fetchedData[key]);
                        }
                        this.users = resultArray;
                    }, error => {
                        console.log(error);
                    });
                // this.$http.get('data.json')
                // .then(response => {
                //     return response.json(); // the response.json object must be chained into another .then() method to have its contents extraced, otherwise we just receive a promise object
                // }).then( fetchedData => {
                //     const resultArray = [];
                //     for (let key in fetchedData) {
                //             // use the unique keynames to access their user objects
                //             resultArray.push(fetchedData[key]);
                //     }
                //     this.users = resultArray;
                // }, error => {
                //     console.log(error);
                // });
            }
        },
        created() {
            const customActions = {
                saveAlt: {method: 'POST'},
                getData: {method: 'GET'}
            };
            this.resource = this.$resource('{node}.json', {}, customActions);
        }
    }
</script>

<style>
      /*TRANSITION ANIMATIONS*/
    .fade-enter-active, .fade-leave-active, .fade-move {
      transition: all .3s ease;
      /* set beziers on active classes */
    }
    .fade-enter, .fade-leave-to
    /* 2.1.8 and up - set tranisitions on enter and leave-to*/ {
      opacity:0;
    }
</style>
