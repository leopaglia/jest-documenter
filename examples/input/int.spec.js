import React from 'react';
import { flushAllPromises, renderScreen } from 'shared/utils/integrationTestsSetup';
import Payment from '../Container';

jest.mock('shared/contexts/DeviceContext', () => ({
  withDeviceContext: Component => props => <Component {...props} />
}));

jest.mock('shared/components/react-hotkeys/Hotkeys', () => () => null);
jest.mock('@sabre/dc-sdk', () => require('shared/utils/sdkMock').default);

const state = {
  reservation: {
    passengers: {
      byId: {
        'p01.01': {
          id: 'p01.01',
          syntheticIdentifier:
            'elpnj5WkaR4WIb2IB0b0LbqbFLVV7Zvae/+ga4RHbXFhkDshzhdstkwIUPg8Zud2UoJH3Wcb6g8dAXupaLYc/1zaBBjnO+xLAzgM29b3VgK3B2+xP+uxNEC5sK1LpO0z',
          type: {
            value: 'ADULT'
          },
          loyaltyAccount: [
            {
              id: 'string',
              memberAirline: 'LH',
              memberId: '1234444423423',
              mileage: {
                value: 0,
                unit: 'MILES'
              },
              points: 1000,
              loyaltyTierLevel: {
                name: 'gold',
                number: 0,
                tag: 'GLD'
              },
              membershipStartDate: '2017-12-22',
              latestAwardDate: '2017-12-22'
            }
          ],
          genericSpecialRequests: {
            byId: {
              specialRq1: {
                id: 'specialRq1',
                syntheticIdentifier: 'hm8Ee21omF8ePE9ufsfRfg==',
                segmentRefs: ['s1'],
                code: 'INFT',
                freeText: '/CRANWELL/ANDREA CHARLOTTE/05JAN16',
                status: {
                  value: 'WAIVED',
                  statusCode: 'HK'
                },
                numberInParty: 1,
                airlineCode: 'VA',
                fullText: 'INFT VA HK1 BNESYD0916Y04JAN/CRANWELL/ANDREA CHARLOTTE/05JAN16$B-17957283',
                airlineFactsType: 'HOSTED',
                messageType: 'SSR'
              },
              specialRq2: {
                id: 'specialRq2',
                syntheticIdentifier: 'cmmjZAeXrASKHy5KBBXsuQ==',
                segmentRefs: ['s2'],
                code: 'INFT',
                freeText: '/CRANWELL/ANDREA CHARLOTTE/05JAN16',
                status: {
                  value: 'WAIVED',
                  statusCode: 'HK'
                },
                numberInParty: 1,
                airlineCode: 'VA',
                fullText: 'INFT VA HK1 SYDMEL0834Y04JAN/CRANWELL/ANDREA CHARLOTTE/05JAN16$B-17957285',
                airlineFactsType: 'HOSTED',
                messageType: 'SSR'
              },
              specialRq3: {
                id: 'specialRq3',
                syntheticIdentifier: 'q8S6l42vf1rQhvaCmhNBZw==',
                segmentRefs: ['s3'],
                code: 'INFT',
                freeText: '/CRANWELL/ANDREA CHARLOTTE/05JAN16',
                status: {
                  value: 'WAIVED',
                  statusCode: 'HK'
                },
                numberInParty: 1,
                airlineCode: 'VA',
                fullText: 'INFT VA HK1 MELADL0229Y04JAN/CRANWELL/ANDREA CHARLOTTE/05JAN16$B-17957288',
                airlineFactsType: 'HOSTED',
                messageType: 'SSR'
              },
              specialRq4: {
                id: 'specialRq4',
                syntheticIdentifier: 'KW71jxZP8xFBvNAtskj+cA==',
                segmentRefs: ['s4'],
                code: 'INFT',
                freeText: '/CRANWELL/ANDREA CHARLOTTE/05JAN16',
                status: {
                  value: 'WAIVED',
                  statusCode: 'HK'
                },
                numberInParty: 1,
                airlineCode: 'VA',
                fullText: 'INFT VA HK1 MELBNE0309Y05JAN/CRANWELL/ANDREA CHARLOTTE/05JAN16$B-17956370',
                airlineFactsType: 'HOSTED',
                messageType: 'SSR'
              },
              specialRq5: {
                id: 'specialRq5',
                syntheticIdentifier: 'uFW5evvJXx8e8tMQ1FLjnw==',
                segmentRefs: ['s1'],
                code: 'TKNE',
                freeText: 'VA HK1 BNESYD0916Y04JAN/7952142105102C1/102-103',
                status: {
                  value: 'WAIVED',
                  statusCode: 'HK'
                },
                numberInParty: 1,
                airlineCode: 'VA',
                ticketNumber: {
                  number: '7952142105102'
                },
                fullText: 'TKNE VA HK1 BNESYD0916Y04JAN/7952142105102C1/102-103',
                airlineFactsType: 'HOSTED',
                messageType: 'SSR'
              },
              specialRq6: {
                id: 'specialRq6',
                syntheticIdentifier: 'RrAKSUaTqL2cEHHNEqFysw==',
                segmentRefs: ['s2'],
                code: 'TKNE',
                freeText: 'VA HK1 SYDMEL0834Y04JAN/7952142105102C2/102-103',
                status: {
                  value: 'WAIVED',
                  statusCode: 'HK'
                },
                numberInParty: 1,
                airlineCode: 'VA',
                ticketNumber: {
                  number: '7952142105102'
                },
                fullText: 'TKNE VA HK1 SYDMEL0834Y04JAN/7952142105102C2/102-103',
                airlineFactsType: 'HOSTED',
                messageType: 'SSR'
              },
              specialRq7: {
                id: 'specialRq7',
                syntheticIdentifier: 'AWhhn5cbCDk7hNeLxKbS0w==',
                segmentRefs: ['s3'],
                code: 'TKNE',
                freeText: 'VA HK1 MELADL0229Y04JAN/7952142105102C3/102-103',
                status: {
                  value: 'WAIVED',
                  statusCode: 'HK'
                },
                numberInParty: 1,
                airlineCode: 'VA',
                ticketNumber: {
                  number: '7952142105102'
                },
                fullText: 'TKNE VA HK1 MELADL0229Y04JAN/7952142105102C3/102-103',
                airlineFactsType: 'HOSTED',
                messageType: 'SSR'
              },
              specialRq8: {
                id: 'specialRq8',
                syntheticIdentifier: 'gsR+caPOCwQ04JicPgasMg==',
                segmentRefs: ['s4'],
                code: 'TKNE',
                freeText: 'VA HK1 MELBNE0309Y05JAN/7952142105103C1/102-103',
                status: {
                  value: 'WAIVED',
                  statusCode: 'HK'
                },
                numberInParty: 1,
                airlineCode: 'VA',
                ticketNumber: {
                  number: '7952142105103'
                },
                fullText: 'TKNE VA HK1 MELBNE0309Y05JAN/7952142105103C1/102-103',
                airlineFactsType: 'HOSTED',
                messageType: 'SSR'
              },
              specialRq9: {
                id: 'specialRq9',
                syntheticIdentifier: 'E1KiZOlUfHWtrLq2Ahvujw==',
                segmentRefs: ['s1'],
                code: 'TKNE',
                freeText: 'VA HK1 BNESYD0916Y04JAN/INF7952142105108C1/108-109',
                status: {
                  value: 'WAIVED',
                  statusCode: 'HK'
                },
                numberInParty: 1,
                airlineCode: 'VA',
                ticketNumber: {
                  number: 'INF7952142105'
                },
                fullText: 'TKNE VA HK1 BNESYD0916Y04JAN/INF7952142105108C1/108-109',
                airlineFactsType: 'HOSTED',
                messageType: 'SSR'
              },
              specialRq10: {
                id: 'specialRq10',
                syntheticIdentifier: 'DjcyUA40Ki+heogXBDf4/g==',
                segmentRefs: ['s2'],
                code: 'TKNE',
                freeText: 'VA HK1 SYDMEL0834Y04JAN/INF7952142105108C2/108-109',
                status: {
                  value: 'WAIVED',
                  statusCode: 'HK'
                },
                numberInParty: 1,
                airlineCode: 'VA',
                ticketNumber: {
                  number: 'INF7952142105'
                },
                fullText: 'TKNE VA HK1 SYDMEL0834Y04JAN/INF7952142105108C2/108-109',
                airlineFactsType: 'HOSTED',
                messageType: 'SSR'
              },
              specialRq11: {
                id: 'specialRq11',
                syntheticIdentifier: 'x2g4fhiTAhPhXaEONAZlXg==',
                segmentRefs: ['s3'],
                code: 'TKNE',
                freeText: 'VA HK1 MELADL0229Y04JAN/INF7952142105108C3/108-109',
                status: {
                  value: 'WAIVED',
                  statusCode: 'HK'
                },
                numberInParty: 1,
                airlineCode: 'VA',
                ticketNumber: {
                  number: 'INF7952142105'
                },
                fullText: 'TKNE VA HK1 MELADL0229Y04JAN/INF7952142105108C3/108-109',
                airlineFactsType: 'HOSTED',
                messageType: 'SSR'
              },
              specialRq12: {
                id: 'specialRq12',
                syntheticIdentifier: 'SZ9/46swOXLyEGKZ6BODgg==',
                segmentRefs: ['s4'],
                code: 'TKNE',
                freeText: 'VA HK1 MELBNE0309Y05JAN/INF7952142105109C1/108-109',
                status: {
                  value: 'WAIVED',
                  statusCode: 'HK'
                },
                numberInParty: 1,
                airlineCode: 'VA',
                ticketNumber: {
                  number: 'INF7952142105'
                },
                fullText: 'TKNE VA HK1 MELBNE0309Y05JAN/INF7952142105109C1/108-109',
                airlineFactsType: 'HOSTED',
                messageType: 'SSR'
              },
              specialRq13: {
                id: 'specialRq13',
                syntheticIdentifier: 'txa7hhA8z9T/ZuU1ACAz6g==',
                segmentRefs: ['s1'],
                code: 'TKNE',
                freeText: 'VA HK1 BNESYD0916Y04JAN/7952142105110C1/110-111',
                status: {
                  value: 'WAIVED',
                  statusCode: 'HK'
                },
                numberInParty: 1,
                airlineCode: 'VA',
                ticketNumber: {
                  number: '7952142105110'
                },
                fullText: 'TKNE VA HK1 BNESYD0916Y04JAN/7952142105110C1/110-111',
                airlineFactsType: 'HOSTED',
                messageType: 'SSR'
              },
              specialRq14: {
                id: 'specialRq14',
                syntheticIdentifier: 'omCFqPAUAot7l1bU5UirtA==',
                segmentRefs: ['s2'],
                code: 'TKNE',
                freeText: 'VA HK1 SYDMEL0834Y04JAN/7952142105110C2/110-111',
                status: {
                  value: 'WAIVED',
                  statusCode: 'HK'
                },
                numberInParty: 1,
                airlineCode: 'VA',
                ticketNumber: {
                  number: '7952142105110'
                },
                fullText: 'TKNE VA HK1 SYDMEL0834Y04JAN/7952142105110C2/110-111',
                airlineFactsType: 'HOSTED',
                messageType: 'SSR'
              },
              specialRq15: {
                id: 'specialRq15',
                syntheticIdentifier: 'nkNydG0Cd7fR41pLX1IqyQ==',
                segmentRefs: ['s3'],
                code: 'TKNE',
                freeText: 'VA HK1 MELADL0229Y04JAN/7952142105110C3/110-111',
                status: {
                  value: 'WAIVED',
                  statusCode: 'HK'
                },
                numberInParty: 1,
                airlineCode: 'VA',
                ticketNumber: {
                  number: '7952142105110'
                },
                fullText: 'TKNE VA HK1 MELADL0229Y04JAN/7952142105110C3/110-111',
                airlineFactsType: 'HOSTED',
                messageType: 'SSR'
              },
              specialRq16: {
                id: 'specialRq16',
                syntheticIdentifier: 'ZOMrMJrfLV17ky82hvVuiQ==',
                segmentRefs: ['s4'],
                code: 'TKNE',
                freeText: 'VA HK1 MELBNE0309Y05JAN/7952142105111C1/110-111',
                status: {
                  value: 'WAIVED',
                  statusCode: 'HK'
                },
                numberInParty: 1,
                airlineCode: 'VA',
                ticketNumber: {
                  number: '7952142105111'
                },
                fullText: 'TKNE VA HK1 MELBNE0309Y05JAN/7952142105111C1/110-111',
                airlineFactsType: 'HOSTED',
                messageType: 'SSR'
              },
              specialRq17: {
                id: 'specialRq17',
                syntheticIdentifier: 'lWOgvQdocvgaDxmz1IBwCw==',
                segmentRefs: ['s1'],
                code: 'TKNE',
                freeText: 'VA HK1 BNESYD0916Y04JAN/INF7952142105116C1/116-117',
                status: {
                  value: 'WAIVED',
                  statusCode: 'HK'
                },
                numberInParty: 1,
                airlineCode: 'VA',
                ticketNumber: {
                  number: 'INF7952142105'
                },
                fullText: 'TKNE VA HK1 BNESYD0916Y04JAN/INF7952142105116C1/116-117',
                airlineFactsType: 'HOSTED',
                messageType: 'SSR'
              },
              specialRq18: {
                id: 'specialRq18',
                syntheticIdentifier: 'qtSpEnprZKcw8aWg2+WGCQ==',
                segmentRefs: ['s2'],
                code: 'TKNE',
                freeText: 'VA HK1 SYDMEL0834Y04JAN/INF7952142105116C2/116-117',
                status: {
                  value: 'WAIVED',
                  statusCode: 'HK'
                },
                numberInParty: 1,
                airlineCode: 'VA',
                ticketNumber: {
                  number: 'INF7952142105'
                },
                fullText: 'TKNE VA HK1 SYDMEL0834Y04JAN/INF7952142105116C2/116-117',
                airlineFactsType: 'HOSTED',
                messageType: 'SSR'
              },
              specialRq19: {
                id: 'specialRq19',
                syntheticIdentifier: 'xdkStKRCEtlx3Finjh504Q==',
                segmentRefs: ['s3'],
                code: 'TKNE',
                freeText: 'VA HK1 MELADL0229Y04JAN/INF7952142105116C3/116-117',
                status: {
                  value: 'WAIVED',
                  statusCode: 'HK'
                },
                numberInParty: 1,
                airlineCode: 'VA',
                ticketNumber: {
                  number: 'INF7952142105'
                },
                fullText: 'TKNE VA HK1 MELADL0229Y04JAN/INF7952142105116C3/116-117',
                airlineFactsType: 'HOSTED',
                messageType: 'SSR'
              },
              specialRq20: {
                id: 'specialRq20',
                syntheticIdentifier: 'GQOXxGxR49V5fXCfaYrgwQ==',
                segmentRefs: ['s4'],
                code: 'TKNE',
                freeText: 'VA HK1 MELBNE0309Y05JAN/INF7952142105117C1/116-117',
                status: {
                  value: 'WAIVED',
                  statusCode: 'HK'
                },
                numberInParty: 1,
                airlineCode: 'VA',
                ticketNumber: {
                  number: 'INF7952142105'
                },
                fullText: 'TKNE VA HK1 MELBNE0309Y05JAN/INF7952142105117C1/116-117',
                airlineFactsType: 'HOSTED',
                messageType: 'SSR'
              }
            },
            allIds: [
              'specialRq1',
              'specialRq2',
              'specialRq3',
              'specialRq4',
              'specialRq5',
              'specialRq6',
              'specialRq7',
              'specialRq8',
              'specialRq9',
              'specialRq10',
              'specialRq11',
              'specialRq12',
              'specialRq13',
              'specialRq14',
              'specialRq15',
              'specialRq16',
              'specialRq17',
              'specialRq18',
              'specialRq19',
              'specialRq20'
            ],
            byMessageType: {
              SSR: [
                'specialRq1',
                'specialRq2',
                'specialRq3',
                'specialRq4',
                'specialRq5',
                'specialRq6',
                'specialRq7',
                'specialRq8',
                'specialRq9',
                'specialRq10',
                'specialRq11',
                'specialRq12',
                'specialRq13',
                'specialRq14',
                'specialRq15',
                'specialRq16',
                'specialRq17',
                'specialRq18',
                'specialRq19',
                'specialRq20'
              ]
            },
            byAirlineFactsType: {
              HOSTED: [
                'specialRq1',
                'specialRq2',
                'specialRq3',
                'specialRq4',
                'specialRq5',
                'specialRq6',
                'specialRq7',
                'specialRq8',
                'specialRq9',
                'specialRq10',
                'specialRq11',
                'specialRq12',
                'specialRq13',
                'specialRq14',
                'specialRq15',
                'specialRq16',
                'specialRq17',
                'specialRq18',
                'specialRq19',
                'specialRq20'
              ]
            }
          },
          ticket: [
            {
              ticketNumber: {
                number: '7952142105110'
              },
              issued: true,
              ticketCoupon: [
                {
                  couponNumber: '1',
                  baggageDisclosure: {
                    checkedInBaggage: {
                      baggageAllowanceDefinition: [
                        {
                          quantity: 1,
                          allowanceSource: 'TICKET'
                        }
                      ]
                    }
                  },
                  fareBasisCode: 'YZFD0D',
                  segmentRef: 's1',
                  status: 'OK'
                },
                {
                  couponNumber: '2',
                  baggageDisclosure: {
                    checkedInBaggage: {
                      baggageAllowanceDefinition: [
                        {
                          quantity: 1,
                          allowanceSource: 'TICKET'
                        }
                      ]
                    }
                  },
                  fareBasisCode: 'YZFD0D',
                  segmentRef: 's2',
                  status: 'OK'
                },
                {
                  couponNumber: '3',
                  baggageDisclosure: {
                    checkedInBaggage: {
                      baggageAllowanceDefinition: [
                        {
                          quantity: 1,
                          allowanceSource: 'TICKET'
                        }
                      ]
                    }
                  },
                  fareBasisCode: 'Y',
                  segmentRef: 's3',
                  status: 'OK'
                },
                {
                  couponNumber: '5',
                  baggageDisclosure: {
                    checkedInBaggage: {
                      baggageAllowanceDefinition: [
                        {
                          quantity: 1,
                          allowanceSource: 'TICKET'
                        }
                      ]
                    }
                  },
                  fareBasisCode: 'YZFD0D',
                  segmentRef: 's4',
                  status: 'OK'
                }
              ]
            }
          ],
          weightCategory: 'ADULT_FEMALE',
          nameNumber: '01.01',
          fullName: {
            first: 'JOANNA',
            last: 'TEST',
            raw: 'TEST/JOANNA'
          },
          recordLocator: 'UKARMV',
          gender: 'FEMALE',
          baggageAllowance: 1,
          segments: {
            byId: {
              s1: {
                id: 'p01.01.s1',
                passengerFlight: [
                  {
                    id: 'p01.01.s1.f1',
                    flightRefs: ['f1'],
                    checkedIn: true,
                    seat: {
                      value: '4A',
                      type: 'WINDOW'
                    }
                  }
                ],
                passengerCheckInId: 'DA0F8B2B0001',
                airExtra: [
                  {
                    id: 'ae1',
                    syntheticIdentifier: 'u6fUnwoCUK6v3OfDBHdXrQ==',
                    ancillary: {
                      id: 'anc1',
                      group: 'BG',
                      reasonForIssuance: {
                        value: 'BAGGAGE',
                        code: 'C'
                      },
                      commercialName: 'BAG UP TO 23KG AND 140LCM',
                      airline: 'VA',
                      vendor: 'ATP',
                      electronicMiscDocType: {
                        value: 'FLIGHT_COUPON_ASSOCIATED',
                        code: '2'
                      },
                      ancillaryRules: {
                        refundable: true,
                        commissionable: true,
                        interlineable: true,
                        paperTicketRequired: false
                      },
                      subCode: '0E8'
                    },
                    paymentStatus: {
                      value: 'FULFILLED',
                      statusCode: 'HD'
                    },
                    type: 'ANCILLARY',
                    quantity: 1
                  },
                  {
                    id: 'ae2',
                    syntheticIdentifier: 'J6kK++/Du6gNQM2zt3eWng==',
                    ancillary: {
                      id: 'anc2',
                      group: 'BG',
                      reasonForIssuance: {
                        value: 'BAGGAGE',
                        code: 'C'
                      },
                      commercialName: 'BAG UP TO 23KG AND 140LCM',
                      airline: 'VA',
                      vendor: 'ATP',
                      electronicMiscDocType: {
                        value: 'FLIGHT_COUPON_ASSOCIATED',
                        code: '2'
                      },
                      ancillaryRules: {
                        refundable: true,
                        commissionable: true,
                        interlineable: true,
                        paperTicketRequired: false
                      },
                      subCode: '0E8'
                    },
                    paymentStatus: {
                      value: 'FULFILLED',
                      statusCode: 'HI'
                    },
                    type: 'ANCILLARY',
                    quantity: 1
                  }
                ],
                editCodes: {
                  byId: {
                    'p01.01.s1.editCode1': {
                      id: 'p01.01.s1.editCode1',
                      code: 'OB'
                    },
                    'p01.01.s1.editCode2': {
                      id: 'p01.01.s1.editCode2',
                      text: [
                        {
                          id: 'text1',
                          value: 'CRANWELL,ANDREA CHARLOTTE,05JAN16',
                          lineId: '1'
                        }
                      ],
                      code: 'INF'
                    },
                    'p01.01.s1.editCode3': {
                      id: 'p01.01.s1.editCode3',
                      text: [
                        {
                          id: 'text2',
                          value: '7952142105116  C01 04JAN Y BNESYD OK'
                        }
                      ],
                      code: 'DOCV'
                    },
                    'p01.01.s1.editCode4': {
                      id: 'p01.01.s1.editCode4',
                      text: [
                        {
                          id: 'text3',
                          value: 'DB/01JAN99/M/SIRAJ/SHABINA'
                        }
                      ],
                      code: 'DOCS'
                    },
                    'p01.01.s1.editCode5': {
                      id: 'p01.01.s1.editCode5',
                      code: 'ETO'
                    },
                    'p01.01.s1.editCode6': {
                      id: 'p01.01.s1.editCode6',
                      text: [
                        {
                          id: 'text1',
                          value: 'VA 0924/BNESYD/     BG /HI/1 /1                              EMD-7951500046278 C01'
                        }
                      ],
                      code: 'AE'
                    },
                    'p01.01.s1.editCode7': {
                      id: 'p01.01.s1.editCode7',
                      text: [
                        {
                          id: 'text2',
                          value: 'VA SYD    975686.12/BG/0E8,87.13'
                        }
                      ],
                      code: 'BT'
                    },
                    'p01.01.s1.editCode8': {
                      id: 'p01.01.s1.editCode8',
                      text: [
                        {
                          id: 'text3',
                          value: '          2 / 25 KG'
                        }
                      ],
                      code: 'BT'
                    },
                    'p01.01.s1.editCode9': {
                      id: 'p01.01.s1.editCode9',
                      code: 'INF'
                    },
                    'p01.01.s1.editCode10': {
                      id: 'p01.01.s1.editCode10',
                      code: 'OB'
                    },
                    'p01.01.s1.editCode11': {
                      id: 'p01.01.s1.editCode11',
                      code: 'AA'
                    },
                    'p01.01.s1.editCode12': {
                      id: 'p01.01.s1.editCode12',
                      code: 'MAAS'
                    },
                    'p01.01.s1.editCode13': {
                      id: 'p01.01.s1.editCode13',
                      code: 'INF'
                    },
                    'p01.01.s1.editCode14': {
                      id: 'p01.01.s1.editCode14',
                      code: 'OB'
                    },
                    'p01.01.s1.editCode15': {
                      id: 'p01.01.s1.editCode15',
                      code: 'INF'
                    },
                    'p01.01.s1.editCode16': {
                      id: 'p01.01.s1.editCode16',
                      code: 'AE'
                    }
                  },
                  allIds: [
                    'p01.01.s1.editCode1',
                    'p01.01.s1.editCode2',
                    'p01.01.s1.editCode3',
                    'p01.01.s1.editCode4',
                    'p01.01.s1.editCode5',
                    'p01.01.s1.editCode6',
                    'p01.01.s1.editCode7',
                    'p01.01.s1.editCode8',
                    'p01.01.s1.editCode9',
                    'p01.01.s1.editCode10',
                    'p01.01.s1.editCode11',
                    'p01.01.s1.editCode12',
                    'p01.01.s1.editCode13',
                    'p01.01.s1.editCode14',
                    'p01.01.s1.editCode15',
                    'p01.01.s1.editCode16'
                  ],
                  allCodes: [
                    'OB',
                    'INF',
                    'DOCV',
                    'DOCS',
                    'ETO',
                    'AE',
                    'BT',
                    'BT',
                    'INF',
                    'OB',
                    'AA',
                    'MAAS',
                    'INF',
                    'OB',
                    'INF',
                    'AE'
                  ],
                  uniqueCodes: ['OB', 'INF', 'DOCV', 'DOCS', 'ETO', 'AE', 'BT', 'AA', 'MAAS']
                },
                segmentRef: 's1',
                hasVcr: false
              },
              s2: {
                id: 'p01.01.s2',
                passengerFlight: [
                  {
                    id: 'p01.01.s2.f2',
                    flightRefs: ['f2'],
                    checkedIn: true
                  }
                ],
                passengerCheckInId: 'DA0F8B2B0101',
                editCodes: {
                  byId: {
                    'p01.01.s2.editCode9': {
                      id: 'p01.01.s2.editCode9',
                      code: 'IB'
                    },
                    'p01.01.s2.editCode10': {
                      id: 'p01.01.s2.editCode10',
                      code: 'OB'
                    },
                    'p01.01.s2.editCode11': {
                      id: 'p01.01.s2.editCode11',
                      text: [
                        {
                          id: 'text4',
                          value: 'CRANWELL,ANDREA CHARLOTTE,05JAN16',
                          lineId: '1'
                        }
                      ],
                      code: 'INF'
                    },
                    'p01.01.s2.editCode12': {
                      id: 'p01.01.s2.editCode12',
                      text: [
                        {
                          id: 'text5',
                          value: '7952142105116  C02 04JAN Y SYDMEL OK'
                        }
                      ],
                      code: 'IFET'
                    },
                    'p01.01.s2.editCode13': {
                      id: 'p01.01.s2.editCode13',
                      text: [
                        {
                          id: 'text6',
                          value: 'DB/01JAN99/M/SIRAJ/SHABINA'
                        }
                      ],
                      code: 'DOCS'
                    },
                    'p01.01.s2.editCode14': {
                      id: 'p01.01.s2.editCode14',
                      code: 'ETI'
                    }
                  },
                  allIds: [
                    'p01.01.s2.editCode9',
                    'p01.01.s2.editCode10',
                    'p01.01.s2.editCode11',
                    'p01.01.s2.editCode12',
                    'p01.01.s2.editCode13',
                    'p01.01.s2.editCode14'
                  ],
                  allCodes: ['IB', 'OB', 'INF', 'IFET', 'DOCS', 'ETI'],
                  uniqueCodes: ['IB', 'OB', 'INF', 'IFET', 'DOCS', 'ETI']
                },
                segmentRef: 's2',
                hasVcr: true
              },
              s3: {
                id: 'p01.01.s3',
                passengerFlight: [
                  {
                    id: 'p01.01.s3.f3',
                    flightRefs: ['f3'],
                    checkedIn: true
                  }
                ],
                passengerCheckInId: 'DA0F8B2B0201',
                editCodes: {
                  byId: {
                    'p01.01.s3.editCode18': {
                      id: 'p01.01.s3.editCode18',
                      code: 'IB'
                    },
                    'p01.01.s3.editCode19': {
                      id: 'p01.01.s3.editCode19',
                      text: [
                        {
                          id: 'text7',
                          value: 'CRANWELL,ANDREA CHARLOTTE,05JAN16',
                          lineId: '1'
                        }
                      ],
                      code: 'INF'
                    },
                    'p01.01.s3.editCode20': {
                      id: 'p01.01.s3.editCode20',
                      text: [
                        {
                          id: 'text8',
                          value: '7952142105116  C03 04JAN Y MELADL OK'
                        }
                      ],
                      code: 'IFET'
                    },
                    'p01.01.s3.editCode21': {
                      id: 'p01.01.s3.editCode21',
                      text: [
                        {
                          id: 'text9',
                          value: 'DB/01JAN99/M/SIRAJ/SHABINA'
                        }
                      ],
                      code: 'DOCS'
                    },
                    'p01.01.s3.editCode22': {
                      id: 'p01.01.s3.editCode22',
                      code: 'ETI'
                    }
                  },
                  allIds: [
                    'p01.01.s3.editCode18',
                    'p01.01.s3.editCode19',
                    'p01.01.s3.editCode20',
                    'p01.01.s3.editCode21',
                    'p01.01.s3.editCode22'
                  ],
                  allCodes: ['IB', 'INF', 'IFET', 'DOCS', 'ETI'],
                  uniqueCodes: ['IB', 'INF', 'IFET', 'DOCS', 'ETI']
                },
                segmentRef: 's3',
                hasVcr: true
              }
            },
            allIds: ['s1', 's2', 's3'],
            airExtras: [
              {
                id: 'ae1',
                syntheticIdentifier: 'u6fUnwoCUK6v3OfDBHdXrQ==',
                ancillary: {
                  id: 'anc1',
                  group: 'BG',
                  reasonForIssuance: {
                    value: 'BAGGAGE',
                    code: 'C'
                  },
                  commercialName: 'BAG UP TO 23KG AND 140LCM',
                  airline: 'VA',
                  vendor: 'ATP',
                  electronicMiscDocType: {
                    value: 'FLIGHT_COUPON_ASSOCIATED',
                    code: '2'
                  },
                  ancillaryRules: {
                    refundable: true,
                    commissionable: true,
                    interlineable: true,
                    paperTicketRequired: false
                  },
                  subCode: '0E8'
                },
                paymentStatus: {
                  value: 'FULFILLED',
                  statusCode: 'HD'
                },
                type: 'ANCILLARY',
                quantity: 1,
                segmentRef: 's1'
              },
              {
                id: 'ae2',
                syntheticIdentifier: 'J6kK++/Du6gNQM2zt3eWng==',
                ancillary: {
                  id: 'anc2',
                  group: 'BG',
                  reasonForIssuance: {
                    value: 'BAGGAGE',
                    code: 'C'
                  },
                  commercialName: 'BAG UP TO 23KG AND 140LCM',
                  airline: 'VA',
                  vendor: 'ATP',
                  electronicMiscDocType: {
                    value: 'FLIGHT_COUPON_ASSOCIATED',
                    code: '2'
                  },
                  ancillaryRules: {
                    refundable: true,
                    commissionable: true,
                    interlineable: true,
                    paperTicketRequired: false
                  },
                  subCode: '0E8'
                },
                paymentStatus: {
                  value: 'FULFILLED',
                  statusCode: 'HI'
                },
                type: 'ANCILLARY',
                quantity: 1,
                segmentRef: 's1'
              }
            ]
          },
          eligibilities: {
            byCategory: {},
            allCategories: [],
            byType: {},
            allTypes: []
          },
          requiredDocs: {
            isMainDocRequired: false,
            isResidenceAddressRequired: false,
            isDestinationAddressRequired: false,
            isEmergencyContactRequired: false,
            isVisaRequired: false,
            isAnyDocRequired: false,
            isDocsVerificationRequired: false,
            isSecurityClearanceStatus: false,
            isEstaValidationFailed: false,
            requiredCountriesForVisa: [],
            areDocumentsReady: true
          }
        }
      },
      allIds: ['p01.01']
    },
    segments: {
      byId: {
        s1: {
          id: 's1',
          status: {
            value: 'CONFIRMED'
          },
          fareInfo: {
            bookingClass: 'V',
            cabinClassCode: 'Y',
            cabinClass: 'ECONOMY'
          },
          baggageCheckInRules: {
            petAllowed: true,
            lateCheckIn: false,
            homePrintedBagTagRestricted: {
              type: 'RESTRICTED',
              message: 'Home Printed Bag Tag is not allowed for given airline.'
            }
          },
          number: '3',
          flights: ['f1']
        },
        s2: {
          id: 's2',
          status: {
            value: 'CONFIRMED'
          },
          fareInfo: {
            bookingClass: 'V',
            cabinClassCode: 'Y',
            cabinClass: 'ECONOMY'
          },
          baggageCheckInRules: {
            petAllowed: true,
            lateCheckIn: false,
            homePrintedBagTagRestricted: {
              type: 'RESTRICTED',
              message: 'Home Printed Bag Tag is not allowed for given airline.'
            }
          },
          number: '6',
          flights: ['f2']
        },
        s3: {
          id: 's3',
          status: {
            value: 'CONFIRMED'
          },
          fareInfo: {
            bookingClass: 'F',
            cabinClassCode: 'Y',
            cabinClass: 'FIRST'
          },
          baggageCheckInRules: {
            petAllowed: true,
            lateCheckIn: false,
            homePrintedBagTagRestricted: {
              type: 'RESTRICTED',
              message: 'Home Printed Bag Tag is not allowed for given airline.'
            }
          },
          number: '10',
          flights: ['f3']
        }
      },
      allIds: ['s1', 's2', 's3']
    },
    flights: {
      byId: {
        f1: {
          id: 'f1',
          estimatedDepartureTime: '2018-01-04T07:05:00+10:00',
          estimatedArrivalTime: '2018-01-04T09:40:00+11:00',
          departureFlightScheduleStatus: 'ON_TIME',
          boardingTime: '2018-01-04T06:35:00+10:00',
          departureTerminal: 'D',
          departureGate: 'GATE',
          departureCountry: 'AU',
          arrivalCountry: 'AU',
          commuter: false,
          airline: 'VA',
          flightNumber: '916',
          departureAirport: 'BNE',
          departureTime: '2018-01-04T07:05:00+10:00',
          arrivalAirport: 'SYD',
          arrivalTime: '2018-01-04T09:40:00+11:00',
          operatingAirline: 'VA',
          operatingAirlineName: 'VIRGIN AUSTRALIA',
          operatingFlightNumber: '916',
          equipment: '738'
        },
        f2: {
          id: 'f2',
          estimatedDepartureTime: '2018-01-04T11:00:00+11:00',
          estimatedArrivalTime: '2018-01-04T12:35:00+11:00',
          departureFlightScheduleStatus: 'ON_TIME',
          boardingTime: '2018-01-04T10:30:00+11:00',
          departureTerminal: 'D',
          departureGate: 'GATE',
          departureCountry: 'AU',
          arrivalCountry: 'AU',
          commuter: false,
          airline: 'VA',
          flightNumber: '834',
          departureAirport: 'SYD',
          departureTime: '2018-01-04T11:00:00+11:00',
          arrivalAirport: 'MEL',
          arrivalTime: '2018-01-04T12:35:00+11:00',
          operatingAirline: 'VA',
          operatingAirlineName: 'VIRGIN AUSTRALIA',
          operatingFlightNumber: '834',
          equipment: '738'
        },
        f3: {
          id: 'f3',
          estimatedDepartureTime: '2018-01-04T14:40:00+11:00',
          estimatedArrivalTime: '2018-01-04T15:30:00+10:30',
          departureFlightScheduleStatus: 'ON_TIME',
          boardingTime: '2018-01-04T14:10:00+11:00',
          departureTerminal: 'D',
          departureGate: '6',
          departureCountry: 'AU',
          arrivalCountry: 'AU',
          commuter: false,
          airline: 'VA',
          flightNumber: '229',
          departureAirport: 'MEL',
          departureTime: '2018-01-04T14:40:00+11:00',
          arrivalAirport: 'ADL',
          arrivalTime: '2018-01-04T15:30:00+10:30',
          operatingAirline: 'VA',
          operatingAirlineName: 'VIRGIN AUSTRALIA',
          operatingFlightNumber: '229',
          equipment: '738'
        },
        f4: {
          id: 'f4',
          estimatedDepartureTime: '2018-01-05T07:00:00+11:00',
          estimatedArrivalTime: '2018-01-05T08:10:00+10:00',
          departureFlightScheduleStatus: 'ON_TIME',
          boardingTime: '2018-01-05T06:30:00+11:00',
          departureTerminal: 'D',
          departureGate: '5',
          departureCountry: 'AU',
          arrivalCountry: 'AU',
          commuter: false,
          airline: 'VA',
          flightNumber: '309',
          departureAirport: 'MEL',
          departureTime: '2018-01-05T07:00:00+11:00',
          arrivalAirport: 'BNE',
          arrivalTime: '2018-01-05T08:10:00+10:00',
          operatingAirline: 'VA',
          operatingAirlineName: 'VIRGIN AUSTRALIA',
          operatingFlightNumber: '309',
          equipment: '738'
        }
      },
      allIds: ['f1', 'f2', 'f3', 'f4']
    }
  }
};

