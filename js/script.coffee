class UserTest
  constructor: (@container, @previous, @next, @$slideElement) ->
    @customFunction = []

    @$container = document.querySelector("[#{@container}]")
    @$previous = @$container.querySelector("[#{@previous}]")
    @$next = @$container.querySelector("[#{@next}]")
    @slides = @$container.querySelectorAll("[#{@$slideElement}]")
    @currentpage = @$container.querySelectorAll("[current-page]")
    @lastpage = @$container.querySelectorAll("[last-page]")

    @animateSlide(1)

  nextSlide: (callback) =>
    @$next.addEventListener "click", ->
      callback()

  previousSlide: (callback) =>
    @$previous.addEventListener "click", ->
      callback()

  animateSlide: (index) =>
    for slide, key in @slides
      @removeClass("active", slide)
      @removeClass("before", slide)
      @removeClass("after", slide)
      @addClass("before", slide) if (key+1) < index
      @addClass("after", slide) if (key+1) > index
    @addClass("active", @slides[index-1])
    @currentpage[0].innerHTML = ' 0'+index+' '
    @customFunction[index]() if @customFunction[index]?

  customListener: (index, callback) =>
    @customFunction[index] = callback()


  addClass: (classname, element) ->
    cn = element.className
    if cn.indexOf(classname) != -1
      return
    if cn != ''
      classname = ' ' + classname
    element.className = cn + classname

  removeClass: (classname, element) ->
    cn = element.className
    rxp = new RegExp('\\s?\\b' + classname + '\\b', 'g')
    cn = cn.replace(rxp, '')
    element.className = cn

document.addEventListener 'DOMContentLoaded', ->

  usertest = new UserTest("container", "previous", "next", "slide")
  usertest.customFunction[0] = ->
    console.log "page 1"

  usertest.customFunction[2] = ->
    console.log "page 2"
    usertest.current-page.style.pointerEvents = none


  countSlides = usertest.slides.length
  slideIndex = 1
  usertest.lastpage[0].innerHTML = ' 0'+countSlides




  usertest.previousSlide ->
    slideIndex -= 1 if slideIndex > 1
    usertest.animateSlide(slideIndex)

  usertest.nextSlide ->
    slideIndex += 1 if slideIndex < countSlides
    usertest.animateSlide(slideIndex)





