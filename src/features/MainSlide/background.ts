/* eslint-disable @typescript-eslint/space-before-function-paren */
import { useEffect } from 'react'
import jQuery from 'jquery'

const maxSpeed = 200
const minSpeed = 10
const minSize = 40
const maxIconsCount = 50
let animationFrame = -1
let particles: Ball[] = []

class Ball {
  parentContainer: JQuery<HTMLElement>
  container: JQuery<HTMLElement>
  speed: number
  vectorX: number
  vectorY: number
  radius: number
  width: number
  height: number
  positionX: number
  positionY: number

  constructor(parentContainer: JQuery<HTMLElement>, svgContainer: HTMLElement) {
    this.parentContainer = jQuery(parentContainer)
    this.container = jQuery(svgContainer)
    this.speed = Math.max(Math.min(1 + Math.random() * 12, maxSpeed), minSpeed)
    this.vectorX = Math.random() * this.speed - Math.random() * this.speed
    this.vectorY = Math.random() * this.speed - Math.random() * this.speed
    this.radius = Math.max(10 + Math.round(Math.random() * 80), minSize)
    this.width = jQuery(window).width() ?? 0
    this.height = jQuery(window).height() ?? 0
    this.positionX = (this.width - this.radius) / 2
    this.positionY = (this.height - this.radius) / 2

    jQuery(window).on('resize', this.resize.bind(this))
    this.render()
  }

  resize = (): void => {
    this.width = jQuery(window).width() ?? 0
    this.height = jQuery(window).height() ?? 0
  }

  render = (): void => {
    jQuery(this.container).css({
      width: this.radius,
      height: this.radius
    })
    jQuery(this.parentContainer).append(this.container)
  }

  move = (): Ball => {
    this.positionX = this.positionX + this.vectorX
    this.positionY = this.positionY + this.vectorY

    this.container.css({
      left: this.positionX,
      top: this.positionY,
      transform: `rotate(${this.positionY}deg)`
    })

    if (this.positionX < 0 || this.positionX > this.width - this.radius) {
      this.vectorX = -this.vectorX
    }

    if (this.positionY < 0 || this.positionY > this.height - this.radius) {
      this.vectorY = -this.vectorY
    }

    return this
  }
}

const update = (): void => {
  particles = particles.filter((p) => p.move())
  animationFrame = requestAnimationFrame(update.bind(this))
}

const useBackground = (parentContainer: string, className: string): void => {
  useEffect(() => {
    console.debug(
      `Initializing background for .${parentContainer}.${className}`
    )
    jQuery('body').css('overflow-y', 'hidden')
    const svgList = jQuery(`.${className}>img`)
    const parent = jQuery(`.${parentContainer}`)

    for (let i = 0; i < Math.min(svgList.length, maxIconsCount); i++) {
      particles.push(new Ball(parent, svgList[i]))
    }
    update()
    jQuery(`.${className}`).remove()

    return function cleanup() {
      console.debug('Cleaning up icons')
      if (animationFrame !== -1) {
        cancelAnimationFrame(animationFrame)
        jQuery('body').css('overflow-y', 'auto')
      }
    }
  }, [parentContainer, className])
}

export default useBackground
