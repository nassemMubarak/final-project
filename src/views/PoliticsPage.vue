<template>
    <div dir="rtl" lang="ar" id="politics" class="politics-page">
        <div class="page-title wb">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <h2>
                            الأخبار السياسية
                        </h2>
                    </div>
                    <!-- end col -->
                    <div
                            class="col-lg-4 col-md-4 col-sm-12 hidden-xs-down hidden-sm-down"
                    >
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">الصفحة الرئيسئة</a></li>
                            <li class="breadcrumb-item"><a href="#"></a></li>
                            <li class="breadcrumb-item active">السياسة</li>
                        </ol>
                    </div>
                    <!-- end col -->

<<<<<<< HEAD
    <section class="section wb">
      <div class="container">
        <div class="row">
          <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
            <div class="page-wrapper">
              
              <div
                v-for="(item, index) in news.slice(
                  pagNumber == 1 ? 0 : (pagNumber - 1) * 10,
                  pagNumber == 1 ? 10 : pagNumber * 10
                )"
                :key="index"
                class="blog-list clearfix"
              >
                <div class="blog-box row">
                  <div class="col-md-4">
                    <div class="post-media">
                        <router-link to="/details"> <img :src="item.image" alt="" class="img-fluid" />
                        <div class="hovereffect"></div></router-link>
                    </div>
                    <!-- end media -->
                  </div>
                  <!-- end col -->
                  <div class="blog-meta big-meta col-md-8">
                    <h4>
                      <router-link to="/details">{{ item.title  }}</router-link>
                    </h4>
                    <p>{{ item.body }}</p>
                    <small
                      ><a href="blog-category-01.html" title="">{{
                        item.blogCategory
                      }}</a></small
                    >
                    <small
                      ><a href="single.html" title="">{{ item.date }}</a></small
                    >
                    <small
                      ><a href="blog-author.html" title="">{{
                        item.author
                      }}</a></small
                    >
                  </div>
                  <!-- end meta -->
                  <div v-show="index == 2" class="row">
                    <div>
                      <br />
                      <div class="col-lg-10 offset-lg-1">
                        <div class="banner-spot clearfix">
                          <div class="banner-img">
                            <img
                              src="../../public\frontend\assets\upload/ramadan1.jpg"
                              alt=""
                              class="img-fluid"
                            />
                          </div>
                          <!-- end banner-img -->
=======
                </div>
                <!-- end row -->
            </div>
            <!-- end container -->
        </div>
        <!-- end page-title -->

        <section class="section wb">
            <div class="container">
                <div class="row">
                    <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                        <div class="page-wrapper">
                            <div
                                    v-for="(item, index) in news.slice(
                  pagNumber == 1 ? 0 : (pagNumber - 1) * 10,
                  pagNumber == 1 ? 10 : pagNumber * 10
                )"
                                    :key="index"
                                    class="blog-list clearfix"
                            >
                                <div class="blog-box row">
                                    <div class="col-md-4">
                                        <div class="post-media">
                                            <router-link to="/details"><img :src="item.image" alt=""
                                                                            class="img-fluid"/>
                                                <div class="hovereffect"></div>
                                            </router-link>
                                        </div>
                                        <!-- end media -->
                                    </div>
                                    <!-- end col -->
                                    <div class="blog-meta big-meta col-md-8">
                                        <h4>
                                            <router-link to="/details">{{ item.title }}</router-link>
                                        </h4>
                                        <p>{{ item.body }}</p>
                                        <small
                                        ><a href="blog-category-01.html" title="">{{
                                            item.blogCategory
                                            }}</a></small
                                        >
                                        <small
                                        ><a href="single.html" title="">{{ item.date }}</a></small
                                        >
                                        <small
                                        ><a href="blog-author.html" title="">{{
                                            item.author
                                            }}</a></small
                                        >
                                    </div>
                                    <!-- end meta -->
                                    <div v-show="index == 2" class="row">
                                        <div>
                                            <br/>
                                            <div class="col-lg-10 offset-lg-1">
                                                <div class="banner-spot clearfix">
                                                    <div class="banner-img">
                                                        <img
                                                                src="../../public\frontend\assets\upload/ramadan1.jpg"
                                                                alt=""
                                                                class="img-fluid"
                                                        />
                                                    </div>
                                                    <!-- end banner-img -->
                                                </div>
                                                <!-- end banner -->
                                                <!-- <hr class="invis"> -->
                                            </div>
                                            <!-- end col -->
                                        </div>
                                    </div>
                                    <!-- end row -->
                                </div>
                                <!-- end blog-box -->

                                <hr class="invis"/>
                            </div>
                            <!-- end blog-list -->
