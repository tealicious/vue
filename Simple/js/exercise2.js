new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
          alert: function() {
            alert(this.value);
          },
          storeValue: function($event) {
            this.value = $event.target.value;
          }
        }
    });
