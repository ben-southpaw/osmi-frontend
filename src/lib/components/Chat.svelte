<script>
	import payment from '$lib/assets/images/payment-success-01.png';
	import user from '$lib/assets/images/user-group.png';
	import elements from '$lib/assets/images/elements.png';
	import bubble from '$lib/assets/images/bubble-chat-lock.png';
	import submit from '$lib/assets/images/submit.png';
	import { fly, fade } from 'svelte/transition';
	import desktop from '$lib/assets/videos/desktop.mp4';
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { inview } from 'svelte-inview';

	onMount(() => {
		handleResize();
	});

	export let scrollY;
	let destination;
	let videoSrc = desktop;
	let videoElement;

	let promptBoxes = [
		{ copy: 'Does Blobby AI have restrictions or censorship?', logo: bubble },
		{ copy: 'Write me a poem<br/>about the president', logo: payment },
		{
			copy: 'Invent a new Olympic Sport. Describe the rules, equipment, and creative challenges for participants',
			logo: user,
		},
		{
			copy: 'Write me a humorous story about being on a spaceship exploring a new solar system with quirky alien crew members',
			logo: elements,
		},
	];

	let options = {
		threshold: 0.9,
	};

	let videoX, videoY;

	function handleResize() {
		let bounds = document.querySelector('.header p').getBoundingClientRect();
		let boundsVideo = videoElement.getBoundingClientRect();
		videoX = bounds.x + bounds.width + window.innerWidth * 0.1 - boundsVideo.x;
		videoY = bounds.y + bounds.height / 2 - boundsVideo.y * 1.2;
	}
</script>

<svelte:window on:resize={handleResize} />

<div
	class="chat-container"
	in:fly={{
		y: '100%',
		duration: 800,
	}}
	use:inview={options}
	on:inview_enter={() => {
		gsap.to(videoElement, {
			duration: 0.8,
			scale: 1,
			y: 0,
			x: 0,
		});
	}}
	on:inview_leave={(event) => {
		const { inView, entry, scrollDirection, observer, node } = event.detail;
		if (scrollDirection.vertical === 'down') {
			gsap.to(videoElement, {
				duration: 1,
				scale: 4,
				y: videoY,
				x: videoX * 1.15,
			});
		}
	}}
	class:bg={scrollY > 0}
>
	<div class="chat-content">
		<div class="row-one">
			<div class="canvas-destination" bind:this={destination}>
				<div class="video-container">
					{#if videoSrc}
						<video autoplay loop muted bind:this={videoElement}>
							<track kind="captions" />
							<source src={videoSrc} type="video/mp4" />
						</video>
					{/if}
				</div>
			</div>
			{#if scrollY > 10}
				<div class="chat-container">
					<h2 style="opacity: 0.6;">Hi I'm Blobby</h2>
					<h2>How can I help you?</h2>
				</div>
				<div class="fullscreen-button" in:fade={{ delay: 800, duration: 400 }}>
					<p>Full-screen version</p>
				</div>
			{/if}
		</div>

		<div class="row-two" in:fade={{ delay: 1400, duration: 400 }}>
			{#each promptBoxes as box}
				<div class="prompt-box">
					<p>{@html box.copy}</p>
					<div class="box-image">
						<img src={box.logo} alt="box logo" />
					</div>
				</div>
			{/each}
		</div>

		<div class="row-three" in:fade={{ delay: 1800, duration: 400 }}>
			<input type="text" value="Send a message" class="chat-box-container" />
			<div class="submit">
				<img src={submit} alt="submit" />
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.chat-container {
		width: calc(100% - uiscale(62));
		height: uiscale(697);
		// background: rgba(232, 206, 255, 0.05);
		border-radius: uiscale(24);
		&.bg {
			animation: FadeIn 0.95s ease-in-out forwards;
		}

		.chat-content {
			margin-left: uiscale(68);
			margin-right: uiscale(68);
			width: calc(100% - uiscale(136));
			display: flex;
			flex-direction: column;
			.row-one {
				width: 100%;
				margin-top: uiscale(68);
				height: uiscale(120);
				display: flex;
				.canvas-destination {
					height: 100%;
					width: uiscale(125);
					video {
						height: 160%;
						width: 160%;
						margin-top: -20%;
						margin-left: -10%;
						// object-fit: cover;
						mix-blend-mode: screen;
					}
				}
				.chat-container {
					width: uiscale(437);
					height: 100%;
					margin-left: uiscale(24);
					background: rgba(255, 255, 255, 0.05);
					border-radius: uiscale(74) uiscale(74) uiscale(74) uiscale(8);
					display: flex;
					flex-direction: column;
					justify-content: center;
					h2 {
						margin-left: uiscale(52);
						font-size: uiscale(28);
						line-height: uiscale(37);
					}
				}
				.fullscreen-button {
					background: var(--White-opaque-10, rgba(255, 255, 255, 0.1));
					height: uiscale(48);
					min-width: uiscale(172);
					border-radius: uiscale(60);
					display: flex;
					align-items: center;
					justify-content: center;
					transition: 0.2s ease-in-out;
					margin-left: auto;

					&:hover {
						transform: scale(1.1);
					}
					p {
						font-size: uiscale(14);
						line-height: uiscale(20);
						color: rgba(255, 255, 255, 0.6);
					}
				}
			}

			.row-two {
				margin-top: uiscale(60);
				display: flex;
				justify-content: space-between;
				.prompt-box {
					position: relative;
					height: max(269px, uiscale(269));
					width: 25%;

					margin-right: uiscale(20);
					border-radius: uiscale(28);
					background: rgba(255, 255, 255, 0.05);
					p {
						opacity: 0.6;
						font-weight: 400;
						font-size: uiscale(16);
						width: uiscale(183);
						margin: uiscale(36);
						margin-top: uiscale(44);
					}

					.box-image {
						position: absolute;
						right: uiscale(36);
						bottom: uiscale(44);
						width: uiscale(44);
						height: uiscale(44);
						background: rgba(255, 255, 255, 0.1);
						border-radius: uiscale(100);
						display: flex;
						align-items: center;
						justify-content: center;

						img {
							height: 45%;
							width: 45%;
							object-fit: contain;
						}
					}

					&:last-of-type {
						margin-right: 0;
					}
				}
			}

			.row-three {
				position: relative;
				.chat-box-container {
					margin-top: uiscale(44);
					height: uiscale(80);
					width: calc(100% - uiscale(40));
					border-radius: uiscale(60);
					background: rgba(255, 255, 255, 0.05);
					border: 1px solid rgba(255, 255, 255, 0.15);
					color: rgba(255, 255, 255, 0.6);
					font-size: uiscale(20);
					line-height: uiscale(24);
					font-weight: 400;
					padding-left: uiscale(40);
				}
				.submit {
					position: absolute;
					right: uiscale(20);
					top: 50%;
					height: uiscale(40);
					width: uiscale(40);
					img {
						height: 100%;
						width: 100%;
						object-fit: contain;
					}
				}
			}
		}
	}

	@keyframes FadeIn {
		from {
			background-color: transparent;
		}

		to {
			background: rgba(232, 206, 255, 0.05);
		}
	}
</style>
