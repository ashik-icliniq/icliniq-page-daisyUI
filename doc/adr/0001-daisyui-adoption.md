# 1. Adoption of Daisy UI

Date: 2023-03-14

## Status

Accepted

## Context

Since we have choosen Tailwind CSS as the CSS framework. We definitely needed a Component framework on top of the base Tailwind Css. For that several frameworks are considered such as Flowbite, TailwindUI and DaisyUI.

**Points that are considered in Daisy UI :**
1. Comparitively good component design than Flowbite.
2. Better Community support.
3. Got additional component like Responsive Carousel, Mobile Mockup, Desktop Mockup, etc...
4. Several Configurable options in each component through props.
5. Easy to use.
6. It comes with a huge number of themes out of the box and a lot of components as well.

## Decision

After several implementation of some icliniq pages in different frameworks. Compared to other frameworks like Flowbite. Daisy UI is decisioned to be the best practice throughout the project.

## Consequences

Unlike Bootstrap and Material UI, Daisy UI is not a standalone framework. It completely depends on TailwindCss. It is mandatory to configure Daisy UI in tailwind.config.

