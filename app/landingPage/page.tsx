import Link from 'next/link';
import { FC } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const LandingPage: FC = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <h1 className="text-5xl font-bold text-center mb-4">
          Work Without Limits
        </h1>
        <p className="text-lg text-center mb-6">
          The platform where teams get work done.
        </p>
        <button className="bg-white text-blue-500 font-semibold py-2 px-6 rounded-lg shadow-md">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<FaCheckCircle className="text-blue-500 w-12 h-12 mb-4" />}
              title="Task Management"
              description="Easily manage tasks with customizable workflows."
            />
            <FeatureCard
              icon={<FaCheckCircle className="text-blue-500 w-12 h-12 mb-4" />}
              title="Team Collaboration"
              description="Collaborate with your team in real-time."
            />
            <FeatureCard
              icon={<FaCheckCircle className="text-blue-500 w-12 h-12 mb-4" />}
              title="Time Tracking"
              description="Track time and meet deadlines efficiently."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Map over an array of testimonials */}
            {[1, 2, 3].map((testimonial) => (
              <div key={testimonial} className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-lg mb-4">
                  This platform has transformed how our team works!
                </p>
                <p className="font-semibold">- Happy Customer</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <button className="bg-white text-purple-600 font-semibold py-2 px-6 rounded-lg shadow-md">
          Sign Up Now
        </button>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-gray-400">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-4">&copy; 2024 TechDiva. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-white">About</a>
            <a href="#" className="hover:text-white">Contact</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard: FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg text-center">
    {icon}
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p>{description}</p>
  </div>
);

export default LandingPage;
