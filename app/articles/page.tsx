import Link from "next/link"
import { CalendarIcon } from "lucide-react"
import { getArticles } from "@/lib/articles"
import { formatDate } from "@/lib/utils"

export default function ArticlesPage() {
  const articles = getArticles()

  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 purple-glow">
          Writing on software engineering, company building, and scaling applications.
        </h1>

        <p className="text-muted-foreground mb-12">
          All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological
          order.
        </p>

        <div className="grid gap-12">
          {articles.length > 0 ? (
            articles.map((article) => (
              <article key={article.slug} className="group border-b pb-12">
                <Link href={`/articles/${article.slug}`} className="block">
                  <div className="mb-2 flex items-center text-sm text-muted-foreground">
                    <CalendarIcon className="mr-1 h-4 w-4" />
                    <time dateTime={article.date}>{formatDate(article.date)}</time>
                  </div>
                  <h2 className="text-2xl font-bold group-hover:text-primary transition-colors mb-2 purple-glow-hover">
                    {article.title}
                  </h2>
                  <p className="text-muted-foreground">{article.excerpt}</p>
                </Link>
              </article>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No articles found.</p>
              <p className="mt-4">
                <Link href="#" className="text-primary hover:underline purple-glow-hover">
                  Create your first article
                </Link>
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

