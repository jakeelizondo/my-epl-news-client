const TEAMS = [
  { teamname: 'Arsenal', teamcode: 'ARS' },
  { teamname: 'Aston Villa', teamcode: 'AVL' },
  { teamname: 'Brighton and Hove Albion', teamcode: 'BRI' },
  { teamname: 'Burnley', teamcode: 'BUR' },
  { teamname: 'Chelsea', teamcode: 'CHE' },
  { teamname: 'Crystal Palace', teamcode: 'CRY' },
  { teamname: 'Everton', teamcode: 'EVE' },
  { teamname: 'Fulham', teamcode: 'FUL' },
  { teamname: 'Leeds United', teamcode: 'LEE' },
  { teamname: 'Leicester City', teamcode: 'LEI' },
  { teamname: 'Liverpool', teamcode: 'LIV' },
  { teamname: 'Manchester City', teamcode: 'MCI' },
  { teamname: 'Manchester United', teamcode: 'MUN' },
  { teamname: 'Newcastle United', teamcode: 'NEW' },
  { teamname: 'Southampton', teamcode: 'SOU' },
  { teamname: 'Sheffield United', teamcode: 'SHU' },
  { teamname: 'Tottenham Hotspur', teamcode: 'TOT' },
  { teamname: 'West Bromwich Albion', teamcode: 'WBA' },
  { teamname: 'West Ham United', teamcode: 'WHU' },
  { teamname: 'Wolverhampton Wanderers', teamcode: 'WOL' },
];

