<script lang="ts">
	import { onMount } from 'svelte';
	import 'leaflet/dist/leaflet.css';

	type LocationPoint = [number, number];

	const baliLocations: LocationPoint[] = [
		[-8.409518, 115.188919],
		[-8.65005, 115.216667],
		[-8.506898, 115.262502],
		[-8.274006, 115.166759]
	];

	onMount(() => {
		const node = document.getElementById('destination-map');
		if (!node) return;

		let map: import('leaflet').Map | null = null;
		const renderMap = async () => {
			const L = await import('leaflet');
			map = L.map(node, { zoomControl: true, scrollWheelZoom: false });
			L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				maxZoom: 18,
				attribution: '&copy; OpenStreetMap contributors'
			}).addTo(map);
			const bounds = L.latLngBounds(baliLocations);
			const icon = L.divIcon({
				className: 'onjourney-pin',
				iconSize: [22, 22],
				iconAnchor: [11, 11]
			});
			baliLocations.forEach((coords) => L.marker(coords, { icon }).addTo(map));
			map.fitBounds(bounds, { padding: [35, 35] });
		};

		void renderMap();
		return () => map?.remove();
	});
</script>

<section class="mb-7">
	<h2 class="mb-3 text-[36px] leading-tight font-semibold text-gray-900">
		Where is the destination located
	</h2>
	<div class="map-shell overflow-hidden rounded-2xl border border-gray-200">
		<div id="destination-map" class="h-full w-full" aria-label="Map of Bali destinations"></div>
	</div>
</section>

<style>
	.map-shell {
		height: 320px;
	}

	:global(.onjourney-pin) {
		border-radius: 999px;
		background: #0891b2;
		border: 3px solid #ffffff;
		box-shadow: 0 0 0 12px rgb(8 145 178 / 20%);
	}

	:global(.leaflet-control-zoom a) {
		color: #0f172a;
	}

	:global(.leaflet-control-attribution) {
		font-size: 11px;
	}

	@media (max-width: 768px) {
		.map-shell {
			height: 240px;
		}
	}
</style>
