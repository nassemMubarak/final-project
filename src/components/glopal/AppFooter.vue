<template>
    <div :class="{'app-footer':true,'d-none':(this.$route.path == '/' || this.$route.path == '/ourTeam')}">
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <div class="widget">
                            <h2 class="widget-title">المشاركات الاخيرة</h2>
                            <div class="blog-list-widget">
                                <div class="list-group">
                                    <a v-for="items in recentPosts" :key="items" class="list-group-item list-group-item-action flex-column align-items-start">
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
                                    <a v-for="items in popularPosts" :key="items" class="list-group-item list-group-item-action flex-column align-items-start">
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
                                <router-link to="/homePage"><img src="../../../public/frontend/assets/images/logo.png" alt="" /></router-link>
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
        popularPosts:[
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
          title: "برشلونة يفتح ملف مستقبل ديمبلي",
          body: "أكد تقرير صحفي إسباني، اليوم الأحد، أن برشلونة فتح ملف تجديد عقد لاعبه الفرنسي عثمان ديمبلي. وينتهي تعاقد ديمبلي مع البارسا، بنهاية الموسم المقبل، لكن برشلونة يسعى لإنهاء هذا الملف، قبل الميركاتو الصيفي، لحسم مصير اللاعب.",
          blogCategory: "رياضة",
          date: "الأحد 12 مارس 2023 06:44 م ",
          blogAuthor: "موقع كووورة",
          imageUrl:
            "https://img.kooora.com/?i=afp%2f20230126%2f20230126-afp_337u97v_afp.jpg",
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
        ],
        recentPosts:[
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
          title: "النفط يواصل الهبوط وسط مخاوف من أزمة مالية جديدة",
          body: "الاقتصادي - رويترز: انخفضت أسعار النفط أكثر من دولار اليوم الثلاثاء، لتواصل خسائرها للجلسة الثانية، إذ أدى انهيار بنك وادي السيليكون (سيليكون فالي SVB) إلى هزة في أسواق الأسهم وأثار مخاوف من وقوع أزمة مالية جديدة. وتراجعت العقود الآجلة لخام برنت 1.1% إلى 79.90 دولارا للبرميل بحلول الساعة 03:45 بتوقيت غرينتش.",
          blogCategory: "اقتصاد",
          date: "الأحد 12 مارس 2023 06:44 م ",
          blogAuthor: "موقع الأقتصادي",
          imageUrl:
            "https://www.aliqtisadi.ps//public/files/image/2020/untitled%20folder%202/image123231232.jpeg",
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
        ]
      };
    },
  };
  </script>
  