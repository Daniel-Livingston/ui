<script lang="ts">
	import { Form } from '$lib';

	let text = $state('');
	let number = $state<number | undefined>(undefined);
	let email = $state('');
	let checkbox1Checked = $state(false);
	let checkbox2Checked = $state(true);
	let radioGroup = $state('checked');
	let range = $state(50);
	let date = $state('');
	let datetime = $state('');
	let files = $state<FileList | undefined>(undefined);
</script>

<Form method="POST" enctype="multipart/form-data">
	<Form.TextInput
		id="text"
		name="text"
		label="Text input"
		placeholder="Enter text..."
		bind:value={text}
	/>

	<Form.NumberInput
		id="number"
		name="number"
		label="Number input"
		placeholder="Enter a number..."
		bind:value={number}
	/>

	<Form.EmailInput
		id="email"
		name="email"
		label="Email input"
		placeholder="Enter email..."
		bind:value={email}
	/>
	<Form.Select id="select" name="select" label="Select input">
		<Form.Option selected>Open this select menu</Form.Option>
		<Form.Option value="1">One</Form.Option>
		<Form.Option value="2">Two</Form.Option>
		<Form.Option value="3">Three</Form.Option>
	</Form.Select>

	<div>
		<Form.Checkbox
			id="default-checkbox"
			name="checkbox[]"
			label="Default checkbox"
			value="default"
			bind:checked={checkbox1Checked}
		/>
		<Form.Checkbox
			id="checked-checkbox"
			name="checkbox[]"
			label="Checked checkbox"
			value="checked"
			bind:checked={checkbox2Checked}
		/>
	</div>

	<div>
		<Form.Radio
			id="default-radio"
			name="radio"
			label="Default radio"
			value="default"
			bind:group={radioGroup}
		/>
		<Form.Radio
			id="checked-radio"
			name="radio"
			label="Checked radio"
			value="checked"
			bind:group={radioGroup}
		/>
	</div>

	<Form.Range
		id="range"
		name="range"
		label="Range input"
		min={0}
		max={100}
		step={10}
		bind:value={range}
	/>

	<Form.DatePicker id="date" name="date" label="Date picker" bind:value={date} />

	<Form.DateTimePicker id="date" name="date" label="Datetime picker" bind:value={datetime} />

	<Form.FileUploader
		id="file"
		name="file"
		label="File Uploader"
		accept="image/png, image/jpeg"
		bind:files
		multiple
	/>
</Form>
