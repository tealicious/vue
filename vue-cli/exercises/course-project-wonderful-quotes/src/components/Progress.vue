<template>
    <div>
        <h4>Quotes Added</h4>
        <div class="progress">
            <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" :style="length">
                <span class="sr-only">{{quotesLength}} / 10</span>
                {{quotesLength}} / 10
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    quotesLength: Number
  },
  computed: {
    length() {
      let lengthStyle = new Object();
      lengthStyle.width = `${this.quotesLength * 10}%`;
      return lengthStyle;
    }
  }
};
</script>