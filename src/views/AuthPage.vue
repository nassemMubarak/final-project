<template>
    <p></p>
    <p></p>
    <div class=" container d-flex justify-content-center align-items-center" :class="{'right-panel-active':isRegister}"
         style="height: 80vh;" id="container">
        <div dir="rtl" lang="ar" class="form-container sign-up-container">
            <form action="#">
                <h1 mb-5>انشاء حساب جديد</h1>
                <!-- <div class="social-container">
                  <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                  <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                  <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                </div> -->
                <span>يبدو أنك ذو حظ سيء لانك خلال كل هذه المدة لم يكن لديك حساب على موقعنا...</span>
                <input type="text" placeholder="الإسم الكامل"/>
                <input type="email" placeholder="البريد الإلكتروني"/>
                <input type="password" placeholder="كلمة المرور"/>
                <router-link to="/homePage">
                    <button>إنشاء حساب</button>
                </router-link>
            </form>
        </div>
        <div dir="rtl" lang="ar" class="form-container sign-in-container">
            <form action="#">
                <h1>تسجيل دخول</h1>
                <!-- <div class="social-container">
                  <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                  <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                  <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                </div> -->
                <span>أهلا بك من جديد، لقد أعددنا من أجلك أحدث ما يجري في وطننا العربي</span>
                <input type="email" placeholder="البريد الإلكتروني"/>
                <input type="password" placeholder="كلمة المرور"/>
                <!-- <a href="#">نسيت كلمة المرور</a> -->

                <router-link to="/homePage">
                    <button>تسجيل دخول</button>
                </router-link>
            </form>
        </div>
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-panel overlay-left">
                    <h1 style="color:white">أهلاً بك صديقي</h1>
                    <p style="color:white">من الرائع انك قد قررت الانضمام الى مجتمعنا، انت لا تعلم كم نحن متحمسين لخدمتك
                        في موقنا</p>
                    <button @click="isRegister = !isRegister" class="ghost" id="signIn">تسجيل دخول</button>
                </div>
                <div class="overlay-panel overlay-right">
                    <h1 style="color: white;">أهلاً بك مرة أخرى</h1>
                    <p style="color: white;">صديقي العزيز خلال غيابك عملنا على جمع جميع الاخبار من مصادرها الموثوقة
                        وقمنا بترتيبها وتنظيمها في مكان واحد من أجلك يا صديقي</p>
                    <button @click="isRegister = !isRegister" class="ghost" id="signUp">انشاء حساب</button>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped src="@/../public/frontend/assets/css/auth.css">
</style>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            isRegister: false
        }
    },
    mounted() {

        axios.get('https://bnma-news.onrender.com/api/news/economy')
            .then(response => {
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
    // methods: {
    //     getNewsPolocy(){
    //       // axios.get('http://localhost:8000/api/news/policy').then( res => {
    //       //   console.log(res.data);
    //       // });

    //     }
    //},


}

</script>