<script>
	import '@fontsource-variable/instrument-sans';
	import '@fontsource/space-grotesk/500.css';
</script>

<slot />

<style lang="scss">
	:global(*)::-webkit-scrollbar {
		display: none;
	}

	:global(*) {
		// cursor: none;
	}

	:global(html, body) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		overscroll-behavior: none;
		background-size: cover;
		background-repeat: no-repeat;
		background-attachment: fixed;
		scroll-behavior: smooth;
	}

	:global(h4, p, a) {
		font-family: 'Instrument Sans Variable', sans-serif;
		margin: 0;
		color: #ffffff;
		cursor: default;
	}

	:global(h1, h2) {
		font-family: 'Space Grotesk', sans-serif;
		margin: 0;
		color: #ffffff;
		cursor: default;
	}
</style>
