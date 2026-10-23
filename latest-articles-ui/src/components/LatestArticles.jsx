const articles = [
  {
    category: "Design",
    title: "Designing Interfaces That Feel Effortless",
    description:
      "Explore thoughtful design approaches, creative ideas and experiences that put people at the center.",
    readTime: "23 Aug 2026 2 min read",
  },
  {
    category: "Engineering",
    title: "Components Reuse patterns That Actually Scale",
    description:
      "Discover engineering insights, modern technologies and practical approaches to solving complex problems.",
    readTime: "15 Aug 2026 5 min read",
  },
  {
    category: "Product",
    title: "From Idea To Launch in 6 Weeks",
    description:
      "Learn how strong product thinking, research and strategy can transform ideas into meaningful products.",
    readTime: "7 Sept 2026 3 min read",
  },
];

function LatestArticles() {
  return (
    <section className="min-h-screen bg-green-100 px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
            From The Blog
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Latest Articles &amp; Insights
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
            Notes On Design , Engineering and Building Better Products.
          </p>
        </div>

        {/* Article Cards */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">

          {articles.map((article) => (
            <article
              key={article.category}
              className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              {/* Image Area */}
              <div className="relative h-52 bg-gray-700">

                {/* Category Button */}
                <div className="absolute bottom-4 left-4">
                  <span className="rounded-full bg-white px-4 py-2 text-xs font-medium text-gray-800 shadow-md">
                    {article.category}
                  </span>
                </div>

              </div>

              {/* Card Content */}
              <div className="p-6">

                {/* Read Time */}
                <p className="text-xs font-medium text-gray-400">
                  {article.readTime}
                </p>

                {/* Title */}
                <h2 className="mt-3 text-xl font-semibold leading-7 text-gray-900 transition-colors duration-200 group-hover:text-gray-600">
                  {article.title}
                </h2>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {article.description}
                </p>

                {/* Read More */}
                <button
                  type="button"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gray-900 transition-all duration-200 group-hover:gap-3"
                >
                  Read more
                  <span>→</span>
                </button>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default LatestArticles;