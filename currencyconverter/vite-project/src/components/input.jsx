import React from 'react';

export const InputBox = ({
    label,
    amount,
    onCurrencyChange,
    currencyOptions,
    selectCurrency,
    onAmountChange,
    amountDisabled = false,
}) => (
    <div>
        <label className="block text-gray-700 font-medium mb-2">{label}</label>
        <div className="flex space-x-2">
            <input
                type="number"
                value={amount}
                onChange={(e) => onAmountChange(Number(e.target.value))}
                disabled={amountDisabled}
                className="flex-grow p-2 border rounded"
            />
            <select
                value={selectCurrency}
                onChange={(e) => onCurrencyChange(e.target.value)}
                className="p-2 border rounded"
            >
                {currencyOptions.map((currency) => (
                    <option key={currency} value={currency}>
                        {currency.toUpperCase()}
                    </option>
                ))}
            </select>
        </div>
    </div>
);
