import { Schedule } from "../interface/schedule"
import { Team } from "../interface/team"


export const SEASON_SCHEDULE : Schedule [] = [
    { id : 1, PlayingDate: new Date(2021,08,10),HomeTeam: 'Persija',
    AwayTeam: 'Persib',HomeScore:3, AwayScore:4,
    RefName:'Joko', notes:'Pertandigan Overtime'},
    { id : 2, PlayingDate: new Date(2021,08,11),HomeTeam: 'Persipon',
    AwayTeam: 'RRQ',HomeScore:3, AwayScore:0,
    RefName:'Sukasjo', notes:'Pertandigan melelahkan'},
    { id : 3, PlayingDate: new Date(2021,08,12),HomeTeam: 'Evos',
    AwayTeam: 'Pesrsi Solo',HomeScore:2, AwayScore:0,
    RefName:'joko', notes:'Pertandigan agak aneh'},
    { id : 4, PlayingDate: new Date(2021,08,13),HomeTeam: 'Persipon',
    AwayTeam: 'Persija',HomeScore:3, AwayScore:0,
    RefName:'Sukasjo', notes:'Pertandigan dimenangkan persipon'},
    { id : 5, PlayingDate: new Date(2021,08,13),HomeTeam: 'MU',
    AwayTeam: 'Persija',HomeScore:2, AwayScore:4,
    RefName:  'Sukasjo', notes:'Pertandigan dimenangkan persipon'},
]

export const TEAM: Team [] =[
    {id:1, name:'Evos', type: 'OVer 30'},
    {id:2, name:'Persib', type: 'OVer 30'},
    {id:3, name:'Persija', type: 'OVer 30'},
    {id:4, name:'Persipon', type: 'OVer 30'},
    {id:5, name:'Bali United', type: 'OVer 30'},
]
