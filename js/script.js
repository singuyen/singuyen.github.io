(function(){

  var winW = $(window).width();
  var winH = $(window).height();
  
  /*
  
  $('.container').css({
    width: winW,
    height: winH
  })
  
  $('.sub-container').css({
    'margin-top': winH
  })
*/


  var tags = {}
  $('.tag').each(function(){
    var tag = $(this).text()
    if (typeof tags[tag] == 'undefined') {
      tags[tag] = 0
    } else {
      var current = tags[tag]
      tags[tag] = current + 1
    }
  })


  for (var key in tags) {
    var times = tags[key] * 3
    
    $('.skill-list').append('<div class="skill-tag" style="font-size: ' + times + 'pt">' + key + '</div>')
  }
  
  
  $('.tag').on('click', function(){
    $('.tag').find('.tooltiptext').remove()
    var tagContent = $(this).text().toLowerCase()
    var tip = tagTips[tagContent].split('|')
    $(this).append('<div class="tooltiptext tooltip-active">' + tip[1] + '<small>Confident</small><div class="level-' + tip[0] + ' levels"><div class="bar"></div></div></div>')
  })
  
  $('.more').on('click', function(){
    var exp = $(this).parent().find('.exp-info')
    if (!exp.is(":visible")) {
      exp.show();
      $(this).hide();
    } else {
      exp.hide();
    }
  })

})()


