<script lang="ts">
	import { InfoIcon, Alert, SuccessIcon, WarningIcon } from '$lib';
</script>

<div>
	<Alert icon={SuccessIcon} variant="success">
		This is a success alert. It's providing feedback!
	</Alert>

	<Alert icon={InfoIcon} variant="info">This is a info alert. It's providing feedback!</Alert>

	<Alert icon={WarningIcon} variant="warning">
		This is a warning alert. It's providing feedback!
	</Alert>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
