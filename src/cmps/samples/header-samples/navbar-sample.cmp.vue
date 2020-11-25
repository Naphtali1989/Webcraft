<template>
    <nav class="flex align-center">
        <h1 id="logo">Elena Joy</h1>
        <ul class="nav-links flex space-around clean-list">
            <li><a href="#about">About</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>  
    </nav>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
nav {
    width: 90%;
    margin: auto;
    min-height: 10vh;
    padding: 2rem 0rem;
    h1 {
        font-family: "Vibes", sans-serif;
    }
    a {
        font-family: "Ruhl", sans-serif;
        color:black;
        font-weight:700
    }
}
#logo {
    flex: 1 1 20rem;
}
.nav-links {
    flex: 1 1 20rem;
}
</style>