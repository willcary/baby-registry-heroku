const sampleItems = [
  {
    item_id: '0',
    user_id: 0,
    item_name: 'crib',
    requested: 1,
    gifted: 0,
    new_used: 'new',
    description: 'preferably natural wood finish',
    suggested_example:
      'https://www.ikea.com/us/en/p/sniglar-crib-beech-50248541/',
    priority: false,
    give: '0',
    giver_name: '',
    img_url:
      'https://www.ikea.com/us/en/images/products/sniglar-crib-beech__0637930_pe698615_s5.jpg?f=s',
  },
  {
    item_id: '1',
    user_id: 0,
    item_name: 'bottles',
    requested: 1,
    gifted: 1,
    new_used: 'new',
    description: 'tomo bottles',
    suggested_example:
      'https://www.target.com/p/comotomo-baby-bottle-gift-set-green-10ct/-/A-77304304?ref=tgt_adv_XS000000&AFID=google_pla_df&fndsrc=tgtao&DFA=71700000012510679&CPNG=PLA_Baby%2BShopping%7CBaby_Ecomm_Baby&adgroup=SC_Baby_High%2BMargin&LID=700000001170770pgs&LNM=PRODUCT_GROUP&network=g&device=c&location=9009666&targetid=pla-923670360630&ds_rl=1242884&ds_rl=1246978&ds_rl=1248099&gclid=CjwKCAjwtcCVBhA0EiwAT1fY7zo69J9JPhxfz34a5hnnUSJXAdYJXLt5ETnXVMKolx6tQFX_RnGa1BoCDOYQAvD_BwE&gclsrc=aw.ds',
    priority: true,
    give: '0',
    giver_name: 'Toni and ___?',
    img_url:
      'https://target.scene7.com/is/image/Target/GUEST_9676a2fb-02eb-4904-a051-abe516db6995?wid=325&hei=325&qlt=80&fmt=pjpeg',
  },
  {
    item_id: '2',
    user_id: 0,
    item_name: 'Diaper bin',
    requested: 1,
    gifted: 0,
    new_used: 'used',
    description: 'Smell-proof please!',
    suggested_example:
      'https://www.amazon.com/Ubbi-Required-Awards-Winning-Registry-Must-Have/dp/B00821FLT4',
    priority: true,
    give: '0',
    giver_name: '',
    img_url: 'https://m.media-amazon.com/images/I/61k2a62BMVL._SY879_.jpg',
  },
  {
    item_id: '3',
    user_id: 0,
    item_name: 'Canoe',
    requested: 1,
    gifted: 0,
    new_used: 'used',
    description: "It's for the baby, believe us!",
    suggested_example:
      'https://www.rei.com/product/206859/esquif-prospecteur-17-canoe',
    priority: false,
    give: '0',
    giver_name: '',
    img_url:
      'https://www.rei.com/media/8d46cad0-8484-4fc1-9753-be7c6df2371a?size=784x588',
  },
  {
    item_id: '4',
    user_id: 0,
    item_name: 'toy bin',
    requested: 1,
    gifted: 1,
    new_used: 'either',
    description:
      'Not too picky, just having somewhere to store toys would be nice',
    suggested_example:
      'https://www.amazon.com/Tot-Tutors-Storage-Organizer-Collection/dp/B000067PTO/ref=asc_df_B000067PTO/?tag=hyprod-20&linkCode=df0&hvadid=167154314766&hvpos=&hvnetw=g&hvrand=1064775320122714188&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9009666&hvtargid=pla-272847316733&psc=1',
    priority: false,
    give: '0',
    giver_name: 'Annette and Andy (grandparents)',
    img_url: 'https://m.media-amazon.com/images/I/8113ySop8zL._AC_SX679_.jpg',
  },
  {
    item_id: '5',
    user_id: 0,
    item_name: 'car seat',
    requested: 1,
    gifted: 0,
    new_used: 'new',
    description:
      'a car seat with a built in carrier/baby seat would be appreaciated.',
    suggested_example: 'https://store.diono.com/radian-3rxt/',
    priority: true,
    give: '0',
    giver_name: '',
    img_url:
      'https://cdn11.bigcommerce.com/s-nnd2r2nrxo/images/stencil/500x659/products/250/3215/3RXT_Blue_Sky__99298.1654083199.png?c=1',
  },
  {
    item_id: '6',
    user_id: 0,
    item_name: 'bottle drying rack',
    requested: 1,
    gifted: 0,
    new_used: 'used',
    description:
      'One of those racks meant to hold a variety of shaped items, especially bottles.',
    suggested_example:
      'https://www.babylist.com/gp/boon-lawn-countertop-drying-rack/12134/3689?g_acctid=878-527-6823&g_adgroupid=135657547561&g_adid=573913014629&g_adtype=pla&g_campaign=Shopping-TopProducts&g_campaignid=15842794987&g_ifcreative=&g_ifproduct=product&g_keyword=&g_keywordid=pla-1589111166939&g_merchantid=230882505&g_network=g&g_partition=1589111166939&g_productchannel=online&g_productid=3689&utm_campaign=Shopping-TopProducts&utm_content=573913014629&utm_medium=paid-search&utm_source=g&utm_term=135657547561&gclid=CjwKCAjws8yUBhA1EiwAi_tpETAVoOmcTYJZLkmZZBdoaTJrqXkUDqNOiBrDw_rHZ7nsethse-Hc1RoCLvwQAvD_BwE',
    priority: true,
    give: '0',
    giver_name: '',
    img_url:
      'https://images.ctfassets.net/50gzycvace50/1c945957da3d92fbcc74fac669fe3a075e5318df52ef9bac9f10c6a0fe919551/8ac89c938d26da09676c0b6b4f8da9be/1c945957da3d92fbcc74fac669fe3a075e5318df52ef9bac9f10c6a0fe919551.png?fl=progressive&fm=jpg&bg=rgb:f9f9f9&w=620&h=620',
  },
  {
    item_id: '7',
    user_id: 0,
    item_name: 'stroller',
    requested: 1,
    gifted: 0,
    new_used: 'either',
    description: 'Bob joggin stroller is the way to go we hear!',
    suggested_example:
      'https://www.rei.com/product/178726/bob-gear-revolution-flex-30-jogging-stroller?CAWELAID=120217890010682735&CAGPSPN=pla&CAAGID=108532315348&CATCI=aud-1396942689595:pla-905319949390&cm_mmc=PLA_Google%7C21700000001700551_1787260001%7C92700053796154061%7CNB%7C71700000062146813&gclid=CjwKCAjw2rmWBhB4EiwAiJ0mtSYDbw5a1-_W7j8_thnoNSqqiqQfzO_O1O-ozZzgCKcylhpHaS0-choCWJ8QAvD_BwE&gclsrc=aw.ds',
    priority: false,
    give: '0',
    giver_name: '',
    img_url:
      'https://www.rei.com/media/075b9536-0c7a-4723-a857-6131768187a2?size=784x588',
  },
  {
    item_id: '8',
    user_id: 0,
    item_name: 'cloth diapers',
    requested: 1,
    gifted: 1,
    new_used: 'used',
    description: '12-pack preferably',
    suggested_example: 'https://www.alvababy.com/collections/soild-plain',
    priority: true,
    give: '0',
    giver_name: 'Harmony',
    img_url:
      'https://ueeshop.ly200-cdn.com/u_file/UPAS/UPAS904/2109/15/products/dd62ee74cb.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_640,w_640',
  },
]

export default sampleItems
