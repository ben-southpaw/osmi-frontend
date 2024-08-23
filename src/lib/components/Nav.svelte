<script>
	import icon from '$lib/assets/images/Icon.svg';
</script>

<div class="nav-container">
	<div class="content">
		<div class="icon-container">
			<img src={icon} alt="osmi icon" />
		</div>
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
	</div>
</div>

<style lang="scss">
	$padding: uiscale(12);
	.nav-container {
		height: uiscale(68);
		width: 100%;
		margin-bottom: uiscale(12);

		.content {
			height: 100%;
			display: flex;
			align-items: center;
			padding: 0 uiscale(36);

			.icon-container {
				height: uiscale(32);
				width: uiscale(32);

				padding-right: uiscale(120);
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