const historyEntries = [
  {
    pathname: '/payment',
    state: {
      items: [
        {
          extraId: 'ae1',
          passengerId: 'p01.01',
          fullName: { first: 'JOANNA', last: 'TEST', raw: 'TEST/JOANNA' },
          checked: true,
          from: 'BNE',
          to: 'SYD',
          id: 'ae1',
          syntheticIdentifier: 'u6fUnwoCUK6v3OfDBHdXrQ==',
          ancillary: {
            id: 'anc1',
            group: 'BG',
            reasonForIssuance: { value: 'BAGGAGE', code: 'C' },
            commercialName: 'BAG UP TO 23KG AND 140LCM',
            airline: 'VA',
            vendor: 'ATP',
            electronicMiscDocType: { value: 'FLIGHT_COUPON_ASSOCIATED', code: '2' },
            ancillaryRules: { refundable: true, commissionable: true, interlineable: true, paperTicketRequired: false },
            subCode: '0E8'
          },
          paymentStatus: { value: 'FULFILLED', statusCode: 'HD' },
          type: 'ANCILLARY',
          quantity: 1,
          airExtraRefs: ['ae1'],
          pricingLevel: 'PORTION',
          unitFee: {
            total: { amount: { value: 70.134, currency: 'BHD' } },
            base: { amount: { value: 70.134, currency: 'BHD' } }
          },
          totalFee: {
            total: { amount: { value: '71.532', currency: 'BHD' } },
            base: { amount: { value: '70.000', currency: 'BHD' } },
            totalTaxes: { amount: { value: '1.500', currency: 'BHD' } }
          },
          segmentRef: 's1'
        },
        {
          extraId: 'ae2',
          passengerId: 'p01.01',
          fullName: { first: 'JOANNA', last: 'TEST', raw: 'TEST/JOANNA' },
          checked: false,
          from: 'BNE',
          to: 'SYD',
          id: 'ae2',
          syntheticIdentifier: 'J6kK++/Du6gNQM2zt3eWng==',
          ancillary: {
            id: 'anc2',
            group: 'BG',
            reasonForIssuance: { value: 'BAGGAGE', code: 'C' },
            commercialName: 'BAG UP TO 23KG AND 140LCM',
            airline: 'VA',
            vendor: 'ATP',
            electronicMiscDocType: { value: 'FLIGHT_COUPON_ASSOCIATED', code: '2' },
            ancillaryRules: { refundable: true, commissionable: true, interlineable: true, paperTicketRequired: false },
            subCode: '0E8'
          },
          paymentStatus: { value: 'FULFILLED', statusCode: 'HI' },
          type: 'ANCILLARY',
          quantity: 1,
          airExtraRefs: ['ae2'],
          pricingLevel: 'PORTION',
          unitFee: {
            total: { amount: { value: 90, currency: 'BHD' } },
            base: { amount: { value: 90, currency: 'BHD' } }
          },
          totalFee: {
            total: { amount: { value: '92.500', currency: 'BHD' } },
            base: { amount: { value: '90.000', currency: 'BHD' } },
            totalTaxes: { amount: { value: '2.500', currency: 'BHD' } }
          },
          segmentRef: 's1'
        }
      ]
    }
  }
];

