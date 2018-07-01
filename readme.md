# Technical

Technical coding test.

## Structure

I went with bootstrap for a css framework. 

I opted for Vue as a js framework since it's quick to throw together quick simplistic data structures and get them fed into the view with it.

## Taskrunner

The default gulp task will compile everything from dev into the dist folder.  I use docker-compose for local building, so if you have docker/docker-compose installed and want to run it locally:

```
docker-compose up -d  
gulp
```

Otherwise it's visible at <https://cdn.rawgit.com/ZacharySchaffter/z-technical/6728a591/dist/index.html>.

## Issues

The devil's in the details.  The things I'd change with more time would be:

1. **Navigation** -  I'd need time (and an eps file of the logo) to make the navigation flow nicely at smaller breakpoints.  The JS that handles opening the drawer is a hackjob to get it to operate as a full-drawer.  I'd have to add eventHandlers to deal with focus shifting/accessibility.  Plus, there's currently no mobile nav menu.
2. **Hero Images** - The hero images obscure the text at lower screen sizes, I'd like to try to to cut out the assets from those images and layer them onto background-gradients.  It might give the design more flexibility. 
3. **Carousel** - The second 'hero' has a pager as if it was a carousel, but no additional frames in the mockup.  I left it as a hero, but would revisit later.
4. **Topbar** - I didn't have time to make the promotional topbar rotate through the discount messages.
5. **SCSS** - I'd want to refactor almost all of the scss partials.  I threw together what I thought I'd need and built from there, so there's some redundancy.
7. **Font** - The font wasn't one I had available, so I used the closest similar face I could find on typekit.  The fontstack is references in the `_variables.scss` partial, so swapping it for the right one wouldn't be difficult.


