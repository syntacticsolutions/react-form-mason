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

module.exports = {
  Button,
  Input,
  Select,
  Dropdown,
  FormGenerator,
  useFormErrors,
  validators,
  useFormData,
};


