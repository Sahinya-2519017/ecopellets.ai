import { Bug, Shield, Sprout, Target } from 'lucide-react';

export default function ProductsPage() {
  const products = [
    {
      name: 'Citrus-Garlic EcoPellets',
      icon: Shield,
      color: 'from-yellow-400 to-orange-500',
      targetPests: ['Aphids', 'Whiteflies', 'Soft-bodied insects'],
      modeOfAction:
        'Citrus extracts contain limonene which disrupts insect respiratory systems. ' +
        'Garlic releases sulfur compounds that repel pests and mask plant odors that attract insects.',
      application:
        'Scatter 20-30 grams per square meter around plant base. Apply every 15-20 days or after heavy rain. ' +
        'Best used during early morning or evening.',
      benefits: ['Fast-acting', 'Pleasant citrus aroma', 'Safe for beneficial insects'],
    },
    {
      name: 'Neem-Chilli EcoPellets',
      icon: Bug,
      color: 'from-green-500 to-green-700',
      targetPests: ['Caterpillars', 'Leaf-eating beetles', 'Larvae'],
      modeOfAction:
        'Neem contains azadirachtin which disrupts insect growth and feeding patterns. ' +
        'Capsaicin from chilli creates a strong irritant barrier that deters chewing insects.',
      application:
        'Apply 25-35 grams per square meter on soil surface near affected plants. ' +
        'Reapply every 10-14 days during active growth periods. Water lightly after application.',
      benefits: ['Systemic protection', 'Growth regulator effect', 'Long-lasting barrier'],
    },
    {
      name: 'Low-Acid Soil Pellets',
      icon: Sprout,
      color: 'from-emerald-400 to-teal-600',
      targetPests: ['Nematodes', 'Root maggots', 'Soil-dwelling larvae'],
      modeOfAction:
        'Specially formulated to work in low-pH soils. Releases beneficial microbes and compounds ' +
        'that create an inhospitable environment for soil pests while improving soil structure.',
      application:
        'Mix 40-50 grams per square meter into topsoil (5-10cm depth). ' +
        'Apply before planting or transplanting. Effective for 30-45 days.',
      benefits: ['pH-balanced', 'Improves soil health', 'Promotes beneficial microbes'],
    },
    {
      name: 'Neem-Tobacco Pellets',
      icon: Target,
      color: 'from-amber-600 to-red-700',
      targetPests: ['Termites', 'Root grubs', 'Subterranean pests'],
      modeOfAction:
        'Combines neem\'s insect growth disruption with tobacco\'s nicotine alkaloids. ' +
        'Creates a protective zone around roots that repels and eliminates burrowing pests.',
      application:
        'Apply 30-40 grams per plant in root zone (10-15cm depth). ' +
        'Best applied during soil preparation. Reapply every 30-40 days for persistent issues.',
      benefits: ['Deep soil protection', 'Root zone barrier', 'Termite prevention'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <section className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Four powerful formulations designed to tackle different pest challenges naturally
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className={`bg-gradient-to-r ${product.color} p-6`}>
                    <div className="flex items-center space-x-4">
                      <div className="bg-white bg-opacity-20 p-3 rounded-full">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-white">{product.name}</h2>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                        <Bug className="h-5 w-5 text-green-600 mr-2" />
                        Target Pests
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {product.targetPests.map((pest, i) => (
                          <span
                            key={i}
                            className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {pest}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                        <Shield className="h-5 w-5 text-green-600 mr-2" />
                        Mode of Action
                      </h3>
                      <p className="text-gray-700 leading-relaxed">{product.modeOfAction}</p>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                        <Sprout className="h-5 w-5 text-green-600 mr-2" />
                        Application Method
                      </h3>
                      <p className="text-gray-700 leading-relaxed">{product.application}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Key Benefits</h3>
                      <ul className="space-y-2">
                        {product.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center text-gray-700">
                            <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-green-50 border-2 border-green-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Not Sure Which Product is Right for You?
            </h2>
            <p className="text-gray-700 text-center mb-6">
              Use our AI-powered recommendation system to get personalized suggestions
              based on your soil type, crop, and pest challenges.
            </p>
            <div className="text-center">
              <a
                href="#ai-recommendation"
                className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
              >
                Get AI Recommendation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
