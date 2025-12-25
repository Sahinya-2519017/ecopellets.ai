import { useState } from 'react';
import { Sparkles, AlertCircle } from 'lucide-react';

interface Recommendation {
  product: string;
  reason: string;
  frequency: string;
  location: string;
  dosage: string;
  additionalTips: string[];
}

export default function AIRecommendationPage() {
  const [soilType, setSoilType] = useState('');
  const [cropType, setCropType] = useState('');
  const [pestType, setPestType] = useState('');
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);

  const getRecommendation = (): Recommendation => {
    let product = '';
    let reason = '';
    let frequency = '';
    let location = '';
    let dosage = '';
    let additionalTips: string[] = [];

    if (pestType === 'aphids' || pestType === 'whiteflies') {
      product = 'Citrus-Garlic EcoPellets';
      reason =
        'Citrus-Garlic formulation is most effective against soft-bodied insects like aphids and whiteflies. ' +
        'The limonene in citrus disrupts their respiratory system while garlic compounds repel them effectively.';
      frequency = 'Every 15-20 days';
      location = 'Surface application around plant base';
      dosage = '20-30 grams per square meter';

      if (cropType === 'vegetables' || cropType === 'flowers') {
        additionalTips.push('Apply during early morning for best results on leafy crops');
        frequency = 'Every 12-15 days during active growth';
      }
      if (soilType === 'sandy') {
        additionalTips.push('Water lightly after application to help absorption in sandy soil');
        dosage = '25-35 grams per square meter';
      }
    } else if (pestType === 'caterpillars') {
      product = 'Neem-Chilli EcoPellets';
      reason =
        'Neem-Chilli combination is ideal for caterpillars and leaf-eating insects. ' +
        'Azadirachtin from neem disrupts their growth cycle while capsaicin creates a feeding deterrent.';
      frequency = 'Every 10-14 days';
      location = 'Surface application near affected plants';
      dosage = '25-35 grams per square meter';

      if (cropType === 'vegetables' || cropType === 'fruits') {
        additionalTips.push('Focus application on plants showing active damage');
        frequency = 'Every 7-10 days during peak infestation';
      }
      if (soilType === 'clay' || soilType === 'black') {
        additionalTips.push('Break up soil slightly before application for better penetration');
      }
    } else if (pestType === 'soil_nematodes') {
      product = 'Low-Acid Soil Pellets';
      reason =
        'Low-Acid Soil Pellets are specially designed for nematodes and soil-dwelling pests. ' +
        'They release beneficial microbes that create an inhospitable environment for nematodes while improving soil health.';
      frequency = 'Every 30-45 days';
      location = 'Mixed into topsoil (5-10cm depth)';
      dosage = '40-50 grams per square meter';

      if (soilType === 'laterite' || soilType === 'sandy') {
        additionalTips.push('This product is pH-balanced for acidic soils common in your soil type');
      }
      if (cropType === 'vegetables' || cropType === 'pulses') {
        additionalTips.push('Apply before planting or during soil preparation for best results');
        frequency = 'Every 40-50 days for root crops';
      }
    } else if (pestType === 'termites' || pestType === 'root_grubs') {
      product = 'Neem-Tobacco Pellets';
      reason =
        'Neem-Tobacco Pellets provide deep soil protection against termites and root grubs. ' +
        'The combination of neem and tobacco alkaloids creates a protective zone around roots.';
      frequency = 'Every 30-40 days';
      location = 'Root zone application (10-15cm depth)';
      dosage = '30-40 grams per plant';

      if (cropType === 'plantation' || cropType === 'fruits') {
        additionalTips.push('Apply in a circular band around tree base, 30-50cm from trunk');
        frequency = 'Every 45-60 days for established trees';
      }
      if (soilType === 'clay' || soilType === 'black') {
        additionalTips.push('Work pellets into soil thoroughly as these soil types retain moisture well');
      }
    }

    if (soilType === 'loamy') {
      additionalTips.push('Loamy soil provides ideal conditions for pellet breakdown and effectiveness');
    }

    if (cropType === 'rice') {
      additionalTips.push('For paddy fields, apply during field preparation or reduce water level temporarily');
    }

    if (cropType === 'plantation') {
      additionalTips.push('For large plantations, consider spot treatment in problem areas first');
    }

    if (!product) {
      product = 'Neem-Chilli EcoPellets';
      reason = 'This is our most versatile formulation, suitable for a wide range of pest challenges.';
      frequency = 'Every 14-21 days';
      location = 'Surface application around plants';
      dosage = '25-30 grams per square meter';
    }

    return {
      product,
      reason,
      frequency,
      location,
      dosage,
      additionalTips,
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (soilType && cropType && pestType) {
      const result = getRecommendation();
      setRecommendation(result);
    }
  };

  const handleReset = () => {
    setSoilType('');
    setCropType('');
    setPestType('');
    setRecommendation(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Sparkles className="h-12 w-12" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">AI Recommendation System</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Get personalized EcoPellet recommendations based on your specific farming needs
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-8 flex items-start space-x-3">
            <AlertCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-1">
                Generated using rule-based AI decision logic
              </h3>
              <p className="text-blue-800">
                Our recommendation system analyzes your inputs using a comprehensive rule engine
                based on agronomic research and field testing. This ensures accurate, practical
                recommendations tailored to your specific conditions.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="space-y-6">
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-3">
                  1. What is your soil type?
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['Clay', 'Sandy', 'Loamy', 'Laterite', 'Black'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setSoilType(type.toLowerCase())}
                      className={`p-4 rounded-lg border-2 font-medium transition-all duration-200 ${
                        soilType === type.toLowerCase()
                          ? 'bg-green-600 text-white border-green-600'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-green-600'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-3">
                  2. What crop are you growing?
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['Rice', 'Vegetables', 'Fruits', 'Pulses', 'Plantation crops', 'Flowers'].map(
                    (type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setCropType(type.toLowerCase())}
                        className={`p-4 rounded-lg border-2 font-medium transition-all duration-200 ${
                          cropType === type.toLowerCase()
                            ? 'bg-green-600 text-white border-green-600'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-green-600'
                        }`}
                      >
                        {type}
                      </button>
                    )
                  )}
                </div>
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-3">
                  3. What pest are you dealing with?
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { label: 'Aphids', value: 'aphids' },
                    { label: 'Caterpillars', value: 'caterpillars' },
                    { label: 'Whiteflies', value: 'whiteflies' },
                    { label: 'Root grubs', value: 'root_grubs' },
                    { label: 'Termites', value: 'termites' },
                    { label: 'Soil nematodes', value: 'soil_nematodes' },
                  ].map((pest) => (
                    <button
                      key={pest.value}
                      type="button"
                      onClick={() => setPestType(pest.value)}
                      className={`p-4 rounded-lg border-2 font-medium transition-all duration-200 ${
                        pestType === pest.value
                          ? 'bg-green-600 text-white border-green-600'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-green-600'
                      }`}
                    >
                      {pest.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  disabled={!soilType || !cropType || !pestType}
                  className={`flex-1 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    soilType && cropType && pestType
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Get Recommendation
                </button>
                {recommendation && (
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-3 rounded-lg font-semibold bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all duration-200"
                  >
                    Reset
                  </button>
                )}
              </div>
            </div>
          </form>

          {recommendation && (
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-in">
              <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6">
                <h2 className="text-2xl font-bold mb-2">Your Personalized Recommendation</h2>
                <p className="opacity-90">Based on your soil, crop, and pest type</p>
              </div>

              <div className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-green-600 mb-2">
                    {recommendation.product}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{recommendation.reason}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-2">Application Frequency</h4>
                    <p className="text-gray-700">{recommendation.frequency}</p>
                  </div>

                  <div className="bg-green-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-2">Application Location</h4>
                    <p className="text-gray-700">{recommendation.location}</p>
                  </div>

                  <div className="bg-green-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-2">Recommended Dosage</h4>
                    <p className="text-gray-700">{recommendation.dosage}</p>
                  </div>

                  <div className="bg-green-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-2">Application Method</h4>
                    <p className="text-gray-700">
                      {recommendation.location.includes('depth') ? 'Work into soil' : 'Surface scatter'}
                    </p>
                  </div>
                </div>

                {recommendation.additionalTips.length > 0 && (
                  <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Additional Tips</h4>
                    <ul className="space-y-2">
                      {recommendation.additionalTips.map((tip, index) => (
                        <li key={index} className="flex items-start text-gray-700">
                          <span className="text-green-600 mr-2">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Important Note</h4>
                  <p className="text-gray-700">
                    Always test on a small area first. Results may vary based on local conditions.
                    For severe infestations, consider consulting with an agricultural expert.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
