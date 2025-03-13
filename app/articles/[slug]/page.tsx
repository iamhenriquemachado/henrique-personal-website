import { notFound } from "next/navigation"
import { getArticleBySlug } from "@/lib/articles"
import { Markdown } from "@/components/markdown"
import { formatDate } from "@/lib/utils"
import Link from "next/link"
import { ArrowLeft, CalendarIcon } from "lucide-react"

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <article className="max-w-3xl mx-auto">
        <Link
          href="/articles"
          className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to articles
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{article.title}</h1>

        <div className="flex items-center text-sm text-muted-foreground mb-8">
          <CalendarIcon className="mr-1 h-4 w-4" />
          <time dateTime={article.date}>{formatDate(article.date)}</time>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <Markdown content={article.content} />
        </div>
      </article>
    </div>
  )
}

