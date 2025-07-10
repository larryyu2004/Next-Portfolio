import React from 'react'

const Education = () => {
  return (
    <>
          {/* Education */}
          <section className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-white/20 dark:border-gray-700/20 hover:shadow-3xl transition-all duration-500">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                  </svg>
                </div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 text-transparent bg-clip-text">
                  Education
                </h2>
              </div>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-6 border border-green-200 dark:border-green-700">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    Bachelor of Information Technology
                  </h3>
                  <p className="text-lg text-green-600 dark:text-green-400 font-semibold mb-4">
                    University of South Australia | Jul 2024 – Present
                  </p>
                  <div>
                    <h4 className="font-bold text-gray-700 dark:text-gray-300 mb-3 text-lg">
                      Courses:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        "Object-Oriented Programming",
                        "Data Driven Web Technology",
                        "Problem Solving",
                        "Network Fundamental",
                        "Information Technology Fundamental",
                        "Design Thinking",
                        "Systems Requirements and User Experience",
                        "System Requirements Studio",
                      ].map((course, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-600 dark:text-gray-400">
                            {course}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </>
  )
}

export default Education