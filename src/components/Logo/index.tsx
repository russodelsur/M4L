import React from 'react';
import { useSiteConfiguration } from '../../hooks/useSiteConfiguration';
import * as classes from './style.module.css';

interface LogoProps {
    fontSize?: string;
    color?: string;
    fontFamily?: string;
}

export function Logo(props: LogoProps): React.ReactElement {
    const siteConfiguration = useSiteConfiguration();
    const fontSize = props.fontSize || '2rem';
    const fontFamily = props.fontFamily || 'Museo Sans 700';
    const color = props.color || 'var(--primary-color)';

    return (
        <div className={classes.Logo} aria-roledescription="logo" style={{ fontSize, fontFamily, color }}>
            {siteConfiguration.logo.text}
        </div>
    );
}
