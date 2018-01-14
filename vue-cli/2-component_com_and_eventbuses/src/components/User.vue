<template>
  <div class="component">
    <h1>The User Component</h1>
    <button @click="changeName" class="btn btn-primary">Change Name</button>
    <button @click="resetAge" class="btn btn-primary">Reset Age</button>
    <hr>
    <p>Name is: {{name}}</p>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail :age="age" :name="name" @resetName="name=$event"></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit :age="age" :name="name" :resetFn="resetUserName" @editAge="age=$event"></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";

export default {
  data() {
    return {
      name: "Daniel",
      age: 31,
      user: {
        name: "Daniel",
        age: 31
      }
    };
  },
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  },
  methods: {
    changeName() {
      this.name = "User";
      this.user.name = "User";
    },
    resetUserName() {
      this.name = "Daniel";
      this.user.name = "Daniel";
    },
    resetAge() {
      this.age = 31;
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>
