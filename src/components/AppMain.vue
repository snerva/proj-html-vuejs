<script>
import BannerStart from './layouts/BannerStart.vue'
import SectionCourses from './layouts/SectionCourses.vue'
import BannerRead from './layouts/BannerRead.vue'
import RecentCourses from './layouts/RecentCourses.vue'
import BannerData from './layouts/BannerData.vue'
import SectionSubscribe from './layouts/SectionSubscribe.vue'
export default {
    name: 'AppMain',
    components: {
        BannerStart,
        SectionCourses,
        BannerRead,
        RecentCourses,
        BannerData,
        SectionSubscribe
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
        <section class="popular text-center">
            <h2>Popular courses</h2>
            <p class="m-0">Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            <div class="popular_cards py-5">
                <div class="row row-cols-6 gx-3 gy-4">
                    <div class="col p-2">
                        <div class="single_card">
                            <div class="image_card">
                                <img src="../../public/images/photo-1461749280684-dccba630e2f6-272x161.jpeg" alt="">
                            </div>
                            <div class="card_body p-3 text-start border border-top-0">
                                <a href="">Apache ></a>
                                <p>Web Coding and Apache Basics</p>
                                <hr>
                                <div class="card_info d-flex justify-content-between align-items-center">
                                    <span>
                                        <font-awesome-icon icon="fa-regular fa-clock" class="icon_clock" /><small>6
                                            hours</small>
                                    </span>
                                    <span><strong>Free</strong></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col p-2">
                        <div class="single_card">
                            <div class="image_card position-relative">
                                <span class="lateral_triangle left_triangle position-absolute"></span>
                                <span class="lateral_triangle right_triangle position-absolute"></span>
                                <span class="label yellow_label featured position-absolute">FEATURED</span>
                                <span class="label new position-absolute">NEW</span>
                                <img src="../../public/images/cat_2-272x161.jpg" alt="">
                            </div>
                            <div class="card_body yellow_border p-3 text-start">
                                <a href="">Art ></a>
                                <p>Real Things Art Painting by Jason Ni</p>
                                <hr>
                                <div
                                    class="card_info d-flex justify-content-between align-items-center position-relative">
                                    <span>
                                        <font-awesome-icon icon="fa-regular fa-clock" class="icon_clock" /><small>6
                                            hours</small>
                                    </span>
                                    <span><strong>$45</strong></span>
                                    <span class="sale position-absolute">$50</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col p-2">
                        <div class="single_card">
                            <div class="image_card position-relative">
                                <span class="label hot position-absolute">HOT</span>
                                <img src="../../public/images/course-preview-272x161.jpg" alt="">
                            </div>
                            <div class="card_body p-3 text-start border boredr-top-0">
                                <a href="">Software Development ></a>
                                <p>Basics of Masterstudy</p>
                                <hr>
                                <div class="card_info d-flex justify-content-between align-items-center">
                                    <div class="stars d-flex align-items-center">
                                        <img src="../../public/images/starfull.svg" alt="">
                                        <img src="../../public/images/starfull.svg" alt="">
                                        <img src="../../public/images/starfull.svg" alt="">
                                        <img src="../../public/images/starfull.svg" alt="">
                                        <img src="../../public/images/starfull.svg" alt="">
                                        <span class="px-1">5</span>
                                    </div>
                                    <span><strong>Free</strong></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col p-2">
                        <div class="single_card">
                            <div class="image_card position-relative">
                                <span class="label hot position-absolute">HOT</span>
                                <img src="../../public/images/photo-1496307042754-b4aa456c4a2d-272x161.jpeg" alt="">
                            </div>
                            <div class="card_body p-3 text-start border border-top-0">
                                <a href="">Electronic ></a>
                                <p>How to be a DJ? Make Electronic Music</p>
                                <hr>
                                <div
                                    class="card_info d-flex justify-content-between align-items-center position-relative">
                                    <div class="stars d-flex align-items-center">
                                        <img src="../../public/images/starfull.svg" alt="">
                                        <img src="../../public/images/starfull.svg" alt="">
                                        <img src="../../public/images/starfull.svg" alt="">
                                        <img src="../../public/images/starfull.svg" alt="">
                                        <img src="../../public/images/starfull.svg" alt="">
                                        <span class="px-1">5</span>
                                    </div>
                                    <span><strong>$49</strong></span>
                                    <span class="sale position-absolute">$59</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col p-2">
                        <div class="single_card">
                            <div class="image_card">
                                <img src="../../public/images/photo-1416339134316-0e91dc9ded92-scaled-272x161.jpeg"
                                    alt="">
                            </div>
                            <div class="card_body p-3 text-start border border-top-0">
                                <a href="">Communication ></a>
                                <p>Design Instruments for Communication</p>
                                <hr>
                                <div class="card_info d-flex justify-content-between align-items-center">
                                    <span>
                                        <font-awesome-icon icon="fa-regular fa-clock" class="icon_clock" /><small>6
                                            hours</small>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col p-2">
                        <div class="single_card">
                            <div class="image_card">
                                <img src="../../public/images/cathryn-lavery-67852-unsplash-272x161.jpg" alt="">
                            </div>
                            <div class="card_body p-3 text-start border border-top-0">
                                <a href="">Art ></a>
                                <p>Make your Concept Right and Beautiful</p>
                                <hr>
                                <div class="card_info d-flex justify-content-between align-items-center">
                                    <span>
                                        <font-awesome-icon icon="fa-regular fa-clock" class="icon_clock" /><small>6
                                            hours</small>
                                    </span>
                                    <span><strong>$70</strong></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cards_buttons">
                <button class="btn_prev ">
                    <font-awesome-icon icon="fa-solid fa-chevron-left" class="chevron" />
                </button>
                <button class="btn_next">
                    <font-awesome-icon icon="fa-solid fa-chevron-right" class="chevron" />
                </button>
            </div>
        </section>
        <!--/.popular-->
        <section class="categories">
            <div class="row row-cols-2 gx-3 gy-4">
                <div class="col p-2">
                    <div class="cat_card d-flex align-items-center">
                        <img class=" img-fluid" src="../../public/images/image_box_1-221x231.png" alt="">
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
                        <img class=" img-fluid" src="../../public/images/image_box_2-234x231.png" alt="">
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
        <!--/.categories-->
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
        <!--/.opinions-->
    </main>
</template>

<style lang="scss" scoped>

</style>