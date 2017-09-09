<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr />
                <button @click="showComponentAlerts" class='btn btn-primary'>Show Component Alerts</button>
                <button @click="showAlerts" class='btn btn-warning'>Show Native Alerts</button>
                <br />
                <hr />
                <app-alert
                :dismissToggle = "dismissToggle"
                :countAlerts = "countAlerts"
                :alerts = "alerts"
                v-for="alert in alerts"
                :alert = "alert">
                </app-alert>
                <transition
                v-for="alert in nativeAlerts"
                :name="alert.animation"
                appear>
                      <div v-if="alert.toggle"
                           class='alert alert-dismissable'
                           :class="alert.type"
                            >
                          {{ alert.animation }}
                          <button type="button" class="close" @click="alert.toggle = !alert.toggle; countAlerts()"
                          >&times;</button>
                      </div>
                </transition>
                <transition name="fade">
                    <div v-if="dismissToggle">
                        <hr  />
                        <button
                        @click="dismissAlerts" class='btn btn-danger'>Dismiss All Alerts</button>
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
                dismissToggle: false,
                count:0,
                nativeAlerts: [
                    {id: 1, animation: "fade", toggle: false, type: "alert-info"},
                    {id: 2, animation: "slide-right", toggle: false, type: "alert-warning"},
                    {id: 3, animation: "slide-left", toggle: false, type: "alert-info"}
                ],
                alerts: [
                    {id: 1, animation: "fade", toggle: false, type: "alert-success"},
                    {id: 2, animation: "slide-right", toggle: false, type: "alert-danger"},
                    {id: 3, animation: "slide-left", toggle: false, type: "alert-success"}
                ]
            }
        },
        methods: {
            showAlerts() {
                this.nativeAlerts.forEach((alert)=> {
                    alert.toggle = true;
                })
                this.dismissToggle = true;
            },
            showComponentAlerts() {
                this.alerts.forEach((alert)=> {
                    alert.toggle = true;
                })
                this.dismissToggle = true;
            },
            dismissAlerts() {
                this.alerts.forEach((alert)=> {
                    alert.toggle = false;
                })
                this.nativeAlerts.forEach((alert)=> {
                    alert.toggle = false;
                })
                this.dismissToggle = false;
            },
            countAlerts() {
                var allAlerts = this.alerts.concat(this.nativeAlerts);
                var numAlerts = allAlerts.reduce(function (n, alert) {
                    return n + (alert.toggle == true);
                }, 0);
                if (numAlerts <= 0) {
                    this.dismissToggle = false;
                }
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
    .alert-dismissable, div {
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
