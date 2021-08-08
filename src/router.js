import VueRouter from "vue-router";
import Home from './components/Home.vue';
import Movie from './components/Movie.vue';
import Actors from './components/actors/Actors.vue';
import ActorDetails from './components/actors/ActorDetails.vue'

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/movie/:id",
            name: "movie",
            component: Movie
        },
        {
            path: "/actors",
            name:"actors",
            component: Actors
        },
        {
            path: "/actor/:id",
            name:"actorDetails",
            component: ActorDetails
        }
    ]
})

export default router