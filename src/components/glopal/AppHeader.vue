<template>
  <div  :class="{'app-header':true,'d-none':(this.$route.path == '/' || this.$route.path ==  '/ourTeam' || this.$route.path == '/authPage')}">
    <div class="collapse top-search" id="collapseExample">
      <div class="card card-block">
        <div class="newsletter-widget text-center">
          <form class="form-inline">
            <input type="text" class="form-control" placeholder="What you are looking for?" />
            <button type="submit" class="btn btn-primary">
              <i class="fa fa-search"></i>
            </button>
          </form>
        </div>
        <!-- end newsletter -->
      </div>
    </div>
    <!-- end top-search -->

    <div class="topbar-section">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-6 hidden-xs-down">
            <div class="topsocial">
              <!-- <a href="#" data-toggle="tooltip" data-placement="bottom" title="Facebook"><i
                  class="fa fa-facebook"></i></a>
              <a href="#" data-toggle="tooltip" data-placement="bottom" title="Youtube"><i class="fa fa-youtube"></i></a>
              <a href="#" data-toggle="tooltip" data-placement="bottom" title="Pinterest"><i
                  class="fa fa-pinterest"></i></a>
              <a href="#" data-toggle="tooltip" data-placement="bottom" title="Twitter"><i class="fa fa-twitter"></i></a>
              <a href="#" data-toggle="tooltip" data-placement="bottom" title="Flickr"><i class="fa fa-flickr"></i></a>
              <a href="#" data-toggle="tooltip" data-placement="bottom" title="Instagram"><i
                  class="fa fa-instagram"></i></a>
              <a href="#" data-toggle="tooltip" data-placement="bottom" title="Google+"><i
                  class="fa fa-google-plus"></i></a> -->
                  <li class="list-inline-item">
                    <router-link to="/profile">
                      <i class="fa fa-user-circle-o" style="font-size: 25px;"></i>
                      <span style="font-size: 20px;">Profile</span></router-link>
                  </li>

            </div>
            <!-- end social -->
          </div>
          <!-- end col -->

          <div class="col-lg-4 hidden-md-down">
            <div class="topmenu text-center">
              <ul class="list-inline">
                <li class="list-inline-item">
                  <router-link to="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                     Trends
                    </router-link>
                </li>
                <li class="list-inline-item">
                  <a href="blog-category-02.html"><i class="fa fa-bolt"></i> Hot Topics</a>
                </li>
                <li class="list-inline-item">
                  <router-link to="/ourTeam">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="blue" class="bi bi-people-fill" viewBox="0 0 16 16">
                      <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                    </svg>
                    Our Team</router-link>
                </li>
                
              </ul>
              <!-- end ul -->
            </div>
            <!-- end topmenu -->
          </div>
          <!-- end col -->

          <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div class="topsearch text-right">
              <a data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample"><i
                  class="fa fa-search"></i> Search</a>
            </div>
            <!-- end search -->
          </div>
          <!-- end col -->
        </div>
        <!-- end row -->
      </div>
      <!-- end header-logo -->
    </div>
    <!-- end topbar -->

    <div class="header-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="logo">
              <router-link to="/homePage"><img height="200" src="../../../public/frontend/assets/images/logo.png" alt="" /></router-link>
            </div>
            <!-- end logo -->
          </div>
        </div>
        <!-- end row -->
      </div>
      <!-- end header-logo -->
    </div>
    <!-- end header -->

    <header class="header">
      <div class="container">
        <nav class="navbar navbar-inverse navbar-toggleable-md">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#cloapediamenu"
            aria-controls="cloapediamenu" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-md-center" id="cloapediamenu">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link class="nav-link color-pink-hover" to="/homePage">Home</router-link>
                <!-- <a class="nav-link color-pink-hover" href="index.html">Home</a> -->
              </li>
              <li class="nav-item dropdown has-submenu menu-large hidden-md-down hidden-sm-down hidden-xs-down">
                <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false">Categories</a>
                <ul class="dropdown-menu megamenu" aria-labelledby="dropdown01">
                  <li>
                    <div class="mega-menu-content clearfix">
                      <div class="tab">
                        <button class="tablinks active" onclick="openCategory(event, 'politics')">
                          Politics
                        </button>
                        <button class="tablinks" onclick="openCategory(event, 'economic')">
                          Economic
                        </button>
                        <button class="tablinks" onclick="openCategory(event, 'sport')">
                          Sport
                        </button>
                        <!-- <button class="tablinks" onclick="openCategory(event, 'cat04')">
                          Architecture
                        </button>
                        <button class="tablinks" onclick="openCategory(event, 'cat05')">
                          Recipes
                        </button> -->
                      </div>

                      <div class="tab-details clearfix">
                        <div id="politics" class="tabcontent active">
                          <div class="row">
                            <div v-for="newsItem in news.politics" :key="newsItem" class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                              <div class="blog-box">
                                <div class="post-media">
                                  <a href="single.html" title="">
                                    <img :src="newsItem.imageUrl" alt="" class="img-fluid" />
                                    <div class="hovereffect"></div>
                                    <!-- end hover -->
                                    <span class="menucat">{{ newsItem.by }}</span>
                                  </a>
                                </div>
                                <!-- end media -->
                                <div class="blog-meta">
                                  <h4>
                                    <a href="single.html" title="">{{ newsItem.title }}</a>
                                  </h4>
                                </div>
                                <!-- end meta -->
                              </div>
                              <!-- end blog-box -->
                            </div>
                          </div>
                          <!-- end row -->
                        </div>
                        <div id="economic" class="tabcontent">
                          <div class="row">
                            <div v-for="newsItem in news.economic" :key="newsItem" class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                              <div class="blog-box">
                                <div class="post-media">
                                  <a href="single.html" title="">
                                    <img :src="newsItem.imageUrl" alt="" class="img-fluid" />
                                    <div class="hovereffect"></div>
                                    <!-- end hover -->
                                    <span class="menucat">{{ newsItem.by }}</span>
                                  </a>
                                </div>
                                <!-- end media -->
                                <div class="blog-meta">
                                  <h4>
                                    <a href="single.html" title="">{{ newsItem.title }}</a>
                                  </h4>
                                </div>
                                <!-- end meta -->
                              </div>
                              <!-- end blog-box -->
                            </div>
                          </div>
                          <!-- end row -->
                        </div>
                        <div id="sport" class="tabcontent">
                          <div class="row">
                            <div v-for="newsItem in news.sport" :key="newsItem" class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                              <div class="blog-box">
                                <div class="post-media">
                                  <a href="single.html" title="">
                                    <img :src="newsItem.imageUrl" alt="" class="img-fluid" />
                                    <div class="hovereffect"></div>
                                    <!-- end hover -->
                                    <span class="menucat">{{ newsItem.by }}</span>
                                  </a>
                                </div>
                                <!-- end media -->
                                <div class="blog-meta">
                                  <h4>
                                    <a href="single.html" title="">{{ newsItem.title }}</a>
                                  </h4>
                                </div>
                                <!-- end meta -->
                              </div>
                              <!-- end blog-box -->
                            </div>
                          </div>
                          <!-- end row -->
                        </div>
                      </div>
                      <!-- end tab-details -->
                    </div>
                    <!-- end mega-menu-content -->
                  </li>
                </ul>
              </li>
              <!-- <li class="nav-item dropdown has-submenu">
                <a class="nav-link dropdown-toggle" href="#" id="dropdown02" data-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false">Features</a>
                <ul class="dropdown-menu" aria-labelledby="dropdown02">
                  <li>
                    <a class="dropdown-item" href="single.html">Single Blog
                      <span class="hidden-md-down hidden-sm-down hidden-xs-down"><i
                          class="fa fa-angle-right"></i></span></a>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="single.html">Single Default</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="single-fullwidth.html">Single Fullwidth</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="single-slider.html">Single Gallery</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="single-video.html">Single Video</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="single-audio.html">Single Audio</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="single-no-media.html">Single No Media</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a class="dropdown-item" href="single.html">Blog Category
                      <span class="hidden-md-down hidden-sm-down hidden-xs-down"><i
                          class="fa fa-angle-right"></i></span></a>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="blog-category-01.html">Blog Category A</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="blog-category-02.html">Blog Category B</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="blog-category-03.html">Blog Category C</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="blog-category-04.html">Blog Category D</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="blog-category-05.html">Blog Category E</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="blog-category-06.html">Blog Category F</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a class="dropdown-item" href="blog-author.html">Blog Author</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="page-contact.html">Contact Page</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="page.html">Default Page</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="page-fullwidth.html">Fullwidth Page</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="page-404.html">Not Found Page</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="page-sitemap.html">Sitemap & Archives</a>
                  </li>
                </ul>
              </li> -->
              <li class="nav-item">
                <router-link class="nav-link color-pink-hover" to="/politics">Politics</router-link>
                <!-- <a
                  class="nav-link color-pink-hover"
                  href="blog-category-01.html"
                  >Politics</a
                > -->
              </li>
              <li class="nav-item">
                <router-link class="nav-link color-red-hover" to="/Economic">Economic</router-link>
                <!-- <a class="nav-link color-red-hover" href="blog-category-02.html"
                  >Economic</a -->
                <!-- > -->
              </li>
              <li class="nav-item">
                <router-link class="nav-link color-aqua-hover" to="/sport">Sport</router-link>
                <!-- <a
                  class="nav-link color-aqua-hover"
                  href="blog-category-03.html"
                  >Sport</a
                > -->
              </li>
              <!-- <li class="nav-item">
                <router-link class="nav-link color-green-hover" to="/travel">Travel</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link color-yellow-hover" to="/vlogs">Vlogs</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link color-grey-hover" to="/health">Health</router-link>
              </li> -->
            </ul>
          </div>
        </nav>
      </div>
      <!-- end container -->
    </header>
    <!-- end header -->
  </div>
