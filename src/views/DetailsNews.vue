<template>
    <div dir="rtl" lang="ar" class="details-news">
        <section class="section wb">
            <div class="container">
                <div class="row">

                    <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                        <div class="page-wrapper">
                            <div class="blog-title-area">
                                <ol class="breadcrumb hidden-xs-down">
                                    <li class="breadcrumb-item"><a href="#">{{ detailsNews.title }}</a></li>
                                    <li class="breadcrumb-item"><a href="#">السياسة</a></li>
                                </ol>

                                <span class="color-aqua"><a href="blog-category-01.html" title="">سياية</a></span>

                                <h3>{{ detailsNews.title }}</h3>

                                <div class="blog-meta big-meta">
                                    <small><a href="single.html" title="">21 July, 2017</a></small>
                                    <small><a href="blog-author.html" title="">by Jessica</a></small>
                                    <small><a href="#" title=""><i class="fa fa-eye"></i> 2344</a></small>
                                </div><!-- end meta -->

                                <div class="post-sharing">
                                    <ul class="list-inline">
                                        <li><a href="#" class="fb-button btn btn-primary"><i class="fa fa-facebook"></i>
                                                <span class="down-mobile">Share on Facebook</span></a></li>
                                        <li><a href="#" class="tw-button btn btn-primary"><i class="fa fa-twitter"></i>
                                                <span class="down-mobile">Tweet on Twitter</span></a></li>
                                        <li><a href="#" class="gp-button btn btn-primary"><i
                                                    class="fa fa-google-plus"></i></a></li>
                                    </ul>
                                </div><!-- end post-sharing -->
                            </div><!-- end title -->

                            <div class="single-post-media">
                                <img :src="detailsNews.imageUrl" alt="" class="img-fluid">
                            </div><!-- end media -->

                            <div class="blog-content">
                                <div class="pp">
                                    <!-- <p>In lobortis pharetra mattis. Morbi nec nibh iaculis, <a href="#">bibendum augue a</a>, ultrices nulla. Nunc velit ante, lacinia id tincidunt eget, faucibus nec nisl. In mauris purus, bibendum et gravida dignissim, venenatis commodo lacus. Duis consectetur quis nisi nec accumsan. Pellentesque enim velit, ut tempor turpis. Mauris felis neque, egestas in lobortis et,iaculis at nunc ac, rhoncus sagittis ipsum. </p>

                                    <h3><strong>Maecenas non convallis quam, eu sodales justo. Pellentesque quis lectus elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</strong></h3>

                                    <p>Donec nec metus sed leo sollicitudin ornare sed consequat neque. Aliquam iaculis neque quis dui venenatis, eget posuere felis viverra. Ut sit amet feugiat elit, nec elementum velit. Sed eu nisl convallis, efficitur turpis eu, euismod nunc. Proin neque enim, malesuada non lobortis nec, facilisis et lectus. Ie consectetur. Nam eget neque ac ex fringilla dignissim eu ac est. Nunc et nisl vel odio posuere. </p> -->

                                    <p>{{ detailsNews.body }} </p>

                                </div><!-- end pp -->



                            </div><!-- end content -->

                            <div class="blog-title-area">
                                <div class="tag-cloud-single">
                                    <span>الكلمات المفتاحية</span>
                                    <small><a href="#" title=""> #التنسيق الأمني</a></small>
                                    <small><a href="#" title=""> #السلطة</a></small>
                                    <small><a href="#" title=""> #قمة العقبة</a></small>
                                    <small><a href="#" title=""> #شرم الشيخ</a></small>
                                    <small><a href="#" title=""> #الضفة المحتلة</a></small>
                                    <small><a href="#" title=""> #قطاع غزة</a></small>
                                    <small><a href="#" title=""> #فلسطين</a></small>
                                </div><!-- end meta -->


                            </div><!-- end title -->

                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="banner-spot clearfix">
                                        <div class="banner-img">
                                            <img src="../../public\frontend\assets\upload/ramadan1.jpg" alt=""
                                                class="img-fluid">
                                        </div><!-- end banner-img -->
                                    </div><!-- end banner -->
                                </div><!-- end col -->
                            </div><!-- end row -->

                            <hr class="invis1">

                            <div class="custombox prevnextpost clearfix">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="blog-list-widget">
                                            <div class="list-group">
                                                <a href="single.html"
                                                    class="list-group-item list-group-item-action flex-column align-items-start">
                                                    <div class="w-100 justify-content-between text-right">
                                                        <img src="https://www.aliqtisadi.ps//public/files/image/2020/untitled%20folder%202/image123231232.jpeg"
                                                            alt="" class="img-fluid float-right">
                                                        <h5 class="mb-1">النفط يواصل الهبوط وسط مخاوف من أزمة مالية جديدة
                                                        </h5>
                                                        <small>الخبر السابق</small>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div><!-- end col -->
                                    <div class="col-lg-6">
                                        <div class="blog-list-widget">
                                            <div class="list-group">
                                                <a href="single.html"
                                                    class="list-group-item list-group-item-action flex-column align-items-start">
                                                    <div class="w-100 justify-content-between text-right">
                                                        <img src="https://seraj.tv/thumb.php?src=uploads//images/4c7108dd084feb78cfd3a39c63c8b23b.jpg&w=780&h=450"
                                                            alt="" class="img-fluid float-right">
                                                        <h5 class="mb-1">عرين الأسود: سلسلة عمليات الثأر مستمرة بتوقيع
                                                            ذئابنا المنفردة</h5>
                                                        <small>الخبر التالي</small>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div><!-- end col -->

                                </div><!-- end row -->
                            </div><!-- end author-box -->

                            <hr class="invis1">

                            <div class="custombox authorbox clearfix">
                                <h4 class="small-title">نبذة عن الكاتب</h4>
                                <div class="row">
                                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                                        <img src="https://seraj.tv/style/atyaf/assets/images/logo.png" alt=""
                                            class="img-fluid rounded-circle">
                                    </div><!-- end col -->

                                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12">
                                        <h4><a href="#">قناة الأقصى</a></h4>
                                        <p>قناة الأقصى قناة فضائية فلسطينية تبث من غزة، أُسست سنة 2006، وفرع من شبكة الأقصى
                                            الإعلامية، تابعة لحركة المقاومة الإسلامية وتعبّر عن موقفها، وموقف المقاومة
                                            الفلسطينية. وقد احتلت قناة الأقصى نسبة مشاهدة كبيرة في أوساط العالم العربي
                                            والإسلامي وفي دول المغرب العربي بالخصوص. <a href="https://seraj.tv/live"
                                                target="_blank">visit my website</a> </p>

                                        <div class="topsocial">
                                        </div><!-- end social -->

                                    </div><!-- end col -->
                                </div><!-- end row -->
                            </div><!-- end author-box -->

                            <hr class="invis1">

                            <div class="custombox clearfix">
                                <h4 class="small-title">ربما يعجبك أيضا</h4>
                                <div class="row">
                                    <div class="col-lg-6" v-for="items in youMayAlsLike" :key="items">
                                        <div class="blog-box">
                                            <div class="post-media">
                                                <a href="single.html" title="">
                                                    <img :src="items.imageUrl" alt="" class="img-fluid">
                                                    <div class="hovereffect">
                                                        <span class=""></span>
                                                    </div><!-- end hover -->
                                                </a>
                                            </div><!-- end media -->
                                            <div class="blog-meta">
                                                <h4><a href="single.html" title="">{{ items.title }}</a></h4>
                                                <small><a href="blog-category-01.html" title="">{{ items.date }}</a></small>
                                                <small><a href="blog-category-01.html" title="">ترند</a></small>
                                            </div><!-- end meta -->
                                        </div><!-- end blog-box -->
                                    </div><!-- end col -->


                                </div><!-- end row -->
                            </div><!-- end custom-box -->

                            <hr class="invis1">

                            <div class="custombox clearfix">
                                <h4 class="small-title"> التعليقات</h4>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="comments-list">
                                            <div v-for="items in commints" :key="items" class="media">
                                                <!-- <div class="media-body"></div> -->
                                                <a class="media-left" href="#">
                                                    <img :src="items.image" alt="" class="rounded-circle">
                                                </a>
                                                <div dir="rtl" lang="ar" class="media-body">
                                                    <h4 class="media-heading user_name">{{ items.name }}<small> قبل ولا اشي
                                                        </small></h4>
                                                    <!-- <a href="#" class="btn btn-primary btn-sm">Reply</a> -->
                                                    <p>{{ items.text }}</p>
                                                </div>

                                            </div>

                                        </div>
                                    </div><!-- end col -->
                                </div><!-- end row -->
                            </div><!-- end custom-box -->

                            <hr class="invis1">

                            <div class="custombox clearfix">
                                <h4 class="small-title">تعليق</h4>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <form class="form-wrapper">
                                            <textarea class="form-control" placeholder="أكتب التعليق"></textarea>
                                            <button type="submit" class="btn btn-primary">أرسال</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div><!-- end page-wrapper -->
                    </div><!-- end col -->
                    <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                        <div class="sidebar">
                            <div class="widget">
                                <h2 class="widget-title">بحث</h2>
                                <form class="form-inline search-form">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="البحث في الخبر">
                                    </div>
                                    <button type="submit" class="btn btn-primary"><i class="fa fa-search"></i></button>
                                </form>
                            </div><!-- end widget -->
                            <div class="widget">
                                <h2 class="widget-title">المشاركات الاخيرة</h2>
                                <div class="blog-list-widget">
                                    <div class="list-group">
                                        <a v-for="items in recentPosts" :key="items"
                                            class="list-group-item list-group-item-action flex-column align-items-start">
                                            <div class="w-100 justify-content-between">
                                                <img :src="items.imageUrl" alt="" class="img-fluid float-right">
                                                <h5 class="mb-1">{{ items.title }}</h5>
                                                <small>{{ items.date }}</small>
                                            </div>
                                        </a>
                                    </div>
                                </div><!-- end blog-list -->
                            </div><!-- end widget -->

                            <div class="widget">
                                <h2 class="widget-title">Advertising</h2>
                                <div class="banner-spot clearfix">
                                    <div class="banner-img">
                                        <img src="../../public\frontend\assets\upload/ramadan.jpg" alt="" class="img-fluid">
                                    </div><!-- end banner-img -->
                                </div><!-- end banner -->
                            </div><!-- end widget -->

                            <!--
                            <div class="widget">
                                <h2 class="widget-title">Instagram Feed</h2>
                                <div class="instagram-wrapper clearfix">
                                    <a class="" href="#"><img src="../../public\frontend\assets\upload/insta_01.jpeg" alt="" class="img-fluid"></a>
                                    <a href="#"><img src="../../public\frontend\assets\upload/insta_02.jpeg" alt="" class="img-fluid"></a>
                                    <a href="#"><img src="../../public\frontend\assets\upload/insta_03.jpeg" alt="" class="img-fluid"></a>
                                    <a href="#"><img src="../../public\frontend\assets\upload/insta_04.jpeg" alt="" class="img-fluid"></a>
                                    <a href="#"><img src="../../public\frontend\assets\upload/insta_05.jpeg" alt="" class="img-fluid"></a>
                                    <a href="#"><img src="../../public\frontend\assets\upload/insta_06.jpeg" alt="" class="img-fluid"></a>
                                    <a href="#"><img src="../../public\frontend\assets\upload/insta_07.jpeg" alt="" class="img-fluid"></a>
                                    <a href="#"><img src="../../public\frontend\assets\upload/insta_08.jpeg" alt="" class="img-fluid"></a>
                                    <a href="#"><img src="../../public\frontend\assets\upload/insta_09.jpeg" alt="" class="img-fluid"></a>
                                </div>
                            </div>
                        -->


                        </div><!-- end sidebar -->
                    </div><!-- end col -->

                </div><!-- end row -->
            </div><!-- end container -->
        </section>
    </div>
