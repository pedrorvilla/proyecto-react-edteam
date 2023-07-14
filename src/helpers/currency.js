import accounting from "accounting";

export function formatMXN(valueNumber) {
    return accounting.formatMoney(valueNumber, '$', 2, ',', '.')
}

export function formatNatural(valueNumber) {
    return accounting.toFixed(valueNumber, 2);
}