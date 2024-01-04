<script lang="ts">
	import { InfoIcon, Alert, SuccessIcon, WarningIcon } from '$lib';
</script>

<Alert icon={SuccessIcon} variant="success">
	This is a success alert. It's providing feedback!
</Alert>

<Alert icon={InfoIcon} variant="info">This is a info alert. It's providing feedback!</Alert>

<Alert icon={WarningIcon} variant="warning">
	This is a warning alert. It's providing feedback!
</Alert>
