import React, {useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
   const amountInputId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2 flex flex-wrap justify-start text-left">
                <p className="text-black/40  w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1  bg-gray-200 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency}
                            </option>
                        ))}
                
                </select>
            </div>
            <div className="w-1/3 justify-end ">
                <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block ml-16">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className=" outline-none pl-1 w-full  py-1.5 ml-16 bg-slate-200"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            
        </div>
    );
}

export default InputBox;