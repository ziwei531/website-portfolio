<nav>
    <a href="/">Home</a>
    <a href="/projects">Projects</a>
    <a href="/about">About</a>
</nav>

<slot></slot>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");

    :root {
        font-family: Poppins, Arial, Helvetica, sans-serif;
        background-color: #ebf8ff;
    }

    :global(body) {
        box-sizing: border-box;
        margin: 0; 
        padding: 0;
    }

    nav {
        display: flex;
        justify-content: flex-end;
        gap: 1rem;
        align-items: center;
        padding: 1rem;
        background: #0369a1;
        font-weight: 900;
    }

    nav a {
        color: #fff;
        text-decoration: none;
        cursor: pointer;
    }

    nav a:hover {
        color: #7dd3fc;
        transition: all; 
        transition-duration: 0.6s;

    }

</style>