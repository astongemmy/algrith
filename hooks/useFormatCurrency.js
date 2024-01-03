export default function useFormatCurrency() {
  const formatUnit = (unit) => {
    if (unit >= 1000) {
      return unit / 1000 + 'k'
    } else if (unit >= 1000000) {
      return unit / 1000000 + 'M'
    } else {
      return unit
    }
  };
  
  const currency = () => {
    return {
      usd: (value) => {
        const { amount, unit} = currency().prepareUnit(value);
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
        }).format(amount).concat(unit);
      },
      prepareUnit: (amount) => {
        const formatted_amount = formatUnit(amount);
        let formatted_amount_unit;
        const formatted_amount_is_integer_or_decimal = /^\d+\.\d+$|^\d+$/.test(formatted_amount);
        if (typeof formatted_amount == 'string' && !formatted_amount_is_integer_or_decimal) {
          formatted_amount_unit = formatted_amount.slice(-1)
        } else {
          formatted_amount_unit = ''
        }
        const formatted_float_amount = parseFloat(formatted_amount);
        return { amount: formatted_float_amount, unit: formatted_amount_unit };
      }
    };
  };
};