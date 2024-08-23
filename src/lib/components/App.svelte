<script>
	import { fade, fly, scale } from 'svelte/transition';
	import Chat from './Chat.svelte';
	import Header from './Header.svelte';
	import Nav from './Nav.svelte';
	import gsap from 'gsap';
	import videoDesktop from '$lib/assets/videos/desktop.mp4';
	import videoMobile from '$lib/assets/videos/mobile.mp4';
	import { onMount } from 'svelte';
	import { coords } from '../store';

	let tl;
	let videoSrc;
	let videoElement;
	let scrollY;
	let canvasDestination;
	let el;
	$: scrollY, handleScroll();

	onMount(() => {
		videoSrc = videoDesktop;
		tl = gsap.timeline();
	});

	function handleScroll() {
		if (videoElement) {
			if (scrollY > 0) {
				tl.to(videoElement, {
					yPercent: 80,
					xPercent: -118,
					scale: 0.34,
					duration: 1,
					ease: 'power4.inOut',
				});
			} else if (scrollY == 0) {
				tl.reverse();
			}
		}
	}
</script>

<svelte:window bind:scrollY />

<div class="main">
	<Nav />
	<div class="hero-container">
		<Header />
		{#if scrollY > 0}
			<Chat {scrollY} />
		{/if}
	</div>

	<div class="video-container">
		{#if videoSrc}
			<video
				autoplay
				loop
				muted
				bind:this={videoElement}
				in:fly={{
					y: '100%',
					x: '-50%',
					delay: 1550,
					duration: 800,
				}}
			>
				<track kind="captions" />
				<source src={videoSrc} type="video/mp4" />
			</video>
		{/if}
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
				$screen-min: 0,
				$screen-max: 2500,
				// $aspect-ratio: math.div(1680, 740)
			);
		}
	}

	* {
		scroll-behavior: smooth;
	}

	.video-container {
		position: absolute;
		top: uiscale(80);
		right: uiscale(33);
		width: uiscale(730);
		height: uiscale(492);
		video {
			width: 100%;
			height: 100%;
			mix-blend-mode: screen;
			object-fit: cover;
		}
	}

	.main {
		max-width: 100vw;
		height: 100%;
		width: calc(100vw - uiscale(24));
		position: relative;
		pointer-events: all;
		overflow: hidden;
		padding: uiscale(12);

		:global(a) {
			pointer-events: all;
			text-decoration: none !important;
		}
		@media #{$breakpoint-small} {
			height: 100vh;
			max-height: 100vh;
			position: fixed;
		}

		.hero-container {
			width: 100%;
			height: uiscale(1200);
			border-radius: uiscale(36);
			background: linear-gradient(
				180deg,
				rgba(255, 255, 255, 0.04) 0%,
				rgba(125, 66, 236, 0.04) 100%
			);
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}
</style>
