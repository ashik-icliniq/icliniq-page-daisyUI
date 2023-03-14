# 1. Adoption of Daisy UI

Date: 2023-03-14

## Status

Accepted

## Context

We have decided to use Tailwind CSS as the CSS framework. We need a Component framework on top of Tailwind Css to make our developers life easy.

**Frameworks Considered :**
1. TailwindUI
2. Flowbite
3. DaisyUI

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

