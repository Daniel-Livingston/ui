import Form from './Form.svelte';
import Checkbox from './Checkbox.svelte';
import DatePicker from './DatePicker.svelte';
import DateTimePicker from './DateTimePicker.svelte';
import EmailInput from './EmailInput.svelte';
import FileUploader from './FileUploader.svelte';
import NumberInput from './NumberInput.svelte';
import Option from './Option.svelte';
import Radio from './Radio.svelte';
import Select from './Select.svelte';
import Range from './Range.svelte';
import TextArea from './TextArea.svelte';
import TextInput from './TextInput.svelte';
import Toggle from './Toggle.svelte';

const FormContainer = Object.assign(Form, {
	Checkbox,
	DatePicker,
	DateTimePicker,
	EmailInput,
	FileUploader,
	NumberInput,
	Option,
	Radio,
	Range,
	Select,
	TextArea,
	TextInput,
	Toggle
});

export {
	FormContainer as Form,
	Checkbox,
	DatePicker,
	DateTimePicker,
	EmailInput,
	FileUploader,
	NumberInput,
	Option,
	Radio,
	Range,
	Select,
	TextArea,
	TextInput,
	Toggle
};
