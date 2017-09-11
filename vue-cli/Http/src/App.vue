<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
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
                <hr />
                <button class='btn btn-info' @click="getNirvana">Get nirvana</button>
                <br />
                <br />
                <ul class="list-group">
                    <transition-group name="fade" mode="out-in">
                        <li class='list-group-item'
                            style="cursor:pointer"
                            v-for="(item, index) in nirvana"
                            :key="index"
                            @click="remove">
                            {{ item.name }} {{ item.email }}
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
                    name:'',
                    email:''
                },
                users: [],
                nrivana: [],
                data: {
                    q : "nirvana",
                    per_page: 10
                },
                requestUrl: "https://vuexhr.firebaseio.com/data.json"
            }
        },
        methods: {
            remove(index) {
                this.users.splice(index, 1);
            },
            submit() {
                console.log(this.user);
                // Vue XML http request or AJAX replacement
                // vue-resource provides the $http object to work with
                // args
                // 1. URL to post to ('data.json must be added for this example in order for firebase to work')
                // 2. object to send
                this.$http.post(this.requestUrl, this.user)
                    .then(response => { //once we get response back, do something with it
                        console.log(response.body.name);
                    }, error => {
                        console.log(error);
                    });
            },
            fetchData() {
                this.$http.get(this.requestUrl)
                    .then(response => {
                        console.log(response.json());
                        return response.json(); // the response.json object must be chained into another .then() method to have its contents extraced, otherwise we just receive a promise object
                    }).then( fetchedData => {
                        const resultArray = [];
                        for (let key in fetchedData) {
                                // use the unique keynames to access their user objects
                                resultArray.push(fetchedData[key]);
                        }
                        this.users = resultArray;
                    }, error => {
                        console.log(error);
                    });
            },
             getNirvana() {
                this.$http.jsonp('http://api.discogs.com/database/search', this.data)
                    .then(response => {
                        console.log(response.json());
                        return response.json(); // the response.json object must be chained into another .then() method to have its contents extraced, otherwise we just receive a promise object
                    }).then( fetchedData => {
                        const nirvanaArray = [];
                        for (let key in fetchedData) {
                                // use the unique keynames to access their user objects
                                nirvanaArray.push(fetchedData[key]);
                        }
                        this.nirvana = nirvanaArray;
                    }, error => {
                        console.log(error);
                    });
                // $.ajax({
                //         url: 'http://api.discogs.com/database/search',
                //         type: "GET",
                //         dataType: 'jsonp',
                //         data: {
                //         q: 'nirvana',
                //         per_page: '10'
                //         },
                //         success: function (data) {
                //         alert(data);
                //         }
                //     });
            }
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
