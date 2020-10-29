# React SEO All-In-One
This library provides stuff to seo-optimize your website built with react. You can either use single components for an easy usage of meta tags and other stuff or use predefined groups to get all the different tags out of your mind.

## Installation
```
npm install react-seo-aio
```

## Quickstart
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

## Usage
This library renders basic tags like meta tag. It is purposly not bound to any external libraries like ```react-helmet```. Different methos like basic react or next.js use different methods to render content inside the html head. Use the provided method.

### Basics
The easiest way to use this library is to use the predefined tag groups in an additive way.

Allways start with the ```<HeadGroupBasic>``` and add stuff from there.

If your current page is also represented by media like an image or video you can add the ```<HeadGroupMedia>```.

### (Advanced) with single tags
You can also mix groups with individual functions or event use them exclusively.

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

## References

### Groups

#### ```<HeadGroupBasic>```
|Tag|Prop|Type|Required|Default|
|--|--|--|--|--|
|```title```|```title```|```string```|```true```||
|```meta-og:title```|```title```|```string```|```true```||
|```meta-description```|```description```|```string```|```true```||
|```meta-og:description```|```description```|```string```|```true```||
|```link-canonical```|```url```|```string```|```true```||
|```meta-og:url```|```url```|```string```|```true```||
|```meta-og:local```|```locale```|```string```|```true```||
|```meta-robots```|```robots```|```{index: boolean, follow: boolean}```|```false```|```index,follow```|
|```meta-og:type```|```type```|```enum```|```false```||
|```meta-og:locale:alternative```|```localeAlternative```|```string | string[]```|```false```||
|```meta-og:site_name```|```siteName```|```string```|```false```||