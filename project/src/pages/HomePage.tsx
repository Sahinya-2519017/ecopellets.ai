import { Sprout, Recycle, Sparkles, ArrowRight } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Sprout className="h-16 w-16 text-green-600" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Smart Pest-Repelling Soil Granules
              <span className="block text-green-600 mt-2">from Bioenzyme Waste</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform bioenzyme waste into powerful, eco-friendly pest control solutions
              for sustainable agriculture
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('products')}
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Explore Products</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button
                onClick={() => onNavigate('ai-recommendation')}
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold border-2 border-green-600 hover:bg-green-50 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Sparkles className="h-5 w-5" />
                <span>AI Recommendation</span>
              </button>
              <button
                onClick={() => onNavigate('login')}
                className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Waste Valorization for Sustainable Agriculture
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              EcoPellets turns bioenzyme slurry waste into valuable soil granules
              that naturally repel pests while enriching the soil
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-8 rounded-xl">
              <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Recycle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Zero Waste Technology
              </h3>
              <p className="text-gray-600">
                Converting bioenzyme waste into high-value agricultural products,
                closing the loop in sustainable waste management
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-xl">
              <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Sprout className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Natural Pest Control
              </h3>
              <p className="text-gray-600">
                Chemical-free pest repellent granules made from natural ingredients
                like neem, citrus, garlic, and chilli extracts
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-xl">
              <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                AI-Powered Recommendations
              </h3>
              <p className="text-gray-600">
                Smart decision support system helps farmers choose the right
                product based on soil type, crop, and pest challenges
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Sustainable Farming Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Discover which EcoPellets are perfect for your farm
            </p>
            <button
              onClick={() => onNavigate('ai-recommendation')}
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <Sparkles className="h-5 w-5" />
              <span>Get AI Recommendation</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
