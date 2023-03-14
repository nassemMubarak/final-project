<template>
    <div id="politics" class="politics-page">

        <div class="page-title wb">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <h2><i class="fa fa-shopping-bag bg-red"></i> Politics<small
                                class="hidden-xs-down hidden-sm-down">
                            </small></h2>
                    </div><!-- end col -->
                    <div class="col-lg-4 col-md-4 col-sm-12 hidden-xs-down hidden-sm-down">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item"><a href="#">Blog</a></li>
                            <li class="breadcrumb-item active">Politics</li>
                        </ol>
                    </div><!-- end col -->
                </div><!-- end row -->
            </div><!-- end container -->
        </div><!-- end page-title -->

        <section class="section wb">
            <div class="container">
                <div class="row">   
                    <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                        <div class="page-wrapper">
                            <div v-for="(item,index) in news.slice(pagNumber==1?0:(pagNumber-1)*10, pagNumber==1?10:pagNumber*10)" :key="index" class="blog-list clearfix">
                                <div  class="blog-box row">
                                    <div class="col-md-4">
                                        <div class="post-media">
                                            <a href="single.html" title="">
                                                <img :src="item.imageUrl" alt=""
                                                    class="img-fluid">
                                                <div class="hovereffect"></div>
                                            </a>
                                        </div><!-- end media -->
                                    </div><!-- end col -->
                                    <div class="blog-meta big-meta col-md-8">
                                        <h4><a href="single.html" title="">{{ item.title }}</a></h4>
                                        <p>{{ item.body }}</p>
                                        <small><a href="blog-category-01.html" title="">{{ item.blogCategory }}</a></small>
                                        <small><a href="single.html" title="">{{ item.date }}</a></small>
                                        <small><a href="blog-author.html" title="">{{ item.blogAuthor }}</a></small>
                                    </div><!-- end meta -->
                                    <div v-show="index==2" class="row">
                                    <div>
                                        <br>
                                        <div class="col-lg-10 offset-lg-1">
                                        <div class="banner-spot clearfix">
                                            <div class="banner-img">
                                                <img src="../../public\frontend\assets\upload/ramadan1.jpg" alt=""
                                                    class="img-fluid">
                                            </div><!-- end banner-img -->
                                        </div><!-- end banner -->
                                        <!-- <hr class="invis"> -->
                                    </div><!-- end col -->
                                    </div>
                                
                                </div><!-- end row -->
                                
                                </div><!-- end blog-box -->

                                <hr class="invis">


                         
                         

                            </div><!-- end blog-list -->
                        </div><!-- end page-wrapper -->

                        <hr class="invis">

                        <div class="row">
                            <div class="col-md-12">
                                <nav aria-label="Page navigation">
                                    <ul class="pagination justify-content-start" >
                                        <li @click="pagNumber==1?pagNumber:pagNumber--" class="page-item">
                                            <router-link class="page-link" to="/politics">السابق</router-link>
                                        </li>
                                        <li v-for="index in Math.ceil(news.length/10)" :key="index"  @click="pagNumber=index" class="page-item"><router-link  class="page-link" to="/politics">{{ index }}</router-link></li>
                                        <li @click="Math.ceil(news.length/10)==pagNumber?pagNumber:pagNumber++" class="page-item">
                                            <router-link class="page-link" to="/politics">التالي</router-link>
                                        </li>
                                    </ul>
                                
                                </nav>
                            </div><!-- end col -->
                        </div><!-- end row -->
                    </div><!-- end col -->

                    <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                        <div class="sidebar">
                            <div class="widget">
                                <h2 class="widget-title">بحث</h2>
                                <form class="form-inline search-form">
                                    <div class="form-group">
                                        <input type="text" v-model="textSearch" class="form-control" placeholder="Search on the site">
                                    </div>
                                    <button type="submit" class="btn btn-primary"><i class="fa fa-search"></i></button>
                                </form>
                            </div><!-- end widget -->

                            <div class="widget">
                                <h2 class="widget-title">المشاركات الاخيرة</h2>
                                <div class="blog-list-widget">
                                    <div class="list-group">
                                        <div
                                            class="list-group-item list-group-item-action flex-column align-items-start">
                                            <div class="w-100 justify-content-between" v-for="(item,index) in news.slice(0,5)" :key="index">
                                                <img :src="item.imageUrl" alt=""
                                                    class="img-fluid float-left">
                                                <h5 class="mb-1">{{item.title}}</h5>
                                                <small>{{item.date}}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div><!-- end blog-list -->
                            </div><!-- end widget -->

                            <div class="widget">
                                <h2 class="widget-title">دعاية</h2>
                                <div class="banner-spot clearfix">
                                    <div class="banner-img">
                                        <img src="../../public\frontend\assets\upload/ramadan.jpg" alt=""
                                            class="img-fluid">
                                    </div><!-- end banner-img -->
                                </div><!-- end banner -->
                            </div><!-- end widget -->

                            <div class="widget">
                                <h2 class="widget-title">Instagram Feed</h2>
                                <div class="instagram-wrapper clearfix">
                                    <a class="" href="#"><img src="../../public\frontend\assets\upload/insta_01.jpeg" alt=""
                                            class="img-fluid"></a>
                                    <a href="#"><img src="../../public\frontend\assets\upload/insta_02.jpeg" alt=""
                                            class="img-fluid"></a>
                                    <a href="#"><img src="../../public\frontend\assets\upload/insta_03.jpeg" alt=""
                                            class="img-fluid"></a>
                                    <a href="#"><img src="../../public\frontend\assets\upload/insta_04.jpeg" alt=""
                                            class="img-fluid"></a>
                                    <a href="#"><img src="../../public\frontend\assets\upload/insta_05.jpeg" alt=""
                                            class="img-fluid"></a>
                                    <a href="#"><img src="../../public\frontend\assets\upload/insta_06.jpeg" alt=""
                                            class="img-fluid"></a>
                                    <a href="#"><img src="../../public\frontend\assets\upload/insta_07.jpeg" alt=""
                                            class="img-fluid"></a>
                                    <a href="#"><img src="../../public\frontend\assets\upload/insta_08.jpeg" alt=""
                                            class="img-fluid"></a>
                                    <a href="#"><img src="../../public\frontend\assets\upload/insta_09.jpeg" alt=""
                                            class="img-fluid"></a>
                                </div><!-- end Instagram wrapper -->
                            </div><!-- end widget -->

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
                                        <li><a href="#">Politics & Drink <span>(87)</span></a></li>
                                    </ul>
                                </div><!-- end link-widget -->
                            </div><!-- end widget -->
                        </div><!-- end sidebar -->
                    </div><!-- end col -->
                </div><!-- end row -->
            </div><!-- end container -->
        </section>


        <div class="dmtop">Scroll to Top</div>
    </div><!-- end wrapper -->
