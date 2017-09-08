export const computedMixin = {
data: function() {
     return {
       text: 'ayo dis dat boy',
       text2: 'datBoy'
     }
   },
   computed: {
     computedReverseMe() {
       return this.text.split("").reverse().join("");
       },
       computedAppendNumChar() {
         var length = this.text2.length.toString();
         var newString = this.text2 + " (" + length + ")";
         return newString;
       }
   }
};
