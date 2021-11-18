<template>
<nav class="header">
    <div class="innerHeader">
        <div class="logoContainer">
            <div class="headerLogo">
                <img src="../public/assets/logo.png">
            </div>
            <a class="title" href="/">MASCAAMIGABLE</a>
        </div>
        <div class="buttons">
            <router-link class="button" to="/"> Inicio </router-link>
            <router-link class="button" to="/buy"> Comprar </router-link>
            <router-link class="button" to="/contact"> Contáctanos </router-link>
        </div>
        <button class="menuBtn" @click="toggleMenu()">
            <img src="../public/assets/menuadiagdasdas.png"/>
        </button>
    </div>
</nav>
<nav class="sideMenu" :class="{
    'oppened': oppenedMenu,
    'closed': !oppenedMenu
}">
    <div class="sTitle">MASCAAMIGABLE</div>
    <div class="sBtns">
        <router-link class="sButton" to="/"> Inicio </router-link>
        <router-link class="sButton" to="/buy"> Comprar </router-link>
        <router-link class="sButton" to="/contact"> Contáctanos </router-link>
    </div>
</nav>

<router-view/>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
            oppenedMenu: false
        }
    },
    methods: {
        toggleMenu() {
            if(this.oppenedMenu == true) this.oppenedMenu = false
            else this.oppenedMenu = true
        }
    }
})
</script>


<style>
    @import "../public/css/main.css";
</style>