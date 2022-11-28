import { camelize } from "./string";

export function driverNameToSlug(fullName: string) {
    const namesArr = fullName.split(" ");
    const formattedNamesArr = namesArr.map(name => name.toLowerCase());
    return formattedNamesArr.join("-")
}

export function slugToDriverName(slug: string) {
    const namesArr = slug.split("-");
    const formattedNamesArr = namesArr.map(camelize);
    return formattedNamesArr.join(" ")
}
