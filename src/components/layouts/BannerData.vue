<script>
export default {
    name: 'BannerData'
}
</script>

<template>
    <section class="banner data">
        <div class="container text-center">
            <div class="title">
                <h2>We are Proud</h2>
                <p class="mt-3">Certificate courses bare instructed by highly educated and qualified instructors who
                    hold
                    doctoral
                    and
                    master`s level degrees.</p>
            </div>
            <div class="row row-cols-4">
                <div class="col border-end">
                    <span class="data_numbers">2000</span>
                    <br>
                    <span>STUDENTS</span>
                </div>
                <div class="col border-end">
                    <span class="data_numbers">950</span>
                    <br>
                    <span>COURSES</span>
                </div>
                <div class="col border-end">
                    <span class="data_numbers">1600</span>
                    <br>
                    <span>HOURS VIDEO</span>
                </div>
                <div class="col border-end">
                    <span class="data_numbers">150</span>
                    <br>
                    <span>COUNTRIES REACHED</span>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partial/variables' as *;

.data {
    background-color: $recent_buttons;
    background-image: url(../../../../../public/images/we_proud.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    height: 754px;

    .container {
        width: 80%;
        max-width: 1178px;

        .title {
            padding: 6rem 12rem;
        }

        .data_numbers {
            font-size: 64px;
        }
    }
}
</style>