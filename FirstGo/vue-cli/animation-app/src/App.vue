<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1 class="text-center">The Super Quiz</h1>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
              <transition name="rotate" mode="out-in">
                <component :is="mode" @answered="answered($event)" @confirmed="mode = 'app-question'"></component>
              </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import Question from './components/Question.vue';
    import Answer from './components/Answer.vue';

    export default {
        data() {
            return {
                mode: 'app-question'
            }
        },
        methods: {
          answered(isCorrect) {
              if (isCorrect) {
                  this.mode = 'app-answer';
              } else {
                  this.mode = 'app-question';
                  alert('Wrong, try again!');
              }
          }
        },
        components: {
            appQuestion: Question,
            appAnswer: Answer
        }
    }
</script>
<style>
    /*TRANSITION ANIMATIONS*/
    .rotate-enter-active {
      transition: all .3s ease;
      /* set beziers on active classes */
    }
    .rotate-leave-active {
      transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
      /* set beziers on active classes */
    }
    .rotate-enter, .rotate-leave-to
    /* 2.1.8 and up - set tranisitions on enter and leave-to*/ {
      transform: rotateY(90deg);
    }

    /*or use animations*/
    .animation-example-enter-active {
        animation: flip-in  0.5s ease-out forwards;
    }
    .animation-example-leave-active {
        animation: flip-out 0.5s ease-out forwards;
    }
    @keyframes flip-out {
        from {
            transform: rotateY(0deg);
        }
        to {
            transform: rotateY(90deg);
        }
    }
    @keyframes flip-in {
        from {
            transform: rotateY(90deg);
        }
        to {
            transform: rotateY(0deg);
        }
    }
</style>
