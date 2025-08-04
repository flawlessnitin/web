import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Ananya Sharma",
    content: "Shiksha Nation made Science and Math so easy for me! The lessons are fun, and I love how I can revise anytime. My marks improved in just one term!",
    rating: 5,
  },
  {
    id: 2,
    name: "Ravi Mehta",
    content: "As a parent, I was looking for a platform that's both reliable and easy to monitor. Shiksha Nation gave my son structured classes, progress reports, and expert support — we're very happy!",
    rating: 5,
  },
  {
    id: 3,
    name: "Mehul Raj",
    content: "Preparing for NEET felt overwhelming until I joined Shiksha Nation. The mock tests, doubt-solving sessions, and mentors really helped me stay focused and confident.",
    rating: 5,
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${
            index < rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="w-full py-16 px-5 xl:px-0 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Learners Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Thousands of students and parents trust Shiksha Nation for quality learning.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-[rgb(var(--color-green-primary))] rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="mt-4">
                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  {testimonial.content}
                </p>

                {/* Name and Rating */}
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-gray-900 text-lg">
                    {testimonial.name}
                  </h4>
                  <StarRating rating={testimonial.rating} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
