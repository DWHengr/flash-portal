import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import {useState, useEffect} from "react";
import {useColorMode} from '@docusaurus/theme-common'

import styles from './index.module.css';

function DynamicHeaderImage() {
    const {colorMode} = useColorMode()
    const [isDarkMode, setIsDarkMode] = useState(false)


    // // Set dark mode correctly
    useEffect(() => {
        setIsDarkMode(colorMode === 'dark')
    }, [colorMode])

    return (
        <img
            src={
                isDarkMode
                    ? '/img/header_dark.png'
                    : '/img/header_light.png'
            }
        />
    )
}


function HomepageHeader() {
    const {colorMode} = useColorMode()
    const [isDarkMode, setIsDarkMode] = useState(false)
    useEffect(() => {
        setIsDarkMode(colorMode === 'dark')
    }, [colorMode])
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}
                style={{background: isDarkMode ? "#2c2c2c" : "#f5f5f5"}}>
            <div className="container">
                <span>
                    <DynamicHeaderImage/>
                </span>
                <p className="hero__subtitle" style={{color: isDarkMode ? "white" : "black"}}>{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/intro">
                        下载尝试 - to github
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Enter to open the world...`}
            description="Description will go into a meta tag in <head />">
            <HomepageHeader/>
            <main>
                <HomepageFeatures/>
            </main>
        </Layout>
    );
}
