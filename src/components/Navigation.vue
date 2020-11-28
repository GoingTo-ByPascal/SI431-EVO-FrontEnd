<template>
    <nav id="nav">

        <router-link :to="{name:'home'}" class="router-link-active home" style="padding-bottom: 8px">
            <v-img width="112px"
                   src="https://cdn.discordapp.com/attachments/517806958884159488/729092470041739385/logoXL.png"/>
        </router-link>

        <ul class="list">
            <li>
                <router-link :to="{name:'search'}">
                    <!--            <v-icon class="ico" color="white">mdi-magnify</v-icon> -->
                    Search
                </router-link>
            </li>

            <li>
                <router-link :to="{name:'explore'}">Explore</router-link>
            </li>

            <li v-if="currentUser">
                <router-link  :to="{name:'favorite'}">Favorite</router-link>
            </li>

            <li v-if="currentUser">
                <router-link  :to="{name:'profile'}">
                    <v-icon color="white">mdi-account-circle</v-icon>
                </router-link>
            </li>

            <li v-if="!currentUser">
                <router-link  :to="{name:'register'}">SignUp</router-link>
            </li>

            <li v-if="!currentUser">
                <router-link  :to="{name:'login'}">LogIn</router-link>
            </li>
        </ul>
        <div id="men">
            <v-menu rounded="lg" offset-y class="ma-0 pa-0">
                <template v-slot:activator="{ attrs, on }" >
                    <v-btn class="ma-0" v-bind="attrs" v-on="on" text>
                        <v-icon>mdi-menu</v-icon>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item link>
                        <router-link :to="{name:'help'}">Help</router-link>
                    </v-list-item>

                    <v-list-item link>
                        <router-link :to="{name:'terms'}">Terms</router-link>
                    </v-list-item>

                    <v-list-item link>
                        <router-link :to="{name:'error404'}">
                            <v-icon color="#e68571" style="background-color: whitesmoke; border-radius: 5px">
                                mdi-alert-circle
                            </v-icon>
                        </router-link>
                    </v-list-item>

                    <v-list-item link>
                        <a href @click.prevent="logout">
                            <v-icon>mdi-logout</v-icon>
                            Sign Out
                        </a>
                    </v-list-item>
                </v-list>
            </v-menu>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Navigation",
         // computed: {
         //     currentUser() {
         //         return this.$store.state.auth.user;
         //     }
         // },
        // methods: {
        //     logout() {
        //         this.$store.dispatch('auth/logout');
        //         this.$router.push('/');
        //     }
        // }
    }

</script>

<style scoped>
    .list {
        display: flex;
        list-style: none;
        justify-content: space-around;
        width: 23%;
    }

    #nav {
        display: flex;
        justify-content: space-around;
        height: 54px;
        padding-top: 14px;
        padding-bottom: 14px;

        background: rgb(174, 233, 238);
        background: linear-gradient(90deg, rgba(174, 233, 238, 1) 0%, rgba(148, 187, 233, 1) 100%);

        width: 100%;
    }

    #nav a {
        text-decoration: none;
        color: #ffffff;
    }

    #nav a.router-link-exact-active {
        font-weight: bold;
        color: #262626;
        margin-bottom: -15px;
        border-bottom: solid 3px #000000;
    }

    @media (min-width: 1280px) {
        .home {
            margin-left: 4%;
        }

    }

    @media (min-width: 1440px) {
        .home {
            margin-left: 7%;
        }
    }

    @media (min-width: 1800px) {
        .home {
            margin-left: 17%;
        }
    }
    
    @media (max-width: 600px) {
        
    }
</style>
