
$(document).ready(function(){
  var captionList = new CaptionList
  var urlList = new addUrl

  $('#photo-form').submit(function(event) {
    event.preventDefault()
    var input = $('#image_url').val()
    urlList.addLink(input)
    var html = urlList.render()
    console.log(html)
    $('#div').html("<a href= input></a>").then(function(event) {
      event.preventDefault()
      // debugger
      var caption = $('#captionText').val()
      captionList.addCaption(caption)
      var html = captionList.render()

      console.log(html)
      $('#photo-list').html(html)
    })
  })



})
