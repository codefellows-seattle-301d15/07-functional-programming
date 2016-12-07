articleView.renderAdminPage = function() {
  var statsRender = Handlebars.compile($('#stats-template').html());
  $('#blog-stats .articles').text(Article.allArticles.length);

  //  TODONE: uncomment when complete:
  $('#blog-stats .words').text(Article.numWordsAll());


  //TODONE: uncomment when ready to test:
  Article.numWordsByAuthor().forEach(function(numWordsObj) {
    $('.author-stats').append(statsRender(numWordsObj));
  });


};

Article.fetchAll(articleView.renderAdminPage);
