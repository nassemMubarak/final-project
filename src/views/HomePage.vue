<template>
  <!-- LOADER -->
  <!-- <div id="preloader">
    <img class="preloader" src="images/loader.gif" alt="" />
  </div> -->
  <!-- end loader -->
  <!-- END LOADER -->

    <div dir="rtl" lang="ar" id="master-app">
        <!-- end header -->
        <section class="section first-section">
            <div class="container-fluid">
                <div class="masonry-blog clearfix">
                    <div class="left-side">
                        <div class="masonry-box post-media">
                            <img :src="news.economic[0].image" alt="" class="img-fluid"/>
                            <div class="shadoweffect">
                                <div class="shadow-desc">
                                    <div class="blog-meta">
                                        <span class="bg-pink"><router-link to="/sport"><a href="" title="">{{
                                            news.sport[0].type
                                            }}</a> </router-link></span>
                                        <h4>
                                            <router-link to="/details" @click="
                                            transNEWS.type = news.sport[0].type;
                                            transNEWS.date = news.sport[0].date;
                                            transNEWS.image = news.sport[0].image;
                                            transNEWS.by = news.sport[0].by;
                                            transNEWS.title = news.sport[0].title;
                                            transNEWS.description = news.sport[0].description;
                                            transNEWS.body = news.sport[0].body;
                                            ">{{ news.sport[0].title }}</router-link>
                                        </h4>
                                        <small><a href="single.html" title="">{{ news.sport[0].date }} </a></small>
                                        <small><a href="blog-author.html" title="">{{ news.sport[0].by }}</a></small>
                                    </div>
                                    <!-- end meta -->
                                </div>
                                <!-- end shadow-desc -->
                            </div>
                            <!-- end shadow -->
                        </div>
                        <!-- end post-media -->
                    </div>
                    <!-- end left-side -->

                    <div class="center-side">
                        <div class="masonry-box post-media">
                            <img :src="news.politics[0].image" alt="" class="img-fluid"/>
                            <div class="shadoweffect">
                                <div class="shadow-desc">
                                    <div class="blog-meta">

                                        <!-- <span class="bg-pink"><a href="blog-category-01.html" title="">{{ news.politics[0].type }}</a></span> -->
                                        <span class="bg-pink"><router-link to="/politics"><a href="" title="">{{
                                            news.politics[0].type
                                            }}</a> </router-link></span>
                                        <h4>
                                            <router-link to="/details" @click="
                                            transNEWS.type = news.politics[0].type;
                                            transNEWS.date = news.politics[0].date;
                                            transNEWS.image = news.politics[0].image;
                                            transNEWS.by = news.politics[0].by;
                                            transNEWS.title = news.politics[0].title;
                                            transNEWS.description = news.politics[0].description;
                                            transNEWS.body = news.politics[0].body;
                                            ">{{ news.politics[0].title }}</router-link>
                                        </h4>
                                        <small><a href="single.html" title="">{{ news.politics[0].date }}</a></small>
                                        <small><a href="blog-author.html" title="">{{ news.politics[0].by }}</a></small>
                                    </div>
                                    <!-- end meta -->
                                </div>
                                <!-- end shadow-desc -->
                            </div>
                            <!-- end shadow -->
                        </div>
                        <!-- end post-media -->

                        <div v-for="newsItem in [news.politics[1], news.politics[2]]" :key="newsItem"
                             class="masonry-box small-box post-media">
                            <img :src="newsItem.image" alt="" class="img-fluid"/>
                            <div class="shadoweffect">
                                <div class="shadow-desc">
                                    <div class="blog-meta">
                                        <span class="bg-pink"><a href="blog-category-01.html" title="">{{
                                            newsItem.type
                                            }}</a></span>
                                        <h4>
                                            <router-link to="/details" @click="
                                            transNEWS.type = newsItem.type;
                                            transNEWS.date = newsItem.date;
                                            transNEWS.image = newsItem.image;
                                            transNEWS.by = newsItem.by;
                                            transNEWS.title = newsItem.title;
                                            transNEWS.description = newsItem.description;
                                            transNEWS.body = newsItem.body;
                                            ">{{ newsItem.title }}</router-link>
                                        </h4>
                                    </div>
                                    <!-- end meta -->
                                </div>
                                <!-- end shadow-desc -->
                            </div>
                            <!-- end shadow -->
                        </div>
                        <!-- end post-media -->


                        <!-- end post-media -->
                    </div>
                    <!-- end left-side -->

                    <div class="right-side hidden-md-down">
                        <div class="masonry-box post-media">
                            <img :src="news.sport[1].image" alt="" class="img-fluid"/>
                            <div class="shadoweffect">
                                <div class="shadow-desc">
                                    <div class="blog-meta">
                                        <span class="bg-aqua"><a href="blog-category-01.html"
                                                                 title="">{{ news.sport[1].type }}</a></span>
                                        <h4>
                                            <router-link to="/details" @click="
                                            transNEWS.type = news.sport[1].type;
                                            transNEWS.date = news.sport[1].date;
                                            transNEWS.image = news.sport[1].image;
                                            transNEWS.by = news.sport[1].by;
                                            transNEWS.title = news.sport[1].title;
                                            transNEWS.description = news.sport[1].description;
                                            transNEWS.body = news.sport[1].body;
                                            ">{{ news.sport[1].title }}</router-link>
                                        </h4>
                                        <small><a href="single.html" title="">{{ news.sport[1].date }}</a></small>
                                        <small><a href="blog-author.html" title="">{{ news.sport[1].by }}</a></small>
                                    </div>
                                    <!-- end meta -->
                                </div>
                                <!-- end shadow-desc -->
                            </div>
                            <!-- end shadow -->
                        </div>
                        <!-- end post-media -->
                    </div>
                    <!-- end right-side -->
                </div>
                <!-- end masonry -->
            </div>
        </section>

        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div class="section-title">
                            <h3 class="color-aqua">
                                <router-link to="/sport"><a href="" title="">{{ news.sport[0].type }}</a></router-link>
                            </h3>
                        </div>
                        <!-- end title -->

                        <div class="row">
                            <div v-for="newsItem in [news.sport[2], news.sport[3]]" :key="newsItem"
                                 class="col-lg-12 col-md-12 col-sm-12 col-xs-12">


                                <router-link to="/details" @click="
                                            transNEWS.type = newsItem.type;
                                            transNEWS.date = newsItem.date;
                                            transNEWS.image = newsItem.image;
                                            transNEWS.by = newsItem.by;
                                            transNEWS.title = newsItem.title;
                                            transNEWS.description = newsItem.description;
                                            transNEWS.body = newsItem.body;
                                            " class="blog-box">
                                    <div class="post-media">
                                        <a href="single.html" title="">
                                            <img :src="newsItem.image" alt="" class="img-fluid"/>
                                            <div class="hovereffect">
                                                <span></span>
                                            </div>
                                            <!-- end hover -->
                                        </a>
                                    </div>
                                    <!-- end media -->
                                    <div class="blog-meta big-meta">
                                        <h4>
                                            <a href="single.html" title="">{{ newsItem.title }}</a>
                                        </h4>
                                        <p>
                                            {{ newsItem.description }}
                                        </p>
                                        <small><a href="blog-category-01.html" title="">{{ newsItem.type }}</a></small>
                                        <small><a href="single.html" title="">{{ newsItem.date }}</a></small>
                                        <small><a href="blog-author.html" title="">{{ newsItem.by }}</a></small>
                                    </div>
                                    <!-- end meta -->
                                </router-link>
                                <hr class="invis"/>
                                <!-- end blog-box -->
                            </div>
                            <!-- end col -->
                        </div>
                        <!-- end row -->
                    </div>
                    <!-- end col -->

                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div class="section-title">
                            <h3 class="color-pink">
                                <router-link to="/politics"><a href="" title="">{{ news.politics[0].type }}</a>
                                </router-link>
                                <!-- <a href="blog-category-01.html" title="">{{ news.politics[0].type }}</a> -->
                            </h3>
                        </div>
                        <!-- end title -->
                        <div class="row">
                            <div
                                    v-for="newsItem in [news.politics[3], news.politics[4], news.politics[5], news.politics[6], news.politics[7], news.politics[8], news.politics[9], news.politics[10]]"
                                    :key="newsItem" class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <router-link to="/details" @click="
                                            transNEWS.type = newsItem.type;
                                            transNEWS.date = newsItem.date;
                                            transNEWS.image = newsItem.image;
                                            transNEWS.by = newsItem.by;
                                            transNEWS.title = newsItem.title;
                                            transNEWS.description = newsItem.description;
                                            transNEWS.body = newsItem.body;
                                            " class="blog-box">
                                    <div class="post-media">
                                        <a   title="">
                                            <img :src="newsItem.image" alt="" class="img-fluid"/>
                                            <div class="hovereffect">
                                                <span></span>
                                            </div>
                                            <!-- end hover -->
                                        </a>
                                    </div>
                                    <!-- end media -->
                                    <div class="blog-meta">
                                        <h4>
                                            <a title="">{{ newsItem.title }}</a>
                                        </h4>
                                        <small><a title="">{{ newsItem.type }}</a></small>
                                        <small><a title="">{{ newsItem.date }}</a></small>
                                    </div>
                                    <!-- end meta -->
                                </router-link>
                                <!-- end blog-box -->

                                <hr class="invis"/>
                            </div>
                            <!-- end col -->
                        </div>
                        <!-- end row -->
                    </div>
                    <!-- end col -->
                </div>
                <!-- end row -->

                <hr class="invis1"/>

                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <div class="banner-spot clearfix">
                            <div class="banner-img">
                                <img
                                        src="https://img.freepik.com/free-vector/ramadan-kareem-arabic-golden-banner_1017-31088.jpg?size=626&ext=jpg&ga=GA1.2.1958355492.1677405070&semt=ais"
                                        alt="" class="img-fluid"/>
                            </div>
                            <!-- end banner-img -->
                        </div>
                        <!-- end banner -->
                    </div>
                    <!-- end col -->
                </div>
                <!-- end row -->

                <hr class="invis1"/>

                <div class="row">
                    <div class="col-lg-9">
                        <div class="blog-list clearfix">
                            <div class="section-title">
                                <h3 class="color-green">
                                    <router-link to="/Economic"><a href="" title="">{{ news.economic[0].type }}</a>
                                    </router-link>
                                    <!-- <a href="blog-category-01.html" title="">{{ news.economic[0].type }}</a> -->
                                </h3>
                            </div>
                            <!-- end title -->

                            <div v-for="newsItem in [news.economic[0], news.economic[1], news.economic[2]]" :key="newsItem"
                                 class="blog-box row">
                                <router-link class="row" to="/details" @click="
                                            transNEWS.type = newsItem.type;
                                            transNEWS.date = newsItem.date;
                                            transNEWS.image = newsItem.image;
                                            transNEWS.by = newsItem.by;
                                            transNEWS.title = newsItem.title;
                                            transNEWS.description = newsItem.description;
                                            transNEWS.body = newsItem.body;
                                            ">
                                    <div class="col-md-4">
                                        <div class="post-media">
                                            <a href="single.html" title="">
                                                <img :src="newsItem.image" alt="" class="img-fluid"/>
                                                <div class="hovereffect"></div>
                                            </a>
                                        </div>
                                        <!-- end media -->
                                    </div>
                                    <!-- end col -->

                                    <div class="blog-meta big-meta col-md-8">
                                        <h4>
                                            <a href="single.html" title="">{{ newsItem.title }}</a>
                                        </h4>
                                        <p>
                                            {{ newsItem.description }}
                                        </p>
                                        <small><a href="blog-category-01.html" title="">{{ newsItem.type }}</a></small>
                                        <small><a href="single.html" title="">{{ newsItem.date }}</a></small>
                                        <small><a href="blog-author.html" title="">{{ newsItem.by }}</a></small>
                                    </div>
                                    <!-- end meta -->
                                    <hr class="invis"/>
                                </router-link>

                            </div>
                            <!-- end blog-box -->
                        </div>
                        <!-- end blog-list -->

                        <hr class="invis"/>


                        <!-- end blog-list -->
                    </div>
                    <!-- end col -->


                    <!-- end col -->
                </div>
                <!-- end row -->

                <hr class="invis1"/>

                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <div class="banner-spot clearfix">
                            <div class="banner-img">
                                <img height="1"
                                     src="https://img.freepik.com/free-vector/ramadan-kareem-arabic-golden-banner_1017-31088.jpg?size=626&ext=jpg&ga=GA1.2.1958355492.1677405070&semt=ais"
                                     alt="" class="img-fluid"/>
                            </div>
                            <!-- end banner-img -->
                        </div>
                        <!-- end banner -->
                    </div>
                    <!-- end col -->
                </div>
                <!-- end row -->
            </div>
            <!-- end container -->
        </section>
    </div>
