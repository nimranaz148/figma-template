

export interface Flashcard {
    discountbtn: boolean;
    discountprice: number;
    TrashIcon: boolean;
    HeaterIcon: boolean;
    EyeIcon: boolean;
    src: string;
    Heading: string;
    price: number;
    oldprice?: number;
    star: number;
    reviews: number;
}

export const flashcard: Flashcard[] = [
    {
        discountbtn: true,
        discountprice: 40,
        TrashIcon: false,
        HeaterIcon: true,
        EyeIcon: true,
        src : "/gamepad.png",
        Heading: "HAVIT HV-G92 Gamepad",
        price: 120,
        oldprice: 160,
        star: 5,
        reviews: 88
    },
    {
        discountbtn: true,
        discountprice: 35,
        TrashIcon: false,
        HeaterIcon: true,
        EyeIcon: true,
        src : "/keyboard.png",
        Heading: "AK-900 Wired Keyboard",
        price: 960,
        oldprice: 1160,
        star: 4,
        reviews: 75
    },

    {
        discountbtn: true,
        discountprice: 40,
        TrashIcon: false,
        HeaterIcon: true,
        EyeIcon: true,
        src : "/monitor.png",
        Heading: "IPS LCD Gaming Monitor",
        price: 370,
        oldprice: 400,
        star: 4,
        reviews: 99
    },

    {
        discountbtn: true,
        discountprice: 40,
        TrashIcon: false,
        HeaterIcon: true,
        EyeIcon: true,
        src : "/chair.png",
        Heading: "S-Series Comfort Chair ",
        price: 375,
        oldprice: 400,
        star: 5,
        reviews: 99
    },

    {
        discountbtn: true,
        discountprice: 40,
        TrashIcon: false,
        HeaterIcon: true,
        EyeIcon: true,
        src : "/chair.png",
        Heading: "S-Series Comfort Chair ",
        price: 375,
        oldprice: 400,
        star: 5,
        reviews: 99
    },

    

    

]