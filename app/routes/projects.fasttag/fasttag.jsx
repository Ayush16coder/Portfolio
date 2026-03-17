import sliceAppLarge from '~/assets/slice-app-large.jpg';
import sliceAppPlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceApp from '~/assets/slice-app.jpg';
import sliceBackgroundLarge from '~/assets/slice-background-large.jpg';
import sliceBackgroundPlaceholder from '~/assets/slice-background-placeholder.jpg';
import sliceBackground from '~/assets/slice-background.jpg';
import sliceSlidesLarge from '~/assets/slice-slides-large.jpg';
import sliceSlidesPlaceholder from '~/assets/slice-slides-placeholder.jpg';
import sliceSlides from '~/assets/slice-slides.jpg';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';

const title = 'Fast-tag Registration & Generator Portal';
const description =
  'A full-stack vehicle registration portal that automates document generation, implements secure data handling, and streamlines the Fast-tag registration workflow.';
const roles = [
  'Full-Stack Development',
  'Document Automation',
  'Secure Data Handling',
  'Database Design',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const FastTag = () => {
  return (
    <Fragment>
      <ProjectContainer>
        <ProjectBackground
          src={sliceBackground}
          srcSet={`${sliceBackground} 1280w, ${sliceBackgroundLarge} 2560w`}
          width={1280}
          height={800}
          placeholder={sliceBackgroundPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${sliceApp} 800w, ${sliceAppLarge} 1920w`}
              width={800}
              height={500}
              placeholder={sliceAppPlaceholder}
              alt="The Fast-tag Registration Portal interface."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>The Problem</ProjectSectionHeading>
            <ProjectSectionText>
              Vehicle registration for Fast-tags often involves tedious paperwork, manual
              data entry, and slow processing times. Existing solutions lacked automation
              and secure handling of sensitive vehicle and owner data, leading to errors
              and delays in tag issuance.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Automated Document Generation</ProjectSectionHeading>
              <ProjectSectionText>
                One of the core features I built was automated document generation. Upon
                completing the registration form, the system automatically generates all
                required documents — registration certificates, tag assignments, and
                confirmation receipts — eliminating the need for manual paperwork and
                significantly reducing processing time.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${sliceSlides} 800w, ${sliceSlidesLarge} 1920w`}
              width={800}
              height={500}
              placeholder={sliceSlidesPlaceholder}
              alt="Automated document generation workflow in the Fast-tag portal."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Secure Data Handling</ProjectSectionHeading>
              <ProjectSectionText>
                Security was a top priority throughout development. I implemented robust
                data validation on both the client and server sides, ensuring that
                sensitive vehicle owner information is handled securely. The portal uses
                encrypted storage and secure API endpoints to protect all user data from
                unauthorized access.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <ProjectSectionHeading>Project Outcomes</ProjectSectionHeading>
              <ProjectSectionText>
                The Fast-tag Registration Portal successfully streamlined the entire
                registration workflow — from data entry to document issuance. By
                automating document generation and implementing secure data practices,
                the portal reduced processing time significantly and improved the
                overall user experience for both administrators and vehicle owners.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
