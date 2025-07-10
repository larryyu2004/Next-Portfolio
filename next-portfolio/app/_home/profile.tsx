import React from "react";

const Profile = () => {
  return (
    <>
      {/* Professional Profile */}
      <section className="group relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
        <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-white/20 dark:border-gray-700/20 hover:shadow-3xl transition-all duration-500">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-orange-400 dark:to-yellow-400 text-transparent bg-clip-text">
              Professional Profile
            </h2>
          </div>
          <p className="text-xl text-gray-700 dark:text-gray-200 leading-relaxed">
            A Computer Science student skilled in system programming, kernel
            development, and high-performance computing. Proficient in C++,
            Python, and JavaScript, with hands-on experience in OS optimisation,
            web development, and concurrent systems. Passionate about solving
            complex technical challenges.
          </p>
        </div>
      </section>
    </>
  );
};

export default Profile;
