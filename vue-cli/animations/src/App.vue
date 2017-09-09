<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr />
                <button @click="showAlerts" class='btn btn-primary'>Show Native Alerts</button>
                <button @click="showComponentAlerts" class='btn btn-warning'>Show Component Alerts</button>
                <br />
                <br />
                <app-alert
                :toggles = "toggles"
                :alerts = "alerts"
                v-for="alert in alerts"
                :alert = "alert">
                </app-alert>
                <transition
                v-for="alert in nativeAlerts"
                :name="alert.animation">
                      <div v-if="alert.toggle"
                           class='alert alert-dismissable'
                           :class="alert.type"
                            >
                          {{ alert.animation }}
                          <button type="button" class="close" @click="alert.toggle = !alert.toggle"
                          >&times;</button>
                      </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import Alert from './Alert.vue'
    export default {
        data() {
            return {
                nativeAlerts: [
                    {id: 1, animation: "fade", toggle: false, type: "alert-warning"},
                    {id: 2, animation: "slide-right", toggle: false, type: "alert-danger"},
                    {id: 3, animation: "slide-left", toggle: false, type: "alert-info"}
                ],
                alerts: [
                    {id: 1, animation: "fade", toggle: false, type: "alert-warning"},
                    {id: 2, animation: "slide-right", toggle: false, type: "alert-danger"},
                    {id: 3, animation: "slide-left", toggle: false, type: "alert-info"}
                ]
            }
        },
        methods: {
            showAlerts() {
                this.nativeAlerts.forEach((alert)=> {
                    alert.toggle = true;
                })
            },
            showComponentAlerts() {
                this.alerts.forEach((alert)=> {
                    alert.toggle = true;
                })
            }
        },
        components: {
            appAlert: Alert
        }
    }
</script>

<style>
    body {
        overflow-X:hidden;
    }
    .alert-dismissable {
        transition:all .5s ease;
    }
    .fade-enter {
        opacity:0;
    }
    .fade-leave-active {
        opacity:0;
    }
    .slide-right-enter{
        opacity:0;
        transform:translateX(-50vw);
    }
    .slide-right-leave-active{
        transform:translateX(-50vw);
        opacity:0;
    }
    .slide-left-enter{
        opacity:0;
        transform:translateX(50vw);
    }
    .slide-left-leave-active{
        transform:translateX(50vw);
        opacity:0;
    }
</style>
