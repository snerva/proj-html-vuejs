<script>
export default {
    name: 'AppMain'

}
</script>

<template>
    <main>
        <section class="banner start">
            <div class="container  d-flex align-items-center">
                <div class="contents">
                    <h1>Start Investing in You</h1>
                    <p>With over 1200 courses in 18 subjects, you're guaranteed to find something that's right for you.
                    </p>
                    <a class="btn rounded-pill" href="" role="button">JOIN FOR FREE</a>
                </div>
                <div class="start_images position-relative">
                    <img class="bubblespeech position-absolute" src="../../public/images/bubblespeech.png" alt="">
                    <img class="book1 position-absolute" src="../../public/images/book1.png" alt="">
                    <img class="book2 position-absolute" src="../../public/images/book2.png" alt="">
                    <img class="magnifier position-absolute" src="../../public/images/magnifier.png" alt="">
                    <img class="base" src="../../public/images/base.png" alt="">
                </div>
            </div>
        </section>
        <!--/.banner-->
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
                                <img src="../../public/images/cat_1-770x375.jpg" alt="">
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
                                        <img src="../../public/images/cat_2-370x155.jpg" alt="">
                                    </div>
                                    <div class="text d-flex justify-content-between align-items-center mt-3">
                                        <h6>Art</h6>
                                        <a class="float-end" href="">8 Courses</a>
                                    </div>
                                </div>
                                <div class="col ps-3 pt-2">
                                    <div class="image">
                                        <img src="../../public/images/cat_3-370x155.jpg" alt="">
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
                                <img src="../../public/images/cat_5-370x155.jpg" alt="">
                            </div>
                            <div class="text d-flex justify-content-between align-items-center mt-3">
                                <h6>Music</h6>
                                <a class="float-end" href="">5 Courses</a>
                            </div>
                        </div>
                        <div class="col py-4">
                            <div class="image">
                                <img src="../../public/images/cat_4-370x155.jpg" alt="">
                            </div>
                            <div class="text d-flex justify-content-between align-items-center mt-3">
                                <h6>Exercise</h6>
                                <a class="float-end" href="">7 Courses</a>
                            </div>
                        </div>
                        <div class="col py-4">
                            <div class="image">
                                <img src="../../public/images/cat_6-370x155.jpg" alt="">
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
        <!--/.courses-->
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
        <!--/.read_more-->
        <section class="recents text-center">
            <h2>Recent courses</h2>
            <div class="categories_link mt-5">
                <a class="light_grey rounded-pill" href="">All Categories</a>
                <a href="">Art</a>
                <a href="">Exercise</a>
                <a href="">Material design</a>
                <a href="">Music</a>
                <a href="">Photography</a>
                <a href="">Software Development</a>
            </div>
            <div class="categories_cards px-5 pt-5">
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
                    <div class="col p-2">
                        <div class="single_card">
                            <div class="image_card">
                                <img src="../../public/images/photo-1475452779376-caebfb988090-272x161.jpeg" alt="">
                            </div>
                            <div class="card_body p-3 text-start border border-top-0">
                                <a href="">Bicycling ></a>
                                <p>Road Bike Manual or How to Be a Champion</p>
                                <hr>
                                <div class="card_info d-flex justify-content-between align-items-center">
                                    <span>
                                        <font-awesome-icon icon="fa-regular fa-clock" class="icon_clock" /><small>6
                                            hours</small>
                                    </span>
                                    <span><strong>$20</strong></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col p-2">
                        <div class="single_card">
                            <div class="image_card">
                                <img src="../../public/images/cristian-grecu-762012-unsplash-min-scaled-272x161.jpg"
                                    alt="">
                            </div>
                            <div class="card_body p-3 text-start border border-top-0">
                                <a href="">Documentary ></a>
                                <p>How to Make a Beautiful Landscape photos?</p>
                                <hr>
                                <div class="card_info d-flex justify-content-between align-items-center">
                                    <span>
                                        <font-awesome-icon icon="fa-regular fa-clock" class="icon_clock" /><small>6
                                            hours</small>
                                    </span>
                                    <span><strong>$60</strong></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col p-2">
                        <div class="single_card">
                            <div class="image_card">
                                <img src="../../public/images/landscape-272x161.jpg" alt="">
                            </div>
                            <div class="card_body p-3 text-start border border-top-0">
                                <a href="">Art ></a>
                                <p>Let`s paint Van Gogh`s Starry Night</p>
                                <hr>
                                <div class="card_info d-flex justify-content-between align-items-center">
                                    <span>
                                        <font-awesome-icon icon="fa-regular fa-clock" class="icon_clock" /><small>6
                                            hours</small>
                                    </span>
                                    <span><strong>$79</strong></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col p-2">
                        <div class="single_card">
                            <div class="image_card position-relative">
                                <span class="label special position-absolute">SPECIAL</span>
                                <img src="../../public/images/12345-1-272x161.png" alt="">
                            </div>
                            <div class="card_body p-3 text-start border border-top-0">
                                <a href="">Nvidia ></a>
                                <p>Nvidia and UE4 Technologies Practice</p>
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
                                <span class="label special position-absolute">SPECIAL</span>
                                <img src="../../public/images/jakob-owens-198234-unsplash-min-1-272x161.png" alt="">
                            </div>
                            <div class="card_body p-3 text-start border border-top-0">
                                <a href="">Art ></a>
                                <p>How to Work with Legendary RED camera?</p>
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
                            <div class="image_card">
                                <img src="../../public/images/promo_tf-272x161.jpg" alt="">
                            </div>
                            <div class="card_body p-3 text-start border border-top-0">
                                <a href="">Software Development ></a>
                                <p>Masterstudy Mobile LMS App</p>
                                <hr>
                                <div class="card_info d-flex justify-content-between align-items-center">
                                    <span>
                                        <font-awesome-icon icon="fa-regular fa-clock" class="icon_clock" /><small>2
                                            hours</small>
                                    </span>
                                    <span><strong>Free</strong></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="show">
                    <a href="" class="categories_btn rounded-pill">SHOW ALL</a>
                </div>
            </div>
        </section>
        <!--/.recents-->
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
        <!--/.data-->
        <section class="subscribe">
            <div class="container d-flex py-5">
                <div class="newsletter">
                    <h4>Lorem, ipsum dolor.</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque minus, exercitationem soluta
                        dolores placeat unde dolor eius fugiat et, necessitatibus illum beatae? Totam, fugiat eum!</p>
                </div>
                <div class="mail_form">
                    <h4>Lorem, ipsum dolor.</h4>
                    <input type="text" name="" id="">
                </div>
            </div>
        </section>
        <!--/.subscribe-->
        <section class="popular text-center">
            <h2>Popular courses</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            <div class="popular_cards p-5">
                <div class="row row-cols-6 gx-3 gy-4">
                    <div class="col p-2">
                        <div class="single_card  bg-secondary">
                            <img src="" alt="">
                            <div class="card_body p-3 text-start">
                                <a href="">lorem</a>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div class="card_info d-flex justify-content-between align-items-center p-3">
                                <span>time</span>
                                <span>cost</span>
                            </div>
                        </div>
                    </div>
                    <div class="col p-2">
                        <div class="single_card  bg-secondary">
                            <img src="" alt="">
                            <div class="card_body p-3 text-start">
                                <a href="">lorem</a>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div class="card_info d-flex justify-content-between align-items-center p-3">
                                <span>time</span>
                                <span>cost</span>
                            </div>
                        </div>
                    </div>
                    <div class="col p-2">
                        <div class="single_card  bg-secondary">
                            <img src="" alt="">
                            <div class="card_body p-3 text-start">
                                <a href="">lorem</a>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div class="card_info d-flex justify-content-between align-items-center p-3">
                                <span>stars</span>
                                <span>cost</span>
                            </div>
                        </div>
                    </div>
                    <div class="col p-2">
                        <div class="single_card  bg-secondary">
                            <img src="" alt="">
                            <div class="card_body p-3 text-start">
                                <a href="">lorem</a>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div class="card_info d-flex justify-content-between align-items-center p-3">
                                <span>stars</span>
                                <span>cost</span>
                            </div>
                        </div>
                    </div>
                    <div class="col p-2">
                        <div class="single_card  bg-secondary">
                            <img src="" alt="">
                            <div class="card_body p-3 text-start">
                                <a href="">lorem</a>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div class="card_info d-flex justify-content-between align-items-center p-3">
                                <span>time</span>
                                <span>cost</span>
                            </div>
                        </div>
                    </div>
                    <div class="col p-2">
                        <div class="single_card  bg-secondary">
                            <img src="" alt="">
                            <div class="card_body p-3 text-start">
                                <a href="">lorem</a>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div class="card_info d-flex justify-content-between align-items-center p-3">
                                <span>time</span>
                                <span>cost</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cards_buttons mt-4">
                    <button class="btn_prev">P</button>
                    <button class="btn_next">N</button>
                </div>
            </div>
        </section>
        <!--/.popular-->
        <section class="categories">
            <div class="container">
                <div class="row row-cols-2 g-3">
                    <div class="col p-2">
                        <div class="cat_card">
                            <img class="p-3" src="" alt="">
                            <div class="contents">
                                <h4>Lorem, ipsum dolor.</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, repellat beatae.</p>
                                <button>start teaching</button>
                            </div>
                        </div>
                    </div>
                    <div class="col p-2">
                        <div class="cat_card">
                            <img class="p-3" src="" alt="">
                            <div class="contents">
                                <h4>Lorem, ipsum dolor.</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, repellat beatae.</p>
                                <button>start teaching</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--/.categories-->
        <section class="opinions">

        </section>
        <!--/.opinions-->
    </main>
</template>

<style lang="scss" scoped>

</style>