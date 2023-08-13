import { buildLegacyTheme } from 'sanity'

const props = {
    "--client-white": "#fafafa",
    "--client-black": "#121212",
    "--brand-color": "#ff5f1f",
    "--client-color-1": "#ffe5b4",
    "--client-color-2": "#3C3C3C",
    "--client-color-3": "#ffbf00"
};

export const brandTheme = buildLegacyTheme({
    /* Base colors */
    "--black": props["--client-black"],
    "--white": props["--client-white"],

    "--gray": "#888",

    "--component-bg": props["--client-black"],
    "--component-text-color": props["--client-white"],

    /* Brand */
    "--brand-primary": props["--brand-color"],

    /* Default button color */

    "--default-button-color": "#fff",
    "--default-button-primary-color": props["--client-color-3"],
    "--default-button-success-color": "#03c04a",
    "--default-button-warning-color": "#FFEF00",
    "--default-button-danger-color": "#d0312d",

    /* state  */
    "--state-info-color": props["--brand-color"],
    "--state-success-color": "#03c04a",
    "--state-warning-color": "#FFEF00",
    "--state-danger-color": "#d0312d",

    /* nav */
    "--main-navigation-color": props["--client-color-2"],
    "--main-navigation-color--inverted": props["--client-color-1"],
    
    "--focus-color": props["--brand-color"],
})