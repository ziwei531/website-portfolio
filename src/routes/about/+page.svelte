<ul>
	<div class="container">
		<h1>It's still under constuction. But here are some of my links</h1>
		<div class="list">
			<li>
				<a href="https://www.linkedin.com/in/whoong-zi-wei/">LinkedIn</a>
			</li>
			<li>
				<a href="https://github.com/ziwei531">Github</a>
			</li>
		</div>
	</div>
</ul>

<style>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 1rem;
		height: 100vh;
	}

	ul {
		list-style-type: none;
	}

	.list {
		display: flex;
		gap: 1rem;
		justify-content: center;
		align-items: center;
	}

	.list li a {
		font-size: 1.5rem;
		font-weight: 700;
		color: #0ea5e9;
		text-decoration: none;
	}

	.list li a:hover {
		color: #0369a1;
		transition: all;
		transition-duration: 0.3s;
		transition-timing-function: ease-out;
	}

	@media only screen and (max-width: 768px) {
		.container h1 {
			font-size: 1.5rem;
			text-align: center;
		}
		.list li a {
			font-size: 1rem;
		}
	}
</style>
