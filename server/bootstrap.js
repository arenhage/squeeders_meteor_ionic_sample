Meteor.startup(function () {
  Squeeders.remove({});

  result = Meteor.http.get("http://www.squeed.com/squeeders");
	$ = cheerio.load(result.content);
	var ones = $('.sixteen.columns.content.content-page > div');
	ones.each(function(index) {
    Squeeders.insert({
      name:$(this).find('div.team > h4').text(),
      img:$(this).find('div.thumb > img').attr('src'),
      desc:$(this).find('div.member-content > p > span').text(),
      profile:$(this).find('a').attr('href')
    });
	});
});
