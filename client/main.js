Template.index.events({
  'click .nav a' : function (event)
  {
    if ($(window).width() < 768)
    {
      $('.navbar-toggle').click();
    }    
  }
});

Template.index.rendered = function ()
{
  $("body").scrollspy({
    target: ".navbar"
  });
}
