const { createApp } = Vue

createApp({
    data() {
        return {
            emails: []
        }
    },
    methods: {
        getEmails() {
            console.log("Click")
        }
    }
}).mount("#app")