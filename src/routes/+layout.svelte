<script>
	import { onMount } from "svelte";
	import { writable } from "svelte/store";

	const isMobile = writable(false);

	onMount(() => {
		// set the initial value of isMobile based on the screen width
		const handleResize = () => {
			isMobile.set(window.innerWidth < 768);
		};

		handleResize();

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	});

	const now = new Date();
	const year = now.getFullYear();

	let toggle = false; // false = closed, true = open
	function handleToggle() {
		toggle = !toggle;
	}
</script>

<svelte:head>
	<title>Whoong Zi Wei</title>
	<meta name="description" content="Whoong Zi Wei's personal website" />
	<meta
		name="keywords"
		content="wzw, Whoong Zi Wei, Zi Wei, Whoong, Taylor's University, WZW"
	/>
</svelte:head>

<!--Hamburger menu import-->
<link
	rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
/>

<nav>
	<div class="logo">
		<a href="/">Whoong Zi Wei</a>
	</div>

	{#if toggle && $isMobile}
		<a on:click={handleToggle} href="/">Home</a>
		<a on:click={handleToggle} href="/projects">Projects</a>
		<a on:click={handleToggle} href="/about">About</a>
		<a
			on:click={handleToggle}
			target="_blank"
			href="https://flowcv.com/resume/qsrj03pfkd">Resume</a
		>
	{/if}

	{#if !$isMobile}
		<a href="/">Home</a>
		<a href="/projects">Projects</a>
		<a href="/about">About</a>
		<a target="_blank" href="https://flowcv.com/resume/qsrj03pfkd">Resume</a>
	{/if}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<i on:click={handleToggle} class="menu-toggler fa fa-bars" />
</nav>

<slot />

<footer>
	<p>© {year} Whoong Zi Wei</p>
	<p>
		Thank you for viewing my website! This <a
			target="_blank"
			href="https://github.com/ziwei531/internship-portfolio">website</a
		> is created with Sveltekit 😎
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

	.menu-toggler {
		display: none;
		width: 1.5rem;
		height: 1.5rem;
		cursor: pointer;
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

	nav .logo {
		margin-right: auto;
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

	footer a {
		color: var(--brand-300);
		text-decoration: none;
	}

	footer a:hover {
		color: var(--brand-200);
		transition: all;
		transition-duration: 0.3s;
		transition-timing-function: ease-in-out;
	}

	@media only screen and (max-width: 768px) {
		footer p {
			font-size: 1rem;
		}

		nav {
			justify-content: center;
			align-items: center;
		}

		nav a {
			padding-right: 1rem;
			padding-left: 1rem;
		}
		/* 
			nav .logo {
				margin-right: 0;
			} 
			this will make it centered
		*/

		nav {
			flex-direction: column;
		}

		.menu-toggler {
			position: absolute;
			top: 1rem;
			right: 1rem;
			display: block;
			color: #ebf8ff;
		}
	}
</style>
