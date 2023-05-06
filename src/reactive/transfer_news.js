// store.js
import {reactive} from 'vue'

export const transNEWS = reactive({
    title: 'قرعة ربع نهائي دوري أبطال أوروبا 2022-2023 ومواعيد مبارياتها',
    type: 'الرياضة',
    date: '17/3/2023',
    by: 'سسسس',
    imageUrl: 'https://www.aljazeera.net/wp-content/uploads/2023/03/00-9.jpg?resize=770%2C513&quality=80',
    description: `استأنف برشلونة تدريباته، اليوم الإثنين، بعد أقل من 24 ساعة من إسقاط أتلتيك بيلباو، على ملعب سان ماميس، والحفاظ على فارق ال9 نقاط مع غريمه ريال مدريد . ويستعد برشلونة لمواجهة الكلاسيكو أمام الريال، يوم الأحد المقبل، على ملعب كامب نو، ضمن لقاءات الجولة 26 لليجا`
})

export const baseUrl = reactive({
    url: 'http://localhost:8000'
    // url: 'https://bnma-news.onrender.com'
 })