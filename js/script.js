const {createApp} = Vue;

createApp({
    data() {
        return {
            headingText: "Ciao sono un messaggio scritto con Vue",
            headingClass: "red",
            imgSrc: "img/01.jpeg",
            imgAlt: "Thayland GEZI"
        }
    },
    methods: {
        changeColor() {
            if (this.headingClass === "red") {
                this.headingClass = "blue"
            } else if (this.headingClass === "blue") {
                this.headingClass = "green"
            } else {
                this.headingClass = "red"
            }
        }
    }
}).mount('#app');