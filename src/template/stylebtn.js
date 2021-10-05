

const btn = document.querySelector('.js-button')
const width = btn.clientWidth
const height = btn.clientHeight
const svg = (width, height)
const maskOffset = btn.clientHeight


const mask = svg
  .path(`M0,0 L${width + maskOffset},0 L${width},${height} L-${maskOffset}, ${height} Z`)
  .attr({ 'fill': 'white', 'stroke': 'white', 'class': 'mask', 'stroke-width': 0 })
  .transform(`t-${width + maskOffset},0`)

const maskInvert = mask
  .clone()
  .transform('t0,0')





svg.hover(
  () => {
    mask.attr('stroke-width', 4)
    mask.stop().animate({ transform: 't0,0' }, 500 )
    maskInvert.stop().animate({ transform: `t${width + maskOffset},0` }, 500 )
  },
  () => {
    mask.stop().animate({ transform: `t-${width + maskOffset},0` }, 350, () => mask.attr('stroke-width', 0))
    maskInvert.stop().animate({ transform: 't0,0' }, 350)
  }
)

svg.click(() => btn.click())
btn.replaceWith(svg.node)
