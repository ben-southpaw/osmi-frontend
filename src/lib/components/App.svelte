<script>
	import { fade, fly, scale } from 'svelte/transition';
	import Chat from './Chat.svelte';
	import Header from './Header.svelte';
	import Nav from './Nav.svelte';
	import { isMobile } from '../store';
	import { onMount } from 'svelte';

	let scrollY;

	onMount(() => {
		handleResizeHome();
	});

	function handleResizeHome() {
		let mql = matchMedia('(max-width: 899px)');
		$isMobile = mql.matches;
	}
</script>

<svelte:window bind:scrollY on:resize={handleResizeHome} />

<div class="main">
	<Nav />
	<div class="hero-container">
		<Header />
		<Chat {scrollY} />
	</div>
</div>

<style lang="scss">
	@use 'sass:math';

	:global(:root) {
		--primary-colour: #fff;
		--secondary-colour: #000;
		--global-padding: uiscale(12);
	}

	:global(html) {
		@include responsive-scale(
			$screen-min: 800,
			$screen-max: 1440,
			// $aspect-ratio: math.div(1256, 640)
		);
		@media #{$breakpoint-small} {
			@include responsive-scale(
				$screen-min: 0,
				$screen-max: 800,
				$aspect-ratio: math.div(390, 844)
			);
		}
		@media #{$breakpoint-xlarge} {
			@include responsive-scale(
				$screen-min: 1440,
				$screen-max: 2500,
				$aspect-ratio: math.div(1500, 840)
			);
		}
	}

	* {
		scroll-behavior: smooth;
	}

	.main {
		max-width: 100vw;
		height: 100%;
		width: calc(100vw - uiscale(24));
		position: relative;
		pointer-events: all;
		overflow: hidden;
		padding: uiscale(12);
		@media #{$breakpoint-small} {
			padding: uiscale(12) 0;
			width: 100vw;
		}

		:global(a) {
			pointer-events: all;
			text-decoration: none !important;
		}

		.hero-container {
			width: 100%;
			height: uiscale(1200);
			border-radius: uiscale(36);
			background: linear-gradient(
				180deg,
				rgba(255, 255, 255, 0.1) 0%,
				rgba(125, 66, 236, 0.29) 100%
			);
			display: flex;
			flex-direction: column;
			align-items: center;
			@media #{$breakpoint-small} {
				height: 100%;
			}
		}
	}
</style>
