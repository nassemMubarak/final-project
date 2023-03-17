<template>
    <div :class="{'app-footer':true,'d-none':this.$route.path == '/'}">
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <div class="widget">
                            <h2 class="widget-title">المشاركات الاخيرة</h2>
                            <div class="blog-list-widget">
                                <div class="list-group">
                                    <a v-for="items in news.slice(0, 3)" :key="items" class="list-group-item list-group-item-action flex-column align-items-start">
                                        <div class="w-100 justify-content-between">
                                            <img :src="items.imageUrl" alt="" class="img-fluid float-left">
                                            <h5 class="mb-1">{{ items.title }}</h5>
                                            <small>{{ items.date }}</small>
                                        </div>
                                    </a>

                                </div>
                            </div><!-- end blog-list -->
                        </div><!-- end widget -->
                    </div><!-- end col -->

                    <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <div class="widget">
                            <h2 class="widget-title">منشورات شائعة</h2>
                            <div class="blog-list-widget">
                                <div class="list-group">
                                    <a v-for="items in news.slice(0, 3)" :key="items" class="list-group-item list-group-item-action flex-column align-items-start">
                                        <div class="w-100 justify-content-between">
                                            <img :src="items.imageUrl" alt="" class="img-fluid float-left">
                                            <h5 class="mb-1">{{ items.title }}</h5>
                                            <small>{{ items.date }}</small>
                                        </div>
                                    </a>

                                </div>
                            </div><!-- end blog-list -->
                        </div><!-- end widget -->
                    </div><!-- end col -->

                    <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <div class="widget">
                            <h2 class="widget-title">Popular Categories</h2>
                            <div class="link-widget">
                                <ul>
                                    <li><a href="#">Fahsion <span>(21)</span></a></li>
                                    <li><a href="#">Lifestyle <span>(15)</span></a></li>
                                    <li><a href="#">Art & Design <span>(31)</span></a></li>
                                    <li><a href="#">Health Beauty <span>(22)</span></a></li>
                                    <li><a href="#">Clothing <span>(66)</span></a></li>
                                    <li><a href="#">Entertaintment <span>(11)</span></a></li>
                                    <li><a href="#">Food & Drink <span>(87)</span></a></li>
                                </ul>
                            </div><!-- end link-widget -->
                        </div><!-- end widget -->
                    </div><!-- end col -->
                </div><!-- end row -->

                <hr class="invis1">

                <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                        <div class="widget">
                            <div class="footer-text text-center">
                                <router-link to="/"><img src="../../../public/frontend/assets/images/logo.png" alt="" /></router-link>
                                <!-- <a href="index.html" @click.><img src="../../../public/frontend/assets/images/logo.png" alt="" class="img-fluid"></a> -->
                                <p>Cloapedia is a personal blog for handcrafted, cameramade photography content, fashion styles from independent creatives around the world.</p>
                                <div class="social">
                                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="Facebook"><i class="fa fa-facebook"></i></a>              
                                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="Twitter"><i class="fa fa-twitter"></i></a>
                                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="Instagram"><i class="fa fa-instagram"></i></a>
                                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="Google Plus"><i class="fa fa-google-plus"></i></a>
                                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="Pinterest"><i class="fa fa-pinterest"></i></a>
                                </div>

                                <hr class="invis">

                                <div class="newsletter-widget text-center">
                                    <form class="form-inline">
                                        <input type="text" class="form-control" placeholder="Enter your email address">
                                        <button type="submit" class="btn btn-primary">Subscribe <i class="fa fa-envelope-open-o"></i></button>
                                    </form>
                                </div><!-- end newsletter -->
                            </div><!-- end footer-text -->
                        </div><!-- end widget -->
                    </div><!-- end col -->
                </div>
                <div class="row">
                    <div class="col-md-12 text-center">
                        <br>
                        <div class="copyright">&copy; Cloapedia. Design: <a href="http://html.design">HTML Design</a>.</div>
                    </div>
                </div>
            </div><!-- end container -->
        </footer><!-- end footer -->

        <div class="dmtop">Scroll to Top</div>
        
    </div>
