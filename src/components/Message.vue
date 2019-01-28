<template>
    <div>
        <v-snackbar
                v-model="snackbar"
                :color="$store.state.snackbar.type"
                :top="true"
                :right="true"
                :timeout="$store.state.snackbar.timeout"
        >
            <v-icon color="white">{{ $store.state.snackbar.type }}</v-icon>
            {{ $store.state.snackbar.message }}
            <v-btn icon>
                <v-icon>right</v-icon>
            </v-btn>
        </v-snackbar>
        <v-dialog
                v-model="$store.state.dialog_loading"
                hide-overlay
                persistent
                width="300"
        >
            <v-card
                    color="primary"
                    dark
            >
                <v-card-text>
                    Loading...
                    <v-progress-linear
                            indeterminate
                            color="white"
                            class="mb-0"
                    ></v-progress-linear>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    export default {
        computed: {
            snackbar: {
                get() {
                    return this.$store.state.snackbar.show
                },
                set(v) {
                    this.$store.commit('message', {show: v})
                }
            }
        }
    }
</script>
