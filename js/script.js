const {createApp} = Vue;

createApp({
    data() {
        return {
            headingText: "Ciao sono un messaggio scritto con Vue",
            headingClass: "red",
        }
    },
}).mount('#app');