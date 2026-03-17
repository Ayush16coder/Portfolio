import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { useWindowSize } from '~/hooks';
import { Link as RouterLink } from '@remix-run/react';
import { useState } from 'react';
import { classes, cssProps } from '~/utils/style';
import styles from './education.module.css';

const educationData = [
  {
    slug: 'bca',
    title: 'Bachelor of Computer Applications (BCA)',
    abstract: 'Degree College of Physical Education',
    location: 'Amravati',
    date: 'Present',
    timecode: '01:03:00',
  },
  {
    slug: 'hsc',
    title: 'Higher Secondary Certificate (HSC)',
    abstract: 'Rural Institute',
    location: 'Amravati',
    date: '2023',
    timecode: '00:02:00',
  },
  {
    slug: 'ssc',
    title: 'Secondary School Certificate (SSC)',
    abstract: 'Saraswati Vidyalaya',
    location: 'Amravati',
    date: '2021',
    timecode: '00:01:00',
  },
];

function EducationPost({ slug, title, abstract, location, date, timecode, index }) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <article
      className={styles.post}
      data-featured="false"
      style={index !== undefined ? cssProps({ delay: index * 100 + 200 }) : undefined}
    >
      <div /* Changed from RouterLink since education doesn't have detail pages yet */
        className={styles.postLink}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ cursor: 'default' }}
      >
        <div className={styles.postDetails}>
          <div aria-hidden className={styles.postDate}>
            <Divider notchWidth="64px" notchHeight="8px" />
            {date}
          </div>
          <Heading as="h2" level={4}>
            {title}
          </Heading>
          <Text size="s" as="p">
            {abstract} · {location}
          </Text>
          <div className={styles.postFooter}>
            <Button secondary iconHoverShift icon="chevron-right" as="div">
              View details
            </Button>
            <Text className={styles.timecode} size="s">
              {timecode}
            </Text>
          </div>
        </div>
      </div>
    </article>
  );
}

export function Education() {
  const { width } = useWindowSize();
  const singleColumnWidth = 1190;
  const isSingleColumn = width <= singleColumnWidth;

  const header = (
    <header className={styles.header}>
      <Heading className={styles.heading} level={5} as="h1">
        <DecoderText text="Education History" />
      </Heading>
      <Barcode className={styles.barcode} />
    </header>
  );

  const postList = (
    <div className={styles.list}>
      {!isSingleColumn && header}
      {educationData.map((post, index) => (
        <EducationPost key={post.slug} index={index} {...post} />
      ))}
    </div>
  );

  return (
    <article className={styles.experience}>
      <Section className={styles.content}>
        {!isSingleColumn && (
          <div className={styles.grid}>
            {postList}
            {/* Empty right column since no featured post */}
            <div />
          </div>
        )}
        {isSingleColumn && (
          <div className={styles.grid}>
            {postList}
          </div>
        )}
      </Section>
      <Footer />
    </article>
  );
}

function Barcode({ className }) {
  return (
    <svg
      className={className}
      width="153"
      height="20"
      fill="currentColor"
      viewBox="0 0 153 20"
    >
      <path
        fillOpacity=".6"
        d="M153 0v20h-2V0h2Zm-4 0v20h-4V0h4Zm-6 0v20h-2V0h2Zm-4 4v3h-2V4h2Zm-5 0V0h3v4h-3Zm-2 0h2v6h-2V4Zm0 0h-2V0h2v4Zm-4-4v4h-4v5h-2v4h-5V9h3V6h-5V0h13Zm-11 13v3h-2v-3h2Zm-4-13v6h-2v4h2v4h-2v2h2v4h-4V0h4Zm-6 4V0h-2v4h2Zm-1 6V7h-4V4h-2V0h-2v4h-2V0H86v4h-2v3h-2v2h-2v4h6v3h-2v4h6v-4h-2v-3h-2V9h-2V7h4V4h3v9h2v7h7v-4h-5v-3h-2V9h2V7h3v3h2v4h6v-4ZM74 7v3h-2v2h2v8h-4V0h8v5h-3V4h-3v3h2Zm28 13h4v-4h-4v4Zm28-6v-4h-2v6h2v4h2v-6h-2Zm9 2v-6h-2v6h-2v4h4v-4Zm-12 4v-4h-4v4h4ZM0 20h2V0H0v20Zm4 0h4V0H4v20Zm6 0h2V0h-2v20Zm5 0h7V0h-7v20Zm12 0h-3V0h3v20Zm5 0h3v-4h5v-6h-5V6h7V3h3V0h-7v3h-3V0h-3v20ZM52 3v3h-3v3h-4V6h1V3h6Zm23 13h6v4h-6v-4Zm-29-6v3h3v-3h3v3h-2v6h-3v-3h-2v-3h-2v-3h3Zm8 6v3h-2v-3h2Zm3 0v3h2v-3h2v-3h-2v3h-2Zm0 0v-6h-3v6h3Zm4-7V6h2V0h-2v6h-2v3h2Zm5-3v3h-2V6h2Zm2 0h-2V3h2v3Zm-9-3V0h-2v3h2Z"
      />
    </svg>
  );
}
