import { Target, Leaf, Users, FlaskConical, Lightbulb, Droplets } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-green-600 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About EcoPellets</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Pioneering sustainable agriculture through waste valorization and biotechnology
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Target className="h-8 w-8 text-green-600" />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 mb-4">
                At EcoPellets, we are committed to transforming agricultural waste into
                powerful solutions for sustainable farming. Our mission is to bridge the
                gap between waste management and agricultural productivity.
              </p>
              <p className="text-lg text-gray-700">
                We believe in empowering farmers with eco-friendly, affordable, and
                effective pest control solutions while contributing to a circular economy
                that benefits both agriculture and the environment.
              </p>
            </div>
            <div className="bg-green-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Core Values</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <Leaf className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    <strong>Sustainability:</strong> Reducing waste and chemical use in agriculture
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <FlaskConical className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    <strong>Innovation:</strong> Applying biotechnology for practical solutions
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    <strong>Accessibility:</strong> Making technology affordable for all farmers
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-green-100 p-8 md:p-12 rounded-2xl mb-16">
            <div className="flex items-center space-x-3 mb-6">
              <Droplets className="h-8 w-8 text-green-600" />
              <h2 className="text-3xl font-bold text-gray-900">
                Bioenzyme Slurry Valorization
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What is Bioenzyme Slurry?</h3>
                <p className="text-gray-700 mb-4">
                  Bioenzyme slurry is a byproduct from the fermentation of organic materials
                  like fruit peels, vegetable waste, and plant matter. Rich in beneficial
                  microbes and organic compounds, this slurry is typically discarded as waste.
                </p>
                <p className="text-gray-700">
                  EcoPellets recognizes the untapped potential in this waste stream and
                  transforms it into valuable agricultural products through our proprietary
                  processing technology.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Process</h3>
                <ol className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">1</span>
                    <span>Collect bioenzyme slurry from fermentation units</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">2</span>
                    <span>Blend with natural pest-repelling ingredients</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">3</span>
                    <span>Form into slow-release granules</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">4</span>
                    <span>Quality test for efficacy and safety</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <div className="flex items-center space-x-3 mb-6">
              <Lightbulb className="h-8 w-8 text-green-600" />
              <h2 className="text-3xl font-bold text-gray-900">
                Modular Granule Concept
              </h2>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              Instead of creating hundreds of product variations, EcoPellets uses a smart
              modular approach with a few core formulations combined with AI-based usage
              recommendations.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-green-200 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Core Formulations
                </h3>
                <p className="text-gray-700">
                  We maintain 4 carefully researched base formulations targeting different
                  pest categories and soil conditions.
                </p>
              </div>
              <div className="bg-white border-2 border-green-200 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  AI Decision Support
                </h3>
                <p className="text-gray-700">
                  Our recommendation system analyzes your specific needs and suggests
                  the optimal product, dosage, and application method.
                </p>
              </div>
              <div className="bg-white border-2 border-green-200 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Flexible Application
                </h3>
                <p className="text-gray-700">
                  Same product, different results based on where and how you apply it -
                  surface, root zone, or deep soil.
                </p>
              </div>
            </div>
          </div>

          <section className="bg-green-600 text-white p-8 md:p-12 rounded-2xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Who We Serve</h2>
              <p className="text-xl opacity-90">
                EcoPellets is designed for students, researchers, and farmers
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white bg-opacity-10 p-6 rounded-xl">
                <h3 className="text-2xl font-semibold mb-3">
                  For Biotech Students & Researchers
                </h3>
                <ul className="space-y-2 opacity-90">
                  <li>Learn about waste valorization in practice</li>
                  <li>Understand biotechnology applications in agriculture</li>
                  <li>Study sustainable product development</li>
                  <li>Explore AI integration in agricultural solutions</li>
                </ul>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-xl">
                <h3 className="text-2xl font-semibold mb-3">
                  For Farmers
                </h3>
                <ul className="space-y-2 opacity-90">
                  <li>Access affordable, chemical-free pest control</li>
                  <li>Get personalized product recommendations</li>
                  <li>Improve soil health naturally</li>
                  <li>Reduce environmental impact of farming</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
