<script>
export default {
    name: 'SectionCategories'
}
</script>

<template>
    <section class="categories">
        <div class="row row-cols-2 gx-3 gy-4">
            <div class="col p-2">
                <div class="cat_card d-flex align-items-center">
                    <img class=" img-fluid" src="../../../public/images/image_box_1-221x231.png" alt="">
                    <div class="contents">
                        <div class="text py-4">
                            <h4>Become an Instructor</h4>
                            <p>Teach what you love. MasterStudy gives you the tools to create a course.</p>
                        </div>
                        <a href="" class="start_teaching rounded-pill">START TEACHING</a>
                    </div>
                </div>
            </div>

            <div class="col p-2">
                <div class="cat_card d-flex align-items-center">
                    <img class=" img-fluid" src="../../../public/images/image_box_2-234x231.png" alt="">
                    <div class="contents">
                        <div class="text py-4">
                            <h4>Setup For Business</h4>
                            <p>Get unlimited access to 2,500 of Udemy's top courses for your team.</p>
                        </div>
                        <a href="" class="rounded-pill">DOING BUSINESS</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partial/variables' as *;

.categories {
    padding: 110px 92px;

    .cat_card {
        border: 1px solid $light_border;
        padding: 2rem 0;

        img {
            padding: 32px;
        }

        .text {
            padding-right: 4rem;

            h4 {
                font-size: 34px;
                margin-bottom: 20px;
            }
        }

        a {
            font-size: 13px;
            text-decoration: none;
            background-color: $buttons_color;
            padding: 16px 24px;
            color: $light;
        }

        .start_teaching:hover {
            background-color: $secondary_vibrant_color;
        }
    }
}
</style>