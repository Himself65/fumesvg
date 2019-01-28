<template>
    <v-container fluid fill-height>
        <v-toolbar app light color="red lighten-1">
            <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-toolbar-title>fumesvg</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn
                        flat
                        slot="activator"
                        class="btn-avatar"
                        size="40"
                        @click="dialog2 = true"
                >
                    <v-icon>settings</v-icon>
                    read me
                </v-btn>
                <v-btn
                        flat
                        slot="activator"
                        class="btn-avatar"
                        size="40"
                        @click="dialog3 = true"
                >
                    <v-icon>delete</v-icon>
                    删除本页
                </v-btn>
                <v-btn
                        dark
                        slot="activator"
                        class="btn-avatar"
                        size="40"
                        @click="btn_New"
                >
                    <v-icon>fiber_new</v-icon>
                    新建页
                </v-btn>
                <v-btn
                        dark
                        slot="activator"
                        class="btn-avatar"
                        size="40"
                        @click="btn_New2"
                >
                    <v-icon>file_copy</v-icon>
                    复制本页
                </v-btn>
                <v-btn
                        flat
                        slot="activator"
                        class="btn-avatar"
                        size="40"
                        @click="dialog4 = true"
                >
                    <v-icon>move_to_inbox</v-icon>
                    import
                </v-btn>
                <v-btn flat
                       slot="activator"
                       class="btn-avatar"
                       size="40"
                       @click="btn_ex"
                >
                    <v-icon>open_in_new</v-icon>
                    export
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-layout row wrap align-space-around>
            <v-flex class="md8 special_flex">
                <div id="svg_list">
                    <div id="selector_data_area">
                        <span class="selector_data"></span>
                        <span class="selector_data"></span>
                        <span class="selector_data"></span>
                    </div>
                </div>
            </v-flex>
            <v-flex class="md4">
                <v-layout row justify-center class="xs4">
                    <div class="ctrl_area">
                        <h1>Stage - {{ run.now_stage }}</h1>
                        <div class="btn_area">
                            <v-btn @click="btn_P">
                                <v-icon>fast_rewind</v-icon>
                                Prev
                            </v-btn>
                            <v-btn @click="btn_N">
                                <v-icon>fast_forward</v-icon>
                                Next
                            </v-btn>
                            <br>
                            <v-btn @click="btn_C">
                                <v-icon>radio_button_unchecked</v-icon>
                                circle
                            </v-btn>
                            <v-btn @click="btn_R">
                                <v-icon>check_box_outline_blank</v-icon>
                                Rect
                            </v-btn>
                            <v-btn @click="btn_T">
                                <v-icon>text_format</v-icon>
                                Text
                            </v-btn>
                            <br>
                        </div>
                        <v-form>
                            <v-container>
                                <v-layout>
                                    <v-flex
                                            xs12
                                            md4
                                    >
                                        <v-text-field
                                                v-model="input.var1"
                                                :counter="3"
                                                label="x/r/font_size"
                                        ></v-text-field>
                                    </v-flex>

                                    <v-flex
                                            xs12
                                            md4
                                    >
                                        <v-text-field
                                                v-model="input.var2"
                                                :counter="30"
                                                label="y/text"
                                        ></v-text-field>
                                    </v-flex>

                                    <v-flex
                                            xs12
                                            md4
                                    >
                                        <v-text-field
                                                v-model="input.var3"
                                                label="color"
                                        ></v-text-field>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-form>
                        <v-btn light class="yellow" @click="btn_update_script">update script</v-btn>
                        <v-btn light @click="btn_anime_play">
                            <v-icon>play_arrow</v-icon>
                        </v-btn>
                        <textarea class="code_area" v-model="input.script">

                        </textarea>
                    </div>
                </v-layout>
            </v-flex>
        </v-layout>
        <v-dialog v-model="dialog4" light persistent>
            <v-card>
                <v-card-title class="headline">粘贴导入信息(JSON)</v-card-title>
                <v-card-text>
                    <v-text-field v-model="input.import"></v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="red darken-1" flat @click="dialog4 = false">cancel</v-btn>
                    <v-btn color="red darken-1" flat @click="btn_im">继续</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog v-model="dialog3" light>
            <v-card>
                <v-card-title class="headline">这是一个有危险性的操作</v-card-title>
                <v-card-text>
                    那个页面会被销毁且这里没有回收站
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="red darken-1" flat @click="dialog3 = false">我再考虑</v-btn>
                    <v-btn color="red darken-1" flat @click="deletePage">继续</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog v-model="dialog2" light max-width="400">
            <v-card>
                <v-card-title class="headline">你在PC端吗？它被制作的时候只对PC用户考虑</v-card-title>
                <v-card-text>
                    如果是的话，再请你用Chrome/Firefox 浏览器打开这个页面，因为你可能需要 DevTool （浏览器开发者工具）的辅助。
                    如果你已经准备好了，在DevTool 的console 里，你可以看到更全面的相关资料。
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green darken-1" flat @click="dialog2 = false">I'm OK</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog v-model="dialog" light persistent>
            <v-card>
                <v-toolbar dense flat card>
                    <v-btn icon @click="playEnd">
                        <v-icon>close</v-icon>
                    </v-btn>
                    <v-toolbar-title>
                        动画演示
                    </v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn depressed @click="btn_iframe_play">
                        <v-icon>send</v-icon>
                    </v-btn>
                </v-toolbar>
                <div id="where_should_it_be_shown"></div>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
    import Run from '../plugins/fumesvg'

    export default {
        data() {
            return {
                input: {
                    script: null,
                    var1: null,
                    var2: null,
                    var3: null,
                    import:null,
                },
                selector: {
                    x: null,
                    y: null,
                    id: null,
                },
                run: null,
                dialog: false,
                dialog2: false,
                dialog3: false,
                dialog4: false,
            }
        },
        methods: {
            change_stage(n) {
                this.run.ChangeStage(n);
                this.input.script = this.run.NowStage().script;
            },
            btn_C() {
                this.run.NowStage().addElement2SVG(
                    'c', this.input.var1, null, this.input.var3
                );
            },
            btn_R() {
                this.run.NowStage().addElement2SVG(
                    'r', this.input.var1, this.input.var2, this.input.var3
                );
            },
            btn_T() {
                this.run.NowStage().addElement2SVG(
                    't', this.input.var1, this.input.var2, this.input.var3
                );
            },
            btn_P() {
                if (this.run.now_stage !== 0) this.change_stage(this.run.now_stage - 1)
            },
            btn_N() {
                if (this.run.now_stage !== this.run.stage.length - 1) this.change_stage(this.run.now_stage + 1)
            },
            btn_New() {
                this.run.createStage();
            },
            btn_New2() {
                this.run.createStage(1);
            },
            btn_im(){
                this.dialog4 = false;
                this.run.importMe(this.input.import);
            },
            btn_ex(){
                this.run.exportMe();
            },
            btn_update_script() {
                this.run.NowStage().script = this.input.script;
            },
            btn_anime_play() {
                this.dialog = true;
                this.run.NowStage().anime_start();
            },
            playEnd() {
                this.dialog = false;
                this.run.NowStage().anime_over();
            },
            btn_iframe_play() {
                this.run.NowStage().play();
            },
            deletePage(){
                this.dialog3 = false;
                this.run.deletePage();
            }
        },
        created() {
            this.run = new Run();
        },
        mounted() {
            this.run.createStage();
        },
    }
</script>
<style lang="stylus">
    svg
        background: #fff;
        display: none;

    .now_edit
        display: inline-flex;

    .code_area
        width: 100%;
        height: 200px;
        background: #000;
        overflow-y: scroll;
        font-size: 16px;
        letter-spacing: 2px;

    #svg_list
        display: inline-block
        position relative
        margin-bottom: 45px;

    .special_flex
        display flex
        justify-content center
        align-content center

    .v-dialog
        width auto

    span.selector_data
        width: 33.3%;
        display: block;
        height: 100%;
        color #000
        line-height: 30px;
        font-size: 16px;
        float: left;

    #selector_data_area
        position: absolute;
        bottom: -20px;
        height: 30px;
        background: #eee;
        width: 100%;

</style>
