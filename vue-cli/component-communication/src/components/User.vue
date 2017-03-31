<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click='changeName'>Change My Name</button>
        <button @click='resetName'>Reset My Name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail :myName='name'></app-user-detail>
                <!-- v-bind to the name property created in the child props object to pass the given data object to the child vue template-->
                <!-- Now that we've passed this prop into an object and created validation rules (IE this data type must be a string and can exist inside an array), if we pass an incorrect data type (I.E. a number), we will get a specific validation error, but the entire render won't fail. -->
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit></app-user-edit>
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
            name: 'tea'
          };
        },
        methods: {
          changeName() {
            this.name = 'Annna';
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
