 export interface Country{
      name:{
         common: String,
         official: String,
         nativeName:{
            grn:{
               official: String,
               common: String
            },
            spa:{
               official: String,
               common: String
            }
         }
      },
      tld:[
        String
      ],
      cca2: String,
      ccn3: String,
      cca3: String,
      cioc: String,
      independent: boolean,
      status: String,
      unMember: boolean,
      currencies:{
         [key: string]:{
            name: String,
            symbol: String,
         }
      },
      idd:{
         root: String,
         suffixes: Array<string>
      },
      capital:Array<string>
      altSpellings:Array<string>
      region: String,
      subregion: String,
      languages:{
         [key: string]: String,
      },
      translations:{
         ara:{
            official: String,
            common: String,
         },
         ces:{
            official: String,
            common: String
         },
         cym:{
            official: String,
            common: String
         },
         deu:{
            official: String,
            common: String
         },
         est:{
            official: String,
            common: String
         },
         fin:{
            official: String,
            common: String
         },
         fra:{
            official: String,
            common: String
         },
         hrv:{
            official: String,
            common: String
         },
         hun:{
            official: String,
            common: String
         },
         ita:{
            official: String,
            common: String
         },
         jpn:{
            official: String,
            common: String
         },
         kor:{
            official: String,
            common: String
         },
         nld:{
            official: String,
            common: String
         },
         per:{
            official: String,
            common: String
         },
         pol:{
            official: String,
            common: String
         },
         por:{
            official: String,
            common: String
         },
         rus:{
            official: String,
            common: String
         },
         slk:{
            official: String,
            common: String
         },
         spa:{
            official: String,
            common: String
         },
         swe:{
            official: String,
            common: String
         },
         urd:{
            official: String,
            common: String
         },
         zho:{
            official: String,
            common: String
         }
      },
      latlng:Array<number>,
      landlocked:true,
      borders:Array<string>,
      area: number,
      demonyms:{
         eng:{
            f: String,
            m: String
         },
         fra:{
            f: String,
            m: String
         }
      },
      flag: String,
      maps:{
         googleMaps: String,
         openStreetMaps: String
      },
      population: number,
      gini:{
         "2019": number
      },
      fifa: String,
      car:{
         signs:Array<string>,
         side: String,
      },
      timezones:Array<string>,
      continents:Array<string>,
      flags:{
         png: String,
         svg: String
      },
      coatOfArms:{
         png: String,
         svg: String
      },
      startOfWeek: String,
      capitalInfo:{
         latlng:Array<number>
      },
      postalCode:{
         format: String,
         regex: String
      }
  }
