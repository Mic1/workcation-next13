<img width="1126" alt="workcation" src="https://user-images.githubusercontent.com/1424640/211996581-f3fd3cee-5192-486a-85c7-57b30b1c0371.png">
# DEMO AT https://vibrant-stonebraker-0f221c.netlify.app/


* NOTE: Latest versions of Firefox might not show UnSplash images by default. This can be fixed by typing "about:config" in browser URL bar, scrolling down to parameter "image.avif.enabled" and toggling it to "disabled"

## Next 13 is a full stack framework,

### that coupled with React 18 allows us to implement an efficient and elegant architecture for both DX and UX by interleaving server and client components. Full stack ### because it gives the full power of React when needed to  client components, and keeps the static part of the app rendering on the server with server components to ### fetch data and stream it in as ready. No more Next 12  hydration on the client.

### The new Layout architecture of Next 13, components never renders unnecessarily as it only rerenders areas where data is added in.

### This necessitates a change of mind set to server-based thinking, where all components are server-based and client components are only used when they are needed.

### A side effect of this might be a reusable set of client components, as the use of Layouts and nested layouts with page subsections focused on client interaction clearly delegates a narrow band of behaviour for us to code into those client components.

The plan is to take an existing project ( Workcation - one of the original Tailwind demos ported from Vue to React), and update to Next 13 and React 18 with efficient code and elegant architecture.

Then we will attempt to duplicate this code and architecture again using React 18 on the front end, but this time without Next 13. We want to see whether React 18 together with tools like react-router etc. can give us the streamlined dichotomy of server and client components, with its component promises and streaming data and its nested layouts with client components to minimize rerenders in both area and frequency .... quite simply "Can we do Next 13 without Next 13?

A side project will write a Sveltekit/Svelte comparison to see how it architects this forward way of thinking about server - client code.


### This repo contains the Next 13 WorkCation app.
