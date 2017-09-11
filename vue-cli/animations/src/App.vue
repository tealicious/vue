<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr />
                <select v-model="alertAnimation" class="form-control">
                    <option value="fade" >Fade</option>
                    <option value="slide-right">Slide Right</option>
                    <option value="slide-left">Slide Left</option>
                </select>
                <br />
                <button @click="showComponentAlerts" class='btn btn-primary'>Show Component Alerts</button>
                <button @click="showAlerts" class='btn btn-warning'>Show Native Alerts</button>
                <button @click="showAllAlerts" class='btn btn-info'>Show All Alerts</button>
                <br />
                <hr />
                <app-alert
                v-for="alert in alerts"
                :alert="alert"
                :alertAnimation = "alertAnimation"
                :countAlerts = "countAlerts">
                </app-alert>
                <transition
                v-for="alert in nativeAlerts"
                :name="alertAnimation">
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
                    <div v-if="dismissToggle" class='groupedAnimations'>
                        <hr  />
                        <button
                        @click="dismissAlerts" class='btn btn-danger'>Dismiss All Alerts</button>
                    </div>
                </transition>
                <br />
                <transition :name="alertAnimation" mode="in-out" appear>
                        <div   class="alert alert-info" v-if="!dismissToggle" key="info">What will I be?</div>
                        <div   class="alert alert-danger" v-else key="danger">This will clear all the itmes!</div>
                </transition>
                <hr />
                <br />
                <button @click="grow = !grow" class='btn btn-primary'>Toggle Vue</button>
                <transition
                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter"
                @before-leave="beforeLeave"
                @leave="leave"
                @after-leave="afterLeave"
                :css="false">
                    <div class='flex-div' v-if="grow">
                        <img  src='./assets/logo.png'/>
                    </div>
                </transition>
                <hr />
                <br />
                <button @click="selectedComponent == 'successAlert' ? selectedComponent = 'dangerAlert' : selectedComponent = 'successAlert';" class='btn btn-primary'>Toggle Alert</button>
                <br />
                <br />
                <transition name="fade" mode="out-in">
                    <component :is="selectedComponent"></component>
                </transition>
                <hr />
                <br />
                <ul class="list-group">
                    <li v-for="number in numbers" class="list-group-item">{{ number }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import Alert from './Alert.vue'
    import DangerAlert from './DangerAlert.vue'
    import SuccessAlert from './SuccessAlert.vue'
    export default {
        data() {
            return {
                numbers: [1,2,3,4,5],
                selectedComponent: 'successAlert',
                grow: true,
                alertAnimation: 'fade',
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
                this.alerts.forEach((alert)=> {
                    alert.toggle = false;
                })
                this.dismissToggle = true;
            },
            showComponentAlerts() {
                this.alerts.forEach((alert)=> {
                    alert.toggle = true;
                })
                this.nativeAlerts.forEach((alert)=> {
                    alert.toggle = false;
                })
                this.dismissToggle = true;
            },
            showAllAlerts() {
                this.alerts.forEach((alert)=> {
                    alert.toggle = true;
                })
                this.nativeAlerts.forEach((alert)=> {
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
            },
            beforeEnter(el) {
                this.elementHeight = 100;
                el.style.height = this.elementHeight + 'px';
            },
            enter(el, done) {
                let round = 1;
                const interval = setInterval(()=> {
                    el.style.height = (this.elementHeight + round * 10) + 'px';
                    round++;
                    if(round > 20) {
                        clearInterval(interval);
                        done();
                    }
                }, 20);
            },
            afterEnter(el) {

            },
            beforeLeave(el) {
                this.elementHeight = 300;
                el.style.height = this.elementHeight + 'px';
            },
            leave(el, done){
                let round = 1;
                const interval = setInterval(()=> {
                    el.style.height = (this.elementHeight - round * 10) + 'px';
                    round++;
                    if(round > 20) {
                        clearInterval(interval);
                        done();
                    }
                }, 20);
            },
            afterLeave(el) {
            }
        },
        components: {
            appAlert: Alert,
            dangerAlert: DangerAlert,
            successAlert: SuccessAlert
        }
    }
</script>

<style>
    body {
        overflow-X:hidden;
    }
    .alert-dismissable, .groupedAnimations, div {
        transition:all .5s ease;
    }
    .fade-enter {
        opacity:0;
        min-height:0;
    }
    .fade-leave-active {
        opacity:0;
        min-height:0;
    }
    .slide-right-enter{
        opacity:0;
        transform:translateX(-50vw);
    }
    .slide-right-leave-active{
        transform:translateX(50vw);
        opacity:0;
    }
    .slide-left-enter{
        opacity:0;
        transform:translateX(50vw);
    }
    .slide-left-leave-active{
        transform:translateX(-50vw);
        opacity:0;
    }
    .flex-div {
        display:flex;
        height:300px;
    }
    img {
    margin:auto;
    height:100%;
    }
</style>
