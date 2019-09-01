export const story = {
    "meta": {
        "title": "Adafruit Example",
        "author": "Unknown",
        "source": "https://learn.adafruit.com/circuit-python-your-own-adventure/a-fuller-example"
    },
    "story": {
        "pages": {
            1: {
                "paragraphs": [
                    "Welcome adventurer. Your adventure begins, as many do, in Ye Olde Inn.",
                    "This is a peaceful, happy inn with plentiful drink, tasty food, and friendly staff."
                ],
                "choices": [
                    {
                        "text": "Stay!",
                        "next": 1
                    },
                    {
                        "text": "Go!",
                        "next": 2
                    }
                ]
            },
            2: {
                "paragraphs": [
                    "There is a dark cave in the hillside before you."
                ],
                "choices": [
                    {
                        "text": "Enter",
                        "next": 3
                    },
                    {
                        "text": "Run",
                        "next": 1
                    }
                ]
            },
            3: {
                "paragraphs": [
                    "You are in a dark, narrow tunnel."
                ],
                "choices": [
                    {
                        "text": "Next",
                        "next": 4
                    }
                ]
            },
            4: {
                "paragraphs": [
                    "You are in a small room, one tunnel leads ahead and another to the side. Do you continue on or explore the side tunnel?"
                ],
                "choices": [
                    {
                        "text": "Continue",
                        "next": 5
                    },
                    {
                        "text": "Side tunnel",
                        "next": 6
                    }
                ]
            },
            5: {
                "paragraphs": [
                    "There is a skeleton on the floor. From the items around it, it seems to be that of an unfortunate adventurer."
                ],
                "choices": [
                    {
                        "text": "Next",
                        "next": 9
                    }
                ]
            },
            6: {
                "paragraphs": [
                    "There is a pile of treasure here. Congratulations!"
                ],
                "choices": [
                    {
                        "text": "Next",
                        "next": 8
                    }
                ]
            },
            7: {
                "paragraphs": [
                    "There are passages to the left and right."
                ],
                "choices": [
                    {
                        "text": "Left",
                        "next": 9
                    },
                    {
                        "text": "Right",
                        "next": 8
                    }
                ]
            },
            8: {
                "paragraphs": [
                    "There are passages to the left and right."
                ],
                "choices": [
                    {
                        "text": "Left",
                        "next": 7
                    },
                    {
                        "text": "Right",
                        "next": 10
                    }
                ]
            },
            9: {
                "paragraphs": [
                    "There are passages to the left and right."
                ],
                "choices": [
                    {
                        "text": "Left",
                        "next": 11
                    },
                    {
                        "text": "Right",
                        "next": 8
                    }
                ]
            },
            10: {
                "paragraphs": [
                    "There are passages to the left and right."
                ],
                "choices": [
                    {
                        "text": "Left",
                        "next": 7
                    },
                    {
                        "text": "Right",
                        "next": 12
                    }
                ]
            },
            11: {
                "paragraphs": [
                    "There are passages to the left and right."
                ],
                "choices": [
                    {
                        "text": "Left",
                        "next": 10
                    },
                    {
                        "text": "Right",
                        "next": 13
                    }
                ]
            },
            12: {
                "paragraphs": [
                    "There are passages to the left and right."
                ],
                "choices": [
                    {
                        "text": "Left",
                        "next": 3
                    },
                    {
                        "text": "Right",
                        "next": 9
                    }
                ]
            },
            13: {
                "paragraphs": [
                    "You hear an ominuous creaking from around the corner."
                ],
                "choices": [
                    {
                        "text": "Continue",
                        "next": 14
                    },
                    {
                        "text": "Go back",
                        "next": 1
                    }
                ]
            },
            14: {
                "paragraphs": [
                    "There is a creaking, rickity wooded bridge leading across a gaping chasm."
                ],
                "choices": [
                    {
                        "text": "Continue",
                        "next": 15
                    }
                ]
            },
            15: {
                "paragraphs": [
                    "At the other end is a large treasure chest. There is also a short tunnel with daylight at the end."
                ],
                "choices": [
                    {
                        "text": "Treasure!",
                        "next": 16
                    },
                    {
                        "text": "Leave",
                        "next": 1
                    }
                ]
            },
            15: {
                "paragraphs": [
                    "The bridge gives way and you fall to a painful death."
                ],
                "choices": [
                    {
                        "text": "Next",
                        "next": 1
                    }
                ]
            },
        }
    }
}
// [
//     {
//         "card_id": "start",
//         "background_image": "page01.bmp",
//         "text": "",
//         "text_color": "0x000001",
//         "button01_text": "Continue",
//         "button01_goto_card_id": "inn"
//     },
//     {
//         "card_id": "inn",
//         "background_image": "page01.bmp",
//         "sound": "pub.wav",
//         "sound_repeat": "True",
//         "text": "",
//         "text_color": "0x000001",
//         "button01_text": "Stay",
//         "button01_goto_card_id": "inn",
//         "button02_text": "Go!",
//         "button02_goto_card_id": "cave entrance"
//     },
//     {
//         "card_id": "cave entrance",
//         "background_image": "page01.bmp",
//         "text": ,
//         "text_color": "0x000001",
//         "sound": "cave.wav",
//         "sound_repeat": "True",
//         "button01_text": "Enter",
//         "button01_goto_card_id": "entry",
//         "button02_text": "Run",
//         "button02_goto_card_id": "inn"
//     },
//     {
//         "card_id": "entry",
//         "background_image": "page01.bmp",
//         "sound": "cave.wav",
//         "sound_repeat": "True",
//         "text": ,
//         "text_color": "0x000001",
//         "button01_text": "Next",
//         "button01_goto_card_id": "side opening"
//     },
//     {
//         "card_id": "side opening",
//         "background_image": "page01.bmp",
//         "sound": "cave.wav",
//         "sound_repeat": "True",
//         "text": "",
//         "text_color": "0x000001",
//         "button01_text": "Continue",
//         "button01_goto_card_id": "skeleton room",
//         "button02_text": "Side T.",
//         "button02_goto_card_id": "treasure room"
//     },
//     {
//         "card_id": "treasure room",
//         "background_image": "page01.bmp",
//         "sound": "cave.wav",
//         "sound_repeat": "True",
//         "text": "",
//         "text_color": "0x000001",
//         "button01_text": "Next",
//         "button01_goto_card_id": "maze 1"
//     },
//     {
//         "card_id": "skeleton room",
//         "background_image": "page01.bmp",
//         "sound": "cave.wav",
//         "sound_repeat": "True",
//         "text": "There is a skeleton on the floor. From the items around it, it seems to be that of an unfortunate adventurer.",
//         "text_color": "0x000001",
//         "button01_text": "Next",
//         "button01_goto_card_id": "maze 2"
//     },
//     {
//         "card_id": "maze 1",
//         "background_image": "page01.bmp",
//         "sound": "cave.wav",
//         "sound_repeat": "True",
//         "text": "There are passages to the left and right.",
//         "text_color": "0x000001",
//         "button01_text": "Left",
//         "button01_goto_card_id": "maze 3",
//         "button02_text": "Right",
//         "button02_goto_card_id": "maze 2",
//     },
//     {
//         "card_id": "maze 2",
//         "background_image": "page01.bmp",
//         "sound": "cave.wav",
//         "sound_repeat": "True",
//         "text": "There are passages to the left and right.",
//         "text_color": "0x000001",
//         "button01_text": "Left",
//         "button01_goto_card_id": "maze 1",
//         "button02_text": "Right",
//         "button02_goto_card_id": "maze 4"
//     },
//     {
//         "card_id": "maze 3",
//         "background_image": "page01.bmp",
//         "sound": "cave.wav",
//         "sound_repeat": "True",
//         "text": "There are passages to the left and right.",
//         "text_color": "0x000001",
//         "button01_text": "Left",
//         "button01_goto_card_id": "maze 5",
//         "button02_text": "Right",
//         "button02_goto_card_id": "maze 2"
//     },
//     {
//         "card_id": "maze 4",
//         "background_image": "page01.bmp",
//         "sound": "cave.wav",
//         "sound_repeat": "True",
//         "text": "There are passages to the left and right.",
//         "text_color": "0x000001",
//         "button01_text": "Left",
//         "button01_goto_card_id": "maze 1",
//         "button02_text": "Right",
//         "button02_goto_card_id": "maze 6"
//     },
//     {
//         "card_id": "maze 5",
//         "background_image": "page01.bmp",
//         "sound": "cave.wav",
//         "sound_repeat": "True",
//         "text": "There are passages to the left and right.",
//         "text_color": "0x000001",
//         "button01_text": "Left",
//         "button01_goto_card_id": "maze 4",
//         "button02_text": "Right",
//         "button02_goto_card_id": "creaking"
//     },
//     {
//         "card_id": "maze 6",
//         "background_image": "page01.bmp",
//         "sound": "cave.wav",
//         "sound_repeat": "True",
//         "text": "There are passages to the left and right.",
//         "text_color": "0x000001",
//         "button01_text": "Left",
//         "button01_goto_card_id": "creaking",
//         "button02_text": "Right",
//         "button02_goto_card_id": "maze 3"
//     },
//     {
//         "card_id": "creaking",
//         "background_image": "page01.bmp",
//         "sound": "creak.wav",
//         "sound_repeat": "True",
//         "text": "You hear an ominuous creaking from around the corner",
//         "text_color": "0x000001",
//         "button01_text": "Cont.",
//         "button01_goto_card_id": "bridge room 1",
//         "button02_text": "Go back",
//         "button02_goto_card_id": "inn"
//     },
//     {
//         "card_id": "bridge room 1",
//         "background_image": "page01.bmp",
//         "sound": "creak.wav",
//         "sound_repeat": "True",
//         "text": "There is a creaking, rickity wooded bridge leading across a gaping chasm.",
//         "text_color": "0x000001",
//         "button01_text": "Cont.",
//         "button01_goto_card_id": "bridge room 2"
//     },
//
//     {
//       "card_id": "bridge room 2",
//       "background_image": "page01.bmp",
//       "sound": "creak.wav",
//       "sound_repeat": "True",
//       "text": ,
//       "text_color": "0x000001",
//       "button01_text": "Treasure!",
//       "button01_goto_card_id": "die",
//       "button02_text": "Leave",
//       "button02_goto_card_id": "inn"
//     },
//
//     {
//         "card_id": "die",
//         "background_image": "page01.bmp",
//         "sound": "scream.wav",
//         "text": ,
//         "text_color": "0x000001",
//         "button01_text": "Next",
//         "button01_goto_card_id": "inn"
//     }
// ]
