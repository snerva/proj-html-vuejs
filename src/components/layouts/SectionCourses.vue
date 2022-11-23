<script>
export default {
    name: 'SectionCourses'
}
</script>

<template>
    <section class="courses">
        <div class="container">
            <div class="cards">
                <div class="row row-cols-3">
                    <div class="col px-3">
                        <div class="single_card">
                            <font-awesome-icon icon="fa-solid fa-earth-africa" class="icon " />
                            <h6>Worldwide Recognize</h6>
                            <p>Our online course certificates can be used around the world and also in most popular
                                universities and companies.</p>
                        </div>
                    </div>
                    <div class="col px-3">
                        <div class="single_card">
                            <font-awesome-icon icon="fa-solid fa-desktop" class="icon" />
                            <h6>Mostly Online Learning (sd)</h6>
                            <p>Masterstudy online certificates can be obtained in a range of specialized areas and
                                typically take about a year to complete.</p>
                        </div>

                    </div>
                    <div class="col px-3">
                        <div class="single_card">
                            <font-awesome-icon icon="fa-regular fa-calendar-check" class="icon" />
                            <h6>Graduate in as little as 1 Year</h6>
                            <p>Online post graduate certificates are a popular way to develop your professional
                                qualifications of Masterstudy</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="courses_groups">
                <div class="row row-cols-2 g-3">
                    <div class="col-8 pt-2">
                        <div class="image">
                            <img src="../../../public/images/cat_1-770x375.jpg" alt="">
                        </div>
                        <div class="text d-flex justify-content-between align-items-center mt-3">
                            <h6>Software Development</h6>
                            <a class="float-end" href="">5 Courses</a>
                        </div>
                    </div>
                    <div class="col-4 pt-2 px-2">
                        <div class="row row-cols-1 g-3">
                            <div class="col ps-3">
                                <div class="image">
                                    <img src="../../../public/images/cat_2-370x155.jpg" alt="">
                                </div>
                                <div class="text d-flex justify-content-between align-items-center mt-3">
                                    <h6>Art</h6>
                                    <a class="float-end" href="">8 Courses</a>
                                </div>
                            </div>
                            <div class="col ps-3 pt-2">
                                <div class="image">
                                    <img src="../../../public/images/cat_3-370x155.jpg" alt="">
                                </div>
                                <div class="text d-flex justify-content-between align-items-center mt-3">
                                    <h6>Material Design</h6>
                                    <a class="float-end" href="">5 Courses</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row row-cols-3 g-3">
                    <div class="col py-4">
                        <div class="image">
                            <img src="../../../public/images/cat_5-370x155.jpg" alt="">
                        </div>
                        <div class="text d-flex justify-content-between align-items-center mt-3">
                            <h6>Music</h6>
                            <a class="float-end" href="">5 Courses</a>
                        </div>
                    </div>
                    <div class="col py-4">
                        <div class="image">
                            <img src="../../../public/images/cat_4-370x155.jpg" alt="">
                        </div>
                        <div class="text d-flex justify-content-between align-items-center mt-3">
                            <h6>Exercise</h6>
                            <a class="float-end" href="">7 Courses</a>
                        </div>
                    </div>
                    <div class="col py-4">
                        <div class="image">
                            <img src="../../../public/images/cat_6-370x155.jpg" alt="">
                        </div>
                        <div class="text d-flex justify-content-between align-items-center mt-3">
                            <h6>Photography</h6>
                            <a class="float-end" href="">4 Courses</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partial/variables' as *;

.courses {
    .container {
        width: 80%;
        max-width: 1178px;
        margin: 0 auto;

        .single_card {
            padding: 2rem;
            background-color: $cards_light;

            &:hover {
                margin-top: -1rem;
                cursor: pointer;
            }

            .icon {
                font-size: 50px;
                color: $buttons_color;
            }

            h6 {
                margin: 1.5rem 0;
            }

            p {
                font-size: 13px;
            }
        }

        .courses_groups {
            margin: 118px 0;

            a {
                font-size: 13px;
                text-decoration: none;
                color: $dark;
            }

        }
    }

}
</style>