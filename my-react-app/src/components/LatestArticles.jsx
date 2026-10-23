// @import "tailwindcss" ;
const articles = [
  {
    id: 1,
    readTime: "2 min read",
    title: "Exploring Sustainable Solutions for a Better Future",
    description:
      "Discover innovative approaches and practical insights that are shaping a more sustainable world.",
    category: "Insights",
  },
  {
    id: 2,
    readTime: "5 min read",
    title: "Comprehensive Analysis of Modern Technology",
    description:
      "Explore the latest trends, technologies and ideas transforming industries and creating new opportunities.",
    category: "Technology",
  },
  {
    id: 3,
    readTime: "3 min read",
    title: "From Data to Decisions: The Power of Insights",
    description:
      "Learn how meaningful data and thoughtful analysis can help organizations make better decisions.",
    category: "Research",
  },
];

function LatestArticles() {
  return (
    <section className="w-full bg-white px-5 py-16 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
            Explore our latest
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Latest Articles &amp; Insights
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
            Stay ahead with our latest perspectives, ideas and insights.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Image / Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-gray-700 via-gray-600 to-gray-800">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl font-bold text-white/10">
                    {article.id}
                  </span>
                </div>

                {/* Category */}
                <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-700 shadow-sm">
                  {article.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="mb-3 text-xs font-medium text-gray-400">
                  {article.readTime}
                </p>

                <h3 className="text-lg font-semibold leading-7 text-gray-900 transition-colors group-hover:text-gray-600">
                  {article.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {article.description}
                </p>

                {/* Read More */}
                <button
                  type="button"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gray-900 transition-all group-hover:gap-3"
                >
                  Read more
                  <span aria-hidden="true">→</span>
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