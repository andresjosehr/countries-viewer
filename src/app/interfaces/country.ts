export interface Country {

    name: String,
    topLevelDomain: [ String ],
    alpha2Code: String,
    alpha3Code: String,
    callingCodes: [ String ],
    capital: String,
    altSpellings: [ String ],
    region: String,
    subregion: String,
    population: Number,
    latlng: [ Number ],
    demonym: String,
    area: Number,
    gini: Number,
    timezones: Array<String>,
    borders: any,
    nativeName: String,
    numericCode: String,
    currencies: [{
        code: String,
        name: String,
        symbol: String
      }],
    languages: Array <{
      iso639_1: String,
      iso639_2: String,
      name: String,
      nativeName: String
    }>,
    translations: {
      de: String,
      es: String,
      fr: String,
      ja: String,
      it: String,
      br: String,
      pt: String,
      nl: String,
      hr: String,
      fa: String
    },
    flag: String,
    regionalBlocs: [{
        acronym: String,
        name: String,
        otherAcronyms: [ String ],
        otherNames: [ String ]
      }],
    cioc: String
  }
