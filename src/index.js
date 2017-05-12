
$(document).ready(function(){
  var urlList = new addUrl
  var captionList = new CaptionList

  $('#photo-form').submit(function(event) {
    event.preventDefault()

    var input = $('#urlInput').val()
    urlList.addLink(input)

    var html1 = urlList.render()
    // debugger
    console.log(html1)

    $('#photo-list').append(`<img src=${input}></img>`)
      // debugger
      var caption = $('#captionInput').val()

      captionList.addCaption(caption)
      var html = captionList.render()
      console.log(html)
      $('#photo-list').append(html)
    })
  })
