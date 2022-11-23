<script>
export default {
    name: 'RecentCourses'
}
</script>

<template>
    <section class="banner start">
        <div class="container  d-flex align-items-center">
            <div class="contents">
                <h1>Start Investing in You</h1>
                <p>With over 1200 courses in 18 subjects, you're guaranteed to find something that's right for you.
                </p>
                <a class="btn rounded-pill" href="" role="button">JOIN FOR FREE</a>
            </div>
            <div class="start_images position-relative">
                <img class="bubblespeech position-absolute" src="../../../public/images/bubblespeech.png" alt="">
                <img class="book1 position-absolute" src="../../../public/images/book1.png" alt="">
                <img class="book2 position-absolute" src="../../../public/images/book2.png" alt="">
                <img class="magnifier position-absolute" src="../../../public/images/magnifier.png" alt="">
                <img class="base" src="../../../public/images/base.png" alt="">
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partial/variables' as *;

.start {
    padding: 3.75rem;

    .container {
        width: 80%;
        max-width: 1178px;
        margin: 0 auto;

        h1 {
            font-size: 64px;
        }

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

        .start_images {
            margin-right: -9.5rem;

            .bubblespeech {
                right: 45px;
                top: 59px;
            }

            .book1 {
                top: 111px;
                right: 45px;
            }

            .book2 {
                bottom: 39px;
                right: 150px;
            }

            .magnifier {
                right: 65px;
                bottom: 117px;
            }
        }
    }
}
</style>