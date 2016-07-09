# What is this?

A way for Divvy users to scrape and download their own bikeshare data.

Possible successsor to the original DivvyBrags and DivvyBrags 2. Here's some context:

+ [Divvy Shuts Down Inventor's 'Well Done' Mile-Counting App](https://www.dnainfo.com/chicago/20130926/south-loop/divvy-shuts-down-inventors-mileage-tracking-app)
+ ['DivvyBrags' App Returns, But Without the Bragging, For Now](https://www.dnainfo.com/chicago/20131220/south-loop/divvybrags-app-returns-but-without-bragging-for-now)
+ [Divvy Diary: There's an app for that....](http://www.everygoddamnday.com/2014/01/divvy-diary-theres-app-for-that.html)

# Why so many versions?

No API for Divvy.

Server-side scraping is banned at scale.

Their website keeps changing.

That makes maintaining a client-side scraping app over the years a big chore.

# Shouldn't there be some sort of Divvy API?

Yes.

3+ years.

3.2+ million trips.

Lots of nerdy biking developers.

No API.

# What's the goal?

Tech as advocacy. Get people to tweet with #DivvyAPI.

1. Create at least a little bit of Internet pressure on Divvy to make an API or at least a "Download all Trips" button and

2. Serve Divvy users. Serving users products based on individual trip data is not time-effective in the long run unless Divvy offers an API or a download button.

# Project status

This is pre-release right now, for my own personal exploration. Other interested developers are free to use & build.

There is no Chrome store version of this extension because it's too minimal.

Right now, the extension creates a "Download as CSV" button on each monthly trips page for a user of divvybikes.com.

The Divvy trips site goes one page at a time, so manual concatenation is required at this stage to build up a single CSV with all trips.

# How to Install

From [Getting Started: Building a Chrome Extension](https://developer.chrome.com/extensions/getstarted):

> Visit chrome://extensions in your browser (or open up the Chrome menu by clicking the icon to the far right of the Omnibox:  The menu's icon is three horizontal bars. and select Extensions under the Tools menu to get to the same place).

> Ensure that the Developer mode checkbox in the top right-hand corner is checked.

> Click Load unpacked extension… to pop up a file-selection dialog.

> Navigate to the directory in which your extension files live, and select it.

# How to use

1. Go to https://www.divvybikes.com/
2. Log in
3. Go to https://www.divvybikes.com/account/trips
4. Scroll to the bottom of the page

# Project roadmap

1. Make filenames more descriptive
2. Write bash script for manual concatenation of files
3. Detect and handle case when there are no trips in a month
4. Do something useful / interesting with my own data (I want to put it on a map)
5. Consider where geocoding might happen
6. _see if there is any interest in the product or the data scraping extension, if there is interest..._
8. Think about releasing this on the Chrome store.
9. Think about adding some kind of server to store trips and make cool things for non-technical users. Users would have to agree to some kind of disclaimer that they are voluntarily sharing their bikeshare data with a third party. Don't do this unless there is actual user demand for bikeshare data product.

# Human factors

I am a freelancer looking to pick up more hours. If you would like to pay me to work on this because you want to see it happen, please let me know.
