<script>
export default {
    name: 'AppHeader'

}
</script>

<template>
    <header>
        <div class="header_top d-flex justify-content-between align-items-center py-2">
            <div class="language_form">
                <select name="languages" id="languages" class="border border-0 p-2">
                    <option value="english">English</option>
                </select>
            </div>
            <!--/.language_form-->
            <div class="navbar_menu d-flex">
                <div class="nav_links d-flex align-items-center px-3">
                    <div class="courses">
                        <a href="">Courses</a>
                    </div>
                    <div class="zoom position-relative">
                        <small class="new px-1">NEW</small>
                        <a href="">Zoom</a>
                    </div>
                    <div class="pages">
                        <a href="">Pages</a>
                    </div>
                    <div class="bundles">
                        <a href="">Bundles</a>
                    </div>
                    <div class="format">
                        <a href="">Course Formats</a>
                    </div>
                    <div class="add position-relative">
                        <small class="new px-1">NEW</small>
                        <a href="">Add Courses</a>
                    </div>
                    <div class="demos">
                        <a href="">Demos</a>
                    </div>
                </div>
                <!--/.navbar-links-->
                <div class="socials d-flex align-items-center">
                    <a href="">
                        <font-awesome-icon icon="fa-brands fa-twitter" size="lg" />
                    </a>
                    <a href="">
                        <font-awesome-icon icon="fa-brands fa-instagram" size="lg" />
                    </a>
                    <a href="">
                        <font-awesome-icon icon="fa-brands fa-behance" size="lg" />
                    </a>
                    <a href="">
                        <font-awesome-icon icon="fa-brands fa-dribbble" size="lg" />
                    </a>
                    <a href="">
                        <font-awesome-icon icon="fa-brands fa-flickr" size="lg" />
                    </a>
                    <a href="">
                        <font-awesome-icon icon="fa-brands fa-git" size="lg" />
                    </a>
                    <a href="">
                        <font-awesome-icon icon="fa-brands fa-linkedin" size="lg" />
                    </a>
                    <a href="">
                        <font-awesome-icon icon="fa-brands fa-pinterest" size="lg" />
                    </a>
                </div>
                <!--/.socials-->
            </div>
        </div>
        <!--/.header_top-->
        <hr class="m-0">
        <div class="header_bottom d-flex justify-content-between align-items-center py-4">
            <div class="logo">
                <img src="../../public/images/MasterStudy_logo.svg" alt="">
            </div>
            <!--/.logo-->
            <div class="search_courses d-flex">
                <div class="category_list d-flex align-items-center pe-2">
                    <font-awesome-icon icon="fa-solid fa-bars" size="lg" />
                    <span class="px-1">CATEGORY</span>
                </div>
                <div class="searchbar input-group">
                    <input type="text" class="form-control" placeholder="Search courses" aria-label="Search courses"
                        aria-describedby="button-addon2">
                    <button class="btn px-3" type="button" id="button-addon2">
                        <font-awesome-icon icon="fa-solid fa-magnifying-glass" size="md" />
                    </button>
                </div>
            </div>
            <!--/.search_courses-->
            <div class="typologies d-flex">
                <div class="instructor px-2">
                    <a href="">
                        <font-awesome-icon icon="fa-solid fa-bullhorn" />
                    </a>
                    <span class="px-2">Become an Instructor</span>
                </div>
                <div class="enterprise px-2">
                    <a href="">
                        <font-awesome-icon icon="fa-solid fa-briefcase" />
                    </a>
                    <span class="px-2">For Enterprise</span>
                </div>
            </div>
            <!--/.typologies-->
            <div class="account d-flex align-items-center">
                <div class="login">
                    <a href="">
                        <font-awesome-icon icon="fa-regular fa-user" />
                        <span class="px-2">Log In</span>
                    </a>
                </div>
                <div class="sign_up">
                    <a class="btn rounded-pill" href="" role="button">SIGN UP</a>
                </div>
                <div class="bookmark">
                    <a href="">
                        <font-awesome-icon icon="fa-regular fa-bookmark" size="2xl" />
                    </a>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>

</style>