# Technical

Technical coding test.

## Structure

I went with bootstrap for a css framework. 

I opted for Vue since it's my go-to for quick simplistic data being fed into a UI.

## Taskrunner

The default gulp task will compile everything from dev into the dist folder.  I use docker-compose for local building, but you can easily change the job to point at the directory instead.

## Issues

The devil's in the details.  The things I'd change with more time would be:

1. The nav is a mess at mobile sizes.  I'd need time (and an eps file of the logo) to make the navigation flow nicely at smaller breakpoints.  The JS that handles opening the drawer is a hackjob to get it to operate as a full-drawer.  I'd have to add eventHandlers to deal with focus shifting/accessibility.
2. The hero images obscure the text at lower screen sizes, I think it'd be cool to to cut out the assets from those images and layer them onto background-gradients.  It might give the design more flexibility. 
3. The second 'hero' has a pager as if it was a carousel, but no additional frames in the mockup.  I left it as a hero, but would revisit later.
4. I didn't have time to make the promotional topbar rotate through the discount messages.
5. I didn't make the _color.scss partial very semantic. I'd want to refactor that.
6. I also would think about using the 'section' or a class to factor in the 50px top and bottom padding on each section (except for the heros).



