<script>
export default {
    name: 'SectionTestimonials'
}
</script>

<template>
    <section class="testimonials d-flex align-items-center">
        <div class="opinion">
            <h4>Come as you are</h4>
            <p>MasterStudy used is an excellent workshop wheter you come as a counselor, advisor, administrator, or
                faculty member. I am going home empowered. I am looking forward to attending the On Course
                MasterStudy and the MasterStudy National Conference next year and facilitating the use of this
                excellent retention/student success course at my college.</p>
            <span><strong>Tim Sab</strong></span>
            <br>
            <span><strong><small>General Developer, Stylemix Themes</small></strong></span>
        </div>
        <div class="lateral_triangle"></div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partial/variables' as *;

.testimonials {
    height: 588px;
    padding: 70px 220px;
    background-image: url(../../../../public/images/brooke-cagle-224821-unsplash-1-1920x700.jpg);
    background-repeat: no-repeat;
    background-size: cover;

    background-color: lightseagreen;

    .opinion {
        width: 737px;
        background-color: $light;
        padding: 90px;

        h4 {
            font-size: 34px;
            margin-bottom: 20px;
        }
    }

    .lateral_triangle {
        width: 24px;
        height: 24px;
        rotate: 90deg;
        background-color: $light;
        clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
    }
}
</style>