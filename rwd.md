#LESSION 1

Why Responsive

Is the way you think.

#LESSION 2

viewport define the area of screen what could render content

pixel in css -> Device Independent pixels

#LESSION 3

apply diff css in diff device 

## media query 

```
  <link rel="stylesheet" media="screen and (min-width: 500px)" href="over500.css" />
  // 只有width > 500 才套用 over500.css

  @media screen and (min-width: 500px) {
    // ...
  }
```

## breakpoint
frequency use min-width / max-width
when you change css layout -> breakpoint

## grid fluid system
e.g. bootstrap

## flexbox
easy to position elements
image that change line auto;
```
  display: 'flex',
  flexWrap: 'wrap'
```

## flex item: order
change elements order depending on breakpoint

# LESSION 4 Common Responsive Patterns

## Column Drop

## Mostly Fluid
add extra margin 

## Layout Shifter
multiple breakpoints across different screen widths
key -> The way that content moves about 

## Off Canvas
Only show if screnn is large enough or user tap hamburger icon

# LESSION 5 Optimizations

## Images
## Responsive Tables
Hidden Columns 
-> Only show important info when width is in small screen width

No more tables
-> Change display at some breakpoint

Contained Tables
-> overflowX auto

## fonts

messure text around 45 ~ 90
use rem
