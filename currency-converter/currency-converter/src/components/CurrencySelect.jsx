const currencyCodes = [
    "AUD", "BGN", "BRL", "CAD", "CHF", "CNY", "CZK", "DKK", "EUR", "GBP",
    "HKD", "HRK", "HUF", "IDR", "ILS", "INR", "ISK", "JPY", "KRW", "MXN",
    "MYR", "NOK", "NZD", "PHP", "PLN", "RON", "RUB", "SEK", "SGD", "THB",
    "TRY", "USD", "ZAR"
];

function CurrencySelect({ selectedCurrency, handleCurrency }) {
    const countryCode = selectedCurrency === "EUR" ? "DE" : selectedCurrency.substring(0, 2);

    return (
        <div className="currency-select">
            <img
                src={`https://flagsapi.com/${countryCode}/flat/64.png`}
                alt={`${selectedCurrency} flag`}
            />
            <select
                onChange={handleCurrency}
                className="currency-dropdown"
                value={selectedCurrency}
            >
                {currencyCodes.map(currency => (
                    <option key={currency} value={currency}>{currency}</option>
                ))}
            </select>
        </div>
    );
}

export default CurrencySelect;