</template>
<script>
export default {
  name: "AppHeader",
  data(){
    return {
      news: {
        sport: [
          {
            title: 'قرعة ربع نهائي دوري أبطال أوروبا 2022-2023 ومواعيد مبارياتها',
            type: 'Sport',
            date: '17/3/2023',
            by: 'الجزيرة',
            imageUrl: 'https://www.aljazeera.net/wp-content/uploads/2023/03/00-9.jpg?resize=770%2C513&quality=80',
            description: `استأنف برشلونة تدريباته، اليوم الإثنين، بعد أقل من 24 ساعة من إسقاط أتلتيك بيلباو، على ملعب سان ماميس، والحفاظ على فارق ال9 نقاط مع غريمه ريال مدريد . ويستعد برشلونة لمواجهة الكلاسيكو أمام الريال، يوم الأحد المقبل، على ملعب كامب نو، ضمن لقاءات الجولة 26 لليجا`
          },
          {
            title: 'تشافي يريح لاعبي برشلونة قبل الكلاسيكو',
            type: 'Sport',
            date: 'الأربعاء 14 مارس 2023 11:38 ص ',
            by: 'موقع كووورة',
            imageUrl: 'https://img.kooora.com/?i=epa%2fsoccer%2f2023-03%2f2023-03-11%2f2023-03-11-10514871_epa.jpg',
            description: `يمثل سيرجي روبرتو أحد أكبر الألغاز لعشاق برشلونة، الراغبين في معرفة السبب وراء تمسك المدرب تشافي بلاعب لم يقدم المردود المنتظر لسنوات عديدة.
`
          },
          {
            title: 'قرعة ربع نهائي دوري أبطال أوروبا 2022-2023 ومواعيد مبارياتها',
            type: 'Sport',
            date: '17/3/2023',
            by: 'الجزيرة',
            imageUrl: 'https://www.aljazeera.net/wp-content/uploads/2023/03/00-9.jpg?resize=770%2C513&quality=80',
            description: `استأنف برشلونة تدريباته، اليوم الإثنين، بعد أقل من 24 ساعة من إسقاط أتلتيك بيلباو، على ملعب سان ماميس، والحفاظ على فارق ال9 نقاط مع غريمه ريال مدريد . ويستعد برشلونة لمواجهة الكلاسيكو أمام الريال، يوم الأحد المقبل، على ملعب كامب نو، ضمن لقاءات الجولة 26 لليجا

`
          },
          {
            title: 'تشافي يريح لاعبي برشلونة قبل الكلاسيكو',
            type: 'Sport',
            date: 'الأربعاء 14 مارس 2023 11:38 ص ',
            by: 'موقع كووورة',
            imageUrl: 'https://img.kooora.com/?i=epa%2fsoccer%2f2023-03%2f2023-03-11%2f2023-03-11-10514871_epa.jpg',
            description: `يمثل سيرجي روبرتو أحد أكبر الألغاز لعشاق برشلونة، الراغبين في معرفة السبب وراء تمسك المدرب تشافي بلاعب لم يقدم المردود المنتظر لسنوات عديدة.
`
          },

        ],
        politics: [
          {
            title: 'المصادقة بالقراءة الأولى على عودة الاستيطان لشمال الضفة',
            type: 'Politics',
            date: 'الثلاثاء 14 مارس 2023 10:29 ص',
            by: 'قناة الأقصى',
            imageUrl: 'https://seraj.tv/thumb.php?src=uploads/images/23cdf7627a9e1ebcdc1172bb343a26fc.jpg&w=780&h=450',
          },
          {
            title: 'العاروري: صبرنا ينفد وسنكون عند ثقة شعبنا بنا',
            type: 'Politics',
            date: 'الثلاثاء 14 مارس 2023 11:38 ص ',
            by: 'قناة الأقصى',
            imageUrl: 'https://seraj.tv/thumb.php?src=uploads//images/2722f6be123ba49b7fdca6b5978cc013.jpeg&w=780&h=450',
          },
          {
            title: 'مواجهات واعتقالات بالقدس والضفة المحتلتين',
            type: 'Politics',
            date: 'الثلاثاء 14 مارس 2023 08:18 ص',
            by: 'قناة الأقصى',
            imageUrl: 'https://seraj.tv/thumb.php?src=uploads//images/1fd00ee8479a5665c0bc0589f4e00bd3.jpg&w=780&h=450',
          },
          {
            title: 'الذكرى الـ19 لعملية أسدود البطولية المشتركة',
            type: 'Politics',
            date: 'الثلاثاء 14 مارس 2023 08:30 ص',
            by: 'قناة الأقصى',
            imageUrl: 'https://seraj.tv/thumb.php?src=uploads//images/5f361459bffefbf3f8b4148594a18369.jpg&w=780&h=450',
          },
        ],
        economic: [
          {
            title: 'البنك الإسلامي الفلسطيني يرعى إطلاق كتاب "المصارف الإسلامية بين الواقع والمأمول',
            type: 'Economic',
            date: 'الأربعاء 14 مارس 2023 10:29 ص',
            by: 'موقع الأقتصادي',
            imageUrl: 'https://www.aliqtisadi.ps//public/files/4541%D9%87%D9%86%D8%AA/ba73ec5f-fb58-4f59-ad94-f185c8838990.jfif',
            description: `
الاقتصادي: قدم البنك الإسلامي الفلسطيني رعايته لإطلاق كتاب "المصارف الإسلامية بين الواقع والمأمول" والذي يلخص وقائع المؤتمر الأكاديمي السادس الذي نظمته الهيئة الإسلامية العليا في القدس بمشاركة العديد من الباحثين المهتمين بالصيرفة الإسلامية في فلسطين والعالم، وذلك كجزء من جهود البنك لتطوير الصناعة المالية الإسلامية في فلسطين.`
          },
          {
            title: 'رسمياً.. شركة البركة للتأمين الإسلامي تدخل السوق المحلية',
            type: 'Economic',
            date: 'الأربعاء 14 مارس 2023 11:38 ص ',
            by: 'موقع الأقتصادي',
            imageUrl: 'https://www.aliqtisadi.ps//public/files/image/2020/untitled%20folder%203/334102704_909752506832878_8918314473661822180_n.jpg',
            description: `الاقتصادي: ارتفع عدد شركات التأمين التكافلي العاملة وفق أحكام الشريعة الإسلامية، إلى ثلاث شركات في فلسطين، بعد دخول شركة جديدة إلى السوق مطلع العام الجاري .وأدرجت شركة البركة للتأمين الإسلامي، في قائمة شركات التأمين المرخصة لعام 2023، الصادرة عن هيئة سوق رأس المال الفلسطينية.`
          },
          {
            title: 'غرفة تجارة رام الله والبيرة: اجتماعات مع موردي المواد الغذائية لخفض الأسعار قبل رمضان',
            type: 'Economic',
            date: 'الأربعاء 14 مارس 2023 08:18 ص',
            by: 'موقع الأقتصادي',
            imageUrl: 'https://www.aliqtisadi.ps//public/files/4541%D9%87%D9%86%D8%AA/334983868_1240786543523357_1805672528567298355_n.jpg',
            description: `الاقتصادي: بثينة سفاريني- قال محمد زيد النبالي، نائب رئيس الغرفة التجارية لمحافظة رام الله والبيرة إن أسعار المواد الغذائية ستكون مناسبة في شهر رمضان، مضيفًا أنه سيتم عقد اجتماع لمستوردي المواد الغذائية من أجل خفض الأسعار خلال الشهر.`
          },
          {
            title: 'محادثات فلسطينية ليتوانية لتطوير علاقات التعاون الاقتصادية بين البلدين',
            type: 'Economic',
            date: 'الأربعاء 14 مارس 2023 08:30 ص',
            by: 'موقع الأقتصادي',
            imageUrl: 'https://www.aliqtisadi.ps//public/files/4541%D9%87%D9%86%D8%AA/c62c9972-575f-4ff9-9b51-f92aae2cf0ec.jfif',
            description: `
الاقتصادي: أجرى وزير الاقتصاد الوطني خالد عسيلي محادثات مع المسؤولين في جمهورية ليتوانيا لتعزيز وتوطيد علاقات التعاون الاقتصادية والتجارية بين البلدين وإقامة شراكات استثمارية بين القطاع الخاص الفلسطيني ونظيره الليتواني.`
          },
        ]
      }
    }
  }
};
</script>
