import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Ihilesen Egbokhare" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        {/* <ArticlesSection sectionId="articles" heading="Latest Projects" sources={['Github']} /> */}
        <AboutSection sectionId="about" heading="About Ihilesen Egbokhare" />
        <InterestsSection sectionId="details" heading="Details" />
        <ProjectsSection sectionId="features" heading="Projects" />
        <ContactSection sectionId="github" heading="Issues?" />
      </Page>
    </>
  );
}
