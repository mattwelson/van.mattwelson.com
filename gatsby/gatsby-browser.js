/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

function anchorScroll(location) {
  // Check for location so build does not fail
  if (location && location.hash) {
    setTimeout(() => {
      // document.querySelector(`${location.hash}`).scrollIntoView({ behavior: 'smooth', block: 'start' });
      const item = document.querySelector(`${location.hash}`)?.offsetTop
      if (!item) return

      const mainNavHeight = document.querySelector(`nav`)?.offsetHeight || 50
      window.scrollTo({
        top: item - mainNavHeight,
        left: 0,
        behavior: 'smooth',
      })
    }, 0)
  }
}

export const onRouteUpdate = ({ location }) => {
  anchorScroll(location)
  return true
}
export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  anchorScroll(location)
  // use default scroll behaviour for page transitions
  return !location.hash
}
