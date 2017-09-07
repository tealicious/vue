<template>
    <div>
        <!-- slots let us injuect html into the child component -->
        <button @click='selectedComponent = "wonderfulQuote"'>Quote</button>
        <button @click='selectedComponent = "appAuthor"'>Author</button>
        <button @click='selectedComponent = "appNew"'>New</button>
        <hr />
        <p>{{selectedComponent}}</p>
       <!-- <wonderful-quote>
           <h4 slot='title'>{{quoteTitle}}</h4>
           <span slot='subtitle'>Hey there!</span>
           <p slot='content'>I am a very fine, named, slotted quote!</p>
           <p>I am a very fine, slotted, unnamed, default quote!</p>
       </wonderful-quote> -->
       <keep-alive>
           <component :is="selectedComponent">
               <h4 slot='title'>{{quoteTitle}}</h4>
               <span slot='subtitle'>- {{quoteAuthor}}</span>
               <p slot='content'>I am a very fine, named, slotted quote!</p>
               <p>I am a very fine, slotted, unnamed, default quote!</p>
           </component>
       </keep-alive>
       <p>slotted elements receive styling from the component they are pushed into</p>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';
    import Author from './components/Author.vue';
    import New from './components/New.vue';
    export default {
        data: function(){
                return {
                    quoteTitle: 'Revenge is a dish best served cold',
                    quoteAuthor: 'some Clingon',
                    selectedComponent: 'wonderfulQuote'
                }
        },
        components: {
          wonderfulQuote: Quote,
          appAuthor: Author,
          appNew: New
      }
    }
</script>

<style>
</style>
