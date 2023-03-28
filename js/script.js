const {createApp} = Vue;

createApp({
    data() {
        return {
            message: "Ciao sono un messaggio scritto con Vue",
        };
    }
}).mount('#app')