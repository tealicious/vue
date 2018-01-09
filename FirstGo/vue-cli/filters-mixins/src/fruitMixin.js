export const fruitMixin = {
    data: function() {
          return {
            fruits: ['apple', 'orange', 'banana', 'mango', 'melon'],
            filterText: ''
          }
      },
      computed: {
          filteredFruits() {
              return this.fruits.filter((element)=>{
                  return element.match(this.filterText);
              });
          }
      },
      created() {
        console.log('created');
      }
  };
