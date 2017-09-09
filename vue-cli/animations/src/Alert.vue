<template>
  <div>
    <transition :name="alert.animation">
          <div v-if="alert.toggle"
               class='alert alert-dismissable'
               :class="alert.type"
                >
              {{ alert.animation }}
              <button type="button" class="close" @click="alert.toggle = !alert.toggle; countAlerts()"
              >&times;</button>
          </div>
    </transition>
  </div>
</template>
<script>
export default {
  props: ["alerts", "alert", "countAlerts", "dismissToggle"]
}
</script>
