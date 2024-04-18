const { Button } = require("./dist/components/Button/Button");
const { Input } = require("./dist/components/Input/Input");
const { Select } = require("./dist/components/Select/Select");
const { Dropdown } = require("./dist/components/Dropdown/Dropdown");
const {
  FormGenerator,
} = require("./dist/components/FormGenerator/FormGenerator");
const { useFormErrors } = require("./dist/hooks/useFormErrors/useFormErrors");
const validators = require("./dist/hooks/useFormErrors/validators");
const { useFormData } = require("./dist/hooks/useFormData");

export default {
  Button,
  Input,
  Select,
  Dropdown,
  FormGenerator,
  useFormErrors,
  validators,
  useFormData,
};

exports.Button = Button;
exports.Dropdown = Dropdown;
exports.Select = Select;
exports.Input = Input;
exports.FormGenerator = FormGenerator;
exports.useFormErrors = useFormErrors;
exports.validators = validators;
exports.useFormData = useFormData;