>>>>>>> 881620cd065357048e0238c53cb445733fe280cc
                        </div>
                        <!-- end page-wrapper -->

                        <hr class="invis"/>

                        <div class="row">
                            <div class="col-md-12">
                                <nav aria-label="Page navigation">
                                    <ul class="pagination justify-content-start">
                                        <li
                                                @click="pagNumber == 1 ? pagNumber : pagNumber--"
                                                class="page-item"
                                        >
                                            <router-link class="page-link" to="/politics"
                                            >السابق
                                            </router-link
                                            >
                                        </li>
                                        <li
                                                v-for="index in Math.ceil(news.length / 10)"
                                                :key="index"
                                                @click="pagNumber = index"
                                                class="page-item"
                                        >
                                            <router-link class="page-link" to="/politics">{{
                                                index
                                                }}
                                            </router-link>
                                        </li>
                                        <li
                                                @click="
                        Math.ceil(news.length / 10) == pagNumber
                          ? pagNumber
                          : pagNumber++
                      "
<<<<<<< HEAD
                      class="page-item"
                    >
                      <router-link class="page-link" to="/politics"
                        >التالي</router-link
                      >
                    </li>
                  </ul>
                </nav>
              </div>
              <!-- end col -->
            </div>
            <!-- end row -->
          </div>
          <!-- end col -->

          <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
            <div class="sidebar">
              <div class="widget">
                <h2 class="widget-title">بحث</h2>
                <form class="form-inline search-form">
                  <div class="form-group">
                    <input
                      type="text"
                      v-model="textSearch"
                      class="form-control"
                      placeholder="             البحث في الموقع"
                    />
                  </div>
                  <button type="submit" class="btn btn-primary">
                    <i class="fa fa-search"></i>
                  </button>
                </form>
              </div>
              <!-- end widget -->

              <div class="widget">
                <h2 class="widget-title">المشاركات الاخيرة</h2>
                <div class="blog-list-widget">
                  <div class="list-group">
                    <div
                      class="list-group-item list-group-item-action flex-column align-items-start"
                    >
                      <div
                        class="w-100 justify-content-between"
                        v-for="(item, index) in news.slice(0, 5)"
                        :key="index"
                      >
                        <img
                          :src="item.image"
                          alt=""
                          class="img-fluid float-left"
                        />
                        <h5 class="mb-1">{{ item.title }}</h5>
                        <small>{{ item.date }}</small>
                      </div>
=======
                                                class="page-item"
                                        >
                                            <router-link class="page-link" to="/politics"
                                            >التالي
                                            </router-link
                                            >
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <!-- end col -->
                        </div>
                        <!-- end row -->
>>>>>>> 881620cd065357048e0238c53cb445733fe280cc
                    </div>
                    <!-- end col -->

                    <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                        <div class="sidebar">
                            <div class="widget">
                                <h2 class="widget-title">بحث</h2>
                                <form class="form-inline search-form">
                                    <div class="form-group">
                                        <input
                                                type="text"
                                                v-model="textSearch"
                                                class="form-control"
                                                placeholder="             البحث في الموقع"
                                        />
                                    </div>
                                    <button type="submit" class="btn btn-primary">
                                        <i class="fa fa-search"></i>
                                    </button>
                                </form>
                            </div>
                            <!-- end widget -->

                            <div class="widget">
                                <h2 class="widget-title">المشاركات الاخيرة</h2>
                                <div class="blog-list-widget">
                                    <div class="list-group">
                                        <div
                                                class="list-group-item list-group-item-action flex-column align-items-start"
                                        >
                                            <div
                                                    class="w-100 justify-content-between"
                                                    v-for="(item, index) in news.slice(0, 5)"
                                                    :key="index"
                                            >
                                                <img
                                                        :src="item.image"
                                                        alt=""
                                                        class="img-fluid float-left"
                                                />
                                                <h5 class="mb-1">{{ item.title }}</h5>
                                                <small>{{ item.date }}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- end blog-list -->
                            </div>
                            <!-- end widget -->

                            <div class="widget">
                                <h2 class="widget-title">دعاية</h2>
                                <div class="banner-spot clearfix">
                                    <div class="banner-img">
                                        <img
                                                src="../../public\frontend\assets\upload/ramadan.jpg"
                                                alt=""
                                                class="img-fluid"
                                        />
                                    </div>
                                    <!-- end banner-img -->
                                </div>
                                <!-- end banner -->
                            </div>
                            <!-- end widget -->
                        </div>
                        <!-- end sidebar -->
                    </div>
                    <!-- end col -->
                </div>
                <!-- end row -->
            </div>
            <!-- end container -->
        </section>

    </div>
  <!-- end wrapper -->