const TEAMKEY = {
  ARS: {
    teamname: 'Arsenal',
    teamcode: 'ARS',
    logoUrl:
      'https://res.cloudinary.com/dyz6qaw5e/image/upload/v1615218544/my_epl_news/team_logos/arsenal-logo_jsn7h3.png',
    bgUrl:
      'https://res.cloudinary.com/dyz6qaw5e/image/upload/v1615222306/my_epl_news/team_backgrounds/background_red_js9tq5.png',
  },
  AVL: {
    teamname: 'Aston Villa',
    teamcode: 'AVL',
    logoUrl:
      'https://res.cloudinary.com/dyz6qaw5e/image/upload/v1615218544/my_epl_news/team_logos/aston-villa-logo_cbfwas.png',
    bgUrl:
      'https://res.cloudinary.com/dyz6qaw5e/image/upload/v1615222306/my_epl_news/team_backgrounds/background_skyblue_pied70.png',
  },
  BRI: {
    teamname: 'Brighton',
    teamcode: 'BRI',
    logoUrl:
      'https://res.cloudinary.com/dyz6qaw5e/image/upload/v1615218593/my_epl_news/team_logos/brighton-logo_wgfm3l.png',
    bgUrl:
      'https://res.cloudinary.com/dyz6qaw5e/image/upload/v1615222306/my_epl_news/team_backgrounds/background_blue_vurjhr.png',
  },
  BUR: {
    teamname: 'Burnley',
    teamcode: 'BUR',
    logoUrl:
      'https://res.cloudinary.com/dyz6qaw5e/image/upload/v1615218593/my_epl_news/team_logos/burnley-logo_mh8h6j.png',
    bgUrl:
      'https://res.cloudinary.com/dyz6qaw5e/image/upload/v1615222306/my_epl_news/team_backgrounds/background_burnley_eabs57.png',
  },
  CHE: {
    teamname: 'Chelsea',
    teamcode: 'CHE',
    logoUrl:
      'https://res.cloudinary.com/dyz6qaw5e/image/upload/v1615218544/my_epl_news/team_logos/chelsea-logo_nyv6td.png',
    bgUrl:
      'https://res.cloudinary.com/dyz6qaw5e/image/upload/v1615222306/my_epl_news/team_backgrounds/background_blue_vurjhr.png',
  },
  CRY: {
    teamname: 'Crystal Palace',
    teamcode: 'CRY',
    logoUrl:
      'https://res.cloudinary.com/dyz6qaw5e/image/upload/v1615218544/my_epl_news/team_logos/crystal-palace-logo_uvux34.png',
    bgUrl:
      'https://res.cloudinary.com/dyz6qaw5e/image/upload/v1615222306/my_epl_news/team_backgrounds/background_blue_vurjhr.png',
  },
  EVE: {
    teamname: 'Everton',
    teamcode: 'EVE',
    logoUrl:
      'https://res.cloudinary.com/dyz6qaw5e/image/upload/v1615218544/my_epl_news/team_logos/everton-logo_g1m7hb.png',
    bgUrl:
      'https://res.cloudinary.com/dyz6qaw5e/image/upload/v1615222306/my_epl_news/team_backgrounds/background_blue_vurjhr.png',
  },
  FUL: {
    teamname: 'Fulham',
    teamcode: 'FUL',
    logoUrl:
      'https://res.cloudinary.com/dyz6qaw5e/image/upload/v1615218593/my_epl_news/team_logos/fulham-logo_ddz517.png',
    bgUrl:
      'https://res.cloudinary.com/dyz6qaw5e/image/upload/v1615222306/my_epl_news/team_backgrounds/background_red_js9tq5.png',
  },
  LEE: {
    teamname: 'Leeds United',
    teamcode: 'LEE',
    logoUrl:
      'https://res.cloudinary.com/dyz6qaw5e/image/upload/v1615218670/my_epl_news/team_logos/leeds-united-logo_yfyacq.png',
    bgUrl:
      'https://res.cloudinary.com/dyz6qaw5e/image/upload/v1615222306/my_epl_news/team_backgrounds/background_blue_vurjhr.png',
  },
  LEI: {
    teamname: 'Leicester City',
    teamcode: 'LEI',
    logoUrl:
      'https://res.cloudinary.com/dyz6qaw5e/image/upload/v1615218544/my_epl_news/team_logos/leicester-logo_msyafk.png',
    bgUrl:
      'https://res.cloudinary.com/dyz6qaw5e/image/upload/v1615222306/my_epl_news/team_backgrounds/background_blue_vurjhr.png',
  },
  LIV: {
    teamname: 'Liverpool',
    teamcode: 'LIV',
    logoUrl:
      'https://res.cloudinary.com/dyz6qaw5e/image/upload/v1615218544/my_epl_news/team_logos/liverpool-logo_t3ivxx.png',
    bgUrl:
      'https://res.cloudinary.com/dyz6qaw5e/image/upload/v1615222306/my_epl_news/team_backgrounds/background_red_js9tq5.png',
  },
  MCI: {
    teamname: 'Manchester City',
    teamcode: 'MCI',
    logoUrl:
      'https://res.cloudinary.com/dyz6qaw5e/image/upload/v1615218544/my_epl_news/team_logos/man-city-logo_huqhdo.png',
    bgUrl:
      'https://res.cloudinary.com/dyz6qaw5e/image/upload/v1615222306/my_epl_news/team_backgrounds/background_skyblue_pied70.png',
  },
  MUN: {
    teamname: 'Manchester United',
    teamcode: 'MUN',
    logoUrl:
      'https://res.cloudinary.com/dyz6qaw5e/image/upload/v1615218544/my_epl_news/team_logos/man-united-logo_egah0z.png',
    bgUrl:
      'https://res.cloudinary.com/dyz6qaw5e/image/upload/v1615222306/my_epl_news/team_backgrounds/background_red_js9tq5.png',
  },
  NEW: {
    teamname: 'Newcastle United',
    teamcode: 'NEW',
    logoUrl:
      'https://res.cloudinary.com/dyz6qaw5e/image/upload/v1615218545/my_epl_news/team_logos/newcastle-united-logo_cflvqu.png',
    bgUrl:
      'https://res.cloudinary.com/dyz6qaw5e/image/upload/v1615222306/my_epl_news/team_backgrounds/background_black_bq0h7s.png',
  },
  SOU: {
    teamname: 'Southampton',
    teamcode: 'SOU',
    logoUrl:
      'https://res.cloudinary.com/dyz6qaw5e/image/upload/v1615218545/my_epl_news/team_logos/southampton-logo_skqkvm.png',
    bgUrl:
      'https://res.cloudinary.com/dyz6qaw5e/image/upload/v1615222306/my_epl_news/team_backgrounds/background_red_js9tq5.png',
  },
  SHU: {
    teamname: 'Sheffield United',
    teamcode: 'SHU',
    logoUrl:
      'https://res.cloudinary.com/dyz6qaw5e/image/upload/v1615218593/my_epl_news/team_logos/sheffield-united-logo_y43aml.png',
    bgUrl:
      'https://res.cloudinary.com/dyz6qaw5e/image/upload/v1615222306/my_epl_news/team_backgrounds/background_red_js9tq5.png',
  },
  TOT: {
    teamname: 'Tottenham Hotspur',
    teamcode: 'TOT',
    logoUrl:
      'https://res.cloudinary.com/dyz6qaw5e/image/upload/v1615218545/my_epl_news/team_logos/tottenham-logo_dfiglj.png',
    logoURLWhite:
      'https://res.cloudinary.com/dyz6qaw5e/image/upload/v1615223601/my_epl_news/team_logos/totteanham-logo-white_d38nka.png',
    bgUrl:
      'https://res.cloudinary.com/dyz6qaw5e/image/upload/v1615222306/my_epl_news/team_backgrounds/background_navy_tottenham_westbrom_dqhepa.png',
  },
  WBA: {
    teamname: 'West Bromwich Albion',
    teamcode: 'WBA',
    logoUrl:
      'https://res.cloudinary.com/dyz6qaw5e/image/upload/v1615218545/my_epl_news/team_logos/west-bromwich-logo_fz1thk.png',
    bgUrl:
      'https://res.cloudinary.com/dyz6qaw5e/image/upload/v1615222306/my_epl_news/team_backgrounds/background_navy_tottenham_westbrom_dqhepa.png',
  },
  WHU: {
    teamname: 'West Ham United',
    teamcode: 'WHU',
    logoUrl:
      'https://res.cloudinary.com/dyz6qaw5e/image/upload/v1615218544/my_epl_news/team_logos/west-ham-united-logo_u2cii6.png',
    bgUrl:
      'https://res.cloudinary.com/dyz6qaw5e/image/upload/v1615222306/my_epl_news/team_backgrounds/background_maroon_westham_wx5itr.png',
  },
  WOL: {
    teamname: 'Wolverhampton Wanderers',
    teamcode: 'WOL',
    logoUrl:
      'https://res.cloudinary.com/dyz6qaw5e/image/upload/v1615218593/my_epl_news/team_logos/wolverhampton-wanderers-logo_tkwzag.png',
    bgUrl:
      'https://res.cloudinary.com/dyz6qaw5e/image/upload/v1615222306/my_epl_news/team_backgrounds/background_wolves_goldish_yluth7.png',
  },
};

const TEAMCODES = [
  'ARS',
  'AVL',
  'BRI',
  'BUR',
  'CHE',
  'CRY',
  'EVE',
  'FUL',
  'LEE',
  'LEI',
  'LIV',
  'MCI',
  'MUN',
  'NEW',
  'SOU',
  'SHU',
  'TOT',
  'WBA',
  'WHU',
  'WOL',
];

module.exports = { TEAMS, TEAMCODES, TEAMKEY };
