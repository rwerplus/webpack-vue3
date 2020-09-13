
import { Overlay } from 'ol'

export const overlay = function (ele) {
  return  new Overlay({
    element: ele,
    autoPan: true,
    autoPanAnimation: {
      duration: 250
    }
  })
}
