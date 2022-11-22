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
            <div class="navbar_menu">
                <div class="nav_links d-flex align-items-center">
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
                <div class="socials">
                </div>
            </div>
        </div>
        <hr class="m-0">
        <div class="header_bottom d-flex">

        </div>
    </header>
</template>

<style lang="scss" scoped>

</style>