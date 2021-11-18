<template>
    <div class="aBody">    
        <div class="thisPanel">
            <span class="text">Contáctanos</span>
            <input class="input" placeholder="Nombre y Apellidos" type="text" v-model="nombre"/>
            <input class="input" placeholder="Dirección de Correo Electrónico" type="text" v-model="correo"/>
            <input class="input" placeholder="Asunto" type="text" v-model="asunto"/>
            <textarea class="textarea" placeholder="Contenido" cols="50" rows="10" v-model="contenido"/>
            <button class="coolBtn" @click="sendData()"> Enviar </button>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import axios from 'axios'

export default defineComponent({
    name: 'Contact',
    data() {
        return {
            nombre: '',
            correo: '',
            asunto: '',
            contenido: ''

            
        }
    },
    methods: {
        async sendData() {
            if(this.nombre == '' || this.correo == '' || this.asunto == '' || this.contenido == '') return window.alert('Por favor completa todos los campos')

            if(!this.correo.includes('@')) return window.alert('Ese no es un correo electrónico válido.')

            await axios.post('https://discord.com/api/webhooks/910637514858049616/pXzRug_FL-cDiODU8RTM5RvvR_On64tqtBRFj8p3nPlUU-y6FTE9t9drg3caUnPmDKwM', { content: 'De: ' + this.nombre + '(' + this.correo + ')' + '\nAsunto: ' + this.asunto + '\n' + this.contenido })
        }
    }
})
</script>
<style>
    @import "../../public/css/main.css";

    .aBody {
        width: 100vw;
        height: 100vh;
        background-color: rgb(0, 194, 0);
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        padding-top: 10vh;
        align-items: center;
        justify-content: center;
    }

    .thisPanel {
        border-radius: 10vh;
        width: 60vw;
        height: 70vh;
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 1vh;
        box-sizing: border-box;
        padding-top: 10vh;
        padding-bottom: 10vh;
        padding-left: 5vw;
        padding-right: 5vw;
    }

    .text {
        font-weight: 600;
        font-size: 5vh;
    }

    .input {
        height: 3vh;
        width: 60%;
        border: 2px black solid;
        border-radius: 5px;
    }

    .textarea {
        height: 100%;
        width: 100%;
        border: 2px black solid;
        border-radius: 5px; 
    }

    .coolBtn {
        border: none;
        background-color: rgb(0, 192, 0);
        border-radius: 3vh;
        width: 15vh;
        height: 15vh;
        font-weight: 600;
        font-size: 3vh;
    }
    .coolBtn:hover {
        background-color: rgb(0, 146, 0);
    }
</style>