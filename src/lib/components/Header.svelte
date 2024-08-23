<script>
	import cta from '$lib/assets/images/cta-header.svg';
</script>

<div class="header">
	<div class="flex">
		<h1>the first AI owned by the people</h1>

		<p>
			The first uncensored, bias-free conversational AI agent based on a
			decentralized framework and owned by the people.
		</p>

		<div class="cta">
			<div class="image-container">
				<img src={cta} alt="cta try now" />
			</div>
			<p>Try now</p>
		</div>
	</div>
</div>

<style lang="scss">
	.header {
		position: relative;
		height: uiscale(342);
		margin: uiscale(80) 0;
		display: inline-block;
		width: 100%;
		width: calc(100% - uiscale(200));
		display: flex;
		.flex {
			height: 100%;
			h1 {
				width: uiscale(379);
				font-size: uiscale(40);
				line-height: uiscale(48);
				font-weight: 500;
				letter-spacing: uiscale(1);
			}

			p {
				margin-top: uiscale(24);
				font-size: uiscale(20);
				line-height: uiscale(31);
				width: uiscale(530);
				font-weight: 400;
				opacity: 0.6;
			}

			.cta {
				display: flex;
				align-items: center;
				justify-content: space-between;
				height: uiscale(24);
				width: uiscale(91);
				margin-top: uiscale(81);
				transition: 0.2s ease-in-out;
				&:hover {
					transform: scale(1.1);
				}
				.image-container {
					height: 100%;
					img {
						height: 100%;
					}
				}
				p {
					font-size: uiscale(14);
					margin: 0;
					line-height: uiscale(24);
					width: auto;
				}
			}
		}

		.canvas-placeholder {
			display: none;
			position: absolute;
			right: 0;
			top: 50%;
			transform: translateY(-50%);
			height: 100%;
			width: 50%;
			// border: solid aqua 1px;
		}
	}
</style>
