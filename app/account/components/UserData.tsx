// UserData.ts
export type User = {
    avatar: string;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    nokName: string;
    nokMobNum: string;
    isVerified: boolean;
    bank: {
        bankName: string;
        accNum: string;
        routeNum: string;
    };
    balance: {
        availableBal: number;
        ledgerBal: number;
        escrowBal: number;
    };
    virtualInfo: {
        cardNum: number;
        accNum: number;
    };
};


export const user: User = {
    avatar: "/images/userOne.jpg",
    username: "Efe",
    firstName: "Efe",
    lastName: "Ojadua",
    email: "efeojadua@yahoo.com",
    address: "Palms Estate, Gwarinpa, FCT",
    nokName: "Blessing Ojadua",
    nokMobNum: "08085040059",
    isVerified: true,
    bank: {
        bankName: "Silvergate Bank",
        accNum: "7787778877",
        routeNum: "60779018"
    },
    balance: {
        availableBal: 5315,
        ledgerBal: 23450,
        escrowBal: 30489
    },
    virtualInfo: {
        cardNum: 5595,
        accNum: 7090112321
    }
};