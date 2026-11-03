<script>
	import ResumeEntry from '#lib/components/ResumeEntry.svelte';
	import { experience, projects, education, skills } from '#lib/about.js';
</script>

<svelte:head>
	<title>About | Jason Te</title>
</svelte:head>

<h1>About Me</h1>
<p>
	I'm Jason Te, a Master's student in Computer Science at Northeastern University in Seattle. I build
	backend and distributed systems that stay correct under pressure, and I test them as carefully as I
	write them.
</p>

<section>
	<h2>Experience</h2>
	{#each experience as entry (entry.title.name)}
		<ResumeEntry {...entry} />
	{/each}
</section>

<section>
	<h2>Projects</h2>
	{#each projects as entry (entry.title.name)}
		<ResumeEntry {...entry} />
	{/each}
</section>

<section>
	<h2>Education</h2>
	{#each education as entry (entry.title.name)}
		<ResumeEntry {...entry} />
	{/each}
</section>

<section>
	<h2>Skills</h2>
	<ul>
		{#each skills as skill (skill)}
			<li>{skill}</li>
		{/each}
	</ul>
</section>
