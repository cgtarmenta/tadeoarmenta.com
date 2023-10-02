<template>
  <div>
    <label for="success" class="block mb-2 text-sm font-medium text-slate-500 dark:text-slate-500" v-text="label" />
    <input
      :id="id"
      :type="type"
      class="bg-inputBg border border-lines text-slate-500 dark:text-slate-500 placeholder-lines dark:placeholder-lines text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-inputBg dark:border-lines"
      :placeholder="placeholder"
    >
    <label v-if="errorMessage" class="text-xs text-gray-500" v-text="errorMessage"/>
  </div>
</template>
<script setup lang="ts">
import type {RuleExpression} from "vee-validate";
import {useGeneralUtils} from "@/utils/generalUtils";
import {useField} from "vee-validate";
import {computed, ref, watch} from "vue";

export interface TAInputProps {
  id: string
  type?: string
  label?: string
  name?: string
  validationLabel?: string
  placeholder?: string
  disabled?: boolean
  rules?: any
  modelValue?: any
  initialValue?: any,
  autocomplete?: string,
}
const { uuidV4 } = useGeneralUtils();
const selfID = uuidV4();
const props =  withDefaults(defineProps<TAInputProps>(), {
  id: '',
  label: '',
  type: 'text',
  placeholder: '',
  rules: '' as RuleExpression<any>,
  autocomplete: 'off',
  disabled: false,
});
const emit = defineEmits([
  'update:modelValue',
  'update:errorMessage',
  'errorMessage',
]);

const { errorMessage, value, meta, setErrors, setValue, setState, validate, errors } =
    useField<string>(props.id || selfID, props.rules || '', {
      initialValue:
          props.initialValue !== undefined
              ? (props.initialValue as string)
              : (props.modelValue as string),
      validateOnValueUpdate: true,
      label: props.validationLabel || props.label,
    });
const isPasswordField = ref(true);
const passwordMask = computed(() =>
    isPasswordField.value ? 'password' : 'text',
);
/* Monitor validation and emit that info */
watch(
    () => errorMessage.value,
    (newVal) => {
      emit('update:errorMessage', newVal);
      emit('errorMessage', newVal);
    },
);
const setError = async (s: string) => setErrors(s);
const setNewState = async (s: {
  value?: string;
  touched?: boolean;
  errors?: string[];
}) => {
  setState(s);
};
const validateField = async () => validate();
const name = props.id || props.name || selfID;

/* Expose useful validation methods */
defineExpose({ name, meta, setError, setNewState, setValue, validateField });
</script>
<script lang="ts">export default {name:'TAInput'}</script>
<style scoped>

</style>
