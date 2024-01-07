import React from 'react';

const useSerializeForm = () => {
  const serializeForm = ({ form }) => {
    const serialized = {};
    const form_data = [];

    Array.prototype.slice.call(form.elements).forEach((field) => {
      if (!field.name || field.disabled || ['file', 'reset', 'submit', 'button'].includes(field.type)) {
        return;
      }

      if (field.type === 'select-multiple') {
        Array.prototype.slice.call(field.options).forEach((option) => {
          if (!option.selected) return;

          form_data.push({
            value: field.value,
            name: field.name
          });
        });

        return;
      }

      if (['checkbox', 'radio'].includes(field.type) && !field.checked) return;
      
      form_data.push({
        value: field.value,
        name: field.name
      });
    });

    Object.entries(form_data).forEach(([key, { value, name }]) => {
      serialized[name] = value;
    });

    return serialized;
  };

  return { serializeForm };
};

export default useSerializeForm;