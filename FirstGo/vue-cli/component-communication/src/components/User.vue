<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click='changeName'>Change My Name</button>
        <p>name: {{name}}</p>
        <p>age: {{age}}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail
                :myName='name'
                @nameWasReset="name = $event"
                :resetFn="resetName"
                :userAge='age'
                @ageWasEdited="age = $event"></app-user-detail>
                <!-- v-bind to the name property created in the child props object to pass the given data object to the child vue template-->
                <!-- Now that we've passed this prop into an object and created validation rules (IE this data type must be a string and can exist inside an array), if we pass an incorrect data type (I.E. a number), we will get a specific validation error, but the entire render won't fail. -->
                <!-- the event prop come up from the child and lets us pair a child data change to it's parent -->
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit
                :userAge='age'
                @ageWasEdited="age = $event"></app-user-edit>
                <!-- pass the age data object as a prop to be used in children -->
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function() {
          return {
            name: 'tea',
            age: 27
          };
        },
        methods: {
          changeName() {
            this.name = 'Annna';
          },
          resetName() {
            this.name = 'tea';
          }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
    h1, p {
      text-align:center;
    }
</style>
