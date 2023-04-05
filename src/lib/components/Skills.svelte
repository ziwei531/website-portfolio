<script>
</script>

<div class="container">
	<h1 class="center">General Summary of My Skillsets</h1>
	<div class="inner-container">
		<div class="skill-container">
			<h1>Web Development</h1>
			<p>
				I have at least 2 years of coding in websites in HTML, CSS, Javascript,
				and React. Hence, I am quite familiar with the basics of web
				development.
			</p>
		</div>
		<div class="skill-container">
			<h1>Data Analytic Skills</h1>
			<p>
				This is because I've taken courses in Data Analytics and also majored in
				Data Science for my CS Module. Hence, I am familiar with Python and R.
			</p>
		</div>
		<div class="skill-container">
			<h1>Data Visualization</h1>
			<p>
				As I've taken both data visualization module in my university in
				addition to a few data analytics courses online, I am hence quite
				familiar with generating data visualizations that provide intriguing
				insights
			</p>
		</div>
	</div>
</div>

<style>
	.center {
		text-align: center;
	}
	.container {
		background-color: #0ea5e9;
		padding: 3rem;
	}

	.container h1 {
		color: #18181b;
		filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07))
			drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
	}
	.inner-container {
		display: grid;
		gap: 3rem;
		grid-template-columns: repeat(3, 1fr);
	}

	.skill-container {
		background-color: var(--brand-300);
		padding: 2em;
		border-radius: 0.5rem;
		box-shadow: 0 4px 3px rgb(0 0 0 / 0.07), 0 2px 2px rgb(0 0 0 / 0.06);
	}

	.inner-container h1 {
		color: #1f2937;
		filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07))
			drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
	}

	@media only screen and (max-width: 1024px) {
		.inner-container {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media only screen and (max-width: 768px) {
		.inner-container {
			grid-template-columns: 1fr;
		}
	}
</style>
