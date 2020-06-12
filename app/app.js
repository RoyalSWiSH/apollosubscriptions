import Vue from "nativescript-vue";
import apolloProvider from "./apolloProvider"
import Home from "./components/Home";

new Vue({
    apolloProvider,
    render: h => h('frame', [h(Home)]),
}).$start();
