<template>
    <v-flex xs12 sm6 lg4>
        <v-card>
            <v-layout row style="margin:0;">
                <v-img src="https://source.unsplash.com/random/200x200" height="150px" width="150px" max-width="150px" contain ratio="1"></v-img>
                <v-flex>
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">{{stock.name}}</h3>
                            <div>${{stock.price}}</div>
                        </div>
                    </v-card-title>
                </v-flex>
            </v-layout>
            <v-divider light></v-divider>
            <v-card-actions class="pl-3 pr-3">
                <v-form ref="form" v-model="valid" lazy-validation class="flex-form">
                    <v-text-field v-model="quantity" type="number" label="Quantity" :color="color" :rules="quantityRules"></v-text-field>
                    <v-spacer></v-spacer>
                    <v-btn flat @click="clear">Clear</v-btn>
                    <v-btn :color="color" @click="buyStock">Buy</v-btn>
                </v-form>
            </v-card-actions>
        </v-card>
    </v-flex>
</template>
<script>
export default {
  props: ["stock"],
  data() {
    return {
      valid: true,
      quantityRules: [
        v => !!v || "Quantity is required",
        v => v > 0 || "Quantity must be greater than 0"
      ],
      quantity: null,
      color: "green"
    };
  },
  methods: {
    buyStock() {
      if (this.$refs.form.validate()) {
        const order = {
          id: this.stock.id,
          name: this.stock.name,
          price: this.stock.price
        };
        console.log(order);
        this.clear();
      }
    },
    clear() {
      this.$refs.form.reset();
      this.quantity = null;
    }
  }
};
</script>
<style >
.headline {
  text-transform: uppercase;
}
.flex-form {
  width: 100%;
  display: flex;
  align-items: center;
}
</style>