</template>
<script>
export default {
    name: "DetailsNews",
    data() {
        return {
            recentPosts: [
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
                    title: " النفط يواصل الهبوط وسط مخاوف من أزمة مالية جديدة ",
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
            ],
            youMayAlsLike: [
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
                    title: "النفط يواصل الهبوط وسط مخاوف من أزمة مالية جديدة",
                    body: "الاقتصادي - رويترز: انخفضت أسعار النفط أكثر من دولار اليوم الثلاثاء، لتواصل خسائرها للجلسة الثانية، إذ أدى انهيار بنك وادي السيليكون (سيليكون فالي SVB) إلى هزة في أسواق الأسهم وأثار مخاوف من وقوع أزمة مالية جديدة. وتراجعت العقود الآجلة لخام برنت 1.1% إلى 79.90 دولارا للبرميل بحلول الساعة 03:45 بتوقيت غرينتش.",
                    blogCategory: "اقتصاد",
                    date: "الأحد 12 مارس 2023 06:44 م ",
                    blogAuthor: "موقع الأقتصادي",
                    imageUrl:
                        "https://www.aliqtisadi.ps//public/files/image/2020/untitled%20folder%202/image123231232.jpeg",
                },
            ],
            commints: [
                {
                    name: 'نسيم أحمد مبارك',
                    image: 'https://bootdey.com/img/Content/avatar/avatar7.png',
                    text: 'دعت حركة المقاومة الإسلامية (حماس) السلطة الفلسطينية لعدم المشاركة في قمة شرم الشيخ الأمنية'
                },
                {
                    name: 'براء محمد مبارك',
                    image: 'https://bootdey.com/img/Content/avatar/avatar7.png',
                    text: 'دعت حركة المقاومة الإسلامية (حماس) السلطة الفلسطينية لعدم المشاركة في قمة شرم الشيخ الأمنية'
                },
                {
                    name: 'احمد زياد الشيخ عيد',
                    image: 'https://bootdey.com/img/Content/avatar/avatar7.png',
                    text: 'دعت حركة المقاومة الإسلامية (حماس) السلطة الفلسطينية لعدم المشاركة في قمة شرم الشيخ الأمنية'
                },
                {
                    name: 'محمد كمال قفة',
                    image: 'https://bootdey.com/img/Content/avatar/avatar7.png',
                    text: 'دعت حركة المقاومة الإسلامية (حماس) السلطة الفلسطينية لعدم المشاركة في قمة شرم الشيخ الأمنية'
                },
            ],
            detailsNews: {
                title:
                    "الشباب الثائر ينظّم فعالية شرق غزة رفضًا لاجتماع شرم الشيخ",
                body: `نظّم الشباب الفلسطيني الثائر بعد ظهر اليوم الأحد، فعالية في مخيم ملكة شرق غزة، رفضًا لاجتماع شرم الشيخ الذي يضم السلطة والاحتلال ومصر والأردن والولايات المتحدة.

وقال مراسلنا، إن المئات من الشباب الثائر تجمعوا في تمام الساعة الواحدة بعد ظهر اليوم بفعالية إحراق اطارات في مخيم ملكة شرق مدينة غزة، احتجاجًا على عقد قمة شرم الشيخ.

وأضاف مراسلنا، أن الشباب الثائر أحرقوا الإطارات، ورددوا شعارات غاضبة منددة بمشاركة السلطة في اجتماع شرم الشيخ، معتبرين القمة تآمر على دماء وتضحيات الشعب الفلسطيني وشهدائه.

ويأتي اجتماع شرم الشيخ استكمالًا لاجتماع عقد في السادس والعشرين من الشهر الماضي في العقبة الأردنية لبحث إنقاذ الاحتلال المأزوم من خلال محاولة وقف التصعيد وحالة المقاومة المتصاعدة بالضفة والقدس، قبل رمضان.

الكلمات المفتاحية`,
                blogCategory: "سياسة",
                date: " الأحد 19 مارس 2023 02:16 م",
                blogAuthor: "قناة الأقصى",
                imageUrl:
                    "https://seraj.tv/thumb.php?src=uploads/images/e24b3c623aef9ac02d01c67bf72e4c95.jpg&w=780&h=450",
            },
        }
    }
}
</script>
