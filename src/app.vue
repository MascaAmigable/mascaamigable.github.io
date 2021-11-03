<template>
    <div class="header">
        <div class="innerHeader">
            <div class="logoContainer">
                <div class="headerLogo">
                    <img class="image" src="../public/assets/logo.png">
                </div>
                <a class="title" href="/">MASCAAMIGABLE</a>
            </div>
        <div class="buttons">
            <router-link class="button" to="/">Home</router-link>
            <router-link class="button" to="/buy"> Buy </router-link>
        </div>
    </div>
</div>
<router-view/>
</template>
<style>
    @import "../public/css/main.css"
</style>