<script>
import BannerStart from './layouts/BannerStart.vue'
import SectionCourses from './layouts/SectionCourses.vue'
import BannerRead from './layouts/BannerRead.vue'
import RecentCourses from './layouts/RecentCourses.vue'
import BannerData from './layouts/BannerData.vue'
import SectionSubscribe from './layouts/SectionSubscribe.vue'
import PopularCourses from './layouts/PopularCourses.vue'
import SectionCategories from './layouts/SectionCategories.vue'
import SectionTestimonials from './layouts/SectionTestimonials.vue'
export default {
    name: 'AppMain',
    components: {
        BannerStart,
        SectionCourses,
        BannerRead,
        RecentCourses,
        BannerData,
        SectionSubscribe,
        PopularCourses,
        SectionCategories,
        SectionTestimonials
    }

}
</script>

<template>
    <main>
        <BannerStart></BannerStart>
        <!--/.banner-->
        <SectionCourses></SectionCourses>
        <!--/.courses-->
        <BannerRead></BannerRead>
        <!--/.read_more-->
        <RecentCourses></RecentCourses>
        <!--/.recents-->
        <BannerData></BannerData>
        <!--/.data-->
        <SectionSubscribe></SectionSubscribe>
        <!--/.subscribe-->
        <PopularCourses></PopularCourses>
        <!--/.popular-->
        <SectionCategories></SectionCategories>
        <!--/.categories-->
        <SectionTestimonials></SectionTestimonials>
        <!--/.opinions-->
    </main>
</template>

<style lang="scss" scoped>

</style>