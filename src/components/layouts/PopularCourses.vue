<script>
export default {
    name: 'PopularCourses'
}
</script>

<template>
    <section class="popular text-center">
        <h2>Popular courses</h2>
        <p class="m-0">Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
        <div class="popular_cards py-5">
            <div class="row row-cols-6 gx-3 gy-4">
                <div class="col p-2">
                    <div class="single_card">
                        <div class="image_card">
                            <img src="../../../public/images/photo-1461749280684-dccba630e2f6-272x161.jpeg" alt="">
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
                            <img src="../../../public/images/cat_2-272x161.jpg" alt="">
                        </div>
                        <div class="card_body yellow_border p-3 text-start">
                            <a href="">Art ></a>
                            <p>Real Things Art Painting by Jason Ni</p>
                            <hr>
                            <div class="card_info d-flex justify-content-between align-items-center position-relative">
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
                            <img src="../../../public/images/course-preview-272x161.jpg" alt="">
                        </div>
                        <div class="card_body p-3 text-start border boredr-top-0">
                            <a href="">Software Development ></a>
                            <p>Basics of Masterstudy</p>
                            <hr>
                            <div class="card_info d-flex justify-content-between align-items-center">
                                <div class="stars d-flex align-items-center">
                                    <img src="../../../public/images/starfull.svg" alt="">
                                    <img src="../../../public/images/starfull.svg" alt="">
                                    <img src="../../../public/images/starfull.svg" alt="">
                                    <img src="../../../public/images/starfull.svg" alt="">
                                    <img src="../../../public/images/starfull.svg" alt="">
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
                            <img src="../../../public/images/photo-1496307042754-b4aa456c4a2d-272x161.jpeg" alt="">
                        </div>
                        <div class="card_body p-3 text-start border border-top-0">
                            <a href="">Electronic ></a>
                            <p>How to be a DJ? Make Electronic Music</p>
                            <hr>
                            <div class="card_info d-flex justify-content-between align-items-center position-relative">
                                <div class="stars d-flex align-items-center">
                                    <img src="../../../public/images/starfull.svg" alt="">
                                    <img src="../../../public/images/starfull.svg" alt="">
                                    <img src="../../../public/images/starfull.svg" alt="">
                                    <img src="../../../public/images/starfull.svg" alt="">
                                    <img src="../../../public/images/starfull.svg" alt="">
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
                            <img src="../../../public/images/photo-1416339134316-0e91dc9ded92-scaled-272x161.jpeg"
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
                            <img src="../../../public/images/cathryn-lavery-67852-unsplash-272x161.jpg" alt="">
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
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partial/variables' as *;

.popular {
    background-color: $primary_light_color;
    padding: 118px 92px 64px;

    .single_card {
        font-size: 14px;


        .image_card {
            img {
                max-width: 100%;
            }

            .label {
                color: $light;
                font-size: 12px;
            }

            .yellow_label {
                background-color: $label_yellow;
                rotate: -48deg;
                top: 26px;
                left: -5px;
                padding: 5px 11px 4px 7px;
            }

            .lateral_triangle {
                width: 45px;
                height: 24px;
                background-color: $label_yellow;
                clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
            }

            .left_triangle {
                width: 42px;
                height: 20px;
                rotate: 90deg;
                top: 69px;
                left: -11px;
            }

            .right_triangle {
                rotate: -47deg;
                top: -4px;
                left: 45px;
            }

            .new {
                background-color: $secondary_vibrant_color;
                padding: 0.25rem 0.5rem;
                top: 8px;
                right: 8px;
            }

            .hot {
                background-color: $label;
                padding: 0.25rem 0.5rem;
                top: 8px;
                right: 8px;
            }

            .special {
                background-color: $label_yellow;
                padding: 0.125rem 0.5rem;
                top: 8px;
                right: 8px;
            }
        }

        .yellow_border {
            border: 1px solid $border;
            border-top: 0;
        }

        .card_body {
            background-color: $light;



            a {
                text-decoration: none;
                color: $icons;
                font-size: 12px;
            }

            p {
                margin-top: 0.5rem;
                font-weight: bold;
            }

            .icon_clock {
                color: $icons;
                margin-right: 0.5rem;
            }

            .sale {
                font-size: 12px;
                color: $icons;
                right: 0;
                bottom: 16px;
                text-decoration: line-through;
            }
        }

    }

    .cards_buttons {
        button {
            background-color: $light;
            border: 1px solid $light_border;
        }

        .chevron {
            vertical-align: middle;
            color: $light_border;
            padding: 0.5rem 0.75rem;

            &:hover {
                background-color: $chevron_hover;
            }
        }
    }
}
</style>