</template>
<script>
export default {
    name: "AppFooter",
    data() {
      return {
        pagNumber: 1,
        textSearch: "",
        news: [
          {
            title: "المصادقة بالقراءة الأولى على عودة الاستيطان لشمال الضفة",
            body: 'صادقت الكنيست الصهيونية مساء الإثنين وبالقراءة الأولى على مشروع قانون إلغاء "قانون الانسحاب من شمال الضفة الغربية"، والذي يفتح الباب أمام عودة 4 مستوطنات بين نابلس وجنين.',
            blogCategory: "سياسة",
            date: "الثلاثاء 14 مارس 2023 10:29 ص",
            blogAuthor: "قناة الأقصى",
            imageUrl:
              "https://seraj.tv/thumb.php?src=uploads/images/23cdf7627a9e1ebcdc1172bb343a26fc.jpg&w=780&h=450",
          },
          {
            title: "العاروري: صبرنا ينفد وسنكون عند ثقة شعبنا بنا",
            body: 'أكد نائب رئيس المكتب السياسي لحركة "حماس" الشيخ صالح العاروري أن محاولة الاحتلال توظيف شهر رمضان لفرض سياسته في التقسيم الزماني والمكاني والسماح للمستوطنين بأداء الطقوس التلمودية سيواجه بردة فعل شعبنا بكل تأكيد.',
            blogCategory: "سياسة",
            date: " الثلاثاء 14 مارس 2023 11:38 ص ",
            blogAuthor: "قناة الأقصى",
            imageUrl:
              "https://seraj.tv/thumb.php?src=uploads//images/2722f6be123ba49b7fdca6b5978cc013.jpeg&w=780&h=450",
          },
          {
            title: "مواجهات واعتقالات بالقدس والضفة المحتلتين",
            body: "شنّت قوات الاحتلال الصهيوني، فجر اليوم الثلاثاء، حملة مداهمات واقتحامات واسعة في الضفة والقدس المحتلتين، تخللتها مواجهات واعتقالات طالت عددًا من الفلسطينيين.",
            blogCategory: "سياسة",
            date: "الثلاثاء 14 مارس 2023 08:18 ص",
            blogAuthor: "قناة الأقصى",
            imageUrl:
              "https://seraj.tv/thumb.php?src=uploads//images/1fd00ee8479a5665c0bc0589f4e00bd3.jpg&w=780&h=450",
          },
          {
            title: "الذكرى الـ19 لعملية أسدود البطولية المشتركة",
            body: "الرابع عشر من مارس، تاريخٌ يحفظه الصهاينة جيداً، لأنه يحمل معه ذكرى تحطيم نظرية أمنهم على صخرة أبناء المقاومة الذين مرغوا أنف الحكومة النازية بالتراب وأثبتوا أن كل التحصينات التي يتغنى بها العدو لا تمنع استشهادياً من بلوغ مرامه أو تحقيق هدفه.",
            blogCategory: "سياسة",
            date: " الثلاثاء 14 مارس 2023 08:30 ص",
            blogAuthor: "قناة الأقصى",
            imageUrl:
              "https://seraj.tv/thumb.php?src=uploads//images/5f361459bffefbf3f8b4148594a18369.jpg&w=780&h=450",
          },
          {
            title: "فؤاد الشوبكي فور الإفراج عنه: أسرانا شهداء مع وقف التنفيذ",
            body: "شنّت قوات الاحتلال الصهيوني، فجر اليوم أكد شيخ الأسرى اللواء فؤاد الشوبكي، فور الإفراج عنه اليوم الإثنين، أن الأسرى في سجون الاحتلال الصهيوني شهداء مع وقف التنفيذ.",
            blogCategory: "سياسة",
            date: " الإثنين 13 مارس 2023 03:54 م ",
            blogAuthor: "قناة الأقصى",
            imageUrl:
              "https://seraj.tv/thumb.php?src=uploads//images/1d453f4357afeb0f95be26418ec5a8e7.jpg&w=780&h=450",
          },
          {
            title:
              "عرين الأسود: سلسلة عمليات الثأر مستمرة بتوقيع ذئابنا المنفردة",
            body: 'شنّت قوات الاحتلال الصهيوني، فجر اليوم نعت مجموعات "عرين الأسود" ثلاثة من شهدائها الذين ارتقوا فجر اليوم الأحد، خلال اشتباك مسلح مع قوات الاحتلال قرب حاجز صرة غرب نابلس.',
            blogCategory: "سياسة",
            date: "الأحد 12 مارس 2023 06:44 م ",
            blogAuthor: "قناة الأقصى",
            imageUrl:
              "https://seraj.tv/thumb.php?src=uploads//images/4c7108dd084feb78cfd3a39c63c8b23b.jpg&w=780&h=450",
          },
          {
            title:
              "عرين الأسود: سلسلة عمليات الثأر مستمرة بتوقيع ذئابنا المنفردة",
            body: 'شنّت قوات الاحتلال الصهيوني، فجر اليوم نعت مجموعات "عرين الأسود" ثلاثة من شهدائها الذين ارتقوا فجر اليوم الأحد، خلال اشتباك مسلح مع قوات الاحتلال قرب حاجز صرة غرب نابلس.',
            blogCategory: "سياسة",
            date: "الأحد 12 مارس 2023 06:44 م ",
            blogAuthor: "قناة الأقصى",
            imageUrl:
              "https://seraj.tv/thumb.php?src=uploads//images/4c7108dd084feb78cfd3a39c63c8b23b.jpg&w=780&h=450",
          },
          {
            title:
              "عرين الأسود: سلسلة عمليات الثأر مستمرة بتوقيع ذئابنا المنفردة",
            body: 'شنّت قوات الاحتلال الصهيوني، فجر اليوم نعت مجموعات "عرين الأسود" ثلاثة من شهدائها الذين ارتقوا فجر اليوم الأحد، خلال اشتباك مسلح مع قوات الاحتلال قرب حاجز صرة غرب نابلس.',
            blogCategory: "سياسة",
            date: "الأحد 12 مارس 2023 06:44 م ",
            blogAuthor: "قناة الأقصى",
            imageUrl:
              "https://seraj.tv/thumb.php?src=uploads//images/4c7108dd084feb78cfd3a39c63c8b23b.jpg&w=780&h=450",
          },
          {
            title:
              "عرين الأسود: سلسلة عمليات الثأر مستمرة بتوقيع ذئابنا المنفردة",
            body: 'شنّت قوات الاحتلال الصهيوني، فجر اليوم نعت مجموعات "عرين الأسود" ثلاثة من شهدائها الذين ارتقوا فجر اليوم الأحد، خلال اشتباك مسلح مع قوات الاحتلال قرب حاجز صرة غرب نابلس.',
            blogCategory: "سياسة",
            date: "الأحد 12 مارس 2023 06:44 م ",
            blogAuthor: "قناة الأقصى",
            imageUrl:
              "https://seraj.tv/thumb.php?src=uploads//images/4c7108dd084feb78cfd3a39c63c8b23b.jpg&w=780&h=450",
          },
          {
            title:
              "عرين الأسود: سلسلة عمليات الثأر مستمرة بتوقيع ذئابنا المنفردة",
            body: 'شنّت قوات الاحتلال الصهيوني، فجر اليوم نعت مجموعات "عرين الأسود" ثلاثة من شهدائها الذين ارتقوا فجر اليوم الأحد، خلال اشتباك مسلح مع قوات الاحتلال قرب حاجز صرة غرب نابلس.',
            blogCategory: "سياسة",
            date: "الأحد 12 مارس 2023 06:44 م ",
            blogAuthor: "قناة الأقصى",
            imageUrl:
              "https://seraj.tv/thumb.php?src=uploads//images/4c7108dd084feb78cfd3a39c63c8b23b.jpg&w=780&h=450",
          },
          {
            title:
              "عرين الأسود: سلسلة عمليات الثأر مستمرة بتوقيع ذئابنا المنفردة",
            body: 'شنّت قوات الاحتلال الصهيوني، فجر اليوم نعت مجموعات "عرين الأسود" ثلاثة من شهدائها الذين ارتقوا فجر اليوم الأحد، خلال اشتباك مسلح مع قوات الاحتلال قرب حاجز صرة غرب نابلس.',
            blogCategory: "سياسة",
            date: "الأحد 12 مارس 2023 06:44 م ",
            blogAuthor: "قناة الأقصى",
            imageUrl:
              "https://seraj.tv/thumb.php?src=uploads//images/4c7108dd084feb78cfd3a39c63c8b23b.jpg&w=780&h=450",
          },
          {
            title:
              "عرين الأسود: سلسلة عمليات الثأر مستمرة بتوقيع ذئابنا المنفردة",
            body: 'شنّت قوات الاحتلال الصهيوني، فجر اليوم نعت مجموعات "عرين الأسود" ثلاثة من شهدائها الذين ارتقوا فجر اليوم الأحد، خلال اشتباك مسلح مع قوات الاحتلال قرب حاجز صرة غرب نابلس.',
            blogCategory: "سياسة",
            date: "الأحد 12 مارس 2023 06:44 م ",
            blogAuthor: "قناة الأقصى",
            imageUrl:
              "https://seraj.tv/thumb.php?src=uploads//images/4c7108dd084feb78cfd3a39c63c8b23b.jpg&w=780&h=450",
          },
        ],
      };
    },
  };
  </script>
  