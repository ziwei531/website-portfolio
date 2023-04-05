<script>
	import projects from "$lib/utils/projects";
	import { each } from "svelte/internal";
</script>

<h1 class="project-title">
	Here are my projects that I've done so far as a student
</h1>
<div class="card-grid">
	{#each projects as project}
		<article class="card">
			<div class="card-image">
				<img src={project.img} alt="" />
			</div>
			<p class="center">{project.name}</p>
			<div class="card-buttons">
				<button
					><a target="_blank" href={project.github}>View Github Repository</a
					></button
				>
				<button><a target="_blank" href={project.demo}>View Demo</a></button>
			</div>
		</article>
	{/each}
</div>

<style>
	/* Im putting comments here for my ownself's reference. Please ignore*/

	.project-title {
		font-size: 2rem;
		padding: 1rem;
		text-align: center;
		filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07))
			drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
	}

	@media only screen and (max-width: 768px) {
		.project-title {
			font-size: 1.5rem;
		}
	}

	.center {
		text-align: center;
	}
	.card-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1rem;
		align-items: flex-start; /* aligns the card so that extra spaces won't be affected on other cards */
		padding: 2rem;
	}

	.card-image {
		overflow: hidden;
	}

	.card-image > img {
		display: block; /* so can change the width and height */
		width: 100%;
		aspect-ratio: 16 / 9;
		object-fit: cover;
	}

	.card {
		background: white;
		padding: 1rem;
		/* border: 1px solid #777; */
		border-radius: 0.375rem;
		filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));
	}

	.card-buttons {
		margin-bottom: 0.5rem;
		display: flex;
		justify-content: center;
		gap: 1rem;
	}

	.card-buttons > button > a {
		text-decoration: none;
		color: var(--brand-400);
		font-weight: 700;
	}

	.card-buttons > button {
		padding: 0.5rem;
		border-radius: 0.375rem;
		background-color: #bae6fd;
	}

	.card-buttons > button:hover {
		background-color: #075985;
		transition: all;
		transition-duration: 0.5s;
	}

	.card-buttons > button > a:hover {
		color: white;
		transition: all;
	}
</style>
