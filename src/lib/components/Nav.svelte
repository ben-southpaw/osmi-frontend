<script>
	import icon from '$lib/assets/images/Icon.svg';
	import { isMobile } from '../store';
</script>

<div class="nav-container">
	<div class="content">
		<div class="icon-container">
			<img src={icon} alt="osmi icon" />
		</div>

		{#if $isMobile}
			<div class="flex-container">
				<div class="hamburger"></div>
				<div class="hamburger"></div>
				<div class="hamburger"></div>
			</div>
		{:else}
			<div class="left menu">
				<p>Nodes</p>
				<p>Token</p>
				<p>About</p>
			</div>

			<div class="right menu">
				<p>Connect wallet</p>
				<p>Dashboard</p>
				<div class="button">
					<p>Try Chat</p>
				</div>
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	$padding: uiscale(12);
	.nav-container {
		height: uiscale(68);
		width: 100%;
		margin-bottom: uiscale(12);
		@media #{$breakpoint-small} {
			height: uiscale(100);
			margin-top: uiscale(20);
		}

		.content {
			height: 100%;
			display: flex;
			align-items: center;
			padding: 0 uiscale(36);

			@media #{$breakpoint-small} {
				justify-content: space-between;
				.flex-container {
					display: flex;
					flex-direction: column;
					.hamburger {
						width: uiscale(40);
						margin-top: uiscale(10);
						border: uiscale(2) solid var(--Text-primary, rgba(242, 241, 244, 1));
					}
				}
			}

			.icon-container {
				height: uiscale(32);
				width: uiscale(32);

				padding-right: uiscale(120);

				@media #{$breakpoint-small} {
					padding-right: unset;
					height: 100%;
					width: uiscale(50);
				}
				img {
					height: 100%;
					width: 100%;
				}
			}

			.menu {
				display: flex;
				align-items: center;
				justify-content: space-between;
			}

			.right {
				margin-left: auto;
				width: uiscale(438);

				.button {
					background-color: #7d42ec;
					height: uiscale(44);
					width: uiscale(103);
					border-radius: uiscale(60);
					display: flex;
					align-items: center;
					justify-content: space-around;
					p {
						opacity: 1;
					}
				}
			}

			.left {
				width: uiscale(307);
			}

			p {
				opacity: 0.6;
				font-size: max(14px, uiscale(14));
				line-height: uiscale(20);
				transition: 0.2s ease-in-out;
				&:hover {
					transform: scale(1.1);
				}
			}
		}
	}
</style>
