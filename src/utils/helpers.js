export function sortDataAsc (data, sortBy) {
    return data.sort((a,b) => a[sortBy] > b[sortBy] ? 1 : -1);
}