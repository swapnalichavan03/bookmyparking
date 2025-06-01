export const ArrayToGrouped = (array) => {
    const map = {};
    const finalArr = [];

    array?.map((item) => {
        const { date, ...rest } = item;

        if (!map[new Date(item.date)?.toLocaleDateString()]) {
            map[new Date(item.date)?.toLocaleDateString()] = true;
            finalArr.push({ date, data: [rest] });
        } else {
            const index = finalArr.findIndex(
                (i) => new Date(i.date)?.toLocaleDateString() === new Date(item.date)?.toLocaleDateString()
            );

            finalArr[index] = {
                date: finalArr[index].date,
                data: [...finalArr[index].data, rest],
            };
        }
    });

    return finalArr;
}


// const result_ = data.reduce((p, c) => {
//   const found = p.findIndex(p => new Date(p?.date)?.toLocaleDateString() === new Date(c?.date)?.toLocaleDateString());
//   if (found !== -1) {
//     p[found].data.push({ c });
//   } else {
//     p.push({ date: c?.date, data: [{ c }] });
//   }
//   return p;
// }, []);
//
// const result = data?.reduce((accum, current) => {
//   let dateGroup = accum.find(x => new Date(x.date)?.toLocaleDateString() === new Date(current?.date)?.toLocaleDateString());
//   if (!dateGroup) {
//     dateGroup = { date: current.date, data: [] }
//     accum.push(dateGroup);
//   }
//   dateGroup.data.push(current);
//   return accum;
// }, []);

// function makeResponse(obj) {
//     const map = {};
//     const finalArr = [];
//
//     obj?.map((item) => {
//         const { date, ...rest } = item;
//
//         if (!map[new Date(item.date)?.toLocaleDateString()]) {
//             map[new Date(item.date)?.toLocaleDateString()] = true;
//             finalArr.push({ date, data: [rest] });
//         } else {
//             const index = finalArr.findIndex(
//                 (i) => new Date(i.date)?.toLocaleDateString() === new Date(item.date)?.toLocaleDateString()
//             );
//
//             finalArr[index] = {
//                 date: finalArr[index].date,
//                 data: [...finalArr[index].data, rest],
//             };
//         }
//     });
//
//     return finalArr;
// }