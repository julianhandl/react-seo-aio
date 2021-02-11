# React SEO All-In-One
This library provides stuff to seo-optimize your website built with react. You can either use single components for an easy usage of meta tags and other stuff or use predefined groups to get all the different tags out of your mind.

## Quickstart
```
npm install react-seo-aio
```

```jsx
import React from "react";
import {Helmet} from "react-helmet";
import {generateGroupBasic} from "react-seo-aio";

const Page = () => {
  return (
    <section class="page">
      <Helmet>
        {generateGroupBasic({
          title: "How to succeed with SEO",
          description: "SEO is more than just technical implementation. Nevertheless your html should be perfect.",
          canonical: "http://mybusiness.com/blog/seo"
        )}}
      </Helmet>
    </section>
  );
}

/* RENDERS TO THIS HEAD

<title>How to succeed with SEO</title>
<link rel="canonical" href="http://mybusiness.com/blog/seo">
<meta name="description" content="SEO is more than just technical implementation. Nevertheless your html should be perfect.">
<meta name="robots" content="index,follow">
<meta name="og:title" content="How to succeed with SEO">
<meta name="og:description" content="SEO is more than just technical implementation. Nevertheless your html should be perfect.">
<meta name="og:url" content="http://mybusiness.com/blog/seo">

*/
```

## Typescript
This library is written in Typescript and comes with all needed typings. Of course it also supports vanilla javascript.

## <a name="usage"></a>Usage
The easiest way to use this library is to use the predefined tag groups in an additive way.
- ```generateGroupBasic```
- ```generateGroupMedia```
- ```generateOpenGraphArticle```

This library renders basic tags like meta tag. It is purposly not bound to any external libraries like ```react-helmet```. Different methods like basic react or next.js use different methods to render content inside the html head. Use the provided method.


### Component naming convention
The naming convention for all functions / components of this library follows this rule:

1. (Optional) Group: The type of tag (OpenGraph, ...)
2. Tag Name / Topic: The tags name in camel case (1-n names)

With the exception of top level groups like ```Head```, the ```src``` folder follows the same naming conventions. For a tag reference, take a look at the src folder. 

#### Group
A group can be either just a group of tags that are grouped by topic. In this case the word we are looking for is ```Group```.

On the other hand it can be a type of tag like ```Open Graph``` or ```Twitter Cards```.

The group IS NOT a technical therm like ```meta``` tag.

#### Tag Name / Topic

The last part of the function name can either be an actual tag name like ```Title``` for the title tag. In this case the component name will be ```HeadTitle```. The name can also contain multiple words if we use the ```OpenGraph``` tags for example. ```generateOpenGraphArticleAuthor``` contains ```Article``` followed by ```Author``` and references the ```article:author``` tag inside the open graph.

In case of a topic group it can be a word like ```Basic``` which referes to the ```generateGroupBasic``` function which will render all the must have tags inside the head. Another example would be ```Media```.

## Usage 
The easiest way to use this library is to use the predefined tag groups in an additive way.

Allways start with the ```generateGroupBasic``` function and add stuff from there.

If your current page is also represented by media like an image or video you can add the ```generateGroupMedia``` function.

```jsx
import React from "react";
import {Helmet} from "react-helmet";
import {generateGroupBasic, generateGroupMedia} from "react-seo-aio";

const Page = () => {
  return (
    <section class="page">
      <Helmet>
        {generateGroupBasic({
          title: "How to succeed with SEO",
          description: "SEO is more than just technical implementation. Nevertheless your html should be perfect.",
          canonical: "http://mybusiness.com/blog/seo",
          robots: {{index: true, follow: true}}
        })}
        {generateGroupMedia({
          image: "http://mybusiness.com/blog/seo/intro.jpg",
          video: "http://mybusiness.com/blog/seo/intro.mp4"
        })}
        {generateGraphArticle({
          publishedTime: new Date("2020-11-04T08:00:00"),
          author: "https://github.com/julianhandl",
          section: "SEO",
          tag: ["SEO", "Open Graph", "Metatags"]
        })}
      </Helmet>
    </section>
  );
}

/* RENDERS TO THIS HEAD

<title>How to succeed with SEO</title>
<link rel="canonical" href="http://mybusiness.com/blog/seo">
<meta name="description" content="SEO is more than just technical implementation. Nevertheless your html should be perfect.">
<meta name="robots" content="index,follow">
<meta name="og:title" content="How to succeed with SEO">
<meta name="og:description" content="SEO is more than just technical implementation. Nevertheless your html should be perfect.">
<meta name="og:url" content="http://mybusiness.com/blog/seo">
<meta name="og:image" content="http://mybusiness.com/blog/seo/intro.jpg">
<meta name="og:video" content="http://mybusiness.com/blog/seo/intro.mp4">
<meta name="og:type" content="article">
<meta name="article:published_time" content="2020-11-04T08:00:00">
<meta name="article:author" content="https://github.com/julianhandl">
<meta name="article:section" content="SEO">
<meta name="article:tag" content="SEO">
<meta name="article:tag" content="Open Graph">
<meta name="article:tag" content="Metatags">

*/
```

### (Advanced) with single tags
You can also mix groups with individual functions or even use them exclusively.

```jsx
import React from "react";
import {Helmet} from "react-helmet";
import {
  generateTitle,
  generateDescription,
  generateCanonical,
  generateOpenGraphArticleAuthor
} from "react-seo-aio";

const Page = () => {
  return (
    <section class="page">
      <Helmet>
        {generateTitle("Homepage")}
        {generateDescription("Welcome to our business")}
        {generateCanonical("http://mybusiness.com")}
        {generateOpenGraphArticleAuthor("https://github.com/julianhandl")}
      </Helmet>
    </section>
  );
}
```

## Why use functions instead of actual react components?

At first react components were used but most header components like ```react-helmet``` or ```next/head``` do not support nested tags like we would get with components. Functions returning single tags or an array of tags offer the widest support.