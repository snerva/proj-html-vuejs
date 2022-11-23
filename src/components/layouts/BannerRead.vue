<script>
export default {
    name: 'BannerRead'
}
</script>

<template>
    <section class="banner read_more d-flex align-items-center">
        <div class="container">
            <div class="contents">
                <h2>Limitless learning, more possibilities</h2>
                <p>Online courses open the opportunity for learning to almost anyone, regardless of their scheduling
                    commitments.
                </p>
                <a class="btn rounded-pill" href="" role="button">JOIN READ MORE</a>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partial/variables' as *;

.read_more {
    height: 598px;
    background-image: url(../../../../../public/images/Untitled-1-1-1-1-1.png);
    background-repeat: round;
    background-size: cover;

    .container {
        width: 80%;
        max-width: 1178px;
        margin: 0 auto;

        .contents {
            max-width: 570px;

            p {
                margin: 2rem 0;
                font-size: 24px;
            }

            .btn {
                background-color: $buttons_color;
                color: $light;
                font-size: 13px;
                padding: 16px 24px;

            }
        }
    }
}
</style>