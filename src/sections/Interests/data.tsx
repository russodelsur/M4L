import { graphql, useStaticQuery } from 'gatsby';
import { ImageObject } from '../../types';

interface InterestsSectionQueryResult {
    allInterestsJson: {
        sections: {
            button: {
                initiallyShownInterests: number;
                label: string;
                visible: boolean;
            };
            interests: {
                image: ImageObject;
                label: string;
                body: string;
            }[];
        }[];
    };
}

export const useLocalDataSource = (): InterestsSectionQueryResult => {
    return useStaticQuery(graphql`
        query InterestsSectionQuery {
            allInterestsJson {
                sections: nodes {
                    button {
                        initiallyShownInterests
                        label
                        visible
                    }
                    interests {
                        image {
                            alt
                            src {
                                childImageSharp {
                                    gatsbyImageData(width: 400, height: 400)
                                }
                            }
                        }
                        label
                        body
                    }
                }
            }
        }
    `);
};
