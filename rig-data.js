const rig_data = {

  bg39: {
    dropname: 'Bauer BG39',
    model: 'Bauer_BG39.glb',
    image: '',
    data_sheet: 'img/img-rig/BG 39 Stat sheet 1.JPG',
    technologies: {
      csm: {
        radio_label: 'Cutter Soil Mixing',
        data: [
          ['<a href="https://www.google.com" target="_blank">Technology</a>', 'Cutter Soil Mixing'],
          ['Mixing Head', "BCM 5"],
          ['Panel Width', '39"'],
          ['Panel length', "7.87'"],
          ['Max panel depth', "140'"],
          ['Counterweight basic version', "58,800lbs"],
          ['',""],
          ['Technology', 'Cutter Soil Mixing'],
          ['Mixing Head', "BCM 10"],
          ['Panel Width', '47"'],
          ['Panel length', "9.18'"],
          ['Max panel depth', "140'"],
          ['Counterweight basic version', "58,800lbs"],
        ],
      },
      fdp: {
        radio_label: 'FDP',
        data: [
          ['Technology', 'FDP'],
          ['Basic version', "No Extension"],
          ['Diameter max basic version', '16"-27"'],
          ['Kelly extension basic version', "26'"],
          ['Depths max basic version', "0-87'"],
          ['Counterweight basic version', "44,200lbs"],
          ['',""],
          ['Diameter max upgraded version', '16"-27"'],
          ['Depths upgraded version', "0-131'"],
          ['Kelly extension upgraded version', "54'"],
          ['Mast extension upgraded version', "16ft"],
          ['Counterweight upgraded version', "58,800lbs'"],
        ],
      },
      cfa: {
        radio_label: 'CFA',
        data: [
          ['Technology', 'CFA'],
          ['Basic version', "No Extension"],
          ['Diameter max basic version', '16"-47"'],
          ['Depths max basic version(w/Auger cleaner)', "0-59'"],
          ['Counterweight basic version', "44,000lbs"],
          ['',""],
          ['Diameter max upgraded version', '16"-47"'],
          ['Depths upgraded version(w/Auger cleaner)', "0-118'"],
          ['Kelly extension upgraded version', "26'"],
          ['Mast extension upgraded version', "16ft + 16ft"],
          ['Counterweight upgraded version', "68,600lbs'"],
        ],
      },
      kellydrilling: {
        radio_label: 'Kelly Drilling',
        data: [
          ['Technology', 'Kelly Drilling'],
          ['KDK 390 S mast extension', "No Extension"],
          ['KDK 390 S Kelly guide', "No GUIDE"],
          ['Diameter max KDK 390 S version', '78"'],
          ['Diameter max KDK 390 S UNCASED version', '90"'],
          ['Depths max basic version(3-Part kelly Bar)', "117-170'"],
          ['Depths max basic version(4-Part kelly Bar)', "182-234'"],
          ['Depths max basic version(5-Part kelly Bar)', "262-296'"],
          ['Counterweight basic version', "39,400lbs"],
          ['Operating weight basic version', "292,000lbs"],
          ['',""],
          ['KDK 460 S mast extension', "16.4'"],
          ['KDK 460 S Kelly guide', "Yes"],
          ['Diameter max KDK 460 S CASED version(5.57ft axis)', '110"'],
          ['Diameter max KDK 460 S CASED version(6.56ft axis)', '132"'],
          ['Diameter max KDK 460 S UNCASED version(5.57ft axis)', '122"'],
          ['Diameter max KDK 460 S UNCASED version(6.56ft axis)', '145"'],
          ['Depths max upgraded version(3-Part kelly Bar)', "117-170'"],
          ['Depths max upgraded version(4-Part kelly Bar)', "182-306'"],
          ['Depths max upgraded version(5-Part kelly Bar)', "262-312'"],
          ['Counterweight upgraded version', "58,800lbs"],
          ['Operating weight basic version', "364,000lbs'"],
        ],
      },
    },
    trucking: [
      ['Trucking Details (Chicago Shop)', 'BG39'],
      ['Main Load Clearance (Height)', '12ft'],
      ['Main Load Clearance (width)', '12ft'],
      ['Main Load Clearance (Length)', '26ft'],
      ['Clearance(Kelly Bar BK 420) (Length)', '60.7 ft'],
      ['Main Load (Wt)', '154,000 LBS'],
      ['Main Load','12 Axle Trailer | Rig with Tracks (Low Boy) (154,000 lbs)|Rate:'],
      ['Permit Load','Step Deck/Flat bed | Lower Mast (50,000 lbs)|Truck type/Rate:'],
      ['Legal Load','Step Deck/Flat bed| KDK, Winch, Back Stay Cylinders  (42,000 lbs)|Truck type/Rate:'],
      ['Legal Load','Step Deck/Flat bed | 2 Counterweights, Derrick Head, Tool Box Misc. (28,000 lbs)|Truck Type/Rate:'],
      ['Legal Load','Step Deck/Flat bed | Kelly Bar,Upper Mast, (40,000 lbs)|Truck Type/Rate: '],
      ['Legal Load','Step Deck/Flat bed | 4 Counterweights (43,000 lbs)|Truck Type/Rate: '],
      ['5-6 Total Loads','Total Rate for both 5 or 6:'],
      ['',''],
      ['',''],
      ['Specific Tooling weights','BG-39'],
      ['Tracks:','32,000lbs/Each'],
      ['Winch and Cable:','15,620lbs'],
      ['KDK:','18,700lbs'],
      ['Upper Mast(No Derrick Head):','10,120lbs'],
      ['Derrick head:','4,620lbs'],
      ['Backstay Cylinders:','3,850lbs/Each'],
      ['Lower Mast:','49,060lbs'],
      ['Drill axis 1300 to 1500mm:','3,740lbs'],
      ['Counterweights:','10,780lbs/Each'],
      ['Catwalks and railings:','858lbs'],
      ['House and Carbody:','72,380lbs'],
      ['House and Carbody with tracks:','140,380lbs'],
    ],
    tooling: [
      ['Tooling Caissons', ''],
      ['Legal Load', 'Step deck']
    ],
    specs: [['Rig specifications', '<a href="https://kellercloud.sharepoint.com/:x:/r/sites/NACFC/ROSE/_layouts/15/Doc.aspx?sourcedoc=%7BE531C004-A22D-4A14-A377-3D1E21B37983%7D&file=Keller%20Equipment%20List%20(BG33H%20SN%235200%20-%20BG39V%20SN%233211).xlsx&action=default&mobileredirect=true" target="_blank">Spec</a>'],],
  },
  
  bg33: {
    dropname: 'Bauer BG33',
    model: 'Bauer_BG33.glb',
    image: '',
    data_sheet: '',
    technologies: {
      fdp: {
        radio_label: 'FDP',
        data: [
          ['Technology', 'Full Displacement Piles'],
          ['Max Basic FDP version Diameters', '24"'],
          [' Basic FDP version mast extension', 'NO'],
          [' FDP version Kelly extension', '0-67ft'],
          ['  FDP version Max Drilling depth', '122ft'],
          ['For upgrade specs refer to spec link below', ''],
         
        ],
      },
      cfa: {
        radio_label: 'CFA',
        data: [
          ['Technology', 'CFA'],
          ['Max Basic version Diameters', '34"'],
          [' Basic version undercarriage', 'UW 80'],
          [' Basic version mast extension', 'NO'],
          [' Basic version Kelly extension', 'NO'],
          [' Basic version Max Drilling with Auger Cleaner', '55'],
          ['Max Upgraded version Diameters', '47"'],
          [' Upgraded version undercarriage', 'UW 100'],
          [' Upgraded version mast extension', '6.5'],
          [' Upgraded version Kelly extension', '26'],
          [' Upgraded version Max Drilling with Auger Cleaner', '88'],
       
        ],
      },
      kellydrilling: {
        radio_label: 'Kelly Drilling',
        data: [
          ['Technology', 'Kelly Drilling'],
          ['KDK 300 S mast extension', "No Extension"],
          ['KDK 300 S Kelly guide', "No GUIDE"],
          ['Diameter max KDK 300 S version CASED', '62"'],
          ['Diameter max KDK 300 S UNCASED version', '74"'],
          ['Depths max BK300/419/3 version(3-Part kelly Bar)', "80-129'"],
          ['Depths max BK280/419/4 version(4-Part kelly Bar)', "106-224'"],
          ['Operating weight w/Counterweight basic version', "225,400lbs"],
          ['Operating weight basic version', "196,000lbs"],
          ['',""],
          ['KDK 340 S mast extension', "6.56'"],
          ['KDK 340 S Kelly guide', "Yes"],
          ['Diameter max KDK 340 S CASED version', '86"'],
          ['Diameter max KDK 340 S UNCASED version', '98"'],
          ['Depths max BK300/419/3 version(3-Part kelly Bar)', "80-129'"],
          ['Depths max BK280/419/4 version(4-Part kelly Bar)', "106-224'"],
          ['Operating weight w/Counterweight basic version', "297,000lbs"],
          ['Operating weight basic version', "248,000lbs"],
        ],
      },
    },
    trucking: [
      ['Trucking Details (Chicago Shop)', 'BG33'],
      ['Main Load Clearance (Height)', '12ft'],
      ['Main Load Clearance (width)', '11ft'],
      ['Main Load Clearance (Length)', '70ft'],
      ['Main Load (Wt)', '158,000 LBS'],
      ['Main Load','RGN Lowboy | machine with tracks (158,000 lbs)|Rate:'],
      ['Legal Load','Step Deck/Flat bed| 2 tracks, tool box (42,000 lbs)|Truck Type/Rate:'],
      ['Legal Load','Step Deck/Flat bed | 2 counter weights and Kelly Bar(38,000 lbs)|Truck Type/Rate:'],
      ['Legal Load','Step Deck/Flat bed | 2 counter weights and KDK (36,000 lbs)|Truck Type/Rate:'],
      ['Legal Load/if Tracks stay on ($)','Step Deck or Flat bed| tool box and KDK (13,000 lbs)|Truck Type/Rate:'],
      ['3-4 Total Loads(tracks on or off)','Total Rate for Both:']
    ],
    tooling: [
      ['Tooling Caissons', ''],
      ['Legal Load', 'additional tools']
    ],
    specs: [
      ['Rig specifications', '<a href="http://ecanet.com/uploads/files/Resources/BG_33_H_BT_85_PremiumLine_EN_905_791_2.pdf" target="_blank">Spec</a>'],
    ],
  },
  
  abism1216: {
    dropname: 'ABI SM1216',
    model: 'ABI_SM_12_16.glb',
    image: '',
    data_sheet: '',
    technologies: {
      fdp: {
        radio_label: 'FDP',
        data: [
          ['Technology', 'Full Displacement Piles'],
          ['Diameters', '16"-18"'],
          ['Depths', "0-70'"],
          ['Concrete Kelly', "105'"],
        ],
      },
      cfa: {
        radio_label: 'CFA',
        data: [
          ['Technology', 'CFA'],
          ['Diameters', '16"-46"'],
          ['Depths', "0-70'"],
          ['Concrete Kelly', "105'"],
        ],
      },
      caissons: {
        radio_label: 'CAISSONS',
        data: [
          ['Technology', 'Kelly Drilling (Caissons)'],
          ['Diameters', '30"-12ft'],
          ['Depths', "0-70'"],
          ['Concrete Kelly', '0-230ft (Pending Kelly Bar)'],
        ],
      },
    },
    trucking: [
      ['Trucking Details (Chicago Shop)', 'ABI SM12/16'],
      ['Main Load Clearance (Height)', '11.5ft'],
      ['Main Load Clearance (width)', '11.15ft'],
      ['Main Load Clearance (Length)', '59.3ft'],
      ['Main Load (Wt)', '137,000 LBS'],
      ['Main Load','Low Boy 10 Axle | machine with tracks (137,000 lbs)|Rate:'],
      ['Legal Load','Low Boy | 1 counter weight and Hammer(40,000 lbs)|Rate: '],
      ['2 Total Loads(tracks on or off)', 'Total Rate for both:'],
    ],
    tooling: [
      ['Tooling Caissons', ''],
      ['Legal Load', '$125/per hour'],
    ],
    specs: [
      ['Rig specifications', '<a href="https://www.hammersteel.com/cmss_files/attachmentlibrary/ABIMobilram/ABI_SM_1216B_deen_0515.pdf" target="_blank">Spec</a>'],
    ],
  },

  imtaf250E: {
    dropname: 'IMT AF250E',
    model: 'IMT_AF_250.glb',
    image: '',
    data_sheet: '',
    technologies: {
      fdp: {
        radio_label: 'FDP',
        data: [
          ['Technology', 'Full Displacement Piles'],
          ['Diameters', '16"-18"'],
          ['Depths', "0-70'"],
          ['Concrete Kelly', "105'"],
        ],
      },
      cfa: {
        radio_label: 'CFA',
        data: [
          ['Technology', 'CFA'],
          ['Diameters', '16"-46"'],
          ['Depths', "0-70'"],
          ['Concrete Kelly', "105'"],
        ],
      },
      caissons: {
        radio_label: 'CAISSONS',
        data: [
          ['Technology', 'Kelly Drilling (Caissons)'],
          ['Diameters', '30"-12ft'],
          ['Depths', "0-70'"],
          ['Concrete Kelly', '0-230ft (Pending Kelly Bar)'],
        ],
      },
    },
    trucking: [
      ['Trucking Details (Chicago Shop)', 'IMT AF250E'],
      ['Main Load Clearance (Height)', '11ft'],
      ['Main Load Clearance (width)', '11ft'],
      ['Main Load Clearance (Length)', '51.78ft'],
      ['Main Load (Wt)', '118,000 LBS'],
      ['Main Load ', '(Low Boy) 10 Axle Trailer | machine with tracks  (118,000 lbs)|Rate:'],
      ['Legal Load ', '(Step Deck/Flat bed) | 2 counter weights and Kelly Bar(38,000 lbs)|Rate: '],
      ['2 Total Loads(tracks on or off)', '']
    ],
    tooling: [
      ['Tooling Caissons', ''],
      ['Legal Load', '$125/per hour']
    ],
    specs: [
      ['Rig specifications', '<a href="https://cranemarket.com/specification-23636" target="_blank">Spec</a>'],
    ],
  },

  watson1100: {
    dropname: 'Watson 1100',
    model: '',
    image: 'watson_1100.png',
    data_sheet: '',
    technologies: {
      fdp: {
        radio_label: 'FDP',
        data: [
          ['Technology', 'Full Displacement Piles'],
          ['Diameters', '16"-18"'],
          ['Depths', "0-70'"],
          ['Concrete Kelly', "105'"],
        ],
      },
      cfa: {
        radio_label: 'CFA',
        data: [
          ['Technology', 'CFA'],
          ['Diameters', '16"-46"'],
          ['Depths', "0-70'"],
          ['Concrete Kelly', "105'"],
        ],
      },
      caissons: {
        radio_label: 'CAISSONS',
        data: [
          ['Technology', 'Kelly Drilling (Caissons)'],
          ['Diameters', '30"-12ft'],
          ['Depths', "0-70'"],
          ['Concrete Kelly', '0-230ft (Pending Kelly Bar)'],
        ],
      },
    },
    trucking: [
      ['Trucking Details (Chicago Shop)', 'Watson 1100'],
      ['Main Load (Wt)', '33,000 LBS'],
      ['Permits (Avg)', '$500'],
      ['Legal Load ($)', ' (Step Deck or Flat bed)| Full machine fits in one load|Truck Type/Rate:'],
      ['1 Total Load(tracks on or off)', '']
    ],
    tooling: [
      ['Tooling Caissons', ''],
      ['Legal Load', '$125/per hour']
    ],
    specs: [
      ['Rig specifications', '<a href="https://s3.amazonaws.com/media.cloversites.com/b0/b08c4662-06ae-4d75-89b9-d4b32542eccc/documents/1100_REV_0-2021_DIGITAL_COPY.pdf" target="_blank">Spec</a>'],
    ],
  },

  watson2500: {
    dropname: 'Watson 2500',
    model: '',
    image: 'watson 2500.jpg',
    data_sheet: '',
    technologies: {
      fdp: {
        radio_label: 'FDP',
        data: [
          ['Technology', 'Full Displacement Piles'],
          ['Diameters', '16"-18"'],
          ['Depths', "0-70'"],
          ['Concrete Kelly', "105'"],
        ],
      },
      cfa: {
        radio_label: 'CFA',
        data: [
          ['Technology', 'CFA'],
          ['Diameters', '16"-46"'],
          ['Depths', "0-70'"],
          ['Concrete Kelly', "105'"],
        ],
      },
      caissons: {
        radio_label: 'CAISSONS',
        data: [
          ['Technology', 'Kelly Drilling (Caissons)'],
          ['Diameters', '30"-12ft'],
          ['Depths', "0-70'"],
          ['Concrete Kelly', '0-230ft (Pending Kelly Bar)'],
        ],
      },
    },
    trucking: [
      ['Trucking Details (Chicago Shop)', 'Watson 2500'],
      ['Main Load (Wt)', '64,000 LBS'],
      ['Permits (Avg)', '$500'],
      ['Legal Load ($)', 'Step Deck/Flat bed | Full machine fits in one load(Step Deck)|Truck Type/Rate:'],
      ['1 Total Load(tracks on or off)', '']
    ],
    tooling: [
      ['Tooling Caissons', ''],
      ['Legal Load', '$125/per hour']
    ],
      specs: [
      ['Rig specifications', '<a href="https://watsonusa.com/rigs/2500" target="_blank">Spec</a>'],
    ],
  },

  comacchiomc4: {
    dropname: 'Comacchio MC4',
    model: '',
    image:'comacchio_MC4.png',
    data_sheet: 'img/img-rig/MC4 stat sheet.JPG',
    technologies: {
      fdp: {
        radio_label: 'FDP',
        data: [
          ['Technology', 'Full Displacement Piles'],
          ['Diameters', '16"-18"'],
          ['Depths', "0-70'"],
          ['Concrete Kelly', "105'"],
        ],
      },
      cfa: {
        radio_label: 'CFA',
        data: [
          ['Technology', 'CFA'],
          ['Diameters', '16"-46"'],
          ['Depths', "0-70'"],
          ['Concrete Kelly', "105'"],
        ],
      },
      caissons: {
        radio_label: 'CAISSONS',
        data: [
          ['Technology', 'Kelly Drilling (Caissons)'],
          ['Diameters', '30"-12ft'],
          ['Depths', "0-70'"],
          ['Concrete Kelly', '0-230ft (Pending Kelly Bar)'],
        ],
      },
    },
    trucking: [
      ['Trucking Details (Chicago Shop)', 'Commacchio MC4'],
      ['Main Load (Wt)', '17,600 LBS'],
      ['Legal Load ($)', 'Step Deck/Flat Bed | Full machine fits in one load(Step Deck)|Truck Type/Rate:'],
      ['1 Total Load(tracks on or off)', '']
    ],
    tooling: [
      ['Tooling Caissons', ''],
      ['Legal Load', '$125/per hour']
    ],
    specs: [
      ['Rig specifications', '<a href="https://www.comacchio.com/en/products/foundations-and-ground-improvement/microdrilling/limited-access-rigs/mc-4-d-1094413803.html" target="_blank">Spec</a>'],
    ],
  },

  comacchiomc8: {
    dropname: 'Comacchio MC8',
    model: '',
    image:'MC8.JPG',
    data_sheet: 'img/img-rig/MC8 stat sheet.png',
    technologies: {
      fdp: {
        radio_label: 'FDP',
        data: [
          ['Technology', 'Full Displacement Piles'],
          ['Diameters', '16"-18"'],
          ['Depths', "0-70'"],
          ['Concrete Kelly', "105'"],
        ],
      },
      cfa: {
        radio_label: 'CFA',
        data: [
          ['Technology', 'CFA'],
          ['Diameters', '16"-46"'],
          ['Depths', "0-70'"],
          ['Concrete Kelly', "105'"],
        ],
      },
      caissons: {
        radio_label: 'CAISSONS',
        data: [
          ['Technology', 'Kelly Drilling (Caissons)'],
          ['Diameters', '30"-12ft'],
          ['Depths', "0-70'"],
          ['Concrete Kelly', '0-230ft (Pending Kelly Bar)'],
        ],
      },
    },
    trucking: [
      ['Trucking to City (Chicago)', 'Comacchio MC8'],
      ['Main Load (Wt)', '21,000 LBS'],
      ['Permits (Avg)', '$500'],
      ['Legal Load ($)', 'Step Deck/Flat| Full machine fits in one load(Step Deck)|Truck Type/Rate:'],
      ['1 Total Load(tracks on or off)', '']
    ],
    tooling: [
      ['Tooling Caissons', ''],
      ['Legal Load', '$125/per hour']
    ],
    specs: [
      ['Rig specifications', '<a href="https://www.comacchio.com/en/products/foundations-and-ground-improvement/microdrilling/limited-access-rigs/mc-8-d-1616500846.html" target="_blank">Spec</a>'],
    ],
  },

  putztk70: {
    dropname: 'Putzmeister TK70',
    model: '',
    image:'TK70-pump.JPG',
    data_sheet: '',
    technologies: {
      fdp: {
        radio_label: 'FDP',
        data: [
          ['Technology', ''],
          ['Diameters', ''],
          ['Depths', ""],
          ['Concrete Kelly', ""],
        ],
      },
      cfa: {
        radio_label: 'CFA',
        data: [
          ['Technology', 'CFA'],
          ['Diameters', ''],
          ['Depths', ""],
          ['Concrete Kelly', ""],
        ],
      },
      caissons: {
        radio_label: 'CAISSONS',
        data: [
          ['Technology', 'Kelly Drilling (Caissons)'],
          ['Diameters', ''],
          ['Depths', ""],
          ['Concrete Kelly', ''],
        ],
      },
    },
    trucking: [
      ['Trucking to City (Chicago)', 'TK70'],
      ['Permits (Avg)', '$500'],
      ['Legal Load ($)', '$125/per hour | Full machine fits in one load(Step Deck)'],
      ['1 Total Load(tracks on or off)', '']
    ],
    tooling: [
      ['Stroke Volume', ''],
      ['Duluth Twin Ports', '0.45 cubic ft per stroke']
    ],
    specs: [
      ['Rig specifications', '<a href="https://www.heavyequipmentguide.ca/product/4075/tk-70" target="_blank">Spec</a>'],
    ],
  },

  Liebherr110dk: {
    dropname: 'Liebherr THS 110D-K',
    model: '',
    image: 'Liebherr 110D-K.JPG',
    data_sheet: '',
    technologies: {
      fdp: {
        radio_label: 'FDP',
        data: [
          ['Technology', 'Full Displacement Piles'],
          ['Diameters', '16"-18"'],
          ['Depths', "0-70'"],
          ['Concrete Kelly', "105'"],
        ],
      },
      cfa: {
        radio_label: 'CFA',
        data: [
          ['Technology', 'CFA'],
          ['Diameters', '16"-46"'],
          ['Depths', "0-70'"],
          ['Concrete Kelly', "105'"],
        ],
      },
      caissons: {
        radio_label: 'CAISSONS',
        data: [
          ['Technology', 'Kelly Drilling (Caissons)'],
          ['Diameters', '30"-12ft'],
          ['Depths', "0-70'"],
          ['Concrete Kelly', '0-230ft (Pending Kelly Bar)'],
        ],
      },
    },
    trucking: [
      ['Trucking to City (Chicago)', 'Liebherr THS 110D-K'],
      ['Permits (Avg)', '$500'],
      ['Legal Load ($)', '$125/per hour | Full machine fits in one load(Step Deck)'],
      ['1 Total Load(tracks on or off)', '']
    ],
    tooling: [
      ['Stroke Volume', ''],
      ['Stroke Volume Ridge Terminal', '1.35 cubic ft per stroke'],
      ['Stroke Volume Twin Ports', '1.23 cubic ft per stroke']
    ],
    specs: [
      ['Rig specifications', '<a href="https://kellercloud.sharepoint.com/sites/NACFC/ROSE/Midwest%20Documents/Forms/AllItems.aspx?viewpath=%2Fsites%2FNACFC%2FROSE%2FMidwest%20Documents%2FForms%2FAllItems%2Easpx&id=%2Fsites%2FNACFC%2FROSE%2FMidwest%20Documents%2F01%20%2D%20Operations%2F02%20%2D%20Shop%2F08%20%2D%20Inventory%2FTHS110D%2DK%2D%5F%5B162923018%5D%5F230315%5F024011%2Epdf&viewid=8bde818c%2Dc701%2D48d3%2D96cb%2D5027127502ed&parent=%2Fsites%2FNACFC%2FROSE%2FMidwest%20Documents%2F01%20%2D%20Operations%2F02%20%2D%20Shop%2F08%20%2D%20Inventory" target="_blank">Spec</a>'],
    ],
  },

  CZM160: {
    dropname: 'CZM EK160 LS',
    model: '',
    image: 'CZM 160.JPG',
    data_sheet: 'img/img-rig/CZM 160 stats.JPG',
    technologies: {
      fdp: {
        radio_label: 'FDP',
        data: [
          ['Technology', 'Full Displacement Piles'],
          ['Diameters', '16"-18"'],
          ['Depths', "0-70'"],
          ['Concrete Kelly', "105'"],
        ],
      },
      cfa: {
        radio_label: 'CFA',
        data: [
          ['Technology', 'CFA'],
          ['Diameters', '16"-46"'],
          ['Depths', "0-70'"],
          ['Concrete Kelly', "105'"],
        ],
      },
      caissons: {
        radio_label: 'CAISSONS',
        data: [
          ['Technology', 'Kelly Drilling (Caissons)'],
          ['Diameters', '30"-12ft'],
          ['Depths', "0-70'"],
          ['Concrete Kelly', '0-230ft (Pending Kelly Bar)'],
        ],
      },
    },
    trucking: [
      ['Trucking to City (Chicago)', 'CZM EK160 LS'],
      ['Main Load (Wt)', '105,000 LBS'],
      ['Permits (Avg)', '$500'],
      ['Legal Load ($)', '$125/per hour | Full machine fits in one load(Step Deck)'],
      ['1 Total Load(tracks on or off)', '']
    ],
    tooling: [
      ['Stroke Volume', ''],
      ['Stroke Volume Ridge Terminal', 'n/a '],
      ['Stroke Volume Twin Ports', 'n/a ']
    ],
    specs: [
      ['Rig specifications', '<a href="https://czm-us.com/ek160/#:~:text=The%20EK160%20is%20a%20cylinder,set%20up%2C%20completely%20self%20erecting." target="_blank">Spec</a>'],
    ],
  },

  invtchicago: {
    dropname: 'Chicago Inventory',
    model: '',
    image: '',
    data_sheet: 'img/img-rig/SHOP.PNG',
    technologies: {
      shp: {
        radio_label: 'SHOP INFO',
        data: [
          ['Shop Address', '17805 Volbrecht Rd, Lansing, IL 60438'],
          ['Mike Whitaker', 'michael.whittaker@keller-na.com'],
          ['Jim Minyard', "jrminyard@keller-na.com"],
        ],
      },
      cfa: {
        radio_label: 'CFA',
        data: [
          ['Technology', 'CFA'],
          ['Diameters', '16"-46"'],
          ['Depths', "0-70'"],
          ['Concrete Kelly', "105'"],
        ],
      },
      caissons: {
        radio_label: 'CAISSONS',
        data: [
          ['Technology', 'Kelly Drilling (Caissons)'],
          ['Diameters', '30"-12ft'],
          ['Depths', "0-70'"],
          ['Concrete Kelly', '0-230ft (Pending Kelly Bar)'],
        ],
      },
    },
    trucking: [
      ['PowerFleet User', 'KellerChicago'],
      ['PowerFleet password', 'Keller2023'],
      ['Geotab User', 'arojas@keller-na.com'],
      ['Geotab Password', 'Lansing1'],
    ],
    tooling: [
     
    ],
    specs: [
      ['Inventory list', '<a href="https://kellercloud.sharepoint.com/:x:/r/sites/NACFC/ROSE/_layouts/15/Doc.aspx?sourcedoc=%7BD4EFE068-6A11-4EAE-B7CB-716CC9D22395%7D&file=Inventory%20List%20Chicago%202023.xlsx&action=default&mobileredirect=true&cid=91477ffc-e4a4-452f-b0ca-dffa5b569fe2" target="_blank">Spec</a>'],
      ['Geo Tab truck GPS', '<a href="https://www.geotab.com/mygeotab-login/" target="_blank">Spec</a>'],
      ['Testing Equipment', '<a href="https://kellercloud.sharepoint.com/sites/NACFC/ROSE/Midwest%20Documents/Forms/AllItems.aspx?csf=1&web=1&e=j9aVQU&CT=1679425253074&OR=OWA%2DNT&CID=ad364885%2D0f04%2D35a0%2D7fd4%2D0baca1109bf0&RootFolder=%2Fsites%2FNACFC%2FROSE%2FMidwest%20Documents%2F01%20%2D%20Operations%2F12%20%2D%20Ops%20Technology%2F02%20%2D%20Testing%20Equip%2FJACK%20CALIBRATIONS&FolderCTID=0x0120005CA922305419104F980C1D040383E0A7" target="_blank">Spec</a>'],
      ['Insite', '<a href="https://insite.keller.com/app/select/app-section" target="_blank">Spec</a>'],
    ],
  },

  ldsheet: {
    dropname: 'Load List',
    model: '',
    image: '',
    data_sheet: 'img/img-rig/SHOP.PNG',
    technologies: {
      shp: {
        radio_label: 'SHOP INFO',
        data: [
          ['Shop Address', '17805 Volbrecht Rd, Lansing, IL 60438'],
          ['Mike Whitaker', 'michael.whittaker@keller-na.com'],
          ['Jim Minyard', "jrminyard@keller-na.com"],
        ],
      },
      cfa: {
        radio_label: 'CFA',
        data: [
          ['Technology', 'CFA'],
          ['Diameters', '16"-46"'],
          ['Depths', "0-70'"],
          ['Concrete Kelly', "105'"],
        ],
      },
      caissons: {
        radio_label: 'CAISSONS',
        data: [
          ['Technology', 'Kelly Drilling (Caissons)'],
          ['Diameters', '30"-12ft'],
          ['Depths', "0-70'"],
          ['Concrete Kelly', '0-230ft (Pending Kelly Bar)'],
        ],
      },
    },
    trucking: [
      ['Shop Address', '17805 Volbrecht Rd, Lansing, IL 60438'],
          ['Mike Whitaker', 'michael.whittaker@keller-na.com'],
          ['Jim Minyard', "jrminyard@keller-na.com"],
      ['Small Diameter.Drilling Load list', 'KellerChicago'],
      ['1 Safety box'],
      ['1', 'Generator'],
      ['200ft', '3/4 inch airhose with Chicago Fittings-50ft section 300 psi'],
      ['24', 'Whip Checks(1 and 2 inch)'],
      ['100ft', 'Garden Hose w/Nozzle(2)'],
      ['1', 'Drain Hole Cutter'],
      ['1', '8ft Fiberglass ladder'],
      ['4', '50ft HD extension cords'],
      ['1', 'Gang box small tools'],
      ['1', 'Torch chart'],
      ['1', 'Torch-Gauges-tips-flash back arrestors'],
      ['3', 'Angle Finder for rig'],
      ['2', '4 inch level-2 inch level'],
      ['1', '3-Gal concrete sprayer'],
      ['1', 'Grease guns'],
      ['1', 'Case of marking paint'],
      ['2', 'Gas cans'],
      ['1', 'Brooms/shovels/picks/digging bars'],
      ['1', '3inch-2inch pipe wrenches,crescent wrenches,small hand tools & sockets'],
      ['1', 'Case of tie wire'],
      ['4', 'Wire brushes'],
      ['1', 'Hammer Drill /assorted bits'],
      ['1', '1/2 inch wedge bolts'],
      ['1', 'Partner saw'],
      ['1', 'Cordless Milwaukee Bandsaw w/2 batteries and 6 spare blades'],
      ['1', 'weed burner w/propane tank'],
      ['1', 'Plumbers torch w/spare propane'],
      ['1', 'Welding Rod'],
      ['1', 'Hard facing rod'],
      ['1', 'Welder generator'],
      ['RIGGING'],
      ['4', 'G-Knuckle Strps for picking auger rod,casing etc'],
      ['6', '12 ft Endless Loop Slings (yellow)'],
      ['1', 'Forklift Jib'],
      ['4', 'Assorted Shackles, Chokers, straps, etc'],
      ['2', 'Assorted Camlock fittings 2-3 each'],
      [''],
      ['Misc, Tools & Supplies'],
      ['1', 'Generator'],
      ['200ft', '3/4 inch airhose with Chicago Fittings-50ft section 300 psi'],
      ['24', 'Whip Checks(1 and 2 inch)'],
      ['100ft', 'Garden Hose w/Nozzle(2)'],
      ['1', 'Drain Hole Cutter'],
      ['1', '8ft Fiberglass ladder'],
      ['4', '50ft HD extension cords'],
      ['1', 'Gang box small tools'],
      ['1', 'Torch chart'],
      ['1', 'Torch-Gauges-tips-flash back arrestors'],
      ['3', 'Angle Finder for rig'],
      ['2', '4 inch level-2 inch level'],
      ['1', '3-Gal concrete sprayer'],
      ['1', 'Grease guns'],
      ['1', 'Case of marking paint'],
      ['2', 'Gas cans'],
      ['1', 'Brooms/shovels/picks/digging bars'],
      ['1', '3inch-2inch pipe wrenches,crescent wrenches,small hand tools & sockets'],
      ['1', 'Case of tie wire'],
      ['4', 'Wire brushes'],
      ['1', 'Hammer Drill /assorted bits'],
      ['1', '1/2 inch wedge bolts'],
      ['1', 'Partner saw'],
      ['1', 'Cordless Milwaukee Bandsaw w/2 batteries and 6 spare blades'],
      ['1', 'weed burner w/propane tank'],
      ['1', 'Plumbers torch w/spare propane'],
      ['1', 'Welding Rod'],
      ['1', 'Hard facing rod'],
      ['1', 'Welder generator'],
    ],
    tooling: [
     
    ],
    specs: [
      ['Inventory list', '<a href="https://kellercloud.sharepoint.com/:x:/r/sites/NACFC/ROSE/_layouts/15/Doc.aspx?sourcedoc=%7BD4EFE068-6A11-4EAE-B7CB-716CC9D22395%7D&file=Inventory%20List%20Chicago%202023.xlsx&action=default&mobileredirect=true&cid=91477ffc-e4a4-452f-b0ca-dffa5b569fe2" target="_blank">Spec</a>'],
      ['Geo Tab truck GPS', '<a href="https://www.geotab.com/mygeotab-login/" target="_blank">Spec</a>'],
      ['Testing Equipment', '<a href="https://kellercloud.sharepoint.com/sites/NACFC/ROSE/Midwest%20Documents/Forms/AllItems.aspx?csf=1&web=1&e=j9aVQU&CT=1679425253074&OR=OWA%2DNT&CID=ad364885%2D0f04%2D35a0%2D7fd4%2D0baca1109bf0&RootFolder=%2Fsites%2FNACFC%2FROSE%2FMidwest%20Documents%2F01%20%2D%20Operations%2F12%20%2D%20Ops%20Technology%2F02%20%2D%20Testing%20Equip%2FJACK%20CALIBRATIONS&FolderCTID=0x0120005CA922305419104F980C1D040383E0A7" target="_blank">Spec</a>'],
      ['Insite', '<a href="https://insite.keller.com/app/select/app-section" target="_blank">Spec</a>'],
    ],
  },

  ldsheet2: {
    dropname: 'Load List2',
    model: '',
    image: '',
    data_sheet: 'img/img-rig/SHOP.PNG',
    technologies: {
      shp: {
        radio_label: 'SHOP INFO',
        data: [
          ['Shop Address', '17805 Volbrecht Rd, Lansing, IL 60438'],
          ['Mike Whitaker', 'michael.whittaker@keller-na.com'],
          ['Jim Minyard', "jrminyard@keller-na.com"],
        ],
      },
      cfa: {
        radio_label: 'CFA',
        data: [
          ['Technology', 'CFA'],
          ['Diameters', '16"-46"'],
          ['Depths', "0-70'"],
          ['Concrete Kelly', "105'"],
        ],
      },
      caissons: {
        radio_label: 'CAISSONS',
        data: [
          ['Technology', 'Kelly Drilling (Caissons)'],
          ['Diameters', '30"-12ft'],
          ['Depths', "0-70'"],
          ['Concrete Kelly', '0-230ft (Pending Kelly Bar)'],
        ],
      },
    },
    trucking: [
      ['Shop Address', '17805 Volbrecht Rd, Lansing, IL 60438'],
          ['Mike Whitaker', 'michael.whittaker@keller-na.com'],
          ['Jim Minyard', "jrminyard@keller-na.com"],
      ['Small Diameter.Drilling Load list', 'KellerChicago'],
      ['1 Safety box'],
      ['RIGGING'],
      ['4', 'G-Knuckle Strps for picking auger rod,casing etc'],
      ['6', '12 ft Endless Loop Slings (yellow)'],
      ['1', 'Forklift Jib'],
      ['4', 'Assorted Shackles, Chokers, straps, etc'],
      ['2', 'Assorted Camlock fittings 2-3 each 3 inch to 2 inch-2 to 1 inch-2-2 inch ball valves'],
      [''],
      ['Misc, Tools & Supplies'],
      ['1', 'Generator'],
      ['200ft', '3/4 inch airhose with Chicago Fittings-50ft section 300 psi'],
      ['24', 'Whip Checks(1 and 2 inch)'],
      ['100ft', 'Garden Hose w/Nozzle(2)'],
      ['1', 'Drain Hole Cutter'],
      ['1', '8ft Fiberglass ladder'],
      ['4', '50ft HD extension cords'],
      ['1', 'Gang box small tools'],
      ['1', 'Torch chart'],
      ['1', 'Torch-Gauges-tips-flash back arrestors'],
      ['3', 'Angle Finder for rig'],
      ['2', '4 inch level-2 inch level'],
      ['1', '3-Gal concrete sprayer'],
      ['1', 'Grease guns'],
      ['1', 'Case of marking paint'],
      ['2', 'Gas cans'],
      ['1', 'Brooms/shovels/picks/digging bars'],
      ['1', '3inch-2inch pipe wrenches,crescent wrenches,small hand tools & sockets'],
      ['1', 'Case of tie wire'],
      ['4', 'Wire brushes'],
      ['1', 'Hammer Drill /assorted bits'],
      ['1', '1/2 inch wedge bolts'],
      ['1', 'Partner saw'],
      ['1', 'Cordless Milwaukee Bandsaw w/2 batteries and 6 spare blades'],
      ['1', 'weed burner w/propane tank'],
      ['1', 'Plumbers torch w/spare propane'],
      ['1', 'Welding Rod'],
      ['1', 'Hard facing rod'],
      ['1', 'Welder generator'],
    ],
    tooling: [
     
    ],
    specs: [
      ['Inventory list', '<a href="https://kellercloud.sharepoint.com/:x:/r/sites/NACFC/ROSE/_layouts/15/Doc.aspx?sourcedoc=%7BD4EFE068-6A11-4EAE-B7CB-716CC9D22395%7D&file=Inventory%20List%20Chicago%202023.xlsx&action=default&mobileredirect=true&cid=91477ffc-e4a4-452f-b0ca-dffa5b569fe2" target="_blank">Spec</a>'],
      ['Geo Tab truck GPS', '<a href="https://www.geotab.com/mygeotab-login/" target="_blank">Spec</a>'],
      ['Testing Equipment', '<a href="https://kellercloud.sharepoint.com/sites/NACFC/ROSE/Midwest%20Documents/Forms/AllItems.aspx?csf=1&web=1&e=j9aVQU&CT=1679425253074&OR=OWA%2DNT&CID=ad364885%2D0f04%2D35a0%2D7fd4%2D0baca1109bf0&RootFolder=%2Fsites%2FNACFC%2FROSE%2FMidwest%20Documents%2F01%20%2D%20Operations%2F12%20%2D%20Ops%20Technology%2F02%20%2D%20Testing%20Equip%2FJACK%20CALIBRATIONS&FolderCTID=0x0120005CA922305419104F980C1D040383E0A7" target="_blank">Spec</a>'],
      ['Insite', '<a href="https://insite.keller.com/app/select/app-section" target="_blank">Spec</a>'],
    ],
  },

  
 
}






