<template>
    <v-container>
        <div class="search">
            <h1>Search</h1>
        </div>

        <v-row style="background-color: white; border: solid 0.5px #c6c6c6; border-radius: 5px; max-height: 390px"
               class="mx-1">
            <v-col cols="12" xs="12">
                <v-row>
                    <v-col id="maps" class="box" cols="12" xs="12" md="5"
                           style="border: none; height: 370px">
                        <iframe style="border: none" width="100%" height="100%"
                                src="https://api.maptiler.com/maps/streets/?key=URlXr2uskGkVWPQ2ClA8#10.9/-12.05651/-77.02984"></iframe>
                    </v-col>

                    <v-col class="filt" cols="6" xs="6" md="2" style="border-right: solid 1px #dedede;">
                        <p id="countrybox" class="filter">
                            COUNTRY</p>

                        <v-simple-table colo
                                        class="ma-0;"
                                        :dense="dense"
                                        :fixed-header="fixedHeader"
                                        :height="height"
                                        style="color: #4f4f4f;"
                        >
                            <template v-slot:default>

                                <tbody>
                                <tr v-for="item in countries" :key="item.id" @click="selectSource(item)">
                                    <td style="font-size: 13px"> {{ item.fullName }}</td>
                                </tr>

                                </tbody>
                            </template>
                        </v-simple-table>
                    </v-col>

                    <v-col cols="6" xs="6" md="2" class="filt">
                        <p id="citybox" class="filter">
                            CITY</p>
                        <v-simple-table
                                class="ma-0;"
                                :dense="dense"
                                :fixed-header="fixedHeader"
                                :height="height"
                                style="color: #4f4f4f"
                        >
                            <template v-slot:default>

                                <tbody>
                                <tr v-for="item in cities" :key="item.name" @click="selectSource(item)">
                                    <td style="font-size: 13px">{{ item.name }}</td>
                                </tr>

                                </tbody>
                            </template>
                        </v-simple-table>
                    </v-col>

                    <v-col cols="12" xs="12" md="3" class="filt" style="border-left: solid 1px #dedede;">
                        <p class="filter" id="placebox">
                            PLACE</p>
                        <v-simple-table
                                class="ma-0;"
                                :dense="dense"
                                :fixed-header="fixedHeader"
                                :height="height"
                                style="color: #4f4f4f"
                        >
                            <template v-slot:default>

                                <tbody>
                                <tr v-for="item in places" :key="item.name" @click="selectSource(item)">
                                    <td style="font-size: 13px">{{ item.name }}</td>
                                </tr>

                                </tbody>
                            </template>
                        </v-simple-table>
                    </v-col>
                </v-row>
            </v-col>

            <v-col cols="12" class="py-0" style="background-color: yellow">
                <v-row>
                    <v-col id="destinationNav" cols="12">
                        <nav>
                            <router-link :to="{name: 'result'}"> Detail</router-link>

                            <router-link :to="{name: 'comments'}">Comments</router-link>

                            <router-link :to="{name: 'tips'}">Tips</router-link>

                            <router-link :to="{name: 'services'}">Services</router-link>
                        </nav>
                    </v-col>
                    <v-col style="background-color: lightslategrey" cols="12">
                        <router-view/>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "Search",

        data() {
            return {
                alignmentsAvailable: [
                    'start',
                    'center',
                    'end',
                    'baseline',
                    'stretch',
                ],
                alignment: 'stretch',
                dense: true,
                fixedHeader: true,
                height: 314,
                height2: 350,
                justifyAvailable: [
                    'start',
                    'center',
                    'end',
                    'space-around',
                    'space-between',
                ],
                justify: 'center',
                result: [],
                locatableElement: [],
                locatableReviews: [],
                errors: [],
                absolute: true,
                a: true,
                space: ' ',
                //carousel of images

                test: false,
                lat: 0,
                lon: 0,
                countries: Array,
                cities: Array,
                places: Array,
            }
        },

        methods: {
            selectSource(item) {
                this.result = item;
                this.locatableElement = item.locatable;
                axios.get(`https://api-goingto.azurewebsites.net/api/locatables/` + item.locatable.id + `/reviews`)
                    .then(res => this.locatableReviews = res.data)
                this.test = true
                this.lat = this.locatableElement.latitude;
                this.lon = this.locatableElement.longitude;
                console.log(this.result)
                console.log(this.locatableElement)
                console.log(this.locatableReviews)
            },
        },

        created() {
            axios.get(`https://api-goingto.azurewebsites.net/api/countries`)
                .then(res => this.countries = res.data)

            axios.get(`https://api-goingto.azurewebsites.net/api/cities`)
                .then(res => this.cities = res.data)

            axios.get(`https://api-goingto.azurewebsites.net/api/places`)
                .then(res => this.places = res.data)
        }
    }
</script>

<style scoped>
    .search {
        margin-bottom: 10px;
        font-size: x-small;
    }

    .filter {
        font-size: small;
        font-weight: bold;
    }

    .filt {
        padding-top: 10px;
    }

    #destinationNav {
        background: rgb(255, 255, 255);
        background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(217, 245, 247, 1) 97%, rgba(174, 233, 238, 1) 100%);
    }

    #destinationNav nav {

    }

    #destinationNav nav a {
        text-decoration: none;
        color: #858585;
        margin-left: 4%;
        margin-right: 4%;
    }

    #destinationNav nav a.router-link-exact-active {
        font-weight: bold;
        color: #262626;
    }

    @media (max-width: 600px) {
        #placebox {
            margin-top: 20px;
        }

        .filter {
            margin-top: 10px;
        }

        .filt {
            margin-top: 13px;

        }
    }
</style>
