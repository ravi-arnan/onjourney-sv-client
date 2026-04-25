<script>
	import { resolve } from '$app/paths';
</script>

<footer class="footer-mobile">
	<p class="copyright">On-Journey © 2026 | Shaping Your Travel Experience</p>

	<div class="links">
		<a href={resolve('/privacy-policy')}>Privacy Policy</a>
		<span>|</span>
		<a href={resolve('/terms')}>Terms & Conditions</a>
	</div>
</footer>

<style>
	.footer-mobile {
		padding: 16px 12px 24px;
		text-align: center;
		font-size: 12px;
		color: #000;
		background-color: #f1f1f1;
	}

	.copyright {
		margin-bottom: 6px;
		font-weight: 500;
	}

	.links {
		display: flex;
		justify-content: center;
		gap: 8px;
		font-size: 12px;
	}

	.links a {
		color: #000;
		font-weight: 500;
	}

	.links a:hover {
		text-decoration: underline;
	}
</style>
