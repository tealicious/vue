<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li class="list-group-item" v-if="server">
                Server #{{ server.index }} | Status: {{server.status}}
                <div class="form-group">
                    Choose status:
                    <select v-model="selected" class="form-control">
                        <option disabled value="">Please select one</option>
                        <option>Normal</option>
                        <option>Critical</option>
                        <option>Hold</option>
                    </select>
                </div>
                <button class="btn btn-xs btn-primary" @click="changeStatus">Change Status</button>
            </li>
            <li class="list-group-item" v-else>
                <p>Please select a server.</p>
            </li>
        </ul>
    </div>
</template>

<script>
import { eventBus } from "../../main.js";
export default {
  created() {
    eventBus.$on("enqueueServer", data => {
      this.server = data;
      this.selected = "";
    });
  },
  data() {
    return {
      server: null,
      selected: ""
    };
  },
  methods: {
    changeStatus() {
      if (this.server.status == this.selected || this.selected == "") {
        alert("Please choose a different status than the current one");
        this.selected = "";
      } else {
        this.server.status = this.selected;
      }
    }
  }
};
</script>

<style>

</style>
