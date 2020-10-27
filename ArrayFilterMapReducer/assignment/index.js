import Senators from "./data/senators";

export const republicans =() => {
    return  Senators.filter((element) => element.party === "Republican")
};
export const democrats =() => {
    return  Senators.filter((element) => element.party === "Democrat")
};
export const independents =() => {
    return  Senators.filter((element) => element.party === "Independent")
};
export const males =() => {
    return  Senators.filter((element) => element.person.gender === "Male")
};
export const females =() => {
    return  Senators.filter((element) => element.person.gender === "Female")
};
export const byState =() => {
    return  Senators.filter((element) => element.state === "UT")
};
export const mapping= () => {
    return  Senators.map((element) => {
        return {
            firstName: element.person.firstName,
            lastName: element.person.lastName,
            party: element.party,
            gender: element.person.gender
        }
    })
}
export const reducedCount = () => {
    return Senators.reduce(
        (accumulator, element) => {
            if (element.party === "Democrat") {
                accumulator.democrat++
            }
            if (element.party === "Republican") {
                accumulator.republican++
            }
            if (element.party === "Independent") {
                accumulator.republican++
            }
            return accumulator
        },
        {
            republican: 0,
            democrat: 0,
            independent: 0
        }
    )
}

const REPLACE_ME_WITH_CODE = false;