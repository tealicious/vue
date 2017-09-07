<template>
    <div class="container">
        <form v-on:submit.prevent="submitForm"
        v-if="!isSubmitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                  <h1>Ayo' Dis Dat Form!</h1>
                  <hr />
                  <!-- Exercise 1 -->
                  <!-- Create a Signup Form where you retrieve the following Information -->
                  <!-- Full Name (First Name + Last Name) -->
                  <!-- Mail -->
                  <!-- Password -->
                  <!-- Store Data? Yes/No -->

                  <!-- Exercise 2 -->
                  <!-- Only display the Form if it has NOT been submitted -->
                  <!-- Display the Data Summary ONCE the Form HAS been submitted -->
                  <full-name v-model="user.fullName"></full-name>
                  <!-- <div class='form-group'>
                    <label for="first-name">First Name</label>
                    <input required id="first-name" class="form-control" type='text'
                    v-model="user.firstName"/>
                  </div>
                  <div class='form-group'>
                    <label for="last-name">Last Name</label>
                    <input required id="last-name" class="form-control" type="text"
                    v-model="user.lastName"/>
                  </div> -->
                  <div class='form-group'>
                    <label for="email">Email</label>
                    <input required id="email" class="form-control" type="email"
                    v-model="user.email"/>
                  </div>
                  <div class='form-group'>
                    <label for="password">Password</label>
                    <input required id="password" class="form-control" type="text"
                    v-model="user.password"/>
                  </div>
                  <div class='form-group'>
                      <h4>Store Data?</h4>
                      <label for="Yes">
                            <input  required
                                    v-model="user.storeDataPreference"
                                    type="radio"
                                    id="Yes"
                                    value="Yes"> Yes
                        </label>
                        <label for="No">
                            <input  required
                                    v-model="user.storeDataPreference"
                                    type="radio"
                                    id="No"
                                    value="No"> No
                        </label>
                  </div>
                  <button type='reset' class="btn btn-default">Reset</button>
                  <button type='submit' class="btn btn-primary">Submit</button>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <!-- Exercise 3 -->
                <!-- Edit the Example from above and create a custom "Full Name" Control -->
                <!-- which still holds the First Name and Last Name Input Field -->
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ user.fullName}}</p>
                        <p>Mail: {{ user.email }}</p>
                        <p>Password: {{ user.password }}</p>
                        <p>Store in Database?: {{ user.storeDataPreference }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FullName from './FullName.vue';
    export default {
        data: function() {
            return {
                user: {
                    fullName: 'Daniel Carter',
                    email: '',
                    password:'',
                    storeDataPreference: 'No'
                },
                isSubmitted: false
            }
        },
        methods: {
            submitForm() {
                this.isSubmitted = true;
                console.log(this.user);
            }
        },
        components: {
            fullName: FullName
        }
    }
</script>
