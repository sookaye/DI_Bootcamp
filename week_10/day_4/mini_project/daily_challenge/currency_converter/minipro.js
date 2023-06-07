const { forms: [form] } = document;

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const fromCurrency = form.curfrom.value.toUpperCase();
  const toCurrency = form.curto.value.toUpperCase();
  const amount = parseFloat(form.amount.value);

  try {
    const resp = await fetch(`https://v6.exchangerate-api.com/v6/f926ddf5f970257f35716abe/pair/${fromCurrency}/${toCurrency}`);
    const { conversion_rate } = await resp.json();

    if (conversion_rate) {
      const convertedAmount = amount * conversion_rate;
      form.result.textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
    } else {
      console.error('Failed to fetch conversion rate.');
    }
  } catch (err) {
    console.error(err);
  }
});

const start = async () => {
  try {
    const resp = await fetch('https://v6.exchangerate-api.com/v6/f926ddf5f970257f35716abe/codes');
    const { supported_codes } = await resp.json();

    const innerHtml = supported_codes.map(([key, value]) => {
      return `<option ${key === 'MUR' ? 'selected' : ''} value="${key}">${key} - ${value}</option>`;
    }).join('');

    form.curfrom.innerHTML = innerHtml;
    form.curto.innerHTML = innerHtml;
  } catch (err) {
    console.error(err);
  }
};

start();
