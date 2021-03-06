<img src="https://bit.ly/2VnXWr2" width="60">

##### *Data Analytics Bootcamp* â Project 1

<br>

# Where in Australia to build a 'shark-free' family resort?

![Lake Tyers Beach](https://github.com/fealt/shark-attacks-australia/blob/main/images/lake_tyers_beach.jpg)

###### <i>image [source](https://unsplash.com/s/photos/lake-tyers-beach-vic%2C-australia?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText "Where in Australia to build a shark-free family resort?")</i>

<br>

<br>

> â° <i>Time's short?</i>
>
> ð [Click here to check my presentation](https://fealt.github.io/shark-attacks-australia/), hosted by GitHub Pages â¡

<br>

Shark Attacks â <i>data cleaning and manipulation with Pandas</i> â is my first project at Ironhack's Data Analytics Bootcamp (2021). The given dataset was extremly <i>messy and dirty</i>, so the main <i>pythonic</i> challange here was to have it clean and usable. But before starting to transform <i>beast into beauty</i> I was also challanged to develop a story based on a <i>business question</i> to answer. So â <i>Where in Australia to build a 'shark-free' family resort?</i> â sounds familiar to my background in the construction industry and is also a huge coding job: lots to clean, search for supporting datasets and, of course, fun! ð¨ð»âð»

<br>

### Project main objectives
```

â«ï¸ Use storytelling with data to answer a 'business' question.

â«ï¸ Apply different cleaning and manipulation techniques to make a messy dataset usable.

```

### Client
```

â«ï¸ Shark-free Hotels & Resorts is a 'worldwide to be' hotel chain, since it's missing a branch
  in Australia.

â«ï¸ To date, all of its other houses are built in "safe" beaches â with no sight of sharks.

â«ï¸ Main clientÃ¨le â all kinds of families, with/without kids.

```

### Cleaning & Co.
```

â«ï¸ Cleaned columns include:
  `year`
  `type (provoked/unprovoked)`
  `fatal (y/n)`
  `area`
  `location`
  `sex`
  `age`

â«ï¸ Developed a cleaning strategy for column `location` to get coordinates, applying `GeoPy`.

â«ï¸ To support the analysis, 5 extra datasets were used:
  1. Hotels in Australia, key findings:
    - Top 3 States by number of hotels are New South Wales, Queensland and Victoria.
    - Accomodation rate mean for Australia around 65% and almost all states follow the mean.
  2. Short-term visitors in Australia, key findings:
    - Australia celebrates an incredible growth in short-term visitors over the last 40 years.
    - Over 200% rise from 1990 to 1997 and almost 170% rise from 2010 to 2018.
    - Turist growth in relation to total shark attacks, refer to the Jupyter notebook file for
      more details.
  3. Australia cities database.
  4. Top 20 beaches in Australia (self-made dataset).  
  5. List of beaches in Australia (self-made dataset).

```

<br>

### Analysis, Worldwide

â«ï¸ Based on 230 years of available data, Australia is the second country in the world with most shark attacks (1338); behind USA (2229) and before Mexico (579).

â«ï¸ Top 3 countries come up with 65% of all incidents.

â«ï¸ 22% end up deadly.

â«ï¸ Almost 90% of attacked individuals are male.

<br>

<img src="https://github.com/fealt/shark-attacks-australia/blob/main/images/au_attacks_all_2.jpg" width="700">

###### <i>image [source](https://earth.google.com/)</i>

### Analysis, Australia

â«ï¸ In 85% of all fatalities, it was possible to locate the coordinates.

â«ï¸ Number of tourists exploded in the last 40 years: over 200% rise from 1990 to 1997 and almost 170% from 2010 to 2018.

â«ï¸ So did shark attacks, top 10 years included: 2016, 2015, 2014, 2009, 2012, 2017 and 2018.

â«ï¸ For a "small" State, Victoria has almost 20% of total Hotels in Australia. And the best room occupancy rate among them all, over 70%.

â«ï¸ Among the top 3 States, only in Victoria there haven't been any deadly shark attacks in the past 40 years.

â«ï¸ Lake Tyers Beach is a top 20 beach in Australia!

<br>

<img src="https://github.com/fealt/shark-attacks-australia/blob/main/images/au_lake_tyers_beach_dist_2.jpg" width="700">

###### <i>image [source](https://earth.google.com/)</i>

### Conclusion
```

â«ï¸ Despite a full coast with shark attacks, there is a `shark free` area in Victoria State.

â«ï¸ It's named `Lake Tyers Beach` and is also a top 20 beach in Australia! Ranked #16.

â«ï¸ Therefore a `safe` place for `Shark-free Hotels & Resorts` to start hosting in Australia.

```

<br>

<br>

### Deliverable files in this repository

* Cleaned final dataset (./assets): `shark_au_df.csv`
* Data analysis in a Jupyter notebook: `project_01_shark_attack.ipynb`
* Formal presentation â Storytelling with data â, done in `HTML5` `CSS3` `JavaScript` : [check it here](https://fealt.github.io/shark-attacks-australia/)

<br>

### Data

1. Given dataset

   + Global Shark Attacks: [@kaggle.com](https://www.kaggle.com/teajay/global-shark-attacks/version/1).

2. Extra datasets used

   - Number of movements <i>Short-term Visitors arriving</i> in Australia: [Australian Bureau of Statistics](https://www.abs.gov.au/statistics/industry/tourism-and-transport/overseas-arrivals-and-departures-australia/latest-release#data-download).
   - Information on the supply of, and demand for, tourist accommodation facilities in Australia: [Australian Bureau of Statistics](https://www.abs.gov.au/statistics/industry/tourism-and-transport/tourist-accommodation-australia/latest-release).
   - Australia cities database: [@kaggle.com](https://www.kaggle.com/maryamalizadeh/worldcities-australia).

3. Created datasets based on

   - List of beaches in Australia: [Wikipedia](https://en.wikipedia.org/wiki/List_of_beaches_in_Australia).
   - Brad Farmer's 101 Best Australian Beaches: [Traveller](https://www.traveller.com.au/brad-farmers-101-best-australian-beaches-australias-top-101-beaches-to-visit-in-2020-revealed-h1kbwi).

<br>

### Tech

   - Python @ Jupyter Notebook
   - Pandas / Numpy
   - Geopy / Nominatium (Python client for geocoding)
   - Viz: seabron / plotly

<br>
<br>
