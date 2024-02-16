import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: '"OPOS" Philanthropy',
    // Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Giving to charity that is fully transparent on-chain with assets able to
        be instantly transferred accross the globe with no fees or middlemen
        taking slices of the donations.
      </>
    ),
  },
  {
    title: "Community focused",
    // Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>Utilizing NFTs to build community for maximum impact and reach</>
    ),
  },
  {
    title: "Powered by a Solana Validator",
    // Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Initial funds raised will be used to start a validator to generate
        revenue to power the project.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
