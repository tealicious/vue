<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click='changeName'>Toggle Name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail :myName="name" counter='counter' @nameWasReset="name = $event"></app-user-detail>
                <!--a prop must be given to the component's template element to be passed down. the v-bound attribute ':myName=' is named by the child tempalte's prop, while the value refers to the data returned by this component's data set ('name')-->
                <app-user-detail></app-user-detail>
                <!-- example of the same template not being passed the :myName prop and given a default data object. This defualt object can not be affected by the toggle name method -->
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
          name: 'Max',
          counter: 1
        };
      },
      methods: {
        changeName() {
          this.counter++;
          if (this.counter % 2 == 0){
            this.name = 'Anna';
          } else {
            this.name = 'Max';
          }
          // how do i get the name from the parent comnponent to the child so that it can bee accessed and changed???
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
</style>
