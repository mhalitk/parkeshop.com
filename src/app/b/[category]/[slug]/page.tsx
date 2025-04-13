import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/Hero';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: {
    category: string;
    slug: string;
  };
}

interface PostData {
  title: string;
  description?: string;
  date?: string;
  tags?: string[];
  // Add other frontmatter fields as needed
}

// Function to get post content
const getPostContent = (category: string, slug: string): { data: PostData; content: string } | null => {
  const contentDir = path.join(process.cwd(), 'src/content/blog');
  const filePath = path.join(contentDir, category, `${slug}.md`);

  try {
    if (!fs.existsSync(filePath)) {
      return null; // Post not found
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    // Basic validation or default values
    const postData: PostData = {
      title: data.title || 'Untitled Post',
      description: data.excerpt,
      date: data.date,
      tags: data.tags || [],
    };

    return { data: postData, content };
  } catch (error) {
    console.error(`Error reading post ${category}/${slug}:`, error);
    return null; // Handle errors gracefully
  }
};

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { category, slug } = params;
  const post = getPostContent(category, slug);

  if (!post) {
    notFound(); // Trigger 404 page if post doesn't exist
  }

  const { data, content } = post;

  return (
    <Layout>
      <Hero 
        title={data.title} 
        description={data.description || ''} 
        showButton={false}
      />
      
      <article className="container py-12">
        {/* Post Content - Rendered directly as HTML */}
        {/* Ensure the markdown content only contains safe HTML */}
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </article>
    </Layout>
  );
}

// Optional: Generate static paths if needed for performance
// export async function generateStaticParams() {
//   const contentDir = path.join(process.cwd(), 'src/content/blog');
//   const categories = fs.readdirSync(contentDir, { withFileTypes: true })
//                      .filter(dirent => dirent.isDirectory())
//                      .map(dirent => dirent.name);

//   let paths: { category: string; slug: string }[] = [];

//   categories.forEach(category => {
//     const categoryDir = path.join(contentDir, category);
//     const filenames = fs.readdirSync(categoryDir)
//                       .filter(filename => filename.endsWith('.md'));
    
//     const categoryPaths = filenames.map(filename => ({
//       category: category,
//       slug: filename.replace(/\.md$/, ''),
//     }));
//     paths = paths.concat(categoryPaths);
//   });

//   return paths;
// } 