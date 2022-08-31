import React from 'react';
import { Animation } from '../../components/Animation';
import { Section } from '../../components/Section';
import { GatsbyImage } from 'gatsby-plugin-image';
import { PageSection } from '../../types';
import { useLocalDataSource } from './data';
import * as classes from './style.module.css';

export function InterestsSection(props: PageSection): React.ReactElement {
    const response = useLocalDataSource();
    const data = response.allInterestsJson.sections[0];
    const shouldShowButton = data.button.visible !== true;
    const initiallyShownInterests = data.button.initiallyShownInterests ?? 5;
    const [shownInterests] = React.useState<number>(
        shouldShowButton ? initiallyShownInterests : data.interests.length,
    );

    return (
        <Animation type="fadeUp">
            <Section anchor={props.sectionId} heading={props.heading}>
                <div className={classes.Interests}>
                    {data.interests.slice(0, shownInterests).map((interest, key) => {
                        return (
                            <Animation key={key} className={classes.Interest} type="scaleIn" delay={key * 200}>
                                <div >
                                <h4 className={classes.Title}>{interest.label}</h4>
                                <p className={classes.Des}>{interest.body}</p>
                                </div>

                                <div >
                                {interest.image.src && (
                                    <GatsbyImage
                                        className={classes.Icon}
                                        alt={interest.image.alt || `Interest ${interest.label}`}
                                        image={interest.image.src.childImageSharp.gatsbyImageData}
                                    />
                                )}{' '}
                                </div>
                            </Animation>
                            
                        );
                    }
                    )}
                </div>
            </Section>
        </Animation>
    );
}
