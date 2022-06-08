import React from "react";

export default function useSerializeForm() {
  const serializeForm = ({ form }) => {
    let form_data = [], serialize = {};
    Array.prototype.slice.call(form.elements).forEach(function (field) {
      if (!field.name || field.disabled || ['file', 'reset', 'submit', 'button'].indexOf(field.type) > -1) {
        return;
      }
      if (field.type === 'select-multiple') {
        Array.prototype.slice.call(field.options).forEach(function (option) {
          if (!option.selected) return;
          form_data.push({
            name: field.name,
            value: field.value
          })
        });
        return;
      }
      if (['checkbox', 'radio'].indexOf(field.type) > -1 && !field.checked) return;
      form_data.push({
        name: field.name,
        value: field.value
      })
    });
    Object.entries(form_data).forEach(([key, value]) => {
      serialize[value.name] = value['value'];
    });
    return serialize;
  };
  return { serializeForm }
}