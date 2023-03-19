<template>
  <div dir="rtl" lang="ar" class="sport-page">
    <!-- end header -->

    <div class="page-title wb">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
            <h2>
              الرياضة
            </h2>
          </div>
          <!-- end col -->
          <div
            class="col-lg-4 col-md-4 col-sm-12 hidden-xs-down hidden-sm-down"
          >
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#">الصفحة الرئيسئة</a></li>
              <li class="breadcrumb-item"><a href="#"></a></li>
              <li class="breadcrumb-item active">الرياضة</li>
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
                      <router-link class="page-link" to="/sport"
                        >السابق</router-link
                      >
                    </li>
                    <li
                      v-for="index in Math.ceil(news.length / 10)"
                      :key="index"
                      @click="pagNumber = index"
                      class="page-item"
                    >
                      <router-link class="page-link" to="/sport">{{
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
                      <router-link class="page-link" to="/sport"
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
                      placeholder="               بحث "
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
  name: "SportPage",
  data() {
    return {
      pagNumber: 1,
      textSearch: "",
      news: [
        {
          title: "ميسي عمك يا أبو كمال",
          body: "ميسي عمك يا أبو كمال ,ميسي عمك يا أبو كمال , ميسي عمك يا أبو كمال , ميسي عمك يا أبو كمال , ميسي عمك يا أبو كمال , ميسي عمك يا أبو كمال",
          blogCategory: "رياضة",
          date: "الأربعاء 14 مارس 2023 10:29 ص",
          blogAuthor: "موقع كووورة",
          imageUrl:
            "https://img.kooora.com/?i=ashraf-zamrani%2flionelmessi.gif",
        },
        {
          title: "تشافي يريح لاعبي برشلونة قبل الكلاسيكو",
          body: "استأنف برشلونة تدريباته، اليوم الإثنين، بعد أقل من 24 ساعة من إسقاط أتلتيك بيلباو، على ملعب سان ماميس، والحفاظ على فارق ال9 نقاط مع غريمه ريال مدريد . ويستعد برشلونة لمواجهة الكلاسيكو أمام الريال، يوم الأحد المقبل، على ملعب كامب نو، ضمن لقاءات الجولة 26 لليجا",
          blogCategory: "رياضة",
          date: " الأربعاء 14 مارس 2023 11:38 ص ",
          blogAuthor: "موقع كووورة",
          imageUrl:
            "https://img.kooora.com/?i=epa%2fsoccer%2f2023-03%2f2023-03-11%2f2023-03-11-10514871_epa.jpg",
        },
        {
          title: "سيرجي روبرتو.. اللغز المحير لجماهير برشلونة",
          body: "يمثل سيرجي روبرتو أحد أكبر الألغاز لعشاق برشلونة، الراغبين في معرفة السبب وراء تمسك المدرب تشافي بلاعب لم يقدم المردود المنتظر لسنوات عديدة.",
          blogCategory: "رياضة",
          date: "الأربعاء 14 مارس 2023 08:18 ص",
          blogAuthor: "موقع كووورة",
          imageUrl:
            "https://img.kooora.com/?i=afp%2f20230302%2f20230302-afp_33ae6wc_afp.jpg",
        },
        {
          title: "فاتي وفيران.. من يخلف بيكيه في قلوب جماهير الريال؟",
          body: "يتفنن جمهور فريقي ريال مدريد برشلونة، في ابتكار أساليب الشماتة بلاعبي الفريق الآخر، خصوصا فيما يتعلق بأدائهم على أرض الملعب، وهناك من يفضل مشاركة لاعبين معينين في الطرف المنافس، متفائلا بعدم قدرتهم على تحقيق الإضافة المأمولة.",
          blogCategory: "رياضة",
          date: " الأربعاء 14 مارس 2023 08:30 ص",
          blogAuthor: "موقع الأقتصادي",
          imageUrl:
            "https://img.kooora.com/?i=albums%2fmatches%2f2139473%2f20230302-afp_33ae643_afp.jpg",
        },
        {
          title: "قبل الكلاسيكو.. 'كامب نو' حصن منيع لبرشلونة في الليجا",
          body: "يتطلع برشلونة ومدربه تشافي هيرنانديز، لاستعادة لقب الدوري الإسباني الغائب منذ آخر تتويج للفريق في 2019. ويسير برشلونة بخطى جيدة للغاية هذا الموسم على المستوى المحلي، بينما تعثر كثيرًا على المستوى القاري، بالخروج من مسابقتي دوري أبطال أوروبا، والدوري الأوروبي.",
          blogCategory: "رياضة",
          date: " الإثنين 13 مارس 2023 03:54 م ",
          blogAuthor: "موقع كووورة",
          imageUrl:
            "https://img.kooora.com/?i=epa%2fsoccer%2f2023-03%2f2023-03-05%2f2023-03-05-10504908_epa.jpg",
        },
        {
          title: "برشلونة يفتح ملف مستقبل ديمبلي",
          body: "أكد تقرير صحفي إسباني، اليوم الأحد، أن برشلونة فتح ملف تجديد عقد لاعبه الفرنسي عثمان ديمبلي. وينتهي تعاقد ديمبلي مع البارسا، بنهاية الموسم المقبل، لكن برشلونة يسعى لإنهاء هذا الملف، قبل الميركاتو الصيفي، لحسم مصير اللاعب.",
          blogCategory: "رياضة",
          date: "الأحد 12 مارس 2023 06:44 م ",
          blogAuthor: "موقع كووورة",
          imageUrl:
            "https://img.kooora.com/?i=afp%2f20230126%2f20230126-afp_337u97v_afp.jpg",
        },
      ],
    };
  },
};
</script>
