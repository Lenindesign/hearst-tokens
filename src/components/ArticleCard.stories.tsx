import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ArticleCard } from './ArticleCard';

const sampleImages = {
  'Porsche GT3 RS': 'https://hips.hearstapps.com/hmg-prod/images/2025-porsche-911-gt3-rs-manthey-racing1-6740bdc5bdc0c.jpg?crop=0.921045192035863xw:1xh;center,top&resize=980:*',
  'Toyota GR86': 'https://hips.hearstapps.com/hmg-prod/images/2026-toyota-gr86-yuzu-special-edition-pr-102-67ed5cc10d1ce.jpg?resize=768:*',
  '10Best Cars': 'https://hips.hearstapps.com/hmg-prod/images/2019-group-10best-1574285577.jpg?crop=1.00xw:0.751xh;0,0.199xh&resize=768:*',
  'Hyundai Concept': 'https://hips.hearstapps.com/hmg-prod/images/large-50504-hyundaimotorsnbrandunveilstworollinglabconceptssignalinghigh-performancevisionforelectrificationera-64022c1e8f358.jpg?crop=1xw:1xh;center,top&resize=768:*',
};

const meta = {
  title: 'Components/ArticleCard',
  component: ArticleCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Article headline',
    },
    excerpt: {
      control: 'text',
      description: 'Short description or excerpt of the article',
    },
    category: {
      control: 'select',
      options: ['First Drive', 'Comparison Test', 'News', 'Buyer\'s Guide', 'Review'],
      description: 'Category badge label displayed over the image',
    },
    imageUrl: {
      control: 'select',
      options: Object.keys(sampleImages),
      mapping: sampleImages,
      description: 'Hero image URL',
    },
    author: {
      control: 'text',
      description: 'Author name',
    },
    authorAvatar: {
      control: 'text',
      description: 'Author avatar image URL (optional)',
    },
    date: {
      control: 'text',
      description: 'Publication date string',
    },
    readTime: {
      control: 'text',
      description: 'Estimated reading time (optional)',
    },
    href: {
      control: 'text',
      description: 'Link URL for the full article',
    },
    ctaText: {
      control: 'text',
      description: 'Custom CTA button text (default: "Read More")',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    onReadMore: {
      action: 'readMore clicked',
      description: 'Callback when Read More button is clicked',
    },
  },
} satisfies Meta<typeof ArticleCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'The 2026 Porsche 911 GT3 RS Is the Ultimate Track Weapon',
    excerpt: 'With 518 horsepower and aerodynamics borrowed from motorsport, the new GT3 RS sets a new benchmark.',
    category: 'First Drive',
    imageUrl: "https://hips.hearstapps.com/hmg-prod/images/large-50504-hyundaimotorsnbrandunveilstworollinglabconceptssignalinghigh-performancevisionforelectrificationera-64022c1e8f358.jpg?crop=1xw:1xh;center,top&resize=768:*",
    author: 'John Pearley Huffman',
    date: 'Jan 15, 2026',
    readTime: '6 min read',
    ctaText: 'Read More',
    href: '#',
  },
};

export const WithoutReadTime: Story = {
  args: {
    ...Default.args,
    title: 'Rivian R2 First Look: A Smaller, More Affordable EV',
    excerpt: 'Rivian\'s entry into the mainstream market starts under $50,000.',
    category: 'News',
    imageUrl: sampleImages['Toyota GR86'],
    readTime: undefined,
  },
};

export const LongTitle: Story = {
  args: {
    ...Default.args,
    title: 'We Drove Every Luxury SUV on Sale Today to Find the Very Best One You Can Buy in 2026',
    excerpt: 'After months of testing, we crown a winner in the most competitive segment.',
    category: 'Comparison Test',
    imageUrl: sampleImages['Hyundai Concept'],
  },
};

export const CustomCTA: Story = {
  args: {
    ...Default.args,
    ctaText: 'View Full Review',
    category: 'Review',
  },
};

export const CardGrid: Story = {
  args: {
    ...Default.args,
  },
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1000px]">
      <ArticleCard
        title="The 2026 Porsche 911 GT3 RS Is the Ultimate Track Weapon"
        excerpt="With 518 horsepower and aerodynamics borrowed from motorsport."
        category="First Drive"
        imageUrl={sampleImages['Porsche GT3 RS']}
        author="John Pearley Huffman"
        date="Jan 15, 2026"
        readTime="6 min read"
      />
      <ArticleCard
        title="Rivian R2 First Look: A Smaller, More Affordable EV"
        excerpt="Rivian's entry into the mainstream market starts under $50,000."
        category="News"
        imageUrl={sampleImages['Toyota GR86']}
        author="Joey Capparella"
        date="Jan 12, 2026"
      />
      <ArticleCard
        title="10Best Cars for 2026: The Absolute Best Vehicles on Sale"
        excerpt="Our annual list of the 10 best cars, trucks, and SUVs you can buy."
        category="Buyer's Guide"
        imageUrl={sampleImages['10Best Cars']}
        author="Car and Driver"
        date="Jan 10, 2026"
        readTime="12 min read"
      />
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};
