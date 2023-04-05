<div class="container">
	<div class="about-container">
		<div class="header">
			<h1>About me 👨‍💻</h1>
		</div>

		<p>
			I am a computer science student in Taylor's University. Aside from the
			syllabus that all of us CS students typically take in my university, I
			have taken upon myself to self-study quite a lot so as to stay relevant
			with what the industry may be seeking. Historically, I have studied and
			taken courses that enhanced my data science skills and also web
			development skills, which have greatly benefited in me further
			understanding the fundamentals of programming in general.
		</p>

		<p>
			If you are interested in giving me a chance to work for you, please don't
			hesitate to contact me through the contact details below!
		</p>

		<div class="contact">
			<h2>Contact me 📧</h2>
			<div class="row">
				<p>Phone Number: 010-9315538</p>
				<p>
					Email: <a target="_blank" href="mailto:whoong.ziwei@gmail.com"
						>whoong.ziwei@gmail.com</a
					>
				</p>
				<p>
					<a target="_blank" href="https://www.linkedin.com/in/whoong-zi-wei/"
						>Linkedin</a
					>
				</p>
				<p><a target="_blank" href="https://github.com/ziwei531">Github</a></p>
			</div>
		</div>
	</div>
</div>

<style>
	.container {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100vh;
	}

	.about-container {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding: 2rem;
		border-radius: 0.5rem;
		max-width: 800px;
		background-color: white;
		box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
	}

	.container h2 {
		text-align: center;
	}

	.contact {
		text-align: center;
	}
	.row {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
		justify-content: center;
	}

	.row a {
		color: var(--brand-400);
		text-decoration: none;
	}

	.row a:hover {
		color: var(--brand-300);
		transition: all;
		transition-duration: 0.3s;
		transition-timing-function: ease-in-out;
	}

	@media only screen and (max-width: 768px) {
		.container {
			padding: 2rem;
			height: 50%;
		}

		.row {
			display: grid;
			grid-template-columns: repeat(1, 1fr);
		}
	}
</style>
