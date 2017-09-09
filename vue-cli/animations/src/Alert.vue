<template>
  <div>
    <transition :name="alertAnimation" @after-leave="afterLeave">
          <div v-if="alert.toggle"
               class='alert alert-dismissable'
               :class="alert.type"
                >
              {{ alert.animation }}
              <button type="button" class="close" @click="alert.toggle = false; countAlerts()"
              >&times;</button>
          </div>
    </transition>
  </div>
</template>
<script>
export default {
  props: [ "alertAnimation", "alert", "countAlerts", "afterLeave"]
}
</script>
