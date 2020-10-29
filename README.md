# React SEO All-In-One
This library provides stuff to seo-optimize your website built with react. You can either use single components for an easy usage of meta tags and other stuff or use predefined groups to get all the different tags out of your mind.

## Installation
```
npm install react-seo-aio
```

## Typescript
This library is written in Typescript and comes with all needed typings. Of course it also supports simple javascript.

## Usage
### Basic (not yet supported)
```jsx
import React from "react";
import {Helmet} from "react-helmet";
import {HeadGroupBasic} from "react-seo-aio";

const Page = () => {
  return (
    <section class="page">
      <Helmet>
        <HeadGroupBasic
          title="Homepage"
          description="Welcome to our business"
          canonical="http://mybusiness.com"
          robots={{index: true, follow: true}}
        />
      </Helmet>
    </section>
  );
}

/* RENDERS TO THIS HEAD

<title>Homepage</title>
<link rel="canonical" href="http://mybusiness.com">
<meta name="description" content="Welcome to our business">
<meta name="robots" content="index,follow">
<meta name="og:type" content="website">
<meta name="og:title" content="Homepage">
<meta name="og:url" content="http://mybusiness.com">

*/
```

### (Advanced) with single tags
```jsx
import React from "react";
import {Helmet} from "react-helmet";
import {
  Title,
  Description,
  Canonical,
  MetaOpenGraphArticleAuthor
} from "react-seo-aio";

const Page = () => {
  return (
    <section class="page">
      <Helmet>
        <Title content="Homepage" />
        <Description content="Welcome to our business" />
        <Canonical href="http://mybusiness.com" />
        <MetaOpenGraphArticleAuthor content="https://github.com/julianhandl">
      </Helmet>
    </section>
  );
}
```

## Supported features

### Basics
|Title|Tag|Support|
|---|---|---|
|Title|```title```|```true```|
|Description|```meta```|```true```|
|Canonical|```link```|```true```|
|Robots|```meta```|```true```|


### Meta Tags
|Title|name|Support|
|---|---|---|
|OG title|```og:title```|```true```|
|OG type|```og:type```|```true```|
|OG url|```og:url```|```true```|
|OG image|```og:image```|```true```|
|OG article|```article:###```|```true```|