import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ArticleCard } from './ArticleCard';

const meta = {
  title: 'Components/ArticleCard',
  component: ArticleCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    category: {
      control: 'select',
      options: ['First Drive', 'Comparison Test', 'News', 'Buyer\'s Guide', 'Review'],
    },
  },
} satisfies Meta<typeof ArticleCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleImage = 'https://hips.hearstapps.com/hmg-prod/images/2025-porsche-911-gt3-rs-manthey-racing1-6740bdc5bdc0c.jpg?crop=0.921045192035863xw:1xh;center,top&resize=980:*';

export const Default: Story = {
  args: {
    title: 'The 2026 Porsche 911 GT3 RS Is the Ultimate Track Weapon',
    excerpt: 'With 518 horsepower and aerodynamics borrowed from motorsport, the new GT3 RS sets a new benchmark.',
    category: 'First Drive',
    imageUrl: "https://hearts-tokens.netlify.app/_next/image?url=https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod%2Fimages%2F2025-porsche-911-gt3-rs-manthey-racing1-6740bdc5bdc0c.jpg%3Fcrop%3D0.921045192035863xw%3A1xh%3Bcenter%2Ctop%26resize%3D980%3A*&w=3840&q=75",
    author: 'John Pearley Huffman',
    date: 'Jan 15, 2026',
    readTime: '6 min read',
  },
};

export const WithoutReadTime: Story = {
  args: {
    ...Default.args,
    title: 'Rivian R2 First Look: A Smaller, More Affordable EV',
    excerpt: 'Rivian\'s entry into the mainstream market starts under $50,000.',
    category: 'News',
    readTime: undefined,
    imageUrl: "https://hearts-tokens.netlify.app/_next/image?url=https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod%2Fimages%2F2025-porsche-911-gt3-rs-manthey-racing1-6740bdc5bdc0c.jpg%3Fcrop%3D0.921045192035863xw%3A1xh%3Bcenter%2Ctop%26resize%3D980%3A*&w=3840&q=75"
  },
};

export const LongTitle: Story = {
  args: {
    ...Default.args,
    title: 'We Drove Every Luxury SUV on Sale Today to Find the Very Best One You Can Buy in 2026',
    excerpt: 'After months of testing, we crown a winner in the most competitive segment.',
    category: 'Comparison Test',
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
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1000px]">
      <ArticleCard
        title="The 2026 Porsche 911 GT3 RS Is the Ultimate Track Weapon"
        excerpt="With 518 horsepower and aerodynamics borrowed from motorsport."
        category="First Drive"
        imageUrl={sampleImage}
        author="John Pearley Huffman"
        date="Jan 15, 2026"
        readTime="6 min read"
      />
      <ArticleCard
        title="Rivian R2 First Look: A Smaller, More Affordable EV"
        excerpt="Rivian's entry into the mainstream market starts under $50,000."
        category="News"
        imageUrl="https://hips.hearstapps.com/hmg-prod/images/2026-toyota-gr86-yuzu-special-edition-pr-102-67ed5cc10d1ce.jpg?resize=768:*"
        author="Joey Capparella"
        date="Jan 12, 2026"
      />
      <ArticleCard
        title="10Best Cars for 2026: The Absolute Best Vehicles on Sale"
        excerpt="Our annual list of the 10 best cars, trucks, and SUVs you can buy."
        category="Buyer's Guide"
        imageUrl="https://hips.hearstapps.com/hmg-prod/images/2019-group-10best-1574285577.jpg?crop=1.00xw:0.751xh;0,0.199xh&resize=768:*"
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
