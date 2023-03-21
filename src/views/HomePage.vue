<template>
  <!-- LOADER -->
  <!-- <div id="preloader">
    <img class="preloader" src="images/loader.gif" alt="" />
  </div> -->
  <!-- end loader -->
  <!-- END LOADER -->

  <div id="master-app">
    <!-- end header -->
    <section class="section first-section">
      <div class="container-fluid">
        <div class="masonry-blog clearfix">
          <div class="left-side">
            <div class="masonry-box post-media">
              <img :src="news.sport[0].imageUrl" alt="" class="img-fluid" />
              <div class="shadoweffect">
                <div class="shadow-desc">
                  <div class="blog-meta">
                    <span class="bg-aqua"><a href="blog-category-01.html" title="">{{ news.sport[0].type }}</a></span>
                    <h4>
                      <router-link to="/details">{{ news.sport[0].title }}</router-link>
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
              <img :src="news.politics[0].imageUrl" alt="" class="img-fluid" />
              <div class="shadoweffect">
                <div class="shadow-desc">
                  <div class="blog-meta">
                    <span class="bg-pink"><a href="blog-category-01.html" title="">{{ news.politics[0].type }}</a></span>
                    <h4>
                      <router-link to="/details">{{ news.politics[0].title }}</router-link>
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
              <img :src="newsItem.imageUrl" alt="" class="img-fluid" />
              <div class="shadoweffect">
                <div class="shadow-desc">
                  <div class="blog-meta">
                    <span class="bg-pink"><a href="blog-category-01.html" title="">{{ newsItem.type }}</a></span>
                    <h4>
                      <router-link to="/details">{{ newsItem.title }}</router-link>
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
              <img :src="news.sport[1].imageUrl" alt="" class="img-fluid" />
              <div class="shadoweffect">
                <div class="shadow-desc">
                  <div class="blog-meta">
                    <span class="bg-aqua"><a href="blog-category-01.html" title="">{{ news.sport[1].type }}</a></span>
                    <h4>
                      <router-link to="/details">{{ news.sport[1].title }}</router-link>
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
                <a href="blog-category-01.html" title="">{{ news.sport[0].type }}</a>
              </h3>
            </div>
            <!-- end title -->

            <div class="row">
              <div v-for="newsItem in [news.sport[2], news.sport[3]]" :key="newsItem"
                class="col-lg-12 col-md-12 col-sm-12 col-xs-12">


                <div class="blog-box">
                  <div class="post-media">
                    <a href="single.html" title="">
                      <img :src="newsItem.imageUrl" alt="" class="img-fluid" />
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
                </div>
                <hr class="invis" />
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
                <a href="blog-category-01.html" title="">{{ news.politics[0].type }}</a>
              </h3>
            </div>
            <!-- end title -->
            <div class="row">
              <div
                v-for="newsItem in [news.politics[3], news.politics[4], news.politics[5], news.politics[6], news.politics[7], news.politics[8], news.politics[9], news.politics[10]]"
                :key="newsItem" class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div class="blog-box">
                  <div class="post-media">
                    <a href="single.html" title="">
                      <img :src="newsItem.imageUrl" alt="" class="img-fluid" />
                      <div class="hovereffect">
                        <span></span>
                      </div>
                      <!-- end hover -->
                    </a>
                  </div>
                  <!-- end media -->
                  <div class="blog-meta">
                    <h4>
                      <a href="single.html" title="">{{ newsItem.title }}</a>
                    </h4>
                    <small><a href="blog-category-01.html" title="">{{ newsItem.type }}</a></small>
                    <small><a href="blog-category-01.html" title="">{{ newsItem.date }}</a></small>
                  </div>
                  <!-- end meta -->
                </div>
                <!-- end blog-box -->

                <hr class="invis" />
              </div>
              <!-- end col -->
            </div>
            <!-- end row -->
          </div>
          <!-- end col -->
        </div>
        <!-- end row -->

        <hr class="invis1" />

        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="banner-spot clearfix">
              <div class="banner-img">
                <img
                  src="https://img.freepik.com/free-vector/ramadan-kareem-arabic-golden-banner_1017-31088.jpg?size=626&ext=jpg&ga=GA1.2.1958355492.1677405070&semt=ais"
                  alt="" class="img-fluid" />
              </div>
              <!-- end banner-img -->
            </div>
            <!-- end banner -->
          </div>
          <!-- end col -->
        </div>
        <!-- end row -->

        <hr class="invis1" />

        <div class="row">
          <div class="col-lg-9">
            <div class="blog-list clearfix">
              <div class="section-title">
                <h3 class="color-green">
                  <a href="blog-category-01.html" title="">{{ news.economic[0].type }}</a>
                </h3>
              </div>
              <!-- end title -->

              <div v-for="newsItem in [news.economic[0], news.economic[1], news.economic[2]]" :key="newsItem"
                class="blog-box row">
                <div class="col-md-4">
                  <div class="post-media">
                    <a href="single.html" title="">
                      <img :src="newsItem.imageUrl" alt="" class="img-fluid" />
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
                <hr class="invis" />
              </div>
              <!-- end blog-box -->
            </div>
            <!-- end blog-list -->

            <hr class="invis" />

            
            <!-- end blog-list -->
          </div>
          <!-- end col -->

        
          <!-- end col -->
        </div>
        <!-- end row -->

        <hr class="invis1" />

        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="banner-spot clearfix">
              <div class="banner-img">
                <img height="1" src="https://img.freepik.com/free-vector/ramadan-kareem-arabic-golden-banner_1017-31088.jpg?size=626&ext=jpg&ga=GA1.2.1958355492.1677405070&semt=ais" alt="" class="img-fluid" />
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
export default {
  data() {
    return {
      news: {
        sport: [
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
          {
            title: 'فؤاد الشوبكي فور الإفراج عنه: أسرانا شهداء مع وقف التنفيذ',
            type: 'Politics',
            date: 'الإثنين 13 مارس 2023 03:54 م ',
            by: 'قناة الأقصى',
            imageUrl: 'https://seraj.tv/thumb.php?src=uploads//images/1d453f4357afeb0f95be26418ec5a8e7.jpg&w=780&h=450',
          },
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
            title: 'مواجهات واعتقالات بالقدس والضفة المحتلتين',
            type: 'Politics',
            date: 'الثلاثاء 14 مارس 2023 08:18 ص',
            by: 'قناة الأقصى',
            imageUrl: 'https://seraj.tv/thumb.php?src=uploads//images/1fd00ee8479a5665c0bc0589f4e00bd3.jpg&w=780&h=450',
          },
          {
            title: 'مواجهات واعتقالات بالقدس والضفة المحتلتين',
            type: 'Politics',
            date: 'الثلاثاء 14 مارس 2023 08:18 ص',
            by: 'قناة الأقصى',
            imageUrl: 'https://seraj.tv/thumb.php?src=uploads//images/1fd00ee8479a5665c0bc0589f4e00bd3.jpg&w=780&h=450',
          },
          {
            title: 'مواجهات واعتقالات بالقدس والضفة المحتلتين',
            type: 'Politics',
            date: 'الثلاثاء 14 مارس 2023 08:18 ص',
            by: 'قناة الأقصى',
            imageUrl: 'https://seraj.tv/thumb.php?src=uploads//images/1fd00ee8479a5665c0bc0589f4e00bd3.jpg&w=780&h=450',
          },
          {
            title: 'مواجهات واعتقالات بالقدس والضفة المحتلتين',
            type: 'Politics',
            date: 'الثلاثاء 14 مارس 2023 08:18 ص',
            by: 'قناة الأقصى',
            imageUrl: 'https://seraj.tv/thumb.php?src=uploads//images/1fd00ee8479a5665c0bc0589f4e00bd3.jpg&w=780&h=450',
          },
          {
            title: 'مواجهات واعتقالات بالقدس والضفة المحتلتين',
            type: 'Politics',
            date: 'الثلاثاء 14 مارس 2023 08:18 ص',
            by: 'قناة الأقصى',
            imageUrl: 'https://seraj.tv/thumb.php?src=uploads//images/1fd00ee8479a5665c0bc0589f4e00bd3.jpg&w=780&h=450',
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
}
</script>