</template>
<script>
import {transNEWS} from '@/reactive/transfer_news'
// import {newsCache} from '@/reactive/transfer_news'
import {baseUrl} from '@/reactive/api.js'
import axios from 'axios';

export default {
    data() {
        return {
            news: {
                sport: [
                    {
                        title: 'جار التحميل',
                        type: 'Loading',
                        date: 'now',
                        by: 'BNMA',
                        image: 'https://www.shutterstock.com/image-vector/loading-sign-doodle-260nw-742556110.jpg',
                        description: 'جار التحميل'
                    },
                    {
                        title: 'جار التحميل',
                        type: 'Loading',
                        date: 'now',
                        by: 'BNMA',
                        image: 'https://www.shutterstock.com/image-vector/loading-sign-doodle-260nw-742556110.jpg',
                        description: 'جار التحميل'
                    }, {
                        title: 'جار التحميل',
                        type: 'Loading',
                        date: 'now',
                        by: 'BNMA',
                        image: 'https://www.shutterstock.com/image-vector/loading-sign-doodle-260nw-742556110.jpg',
                        description: 'جار التحميل'
                    }, {
                        title: 'جار التحميل',
                        type: 'Loading',
                        date: 'now',
                        by: 'BNMA',
                        image: 'https://www.shutterstock.com/image-vector/loading-sign-doodle-260nw-742556110.jpg',
                        description: 'جار التحميل'
                    }, {
                        title: 'جار التحميل',
                        type: 'Loading',
                        date: 'now',
                        by: 'BNMA',
                        image: 'https://www.shutterstock.com/image-vector/loading-sign-doodle-260nw-742556110.jpg',
                        description: 'جار التحميل'
                    },

                ],
                politics: [
                    {
                        title: 'جار التحميل',
                        type: 'Loading',
                        date: 'now',
                        by: 'BNMA',
                        image: 'https://www.shutterstock.com/image-vector/loading-sign-doodle-260nw-742556110.jpg',
                        description: 'جار التحميل'
                    },
                    {
                        title: 'جار التحميل',
                        type: 'Loading',
                        date: 'now',
                        by: 'BNMA',
                        image: 'https://www.shutterstock.com/image-vector/loading-sign-doodle-260nw-742556110.jpg',
                        description: 'جار التحميل'
                    },
                    {
                        title: 'جار التحميل',
                        type: 'Loading',
                        date: 'now',
                        by: 'BNMA',
                        image: 'https://www.shutterstock.com/image-vector/loading-sign-doodle-260nw-742556110.jpg',
                        description: 'جار التحميل'
                    },
                    {
                        title: 'جار التحميل',
                        type: 'Loading',
                        date: 'now',
                        by: 'BNMA',
                        image: 'https://www.shutterstock.com/image-vector/loading-sign-doodle-260nw-742556110.jpg',
                        description: 'جار التحميل'
                    },
                    {
                        title: 'جار التحميل',
                        type: 'Loading',
                        date: 'now',
                        by: 'BNMA',
                        image: 'https://www.shutterstock.com/image-vector/loading-sign-doodle-260nw-742556110.jpg',
                        description: 'جار التحميل'
                    },
                    {
                        title: 'جار التحميل',
                        type: 'Loading',
                        date: 'now',
                        by: 'BNMA',
                        image: 'https://www.shutterstock.com/image-vector/loading-sign-doodle-260nw-742556110.jpg',
                        description: 'جار التحميل'
                    },
                    {
                        title: 'جار التحميل',
                        type: 'Loading',
                        date: 'now',
                        by: 'BNMA',
                        image: 'https://www.shutterstock.com/image-vector/loading-sign-doodle-260nw-742556110.jpg',
                        description: 'جار التحميل'
                    },
                    {
                        title: 'جار التحميل',
                        type: 'Loading',
                        date: 'now',
                        by: 'BNMA',
                        image: 'https://www.shutterstock.com/image-vector/loading-sign-doodle-260nw-742556110.jpg',
                        description: 'جار التحميل'
                    }, {
                        title: 'جار التحميل',
                        type: 'Loading',
                        date: 'now',
                        by: 'BNMA',
                        image: 'https://www.shutterstock.com/image-vector/loading-sign-doodle-260nw-742556110.jpg',
                        description: 'جار التحميل'
                    }, {
                        title: 'جار التحميل',
                        type: 'Loading',
                        date: 'now',
                        by: 'BNMA',
                        image: 'https://www.shutterstock.com/image-vector/loading-sign-doodle-260nw-742556110.jpg',
                        description: 'جار التحميل'
                    }, {
                        title: 'جار التحميل',
                        type: 'Loading',
                        date: 'now',
                        by: 'BNMA',
                        image: 'https://www.shutterstock.com/image-vector/loading-sign-doodle-260nw-742556110.jpg',
                        description: 'جار التحميل'
                    },

                ],
                economic: [
                    {
                        title: 'جار التحميل',
                        type: 'Loading',
                        date: 'now',
                        by: 'BNMA',
                        image: 'https://www.shutterstock.com/image-vector/loading-sign-doodle-260nw-742556110.jpg',
                        description: 'جار التحميل'
                    },
                    {
                        title: 'جار التحميل',
                        type: 'Loading',
                        date: 'now',
                        by: 'BNMA',
                        image: 'https://www.shutterstock.com/image-vector/loading-sign-doodle-260nw-742556110.jpg',
                        description: 'جار التحميل'
                    }, {
                        title: 'جار التحميل',
                        type: 'Loading',
                        date: 'now',
                        by: 'BNMA',
                        image: 'https://www.shutterstock.com/image-vector/loading-sign-doodle-260nw-742556110.jpg',
                        description: 'جار التحميل'
                    }, {
                        title: 'جار التحميل',
                        type: 'Loading',
                        date: 'now',
                        by: 'BNMA',
                        image: 'https://www.shutterstock.com/image-vector/loading-sign-doodle-260nw-742556110.jpg',
                        description: 'جار التحميل'
                    }, {
                        title: 'جار التحميل',
                        type: 'Loading',
                        date: 'now',
                        by: 'BNMA',
                        image: 'https://www.shutterstock.com/image-vector/loading-sign-doodle-260nw-742556110.jpg',
                        description: 'جار التحميل'
                    },

                ],
            },
            transNEWS,

        }
    },

    mounted() {
        // Call the method to fetch data when the component is mounted

        this.getData();
    },
    methods: {

        getData() {
            console.log(555555555)
            axios.get(`${baseUrl.url}/api/news/home`)
                .then(response => {
                    console.log(response.data)
                    this.news = response.data;
                    // newsCache.news = response.data;
                    // this.news = newsCache.news;
                })

                .catch(error => {
                    console.log(error);
                });
        },

    }

}
</script>

