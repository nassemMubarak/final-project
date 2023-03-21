<template>
  <div dir="rtl" lang="ar"  id="politics" class="Economic-app">
    <div class="page-title wb">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
            <h2>
               الأقتصاد
            </h2>
          </div>
          <!-- end col -->
          <div
            class="col-lg-4 col-md-4 col-sm-12 hidden-xs-down hidden-sm-down"
          >
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#">الصفحة الرئيسئة</a></li>
              <li class="breadcrumb-item"><a href="#"></a></li>
              <li class="breadcrumb-item active">الأقتصاد</li>
            </ol>
          </div>
          <!-- end col -->
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
                        <router-link to="/details"> <img :src="item.imageUrl" alt="" class="img-fluid" />
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
                        item.blogAuthor
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

                <hr class="invis" />
              </div>
              <!-- end blog-list -->
            </div>
            <!-- end page-wrapper -->

            <hr class="invis" />

            <div class="row">
              <div class="col-md-12">
                <nav aria-label="Page navigation">
                  <ul class="pagination justify-content-start">
                    <li
                      @click="pagNumber == 1 ? pagNumber : pagNumber--"
                      class="page-item"
                    >
                      <router-link class="page-link" to="/Economic"
                        >السابق</router-link
                      >
                    </li>
                    <li
                      v-for="index in Math.ceil(news.length / 10)"
                      :key="index"
                      @click="pagNumber = index"
                      class="page-item"
                    >
                      <router-link class="page-link" to="/Economic">{{
                        index
                      }}</router-link>
                    </li>
                    <li
                      @click="
                        Math.ceil(news.length / 10) == pagNumber
                          ? pagNumber
                          : pagNumber++
                      "
                      class="page-item"
                    >
                      <router-link class="page-link" to="/Economic"
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
                      placeholder="Search on the site"
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
                          :src="item.imageUrl"
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
</template>
<script>
export default {
  name: "EconomicPage",
  data() {
    return {
      pagNumber: 1,
      textSearch: "",
      news: [
        {
          title:
            'البنك الإسلامي الفلسطيني يرعى إطلاق كتاب ',
          body: 'الاقتصادي: قدم البنك الإسلامي الفلسطيني رعايته لإطلاق كتاب "المصارف الإسلامية بين الواقع والمأمول" والذي يلخص وقائع المؤتمر الأكاديمي السادس الذي نظمته الهيئة الإسلامية العليا في القدس بمشاركة العديد من الباحثين المهتمين بالصيرفة الإسلامية في فلسطين والعالم، وذلك كجزء من جهود البنك لتطوير الصناعة المالية الإسلامية في فلسطين.',
          blogCategory: "اقتصاد",
          date: "الأربعاء 14 مارس 2023 10:29 ص",
          blogAuthor: "موقع الأقتصادي",
          imageUrl:
            "https://www.aliqtisadi.ps//public/files/4541%D9%87%D9%86%D8%AA/ba73ec5f-fb58-4f59-ad94-f185c8838990.jfif",
        },
        {
          title: "رسمياً.. شركة البركة للتأمين الإسلامي تدخل السوق المحلية",
          body: "الاقتصادي: ارتفع عدد شركات التأمين التكافلي العاملة وفق أحكام الشريعة الإسلامية، إلى ثلاث شركات في فلسطين، بعد دخول شركة جديدة إلى السوق مطلع العام الجاري .وأدرجت شركة البركة للتأمين الإسلامي، في قائمة شركات التأمين المرخصة لعام 2023، الصادرة عن هيئة سوق رأس المال الفلسطينية.",
          blogCategory: "اقتصاد",
          date: " الأربعاء 14 مارس 2023 11:38 ص ",
          blogAuthor: "موقع الأقتصادي",
          imageUrl:
            "https://www.aliqtisadi.ps//public/files/image/2020/untitled%20folder%203/334102704_909752506832878_8918314473661822180_n.jpg",
        },
        {
          title:
            "اجتماعات مع موردي المواد لخفض الأسعار قبل رمضان",
          body: "الاقتصادي: بثينة سفاريني- قال محمد زيد النبالي، نائب رئيس الغرفة التجارية لمحافظة رام الله والبيرة إن أسعار المواد الغذائية ستكون مناسبة في شهر رمضان، مضيفًا أنه سيتم عقد اجتماع لمستوردي المواد الغذائية من أجل خفض الأسعار خلال الشهر.",
          blogCategory: "اقتصاد",
          date: "الأربعاء 14 مارس 2023 08:18 ص",
          blogAuthor: "موقع الأقتصادي",
          imageUrl:
            "https://www.aliqtisadi.ps//public/files/4541%D9%87%D9%86%D8%AA/334983868_1240786543523357_1805672528567298355_n.jpg",
        },
        {
          title:
            "محادثات فلسطينية ليتوانية لتطوير علاقات التعاون الاقتصادية بين البلدين",
          body: "الاقتصادي: أجرى وزير الاقتصاد الوطني خالد عسيلي محادثات مع المسؤولين في جمهورية ليتوانيا لتعزيز وتوطيد علاقات التعاون الاقتصادية والتجارية بين البلدين وإقامة شراكات استثمارية بين القطاع الخاص الفلسطيني ونظيره الليتواني.",
          blogCategory: "اقتصاد",
          date: " الأربعاء 14 مارس 2023 08:30 ص",
          blogAuthor: "موقع الأقتصادي",
          imageUrl:
            "https://www.aliqtisadi.ps//public/files/4541%D9%87%D9%86%D8%AA/c62c9972-575f-4ff9-9b51-f92aae2cf0ec.jfif",
        },
        {
          title:
            "هيئة سوق رأس المال: ارتفاع محفظة التـأجير التمويلي بنسبة 40% في 2022",
          body: "الاقتصادي: بثينة سفاريني- قال براق النابلسي مدير عام هيئة سوق رأس المال إن التأجير التمويلي هو من وسائل التمويل الإضافية، إلى جانب القطاع المصرفي، وهو يوفر مصدر تمويلي لأصحاب المنشآت والحرف والمشاريع الصغيرة والمتوسطة.",
          blogCategory: "اقتصاد",
          date: " الإثنين 13 مارس 2023 03:54 م ",
          blogAuthor: "موقع الأقتصادي",
          imageUrl:
            "https://www.aliqtisadi.ps//public/files/4541%D9%87%D9%86%D8%AA/335162317_727311579031953_8882415846713655037_n.jpg",
        },
        {
          title: "النفط يواصل الهبوط وسط مخاوف من أزمة مالية جديدة",
          body: "الاقتصادي - رويترز: انخفضت أسعار النفط أكثر من دولار اليوم الثلاثاء، لتواصل خسائرها للجلسة الثانية، إذ أدى انهيار بنك وادي السيليكون (سيليكون فالي SVB) إلى هزة في أسواق الأسهم وأثار مخاوف من وقوع أزمة مالية جديدة. وتراجعت العقود الآجلة لخام برنت 1.1% إلى 79.90 دولارا للبرميل بحلول الساعة 03:45 بتوقيت غرينتش.",
          blogCategory: "اقتصاد",
          date: "الأحد 12 مارس 2023 06:44 م ",
          blogAuthor: "موقع الأقتصادي",
          imageUrl:
            "https://www.aliqtisadi.ps//public/files/image/2020/untitled%20folder%202/image123231232.jpeg",
        },
      ],
    };
  },
};
</script>
