<nav>
	<a href="/">Home</a>
	<a href="/projects">Projects</a>
	<a href="/about">About</a>
</nav>

<slot />

<style>
	@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");

	:root {
		font-family: Poppins, Arial, Helvetica, sans-serif;
		--brand-100: #ebf8ff;
		--brand-200: #0ea5e9;
		--brand-300: #7dd3fc;
		--brand-400: #075985;
		background-color: var(--brand-100);
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
