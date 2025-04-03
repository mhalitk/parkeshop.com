import React from 'react'
import Link from 'next/link'

interface HeroProps {
  title: string
  description: string
  showButton?: boolean
}

export default function Hero({ 
  title, 
  description, 
  showButton = false 
}: HeroProps) {
  return (
    <section className="relative bg-neutral-light text-primary-dark">
      <div className="relative container py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-xl leading-8">
            {description}
          </p>
          {showButton && (
            <div className="mt-10">
              <Link href="/blog" className="btn-primary bg-accent-green text-neutral-light hover:bg-accent-amber hover:text-primary-dark">
                Blog Yazılarını Keşfet
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  )
} 