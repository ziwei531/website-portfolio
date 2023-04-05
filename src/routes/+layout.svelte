<script>
	const now = new Date();
	const year = now.getFullYear();
</script>

<nav>
	<a href="/">Home</a>
	<a href="/projects">Projects</a>
	<a href="/about">About</a>
</nav>

<slot />

<footer>
	<p>© {year} Whoong Zi Wei</p>
	<p>
		Thank you for viewing my website! This website is created with Sveltekit 😎
	</p>
</footer>

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
		padding: 1rem;
		background: #0369a1;
		font-weight: 900;
		position: sticky;
		top: 0;
		z-index: 1;
	}

	nav a {
		color: #fff;
		text-decoration: none;
		cursor: pointer;
		padding-right: 30px;
	}

	nav a:hover {
		color: #7dd3fc;
		transition: all;
		transition-duration: 0.6s;
	}

	footer {
		padding: 1rem;
		text-align: center;
		background: var(--brand-400);
	}

	footer p {
		color: #fff;
		font-weight: 900;
		font-size: 1.5rem;
	}

	@media only screen and (max-width: 768px) {
		/* nav {
			justify-content: center;
		} */

		footer p {
			font-size: 1rem;
		}
	}
</style>