</template>
<script>
export default {
    name: 'PoliticsPage',
    data(){
        return{
            pagNumber:1,
            textSearch:'',
            news : [
                {
                    title:'المصادقة بالقراءة الأولى على عودة الاستيطان لشمال الضفة',
                    body:'صادقت الكنيست الصهيونية مساء الإثنين وبالقراءة الأولى على مشروع قانون إلغاء "قانون الانسحاب من شمال الضفة الغربية"، والذي يفتح الباب أمام عودة 4 مستوطنات بين نابلس وجنين.',
                    blogCategory:"سياسة",
                    date:"الثلاثاء 14 مارس 2023 10:29 ص",
                    blogAuthor:"قناة الأقصى",
                    imageUrl:"https://seraj.tv/thumb.php?src=uploads/images/23cdf7627a9e1ebcdc1172bb343a26fc.jpg&w=780&h=450"
                },
                {
                    title:'العاروري: صبرنا ينفد وسنكون عند ثقة شعبنا بنا',
                    body:'أكد نائب رئيس المكتب السياسي لحركة "حماس" الشيخ صالح العاروري أن محاولة الاحتلال توظيف شهر رمضان لفرض سياسته في التقسيم الزماني والمكاني والسماح للمستوطنين بأداء الطقوس التلمودية سيواجه بردة فعل شعبنا بكل تأكيد.',
                    blogCategory:"سياسة",
                    date:" الثلاثاء 14 مارس 2023 11:38 ص ",
                    blogAuthor:"قناة الأقصى",
                    imageUrl:"https://seraj.tv/thumb.php?src=uploads//images/2722f6be123ba49b7fdca6b5978cc013.jpeg&w=780&h=450"
                },
                {
                    title:'مواجهات واعتقالات بالقدس والضفة المحتلتين',
                    body:'شنّت قوات الاحتلال الصهيوني، فجر اليوم الثلاثاء، حملة مداهمات واقتحامات واسعة في الضفة والقدس المحتلتين، تخللتها مواجهات واعتقالات طالت عددًا من الفلسطينيين.',
                    blogCategory:"سياسة",
                    date:"الثلاثاء 14 مارس 2023 08:18 ص",
                    blogAuthor:"قناة الأقصى",
                    imageUrl:"https://seraj.tv/thumb.php?src=uploads//images/1fd00ee8479a5665c0bc0589f4e00bd3.jpg&w=780&h=450"
                },
                {
                    title:'الذكرى الـ19 لعملية أسدود البطولية المشتركة',
                    body:'الرابع عشر من مارس، تاريخٌ يحفظه الصهاينة جيداً، لأنه يحمل معه ذكرى تحطيم نظرية أمنهم على صخرة أبناء المقاومة الذين مرغوا أنف الحكومة النازية بالتراب وأثبتوا أن كل التحصينات التي يتغنى بها العدو لا تمنع استشهادياً من بلوغ مرامه أو تحقيق هدفه.',
                    blogCategory:"سياسة",
                    date:" الثلاثاء 14 مارس 2023 08:30 ص",
                    blogAuthor:"قناة الأقصى",
                    imageUrl:"https://seraj.tv/thumb.php?src=uploads//images/5f361459bffefbf3f8b4148594a18369.jpg&w=780&h=450"
                },
                {
                    title:'فؤاد الشوبكي فور الإفراج عنه: أسرانا شهداء مع وقف التنفيذ',
                    body:'شنّت قوات الاحتلال الصهيوني، فجر اليوم أكد شيخ الأسرى اللواء فؤاد الشوبكي، فور الإفراج عنه اليوم الإثنين، أن الأسرى في سجون الاحتلال الصهيوني شهداء مع وقف التنفيذ.',
                    blogCategory:"سياسة",
                    date:" الإثنين 13 مارس 2023 03:54 م ",
                    blogAuthor:"قناة الأقصى",
                    imageUrl:"https://seraj.tv/thumb.php?src=uploads//images/1d453f4357afeb0f95be26418ec5a8e7.jpg&w=780&h=450"
                },
                {
                    title:'عرين الأسود: سلسلة عمليات الثأر مستمرة بتوقيع ذئابنا المنفردة',
                    body:'شنّت قوات الاحتلال الصهيوني، فجر اليوم نعت مجموعات "عرين الأسود" ثلاثة من شهدائها الذين ارتقوا فجر اليوم الأحد، خلال اشتباك مسلح مع قوات الاحتلال قرب حاجز صرة غرب نابلس.',
                    blogCategory:"سياسة",
                    date:"الأحد 12 مارس 2023 06:44 م ",
                    blogAuthor:"قناة الأقصى",
                    imageUrl:"https://seraj.tv/thumb.php?src=uploads//images/4c7108dd084feb78cfd3a39c63c8b23b.jpg&w=780&h=450"
                },
                {
                    title:'111111111111111',
                    body:'شنّت قوات الاحتلال الصهيوني، فجر اليوم نعت مجموعات "عرين الأسود" ثلاثة من شهدائها الذين ارتقوا فجر اليوم الأحد، خلال اشتباك مسلح مع قوات الاحتلال قرب حاجز صرة غرب نابلس.',
                    blogCategory:"سياسة",
                    date:"الأحد 12 مارس 2023 06:44 م ",
                    blogAuthor:"قناة الأقصى",
                    imageUrl:"https://seraj.tv/thumb.php?src=uploads//images/4c7108dd084feb78cfd3a39c63c8b23b.jpg&w=780&h=450"
                },
                {
                    title:'222222222222222',
                    body:'شنّت قوات الاحتلال الصهيوني، فجر اليوم نعت مجموعات "عرين الأسود" ثلاثة من شهدائها الذين ارتقوا فجر اليوم الأحد، خلال اشتباك مسلح مع قوات الاحتلال قرب حاجز صرة غرب نابلس.',
                    blogCategory:"سياسة",
                    date:"الأحد 12 مارس 2023 06:44 م ",
                    blogAuthor:"قناة الأقصى",
                    imageUrl:"https://seraj.tv/thumb.php?src=uploads//images/4c7108dd084feb78cfd3a39c63c8b23b.jpg&w=780&h=450"
                },
                {
                    title:'3333333333333333333',
                    body:'شنّت قوات الاحتلال الصهيوني، فجر اليوم نعت مجموعات "عرين الأسود" ثلاثة من شهدائها الذين ارتقوا فجر اليوم الأحد، خلال اشتباك مسلح مع قوات الاحتلال قرب حاجز صرة غرب نابلس.',
                    blogCategory:"سياسة",
                    date:"الأحد 12 مارس 2023 06:44 م ",
                    blogAuthor:"قناة الأقصى",
                    imageUrl:"https://seraj.tv/thumb.php?src=uploads//images/4c7108dd084feb78cfd3a39c63c8b23b.jpg&w=780&h=450"
                },
                {
                    title:'4444444444444444',
                    body:'شنّت قوات الاحتلال الصهيوني، فجر اليوم نعت مجموعات "عرين الأسود" ثلاثة من شهدائها الذين ارتقوا فجر اليوم الأحد، خلال اشتباك مسلح مع قوات الاحتلال قرب حاجز صرة غرب نابلس.',
                    blogCategory:"سياسة",
                    date:"الأحد 12 مارس 2023 06:44 م ",
                    blogAuthor:"قناة الأقصى",
                    imageUrl:"https://seraj.tv/thumb.php?src=uploads//images/4c7108dd084feb78cfd3a39c63c8b23b.jpg&w=780&h=450"
                },
                {
                    title:'5555555555555555555',
                    body:'شنّت قوات الاحتلال الصهيوني، فجر اليوم نعت مجموعات "عرين الأسود" ثلاثة من شهدائها الذين ارتقوا فجر اليوم الأحد، خلال اشتباك مسلح مع قوات الاحتلال قرب حاجز صرة غرب نابلس.',
                    blogCategory:"سياسة",
                    date:"الأحد 12 مارس 2023 06:44 م ",
                    blogAuthor:"قناة الأقصى",
                    imageUrl:"https://seraj.tv/thumb.php?src=uploads//images/4c7108dd084feb78cfd3a39c63c8b23b.jpg&w=780&h=450"
                },
                {
                    title:'6666666666666666666',
                    body:'شنّت قوات الاحتلال الصهيوني، فجر اليوم نعت مجموعات "عرين الأسود" ثلاثة من شهدائها الذين ارتقوا فجر اليوم الأحد، خلال اشتباك مسلح مع قوات الاحتلال قرب حاجز صرة غرب نابلس.',
                    blogCategory:"سياسة",
                    date:"الأحد 12 مارس 2023 06:44 م ",
                    blogAuthor:"قناة الأقصى",
                    imageUrl:"https://seraj.tv/thumb.php?src=uploads//images/4c7108dd084feb78cfd3a39c63c8b23b.jpg&w=780&h=450"
                },
                {
                    title:'777777777777777777',
                    body:'شنّت قوات الاحتلال الصهيوني، فجر اليوم نعت مجموعات "عرين الأسود" ثلاثة من شهدائها الذين ارتقوا فجر اليوم الأحد، خلال اشتباك مسلح مع قوات الاحتلال قرب حاجز صرة غرب نابلس.',
                    blogCategory:"سياسة",
                    date:"الأحد 12 مارس 2023 06:44 م ",
                    blogAuthor:"قناة الأقصى",
                    imageUrl:"https://seraj.tv/thumb.php?src=uploads//images/4c7108dd084feb78cfd3a39c63c8b23b.jpg&w=780&h=450"
                },
                {
                    title:'88888888888888888888888',
                    body:'شنّت قوات الاحتلال الصهيوني، فجر اليوم نعت مجموعات "عرين الأسود" ثلاثة من شهدائها الذين ارتقوا فجر اليوم الأحد، خلال اشتباك مسلح مع قوات الاحتلال قرب حاجز صرة غرب نابلس.',
                    blogCategory:"سياسة",
                    date:"الأحد 12 مارس 2023 06:44 م ",
                    blogAuthor:"قناة الأقصى",
                    imageUrl:"https://seraj.tv/thumb.php?src=uploads//images/4c7108dd084feb78cfd3a39c63c8b23b.jpg&w=780&h=450"
                },
            ]
        }
    },
    
}
</script>