describe('Payment screen', () => {
  let wrapper;

  beforeAll(() => {
    console.time('Benchmark');

    const container = renderScreen({ screen: Payment, state, historyEntries });
    wrapper = container.wrapper;
  });
  afterAll(() => {
    console.timeEnd('Benchmark');
  });

  describe('when Payment renders', () => {
    let payButton, amountField, paymentMethods;

    beforeAll(() => {
      payButton = wrapper
        .find('footer')
        .find('button')
        .at(1);
      amountField = wrapper.find('input').find({ name: 'methods[0].amount' });
      paymentMethods = wrapper.find('select').find({ name: 'methods[0].type' });
    });

    it('should have pay button disabled', () => {
      expect(payButton.prop('disabled')).toBe(true);
    });
    it('should have amount value from previous screen', () => {
      expect(amountField.prop('value')).toBe('71.53');
    });
    it('should have amount value from previous screen', () => {
      expect(amountField.prop('disabled')).toBe(true);
    });

    it('should have amount value from previous screen', () => {
      expect(paymentMethods.prop('disabled')).toBe(false);
    });
    it('should not have a "Add another payment button"', () => {
      expect(wrapper.find('.add-another-payment').exists()).toBe(false);
    });
    describe('when you select cash paymentMethod', () => {
      beforeAll(() => {
        paymentMethods.simulate('change', { target: { value: 'CASH' } });
        wrapper.update();
      });

      it('should have a "Add another payment button"', () => {
        expect(wrapper.find('.add-another-payment').exists()).toBe(true);
      });

      describe('when you click on "Add another payment"', () => {
        let amountField, messageError;
        beforeAll(() => {
          wrapper
            .find('.add-another-payment')
            .find('button')
            .simulate('click');

          amountField = wrapper.find('input').find({ name: 'methods[1].amount' });

          messageError = wrapper
            .find('.payment')
            .at(1)
            .find('span.spark-input__message');
        });

        it('should fill second amount field with zero', () => {
          expect(amountField.prop('value')).toBe('0.00');
        });
        it('should disable second amount field', () => {
          expect(amountField.prop('disabled')).toBe(true);
        });
        it('should enable first amount field', () => {
          expect(
            wrapper
              .find('input')
              .find({ name: 'methods[0].amount' })
              .prop('disabled')
          ).toBe(false);
        });
        it('should render "Invalid amount" error to force user to modify first amount', () => {
          expect(messageError.text()).toBe('Invalid Amount');
        });
      });

      describe('when you click on "Remove"', () => {
        let amountField;
        beforeAll(() => {
          wrapper
            .find('.remove-payment')
            .find('button')
            .simulate('click');

          amountField = wrapper.find('input').find({ name: 'methods[0].amount' });
          paymentMethods = wrapper.find('select').find({ name: 'methods[0].type' });
        });
        it('should have a "Add another payment button"', () => {
          expect(wrapper.find('.add-another-payment').exists()).toBe(true);
        });
        it('should disable first amount field', () => {
          expect(amountField.prop('disabled')).toBe(true);
        });
      });
    });
    describe('when you select CREDIT CARD paymentMethod', () => {
      beforeAll(() => {
        paymentMethods.simulate('change', { target: { value: 'CREDIT_CARD' } });
        wrapper.update();
      });

      it('should have a "Add another payment button"', () => {
        expect(wrapper.find('.add-another-payment').exists()).toBe(true);
      });

      describe('when you click on add another payment', () => {
        let amountField, paymentMethods, messageError;
        beforeAll(() => {
          wrapper
            .find('.add-another-payment')
            .find('button')
            .simulate('click');

          amountField = wrapper.find('input').find({ name: 'methods[1].amount' });
          paymentMethods = wrapper.find('select').find({ name: 'methods[1].type' });
          messageError = wrapper
            .find('.payment')
            .at(1)
            .find('span.spark-input__message');
        });

        it('should fill second amount field with zero', () => {
          expect(amountField.prop('value')).toBe('0.00');
        });
        it('should disable second amount field', () => {
          expect(amountField.prop('disabled')).toBe(true);
        });
        it('should enable first amount field', () => {
          expect(
            wrapper
              .find('input')
              .find({ name: 'methods[0].amount' })
              .prop('disabled')
          ).toBe(false);
        });
        it('should render "Invalid amount" error to force user to modify first amount', () => {
          expect(messageError.text()).toBe('Invalid Amount');
        });
        it('should have NONE option', () => {
          expect(paymentMethods.find('option[value="NONE"]').exists()).toBe(true);
        });
        it('should have CASH payment option', () => {
          expect(paymentMethods.find('option[value="CASH"]').exists()).toBe(true);
        });
        it('should have CREDIT CARD payment option', () => {
          expect(paymentMethods.find('option[value="CREDIT_CARD"]').exists()).toBe(true);
        });
      });
      describe('when you click on "Remove"', () => {
        let amountField, paymentMethods;
        beforeAll(() => {
          wrapper
            .find('.remove-payment')
            .find('button')
            .simulate('click');

          amountField = wrapper.find('input').find({ name: 'methods[0].amount' });
          paymentMethods = wrapper.find('select').find({ name: 'methods[0].type' });
        });
        it('should have a "Add another payment button"', () => {
          expect(wrapper.find('.add-another-payment').exists()).toBe(true);
        });
        it('should disable first amount field', () => {
          expect(amountField.prop('disabled')).toBe(true);
        });
      });
    });
    describe('when you select GIFT CARD paymentMethod', () => {
      beforeAll(() => {
        paymentMethods.simulate('change', { target: { value: 'GIFT_CARD' } });
        wrapper.update();
      });

      it('should have a "Add another payment button"', () => {
        expect(wrapper.find('.add-another-payment').exists()).toBe(true);
      });

      describe('when you click on add another payment', () => {
        let amountField, paymentMethods, messageError;
        beforeAll(() => {
          wrapper
            .find('.add-another-payment')
            .find('button')
            .simulate('click');

          amountField = wrapper.find('input').find({ name: 'methods[1].amount' });
          paymentMethods = wrapper.find('select').find({ name: 'methods[1].type' });
          messageError = wrapper
            .find('.payment')
            .at(1)
            .find('span.spark-input__message');
        });

        it('should fill second amount field with zero', () => {
          expect(amountField.prop('value')).toBe('0.00');
        });
        it('should disable second amount field', () => {
          expect(amountField.prop('disabled')).toBe(true);
        });
        it('should enable first amount field', () => {
          expect(
            wrapper
              .find('input')
              .find({ name: 'methods[0].amount' })
              .prop('disabled')
          ).toBe(false);
        });
        it('should render "Invalid amount" error to force user to modify first amount', () => {
          expect(messageError.text()).toBe('Invalid Amount');
        });
        it('should have NONE option', () => {
          expect(paymentMethods.find('option[value="NONE"]').exists()).toBe(true);
        });
        it('should have CASH payment option', () => {
          expect(paymentMethods.find('option[value="CASH"]').exists()).toBe(true);
        });
        it('should have CREDIT CARD payment option', () => {
          expect(paymentMethods.find('option[value="CREDIT_CARD"]').exists()).toBe(true);
        });
      });

      describe('when you click on "Remove"', () => {
        let amountField, paymentMethods;
        beforeAll(() => {
          wrapper
            .find('.remove-payment')
            .find('button')
            .simulate('click');

          amountField = wrapper.find('input').find({ name: 'methods[0].amount' });
          paymentMethods = wrapper.find('select').find({ name: 'methods[0].type' });
        });
        it('should have a "Add another payment button"', () => {
          expect(wrapper.find('.add-another-payment').exists()).toBe(true);
        });
        it('should disable first amount field', () => {
          expect(amountField.prop('disabled')).toBe(true);
        });
      });
    });

    describe('when you select CREDIT CARD to pay', () => {
      beforeAll(() => {
        paymentMethods.simulate('change', { target: { value: 'CREDIT_CARD' } });
      });

      it('should have a "Add another payment button"', () => {
        expect(wrapper.find('.add-another-payment').exists()).toBe(true);
      });

      describe('when you click on add another payment', () => {
        beforeAll(() => {
          wrapper
            .find('input')
            .find({ name: 'methods[0].credit-card.card-number' })
            .simulate('change', { target: { value: '4444 4444 4444 4444' } });
          wrapper
            .find('input')
            .find({ name: 'methods[0].credit-card.expiration-date' })
            .simulate('change', { target: { value: '09 / 20' } });
          wrapper
            .find('input')
            .find({ name: 'methods[0].credit-card.cvv-code' })
            .simulate('change', { target: { value: '123' } });
          wrapper
            .find('input')
            .find({ name: 'methods[0].credit-card.name-on-card' })
            .simulate('change', { target: { value: 'Someone' } });
        });

        it('should not have any errors', () => {
          expect(
            wrapper
              .find('.payment')
              .find('span.spark-input__message')
              .exists()
          ).toBe(false);
        });

        it('should have pay button enabled', () => {
          expect(
            wrapper
              .find('footer')
              .find('button')
              .at(1)
              .prop('disabled')
          ).toEqual(false);
        });

        describe('when you click on add another payment', () => {
          let amountField, paymentMethods, messageError;
          beforeAll(() => {
            wrapper
              .find('.add-another-payment')
              .find('button')
              .simulate('click');

            amountField = wrapper.find('input').find({ name: 'methods[1].amount' });
            paymentMethods = wrapper.find('select').find({ name: 'methods[1].type' });
            messageError = wrapper
              .find('.payment')
              .at(1)
              .find('span.spark-input__message');
          });

          it('should fill second amount field with zero', () => {
            expect(amountField.prop('value')).toBe('0.00');
          });
          it('should disable second amount field', () => {
            expect(amountField.prop('disabled')).toBe(true);
          });
          it('should enable first amount field', () => {
            expect(
              wrapper
                .find('input')
                .find({ name: 'methods[0].amount' })
                .prop('disabled')
            ).toBe(false);
          });
          it('should render "Invalid amount" error to force user to modify first amount', () => {
            expect(messageError.text()).toBe('Invalid Amount');
          });
          it('should have NONE option', () => {
            expect(paymentMethods.find('option[value="NONE"]').exists()).toBe(true);
          });
          it('should have CASH payment option', () => {
            expect(paymentMethods.find('option[value="CASH"]').exists()).toBe(true);
          });
          it('should have CREDIT CARD payment option', () => {
            expect(paymentMethods.find('option[value="CREDIT_CARD"]').exists()).toBe(true);
          });
          it('should have pay button disabled', () => {
            expect(
              wrapper
                .find('footer')
                .find('button')
                .at(1)
                .prop('disabled')
            ).toEqual(true);
          });

          describe('when user select CASH payment method and modify first amount', () => {
            let secondPaymentMehtod, firstAmount;
            beforeAll(() => {
              secondPaymentMehtod = wrapper.find('select').find({ name: 'methods[1].type' });
              firstAmount = wrapper.find('input').find({ name: 'methods[0].amount' });
              secondPaymentMehtod.simulate('change', { target: { value: 'CASH' } });

              firstAmount.simulate('change', { target: { value: '71.00' } });
            });

            it('should have pay button enabled', () => {
              expect(
                wrapper
                  .find('footer')
                  .find('button')
                  .at(1)
                  .prop('disabled')
              ).toEqual(false);
            });
          });
        });
      });
    });
  });
});