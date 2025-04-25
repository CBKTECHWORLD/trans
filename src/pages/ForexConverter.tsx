import { useState, useEffect } from 'react';
import { FiSwapVertical, FiRefreshCw } from 'react-icons/fi';

export default function ForexConverter() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [rate, setRate] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const currencies = [
    'USD', 'EUR', 'GBP', 'JPY', 'AUD', 
    'CAD', 'CHF', 'CNY', 'SEK', 'NZD',
    'INR', 'SGD', 'HKD', 'KRW', 'TRY'
  ];

  const convertCurrency = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Using ExchangeRate-API (free tier)
      const response = await fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`);
      const data = await response.json();
      
      if (data.result === 'success') {
        const rate = data.rates[toCurrency];
        setRate(rate);
        setConvertedAmount((amount * rate).toFixed(4));
      } else {
        throw new Error(data['error-type'] || 'Failed to fetch rates');
      }
    } catch (err) {
      setError(err.message);
      console.error("API Error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    convertCurrency();
  }, [fromCurrency, toCurrency, amount]);

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">Forex Currency Converter</h1>
        
        <div className="space-y-4">
          {/* Amount Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              min="0"
              step="0.01"
            />
          </div>

          {/* From Currency */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {currencies.map(currency => (
                <option key={`from-${currency}`} value={currency}>{currency}</option>
              ))}
            </select>
          </div>

          {/* Swap Button */}
          <div className="flex justify-center">
            <button
              onClick={handleSwap}
              className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              aria-label="Swap currencies"
            >
              <FiSwapVertical className="text-gray-600" />
            </button>
          </div>

          {/* To Currency */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {currencies.map(currency => (
                <option key={`to-${currency}`} value={currency}>{currency}</option>
              ))}
            </select>
          </div>

          {/* Convert Button */}
          <button
            onClick={convertCurrency}
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md flex items-center justify-center transition-colors"
          >
            {loading ? (
              <>
                <FiRefreshCw className="animate-spin mr-2" />
                Converting...
              </>
            ) : (
              'Convert'
            )}
          </button>

          {/* Result Display */}
          {!error && (
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-600">Exchange Rate</p>
              <p className="text-2xl font-bold text-blue-700">
                1 {fromCurrency} = {rate.toFixed(6)} {toCurrency}
              </p>
              <p className="text-sm text-gray-600 mt-2">Converted Amount</p>
              <p className="text-3xl font-bold">
                {convertedAmount} {toCurrency}
              </p>
            </div>
          )}

          {/* Error Display */}
          {error && (
            <div className="mt-6 p-4 bg-red-50 rounded-lg text-red-600">
              <p>Error: {error}</p>
              <p className="text-sm mt-2">Please try again later</p>
            </div>
          )}
        </div>

        <div className="mt-6 text-center text-xs text-gray-500">
          <p>Rates provided by ExchangeRate-API</p>
          <p>Data updates every 24 hours</p>
        </div>
      </div>
    </div>
  );
}