</template>
<script>
<<<<<<< HEAD
import axios from 'axios';

export default {
  name: "PoliticsPage",
  data() {
    return {
      pagNumber: 1,
      textSearch: "",
      news:[]
      // news: [
      //   {
      //     title: "المصادقة بالقراءة الأولى على عودة الاستيطان لشمال الضفة",
      //     body: 'صادقت الكنيست الصهيونية مساء الإثنين وبالقراءة الأولى على مشروع قانون إلغاء "قانون الانسحاب من شمال الضفة الغربية"، والذي يفتح الباب أمام عودة 4 مستوطنات بين نابلس وجنين.',
      //     blogCategory: "سياسة",
      //     date: "الثلاثاء 14 مارس 2023 10:29 ص",
      //     blogAuthor: "قناة الأقصى",
      //     imageUrl:
      //       "https://seraj.tv/thumb.php?src=uploads/images/23cdf7627a9e1ebcdc1172bb343a26fc.jpg&w=780&h=450",
      //   },
      //   {
      //     title: "العاروري: صبرنا ينفد وسنكون عند ثقة شعبنا بنا",
      //     body: 'أكد نائب رئيس المكتب السياسي لحركة "حماس" الشيخ صالح العاروري أن محاولة الاحتلال توظيف شهر رمضان لفرض سياسته في التقسيم الزماني والمكاني والسماح للمستوطنين بأداء الطقوس التلمودية سيواجه بردة فعل شعبنا بكل تأكيد.',
      //     blogCategory: "سياسة",
      //     date: " الثلاثاء 14 مارس 2023 11:38 ص ",
      //     blogAuthor: "قناة الأقصى",
      //     imageUrl:
      //       "https://seraj.tv/thumb.php?src=uploads//images/2722f6be123ba49b7fdca6b5978cc013.jpeg&w=780&h=450",
      //   },
      //   {
      //     title: "مواجهات واعتقالات بالقدس والضفة المحتلتين",
      //     body: "شنّت قوات الاحتلال الصهيوني، فجر اليوم الثلاثاء، حملة مداهمات واقتحامات واسعة في الضفة والقدس المحتلتين، تخللتها مواجهات واعتقالات طالت عددًا من الفلسطينيين.",
      //     blogCategory: "سياسة",
      //     date: "الثلاثاء 14 مارس 2023 08:18 ص",
      //     blogAuthor: "قناة الأقصى",
      //     imageUrl:
      //       "https://seraj.tv/thumb.php?src=uploads//images/1fd00ee8479a5665c0bc0589f4e00bd3.jpg&w=780&h=450",
      //   },
      //   {
      //     title: "الذكرى الـ19 لعملية أسدود البطولية المشتركة",
      //     body: "الرابع عشر من مارس، تاريخٌ يحفظه الصهاينة جيداً، لأنه يحمل معه ذكرى تحطيم نظرية أمنهم على صخرة أبناء المقاومة الذين مرغوا أنف الحكومة النازية بالتراب وأثبتوا أن كل التحصينات التي يتغنى بها العدو لا تمنع استشهادياً من بلوغ مرامه أو تحقيق هدفه.",
      //     blogCategory: "سياسة",
      //     date: " الثلاثاء 14 مارس 2023 08:30 ص",
      //     blogAuthor: "قناة الأقصى",
      //     imageUrl:
      //       "https://seraj.tv/thumb.php?src=uploads//images/5f361459bffefbf3f8b4148594a18369.jpg&w=780&h=450",
      //   },
      //   {
      //     title: "فؤاد الشوبكي فور الإفراج عنه: أسرانا شهداء مع وقف التنفيذ",
      //     body: "شنّت قوات الاحتلال الصهيوني، فجر اليوم أكد شيخ الأسرى اللواء فؤاد الشوبكي، فور الإفراج عنه اليوم الإثنين، أن الأسرى في سجون الاحتلال الصهيوني شهداء مع وقف التنفيذ.",
      //     blogCategory: "سياسة",
      //     date: " الإثنين 13 مارس 2023 03:54 م ",
      //     blogAuthor: "قناة الأقصى",
      //     imageUrl:
      //       "https://seraj.tv/thumb.php?src=uploads//images/1d453f4357afeb0f95be26418ec5a8e7.jpg&w=780&h=450",
      //   },
      //   {
      //     title:
      //       "عرين الأسود: سلسلة عمليات الثأر مستمرة بتوقيع ذئابنا المنفردة",
      //     body: 'شنّت قوات الاحتلال الصهيوني، فجر اليوم نعت مجموعات "عرين الأسود" ثلاثة من شهدائها الذين ارتقوا فجر اليوم الأحد، خلال اشتباك مسلح مع قوات الاحتلال قرب حاجز صرة غرب نابلس.',
      //     blogCategory: "سياسة",
      //     date: "الأحد 12 مارس 2023 06:44 م ",
      //     blogAuthor: "قناة الأقصى",
      //     imageUrl:
      //       "https://seraj.tv/thumb.php?src=uploads//images/4c7108dd084feb78cfd3a39c63c8b23b.jpg&w=780&h=450",
      //   },
      //   {
      //     title:
      //       "عرين الأسود: سلسلة عمليات الثأر مستمرة بتوقيع ذئابنا المنفردة",
      //     body: 'شنّت قوات الاحتلال الصهيوني، فجر اليوم نعت مجموعات "عرين الأسود" ثلاثة من شهدائها الذين ارتقوا فجر اليوم الأحد، خلال اشتباك مسلح مع قوات الاحتلال قرب حاجز صرة غرب نابلس.',
      //     blogCategory: "سياسة",
      //     date: "الأحد 12 مارس 2023 06:44 م ",
      //     blogAuthor: "قناة الأقصى",
      //     imageUrl:
      //       "https://seraj.tv/thumb.php?src=uploads//images/4c7108dd084feb78cfd3a39c63c8b23b.jpg&w=780&h=450",
      //   },
      //   {
      //     title:
      //       "عرين الأسود: سلسلة عمليات الثأر مستمرة بتوقيع ذئابنا المنفردة",
      //     body: 'شنّت قوات الاحتلال الصهيوني، فجر اليوم نعت مجموعات "عرين الأسود" ثلاثة من شهدائها الذين ارتقوا فجر اليوم الأحد، خلال اشتباك مسلح مع قوات الاحتلال قرب حاجز صرة غرب نابلس.',
      //     blogCategory: "سياسة",
      //     date: "الأحد 12 مارس 2023 06:44 م ",
      //     blogAuthor: "قناة الأقصى",
      //     imageUrl:
      //       "https://seraj.tv/thumb.php?src=uploads//images/4c7108dd084feb78cfd3a39c63c8b23b.jpg&w=780&h=450",
      //   },
      //   {
      //     title:
      //       "عرين الأسود: سلسلة عمليات الثأر مستمرة بتوقيع ذئابنا المنفردة",
      //     body: 'شنّت قوات الاحتلال الصهيوني، فجر اليوم نعت مجموعات "عرين الأسود" ثلاثة من شهدائها الذين ارتقوا فجر اليوم الأحد، خلال اشتباك مسلح مع قوات الاحتلال قرب حاجز صرة غرب نابلس.',
      //     blogCategory: "سياسة",
      //     date: "الأحد 12 مارس 2023 06:44 م ",
      //     blogAuthor: "قناة الأقصى",
      //     imageUrl:
      //       "https://seraj.tv/thumb.php?src=uploads//images/4c7108dd084feb78cfd3a39c63c8b23b.jpg&w=780&h=450",
      //   },
      //   {
      //     title:
      //       "عرين الأسود: سلسلة عمليات الثأر مستمرة بتوقيع ذئابنا المنفردة",
      //     body: 'شنّت قوات الاحتلال الصهيوني، فجر اليوم نعت مجموعات "عرين الأسود" ثلاثة من شهدائها الذين ارتقوا فجر اليوم الأحد، خلال اشتباك مسلح مع قوات الاحتلال قرب حاجز صرة غرب نابلس.',
      //     blogCategory: "سياسة",
      //     date: "الأحد 12 مارس 2023 06:44 م ",
      //     blogAuthor: "قناة الأقصى",
      //     imageUrl:
      //       "https://seraj.tv/thumb.php?src=uploads//images/4c7108dd084feb78cfd3a39c63c8b23b.jpg&w=780&h=450",
      //   },
      //   {
      //     title:
      //       "عرين الأسود: سلسلة عمليات الثأر مستمرة بتوقيع ذئابنا المنفردة",
      //     body: 'شنّت قوات الاحتلال الصهيوني، فجر اليوم نعت مجموعات "عرين الأسود" ثلاثة من شهدائها الذين ارتقوا فجر اليوم الأحد، خلال اشتباك مسلح مع قوات الاحتلال قرب حاجز صرة غرب نابلس.',
      //     blogCategory: "سياسة",
      //     date: "الأحد 12 مارس 2023 06:44 م ",
      //     blogAuthor: "قناة الأقصى",
      //     imageUrl:
      //       "https://seraj.tv/thumb.php?src=uploads//images/4c7108dd084feb78cfd3a39c63c8b23b.jpg&w=780&h=450",
      //   },
      //   {
      //     title:
      //       "عرين الأسود: سلسلة عمليات الثأر مستمرة بتوقيع ذئابنا المنفردة",
      //     body: 'شنّت قوات الاحتلال الصهيوني، فجر اليوم نعت مجموعات "عرين الأسود" ثلاثة من شهدائها الذين ارتقوا فجر اليوم الأحد، خلال اشتباك مسلح مع قوات الاحتلال قرب حاجز صرة غرب نابلس.',
      //     blogCategory: "سياسة",
      //     date: "الأحد 12 مارس 2023 06:44 م ",
      //     blogAuthor: "قناة الأقصى",
      //     imageUrl:
      //       "https://seraj.tv/thumb.php?src=uploads//images/4c7108dd084feb78cfd3a39c63c8b23b.jpg&w=780&h=450",
      //   },
      // ],
      
    };
  },
  mounted() {
    axios.get('https://bnma-news.onrender.com/api/news/policy')
      .then(response => { 
        this.news = response.data;
        console.log(this.news);
      })
      .catch(error => {
        this.error = error.message;
      });
  },
  // methods: {
  //     getNewsPolocy(){
  //       // axios.get('http://localhost:8000/api/news/policy').then( res => {
  //       //   console.log(res.data);
  //       // });
         
  //     }
  //   },
  
=======
import axios from "axios";

export default {
    name: "PoliticsPage",
    data() {
        return {
            pagNumber: 1,
            textSearch: "",
            news: []
            // news: [
            //     {
            //         title: "المصادقة بالقراءة الأولى على عودة الاستيطان لشمال الضفة",
            //         body: 'صادقت الكنيست الصهيونية مساء الإثنين وبالقراءة الأولى على مشروع قانون إلغاء "قانون الانسحاب من شمال الضفة الغربية"، والذي يفتح الباب أمام عودة 4 مستوطنات بين نابلس وجنين.',
            //         blogCategory: "سياسة",
            //         date: "الثلاثاء 14 مارس 2023 10:29 ص",
            //         blogAuthor: "قناة الأقصى",
            //         imageUrl:
            //             "https://seraj.tv/thumb.php?src=uploads/images/23cdf7627a9e1ebcdc1172bb343a26fc.jpg&w=780&h=450",
            //     },
            //     {
            //         title: "العاروري: صبرنا ينفد وسنكون عند ثقة شعبنا بنا",
            //         body: 'أكد نائب رئيس المكتب السياسي لحركة "حماس" الشيخ صالح العاروري أن محاولة الاحتلال توظيف شهر رمضان لفرض سياسته في التقسيم الزماني والمكاني والسماح للمستوطنين بأداء الطقوس التلمودية سيواجه بردة فعل شعبنا بكل تأكيد.',
            //         blogCategory: "سياسة",
            //         date: " الثلاثاء 14 مارس 2023 11:38 ص ",
            //         blogAuthor: "قناة الأقصى",
            //         imageUrl:
            //             "https://seraj.tv/thumb.php?src=uploads//images/2722f6be123ba49b7fdca6b5978cc013.jpeg&w=780&h=450",
            //     },
            //     {
            //         title: "مواجهات واعتقالات بالقدس والضفة المحتلتين",
            //         body: "شنّت قوات الاحتلال الصهيوني، فجر اليوم الثلاثاء، حملة مداهمات واقتحامات واسعة في الضفة والقدس المحتلتين، تخللتها مواجهات واعتقالات طالت عددًا من الفلسطينيين.",
            //         blogCategory: "سياسة",
            //         date: "الثلاثاء 14 مارس 2023 08:18 ص",
            //         blogAuthor: "قناة الأقصى",
            //         imageUrl:
            //             "https://seraj.tv/thumb.php?src=uploads//images/1fd00ee8479a5665c0bc0589f4e00bd3.jpg&w=780&h=450",
            //     },
            //     {
            //         title: "الذكرى الـ19 لعملية أسدود البطولية المشتركة",
            //         body: "الرابع عشر من مارس، تاريخٌ يحفظه الصهاينة جيداً، لأنه يحمل معه ذكرى تحطيم نظرية أمنهم على صخرة أبناء المقاومة الذين مرغوا أنف الحكومة النازية بالتراب وأثبتوا أن كل التحصينات التي يتغنى بها العدو لا تمنع استشهادياً من بلوغ مرامه أو تحقيق هدفه.",
            //         blogCategory: "سياسة",
            //         date: " الثلاثاء 14 مارس 2023 08:30 ص",
            //         blogAuthor: "قناة الأقصى",
            //         imageUrl:
            //             "https://seraj.tv/thumb.php?src=uploads//images/5f361459bffefbf3f8b4148594a18369.jpg&w=780&h=450",
            //     },
            //     {
            //         title: "فؤاد الشوبكي فور الإفراج عنه: أسرانا شهداء مع وقف التنفيذ",
            //         body: "شنّت قوات الاحتلال الصهيوني، فجر اليوم أكد شيخ الأسرى اللواء فؤاد الشوبكي، فور الإفراج عنه اليوم الإثنين، أن الأسرى في سجون الاحتلال الصهيوني شهداء مع وقف التنفيذ.",
            //         blogCategory: "سياسة",
            //         date: " الإثنين 13 مارس 2023 03:54 م ",
            //         blogAuthor: "قناة الأقصى",
            //         imageUrl:
            //             "https://seraj.tv/thumb.php?src=uploads//images/1d453f4357afeb0f95be26418ec5a8e7.jpg&w=780&h=450",
            //     },
            //     {
            //         title:
            //             "عرين الأسود: سلسلة عمليات الثأر مستمرة بتوقيع ذئابنا المنفردة",
            //         body: 'شنّت قوات الاحتلال الصهيوني، فجر اليوم نعت مجموعات "عرين الأسود" ثلاثة من شهدائها الذين ارتقوا فجر اليوم الأحد، خلال اشتباك مسلح مع قوات الاحتلال قرب حاجز صرة غرب نابلس.',
            //         blogCategory: "سياسة",
            //         date: "الأحد 12 مارس 2023 06:44 م ",
            //         blogAuthor: "قناة الأقصى",
            //         imageUrl:
            //             "https://seraj.tv/thumb.php?src=uploads//images/4c7108dd084feb78cfd3a39c63c8b23b.jpg&w=780&h=450",
            //     },
            //     {
            //         title:
            //             "عرين الأسود: سلسلة عمليات الثأر مستمرة بتوقيع ذئابنا المنفردة",
            //         body: 'شنّت قوات الاحتلال الصهيوني، فجر اليوم نعت مجموعات "عرين الأسود" ثلاثة من شهدائها الذين ارتقوا فجر اليوم الأحد، خلال اشتباك مسلح مع قوات الاحتلال قرب حاجز صرة غرب نابلس.',
            //         blogCategory: "سياسة",
            //         date: "الأحد 12 مارس 2023 06:44 م ",
            //         blogAuthor: "قناة الأقصى",
            //         imageUrl:
            //             "https://seraj.tv/thumb.php?src=uploads//images/4c7108dd084feb78cfd3a39c63c8b23b.jpg&w=780&h=450",
            //     },
            //     {
            //         title:
            //             "عرين الأسود: سلسلة عمليات الثأر مستمرة بتوقيع ذئابنا المنفردة",
            //         body: 'شنّت قوات الاحتلال الصهيوني، فجر اليوم نعت مجموعات "عرين الأسود" ثلاثة من شهدائها الذين ارتقوا فجر اليوم الأحد، خلال اشتباك مسلح مع قوات الاحتلال قرب حاجز صرة غرب نابلس.',
            //         blogCategory: "سياسة",
            //         date: "الأحد 12 مارس 2023 06:44 م ",
            //         blogAuthor: "قناة الأقصى",
            //         imageUrl:
            //             "https://seraj.tv/thumb.php?src=uploads//images/4c7108dd084feb78cfd3a39c63c8b23b.jpg&w=780&h=450",
            //     },
            //     {
            //         title:
            //             "عرين الأسود: سلسلة عمليات الثأر مستمرة بتوقيع ذئابنا المنفردة",
            //         body: 'شنّت قوات الاحتلال الصهيوني، فجر اليوم نعت مجموعات "عرين الأسود" ثلاثة من شهدائها الذين ارتقوا فجر اليوم الأحد، خلال اشتباك مسلح مع قوات الاحتلال قرب حاجز صرة غرب نابلس.',
            //         blogCategory: "سياسة",
            //         date: "الأحد 12 مارس 2023 06:44 م ",
            //         blogAuthor: "قناة الأقصى",
            //         imageUrl:
            //             "https://seraj.tv/thumb.php?src=uploads//images/4c7108dd084feb78cfd3a39c63c8b23b.jpg&w=780&h=450",
            //     },
            //     {
            //         title:
            //             "عرين الأسود: سلسلة عمليات الثأر مستمرة بتوقيع ذئابنا المنفردة",
            //         body: 'شنّت قوات الاحتلال الصهيوني، فجر اليوم نعت مجموعات "عرين الأسود" ثلاثة من شهدائها الذين ارتقوا فجر اليوم الأحد، خلال اشتباك مسلح مع قوات الاحتلال قرب حاجز صرة غرب نابلس.',
            //         blogCategory: "سياسة",
            //         date: "الأحد 12 مارس 2023 06:44 م ",
            //         blogAuthor: "قناة الأقصى",
            //         imageUrl:
            //             "https://seraj.tv/thumb.php?src=uploads//images/4c7108dd084feb78cfd3a39c63c8b23b.jpg&w=780&h=450",
            //     },
            //     {
            //         title:
            //             "عرين الأسود: سلسلة عمليات الثأر مستمرة بتوقيع ذئابنا المنفردة",
            //         body: 'شنّت قوات الاحتلال الصهيوني، فجر اليوم نعت مجموعات "عرين الأسود" ثلاثة من شهدائها الذين ارتقوا فجر اليوم الأحد، خلال اشتباك مسلح مع قوات الاحتلال قرب حاجز صرة غرب نابلس.',
            //         blogCategory: "سياسة",
            //         date: "الأحد 12 مارس 2023 06:44 م ",
            //         blogAuthor: "قناة الأقصى",
            //         imageUrl:
            //             "https://seraj.tv/thumb.php?src=uploads//images/4c7108dd084feb78cfd3a39c63c8b23b.jpg&w=780&h=450",
            //     },
            //     {
            //         title:
            //             "عرين الأسود: سلسلة عمليات الثأر مستمرة بتوقيع ذئابنا المنفردة",
            //         body: 'شنّت قوات الاحتلال الصهيوني، فجر اليوم نعت مجموعات "عرين الأسود" ثلاثة من شهدائها الذين ارتقوا فجر اليوم الأحد، خلال اشتباك مسلح مع قوات الاحتلال قرب حاجز صرة غرب نابلس.',
            //         blogCategory: "سياسة",
            //         date: "الأحد 12 مارس 2023 06:44 م ",
            //         blogAuthor: "قناة الأقصى",
            //         imageUrl:
            //             "https://seraj.tv/thumb.php?src=uploads//images/4c7108dd084feb78cfd3a39c63c8b23b.jpg&w=780&h=450",
            //     },
            // ],
        };
    },
    mounted() {
/*
bnma-news.onrender.com
localhost:8000
 */

        axios.get('https://bnma-news.onrender.com/api/news/policy')
            .then(response => {
                this.news = response.data;
                console.log(response.data);
            })
            .catch(error => {
                console.log(error.toString());
                this.error = error.message;
            });
        // fetch('http://localhost:8000/api/news/policy').then(res=>res.json())
        //       .then(data=>{
        //         console.log('++++++++++++++++++++++++++');
        //         console.log(data)
        //       })
        //       .catch(err=>console.log(err.message))
    },
>>>>>>> 881620cd065357048e0238c53cb445733fe280cc
};
</script>
