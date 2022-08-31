import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Animation } from '../Animation';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { Icon } from '../Icon';
import { ImageObject } from '../../types';
import * as classes from './style.module.css';

enum LinkType {
    External = 'external',
    Github = 'github',
}

export interface Project {
    category?: string;
    colour: string;
    title: string;
    productOne: string;
    productTwo: string;
    productThree: string;
    image: ImageObject & { linkTo?: string };
    tags?: string[];
    links?: {
        type: LinkType;
        url: string;
    }[];
    visible: boolean;
}

interface ProjectProps {
    data: Project;
    index: number;
}

export function Project(props: ProjectProps): React.ReactElement {
    const isDesktopBreakpoint = useMediaQuery('(min-width: 992px)');
        

    return (
        <Animation
            type="fadeUp"
            className={classes.Project}
            style={{
                flexDirection: isDesktopBreakpoint && props.index % 2 === 0 ? 'row-reverse' : undefined,
            }}
        >
            <div className={classes.Details} >
                <span className={classes.Category}>{props.data.category}</span>
                <h4 className={classes.Title}>{props.data.title}</h4>

                <p className={classes.Text}>{props.data.productOne}</p>
                <p className={classes.Text}>{props.data.productTwo}</p>
                <p className={classes.Text}>{props.data.productThree}</p>
                <p className={classes.Text}>Purchasing Offer Assistance</p>
                <p className={classes.Text}>Conveyancer Search</p>
                <p className={classes.Text}>Mortgage Broker search</p>
                <p className={classes.Text}>Property Surveys & Searches</p>
                {/* <p className={classes.Text}>Design services</p>
                <p className={classes.Text}>Planning and Building Control applications</p>
                <p className={classes.Text}>Managing Construction</p>
                <p className={classes.Text}>Move-in assistance</p> */}

                {/* <div className={classes.Tags}>
                    {props.data.tags &&
                        props.data.tags.length !== 0 &&
                        props.data.tags.map((tag, key) => {
                            return (
                                <div key={key}>
                                    <u>{tag}</u>
                                </div>
                            );
                        })}
                <div className={classes.Links}>
                    {props.data.links &&
                        props.data.links.length !== 0 &&
                        props.data.links.map((link, key) => {
                            return (
                                <a
                                    key={key}
                                    href={link.url}
                                    target="_blank"
                                    rel="nofollow noopener noreferrer"
                                    aria-label="External Link"
                                >
                                    <Icon name={link.type} color="var(--subtext-color)" />
                                </a>
                            );
                        })}
                </div>
            </div> */}
            <div className={classes.Image}>
            {props.data.image.src && props.data.image.linkTo && (
                <a href={props.data.image.linkTo} target="_blank" rel="noopener noreferrer" aria-label="External Link">
                    <GatsbyImage
                        className={classes.ProjectImageWrapper}
                        imgClassName={classes.ProjectImage}
                        image={props.data.image.src.childImageSharp.gatsbyImageData}
                        alt={props.data.image.alt || `Project ${props.data.title}`}
                    />
                </a>
            )}
            {props.data.image.src && !props.data.image.linkTo && (
                <GatsbyImage
                    className={classes.ProjectImageWrapper}
                    imgClassName={classes.ProjectImage}
                    image={props.data.image.src.childImageSharp.gatsbyImageData}
                    alt={props.data.image.alt || `Project ${props.data.title}`}
                />
            )}
            </div>
            </div>
        </Animation>
    );
}
