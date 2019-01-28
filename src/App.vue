<template>
    <v-app dark>
        <message></message>
        <v-content>
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
    import Message from './components/Message'

    export default {
        components: {
            Message
        }
    }
</script>

<style lang="stylus">
    .application
        font-family Roboto, Noto Sans SC, sans-serif

    @font-face {
        font-family: proxima-nova-soft;
        src: url(https://use.typekit.net/af/357d3c/00000000000000000001743c/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3) format("woff2"), url(https://use.typekit.net/af/357d3c/00000000000000000001743c/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3) format("woff"), url(https://use.typekit.net/af/357d3c/00000000000000000001743c/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3) format("opentype");
        font-weight: 400;
        font-style: normal;
    }
</style>
