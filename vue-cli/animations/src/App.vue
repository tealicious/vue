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
                <button class='btn btn-primary' @click="addItem">Add Item</button>
                <br />
                <br />
                <ul class="list-group">
                    <transition-group :name="alertAnimation" >
                        <li
                            class="list-group-item"
                            v-for="(number, index) in numbers"
                            @click="removeItem(index)"
                            :key="number"
                            style="cursor:pointer;">{{ number }}
                        </li>
                    </transition-group>
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
            removeItem(index) {
                this.numbers.splice(index, 1);
                //remove the item at it's index location and remove 1 item
            },
            addItem() {
                const pos = Math.floor(Math.random() * this.numbers.length);
                // get a new, random index that will fit in the original length of numbers
                this.numbers.splice(pos, 0, this.numbers.length + 1);
                // splice can also be used to add:
                    // 1. pass the pos var to give an index location,
                    // 2. if deleteCount is 0 you can and MUSt pass a new element to be added or things get fucky
                    // 3. add an index position at the end of numbers.length
            },
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
    .alert-dismissable, .groupedAnimations, div, li {
        transition:all .5s ease;
    }
        /*TRANSITION ANIMATIONS*/
        .fade-enter, .fade-leave-to {
            /* set tranisition styles on enter and leave-to*/
            opacity:0;
        }
        .fade-enter {
            transform:scale(1.1);
        }
        .fade-enter-active, .fade-leave-active {
            transition:all 300ms cubic-bezier(0.68, -0.1, 0.265, 1.55);
            /* set beziers on active classes */
        }
    .slide-right-enter{
        opacity:0;
        transform:translateX(-50vw);
        transition:all .5s ease;
    }
    .slide-right-leave-active{
        transform:translateX(50vw);
        opacity:0;
        transition:all .5s ease;
        position:absolute;
    }
    .slide-left-enter{
        opacity:0;
        transform:translateX(50vw);
        transition:all .5s ease;
    }
    .slide-left-leave-active{
        transform:translateX(-50vw);
        opacity:0;
        transition:all .5s ease;
        position:absolute;
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
