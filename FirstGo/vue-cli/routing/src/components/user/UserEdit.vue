<template>
    <div>
        <h3>Edit the User</h3>
        <p>Locale: {{ $route.query.locale }}</p>
        <p>Analytics: {{ $route.query.q }}</p>
        <div style="height:100vh"></div>
        <button class="btn btn-primary" @click="confirmed = true">Confirm</button>
        <br />
        <br />
        <p id="data"> Some Extra Data </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            confirmed: false
        }
    },
    beforeRouteLeave(to, from, next) { // user can only leave if some condition is met
        if (this.confirmed) {
            next();
        } else {
            if(confirm('Are you sure tho?')) {
                next();
            } else {
                next(false);
            }
        }
    }
}
</script>
