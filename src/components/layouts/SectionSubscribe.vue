<script>
export default {
    name: 'SectionSubscribe'
}
</script>

<template>
    <section class="subscribe">
        <div class="container d-flex py-5">
            <div class="newsletter">
                <h4>Subscribe our newsletter</h4>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                    alteration in some form, by injected humour, or randomised words.</p>
            </div>
            <div class="mail_form px-5">
                <h4>YOUR E-MAIL ADDRESS</h4>
                <div class="searchbar input-group flex-nowrap">
                    <input type="text" class="form-control" placeholder="Enter your E-mail"
                        aria-label="Enter your E-mail" aria-describedby="button-addon2">
                    <button class="btn px-3" type="button" id="button-addon2">
                        SUBSCRIBE
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partial/variables' as *;

.subscribe {
    background-color: $secondary_vibrant_color;
    color: $light;

    .container {
        width: 80%;
        max-width: 1178px;
        font-size: 15px;

        h4 {
            font-size: 18px;
        }

        .form-control {
            width: 282px;
            font-size: 13px;
            border-radius: 0;
            border: none;
            background-color: $searchbar_bckg;
            color: $icons;
        }

        .btn {
            background-color: $buttons_color;
            border-radius: 0;
            color: $light;
        }
    }

}
</style>