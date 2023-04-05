<script></script>

<div class="container">
	<h1>
		As I aim to become a Web Developer, here are the frameworks that I've
		studied:
	</h1>

	<div class="card-grid">
		<div class="framework-container">
			<img src="/images/React-icon.png" alt="react.js" />
			<p>React.js</p>
		</div>

		<div class="framework-container">
			<img src="/images/nextjs-removebg-preview.png" alt="next" />
			<p>Next.js</p>
		</div>

		<div class="framework-container">
			<img src="/images/sveltekit.png" alt="svelte" />
			<p>Sveltekit</p>
		</div>
		<div class="framework-container">
			<img src="/images/nodejs.png" alt="node" />
			<p>Node.js</p>
		</div>
		<div class="framework-container">
			<img src="/images/express.png" alt="express" />
			<p>Express.js</p>
		</div>
		<div class="framework-container">
			<img src="/images/tailwind.png" alt="express" />
			<p>Tailwind CSS</p>
		</div>
	</div>
</div>

<style>
	.container h1 {
		font-size: 2rem;
		text-align: center;
		filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07))
			drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
	}

	.container {
		padding: 1rem;
	}

	.card-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1rem;
		padding: 2rem;
		justify-content: center;
		align-items: center;
	}

	.card-grid p {
		font-size: 1.5rem;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.framework-container img {
		width: 60%;
		margin: auto;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.framework-container {
		padding: 1rem;
		border-radius: 1rem;
		box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
		outline: 3px solid black;
	}
</style>
